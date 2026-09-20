import camelcase from "camelcase";
import { Eye, EyeClosed } from "lucide-react";

interface InputProps {
    label: string;
    type?: string;
    placeholder: string;
    value: string;
    showPassword?: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    type = "text",
    placeholder,
    value,
    showPassword = true,
    setShowPassword,
    onChange,
}: InputProps) {
    const inputId = camelcase(label.toLowerCase());

    return (
        <>
            <div className="flex flex-col gap-2 font-semibold">
                <label htmlFor={inputId}>{label}</label>
                {type == "password" ? (
                    <div className="flex border rounded-sm font-normal px-4 py-2 focus-within:outline-[1.5px]">
                        <input
                            type={showPassword ? type : "text"}
                            id={inputId}
                            name={inputId}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            required
                            className="w-full focus:outline-0"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <Eye /> : <EyeClosed />}
                        </button>
                    </div>
                ) : (
                    <input
                        type={type}
                        id={inputId}
                        name={inputId}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required
                        className="border rounded-sm font-normal px-4 py-2"
                    />
                )}
            </div>
        </>
    );
}
