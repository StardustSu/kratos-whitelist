"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../components/PrimaryButton";

export default function FinalStage() {
    const router = useRouter();

    return (
        <>
            <p className="max-w-lg text-sm text-center font-[family-name:var(--font-geist-mono)]">
                😊 Спасибо за интерес к проекту! Как только заявку одобрят, с
                тобой свяжутся наши модераторы.
            </p>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <PrimaryButton
                    text="Вернуться к сайту"
                    onClick={() => {
                        router.push("https://kratosmc.ru/");
                    }}
                />
            </div>
        </>
    );
}
