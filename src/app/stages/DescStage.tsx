import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function DescStage({
    proceed,
}: {
    proceed: (value: string) => any;
}) {
    const [value, setValue] = useState("");

    return (
        <>
            <p className="max-w-lg text-sm text-center font-[family-name:var(--font-geist-mono)]">
                📝 Будем знакомы! Расскажи, пожалуйста, немного о себе и своих
                планах на сервер
            </p>

            <textarea
                className="in-text py-1 min-h-48 max-h-48"
                placeholder="Подробное описание, не более 300 символов."
                value={value}
                onChange={(e) => {
                    if (e.target.value.length > 300) return;
                    setValue(e.target.value);
                }}
            />

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <PrimaryButton
                    text="Как-то так..."
                    onClick={() => value.length > 0 && proceed(value)}
                />
            </div>
        </>
    );
}
