export function ResetButton({
    onClick,
}) {
    return (
        <button
            className="bg-gray-400 w-24 h-12 rounded-3xl mt-5 text-white"
            onClick={
                onClick
            }
        >
            clear
        </button>
    );
}
