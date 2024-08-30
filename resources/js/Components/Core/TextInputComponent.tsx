import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface TextInputComponentProps {
    title: string;
    name: string;
    value: string;
    required?: boolean;
    type: HTMLInputTypeAttribute;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function TextInputComponent({
    title,
    name,
    value,
    type,
    required = true,
    onChange,
    errors,
    ...props
}: TextInputComponentProps) {
    return (
        <>
            <div className="sm:col-span-3">
                <label
                    htmlFor={"af-submit-application-full-" + name}
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                    {title}
                    {required && (
                        <span className="text-red-500 font-medium">{" *"}</span>
                    )}
                </label>
            </div>

            <div className="sm:col-span-9">
                <input
                    id={"af-submit-application-full-" + name}
                    title={title}
                    name={name}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    onWheel={(e) => e.currentTarget.blur()}
                    className={
                        "py-2 px-3 pe-11 block w-full shadow-sm text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none " +
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
