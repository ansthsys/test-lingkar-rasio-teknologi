import { ChangeEvent, HTMLAttributes, useState } from "react";
import TextareaInputReadonlyComponent from "./TextareaInputReadonlyComponent";

interface SelectAnotherInputComponentProps {
    title: string;
    name: string;
    value: string;
    pageMode: "create" | "show";
    options: Array<{ value: string; label: string }>;
    placeholderSelect?: string;
    placeholderTextarea?: string;
    required?: boolean;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function SelectAnotherInputComponent({
    title,
    name,
    value,
    pageMode,
    options,
    required = true,
    onChange,
    placeholderSelect,
    placeholderTextarea,
    errors,
    ...props
}: SelectAnotherInputComponentProps) {
    const [isAnother, setIsAnother] = useState(false);

    function handleReasonChange(e: ChangeEvent<HTMLSelectElement>) {
        if (e.target.value === "other") {
            setIsAnother(true);
            onChange(name, "");
        } else {
            setIsAnother(false);
            onChange(name, e.target.value);
        }
    }

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
                    <>
                        <select
                            id={"af-submit-application-select-" + name}
                            title={title}
                            name={name}
                            value={value}
                            onChange={handleReasonChange}
                            className={
                                "py-2 px-3 pe-11 block w-full shadow-sm rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none " +
                                (errors && errors[name]
                                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                            }
                            {...props}
                        >
                            <option value="">
                                {placeholderSelect ?? "Select option"}
                            </option>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <textarea
                            id={"af-submit-application-textarea-" + name}
                            rows={6}
                            value={value}
                            onChange={(e) => onChange(name, e.target.value)}
                            placeholder={
                                placeholderTextarea ??
                                "Masukan alasan membutuhkan bantuan"
                            }
                            className={
                                "mt-2 py-2 px-3 pe-11 block w-full shadow-sm text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none " +
                                (errors && errors[name]
                                    ? "border-red-500 focus:border-red-500 focus:ring-red-500 "
                                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500 ") +
                                (isAnother ? "" : "hidden")
                            }
                            {...props}
                        ></textarea>
                    </>
                ) : (
                    <TextareaInputReadonlyComponent
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
