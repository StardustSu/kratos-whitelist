"use client";
import HelloStage from "./stages/HelloStage";
import { useEffect, useState } from "react";
import DescStage from "./stages/DescStage";
import ContactStage from "./stages/ContactStage";
import FinalStage from "./stages/FinalStage";
import FinderStage from "./stages/FinderStage";

const DEFAULT_ERROR = "Произошла ошибка. Попробуйте повторить попытку позже.";

export default function Home() {
    const [error, setError] = useState("");
    const [stage, setStage] = useState(-1);
    const [toStage, setToStage] = useState(0);
    const [nickname, setNickname] = useState("[Неизвестно]");

    // data
    const [desc, setDesc] = useState("");
    const [knows, setKnows] = useState("");
    const [ct, setCt] = useState("");

    useEffect(() => {
        const div = document.getElementById("stage")!;
        let i = 0;
        setInterval(() => {
            i++;
            if (i <= 50) {
                div.style.opacity = `${1 - i / 50}`;
            }
            if (i == 51) setStage(toStage);
            if (i > 50 && i <= 100) {
                div.style.opacity = `${i / 50 - 1}`;
            }
        }, 1);
    }, [toStage]);

    async function send(contact: string) {
        console.log("Send contact value:", ct);
        console.log("Arg:", contact);
        setError("");
        try {
            const res = await fetch(
                "https://api.kratosmc.ru/players/" +
                    nickname +
                    "/whitelist/free",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nickname: nickname,
                        description: desc,
                        referral: knows,
                        contact: contact,
                    }),
                }
            );
            const data = await res.json();
            if (!data.ok) return setError("Вы уже заполняли заявку!");
            setError("");
            setToStage(100);
        } catch (_) {
            setError(DEFAULT_ERROR);
        }
    }

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center">
                {error != "" && (
                    <span className="bg-red-500/[.5] px-2 py-1 rounded font-semibold">
                        {error}
                    </span>
                )}

                <h2 className="font-[family-name:var(--font-geist-mono)] text-xl font-semibold self-center">
                    Заявка на Вайтлист
                </h2>

                <div
                    id="stage"
                    className="flex flex-col gap-4 row-start-2 items-center justify-center"
                >
                    {stage === 0 && (
                        <HelloStage
                            proceed={(value) => {
                                setNickname(value);
                                setToStage(1);
                            }}
                        />
                    )}
                    {stage === 1 && (
                        <DescStage
                            proceed={(v) => {
                                setDesc(v);
                                setToStage(2);
                            }}
                        />
                    )}
                    {stage === 2 && (
                        <FinderStage
                            proceed={(v) => {
                                setKnows(v);
                                setToStage(3);
                            }}
                        />
                    )}
                    {stage === 3 && (
                        <ContactStage
                            proceed={(v) => {
                                console.log("Proceed value:", v);
                                setCt(v);
                                console.log("CT value:", ct);
                                setTimeout(() => send(v), 1_000);
                            }}
                        />
                    )}
                    {stage === 100 && <FinalStage />}
                </div>
            </main>
        </div>
    );
}
