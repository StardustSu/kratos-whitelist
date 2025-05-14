import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function ContactStage({
    proceed,
}: {
    proceed: (value: string) => any;
}) {
    const [value, setValue] = useState("");

    return (
        <>
            <p className="max-w-lg text-sm text-center font-[family-name:var(--font-geist-mono)]">
                📩 Отлично! Мы уже у цели. Оставь, пожалуйста, ссылку на свой
                Телеграм или юзернейм в Дискорде.
            </p>

            <input
                type="text"
                className="in-text"
                placeholder="мой дискорд pupa.i.lupa"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <PrimaryButton
                    text="Отправить"
                    onClick={() => {
                        console.log("ContactValue: ", value);
                        proceed(value);
                    }}
                />
            </div>
        </>
    );
}
