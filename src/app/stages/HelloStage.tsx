import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function HelloStage({
    proceed,
}: {
    proceed: (value: string) => any;
}) {
    const [value, setValue] = useState("");

    return (
        <>
            <p className="max-w-lg text-sm text-center font-[family-name:var(--font-geist-mono)]">
                👋 Привет! Напиши, пожалуйста, свой игровой ник.
            </p>

            <input
                type="text"
                className="in-text"
                placeholder="Steve"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <PrimaryButton
                    text="Привет!"
                    onClick={() => value.length > 0 && proceed(value)}
                />
            </div>
        </>
    );
}
