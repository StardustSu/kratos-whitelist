// "use client";
import Image from "next/image";

export default function SecondaryButton({
    showArrow = true,
    text = "Кнопка",
    onClick = () => void 0,
}) {
    return (
        <button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex gap-2 items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={() => {
                onClick();
            }}
        >
            {text}
            {showArrow && (
                <Image
                    className="rotate-90"
                    src="/vercel.svg"
                    alt="Vercel logomark"
                    width={14}
                    height={14}
                />
            )}
        </button>
    );
}
