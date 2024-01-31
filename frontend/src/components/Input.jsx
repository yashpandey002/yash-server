function Input({ label, placeholder, value, onInput, required }) {
    return (
        <div className="flex flex-col gap-2 sm:gap-3">
            <label className="text-sm font-medium text-zinc-950 md:text-base">
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onInput}
                className="px-3 py-2 text-sm border rounded text-zinc-900 md:text-base border-zinc-300 focus:border-zinc-400"
                required={required}
            />
        </div>
    );
}

export default Input;
