import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface FileInputComponentProps {
    title: string;
    name: string;
    value: HTMLInputTypeAttribute;
    placeholder: string;
    required?: boolean;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function FileInputComponent({
    title,
    name,
    value,
    required = true,
    onChange,
    errors,
    placeholder,
    ...props
}: FileInputComponentProps) {
    return (
        <>
            <div className="sm:col-span-3">
                <label
                    htmlFor={"af-submit-application-" + name}
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                    {title}
                    {required && (
                        <span className="text-red-500 font-medium">{" *"}</span>
                    )}
                </label>
            </div>

            <div className="sm:col-span-9">
                <label
                    htmlFor={"af-submit-application-" + name}
                    className="sr-only"
                >
                    {placeholder ?? "Pilih berkas"}
                </label>
                <input
                    type="file"
                    name={"af-submit-application-" + name}
                    id={"af-submit-application-" + name}
                    value={value ?? ""}
                    onChange={(e) =>
                        onChange(name, e.target.files?.[0] ?? null)
                    }
                    className={
                        "block w-full border shadow-sm rounded-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:bg-gray-100 file:me-4 file:py-2 file:px-4 " +
                        (errors && errors[name]
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                    }
                    {...props}
                />

                {errors && errors[name] && (
                    <p
                        className="mt-2 text-sm text-red-500 dark:text-red-500"
                        id={"hs-input-helper-text-" + name}
                    >
                        {errors[name]}
                    </p>
                )}
            </div>
        </>
    );
}
