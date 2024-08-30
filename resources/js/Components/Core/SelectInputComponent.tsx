import { HTMLAttributes } from "react";
import TextInputReadonlyComponent from "./TextInputReadonlyComponent";

interface SelectInputComponentProps {
    title: string;
    name: string;
    value: string;
    pageMode: "create" | "show";
    options: Array<{ value: string; label: string }>;
    placeholder?: string;
    required?: boolean;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function SelectInputComponent({
    title,
    name,
    value,
    pageMode,
    options,
    required = true,
    onChange,
    placeholder,
    errors,
    ...props
}: SelectInputComponentProps) {
    return (
        <>
            <div className="sm:col-span-3">
                <div className="inline-block">
                    <label
                        htmlFor={"af-submit-application-" + name}
                        className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                    >
                        {title}
                        {required && (
                            <span className="text-red-500 font-medium">
                                {" *"}
                            </span>
                        )}
                    </label>
                </div>
            </div>

            <div className="sm:col-span-9">
                {pageMode === "create" ? (
                    <select
                        id={"af-submit-application-" + name}
                        title={title}
                        name={name}
                        value={value}
                        onChange={(e) => onChange(name, e.target.value)}
                        className={
                            "py-2 px-3 pe-11 block w-full shadow-sm rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none " +
                            (errors && errors[name]
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                        }
                        {...props}
                    >
                        <option value="">
                            {placeholder ?? "Select option"}
                        </option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <TextInputReadonlyComponent
                        title={title}
                        name={name}
                        value={value}
                    />
                )}

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
