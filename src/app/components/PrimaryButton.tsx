// "use client";
import Image from "next/image";

export default function PrimaryButton({
    showArrow = true,
    text = "Кнопка",
    onClick = () => void 0,
}) {
    return (
        <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => {
                onClick();
            }}
        >
            {text}
            {showArrow && (
                <Image
                    className="dark:invert rotate-90"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={14}
                    height={14}
                />
            )}
        </button>
    );
}
