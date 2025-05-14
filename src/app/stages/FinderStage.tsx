import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function FinderStage({
    proceed,
}: {
    proceed: (value: string) => any;
}) {
    const [value, setValue] = useState("");

    return (
        <>
            <p className="max-w-lg text-sm text-center font-[family-name:var(--font-geist-mono)]">
                🔎 Откуда узнал о сервере?
            </p>

            <input
                type="text"
                className="in-text"
                placeholder="друг nicotgk позвал"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <PrimaryButton
                    text="Написал"
                    onClick={() => value.length > 0 && proceed(value)}
                />
            </div>
        </>
    );
}
