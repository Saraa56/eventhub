interface InputProps {
    label?: string;
    placeholder?: string;
    type: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    id: string;
    value?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, placeholder, type, id, value, error, required, disabled, onChange }: InputProps) {
    return (
        <div className="mb-5">
            <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>

            <div className="mt-2">
                <div className={`flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 ${error ? 'outline-cyan-400' : 'outline-gray-300'} has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 ${error ? 'has-[input:focus-within]:outline-cyan-500' : 'has-[input:focus-within]:outline-cyan-600'}`}>
                    <input
                        type={type}
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        required={required}
                        disabled={disabled}
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
            </div>

            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
}