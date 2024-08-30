import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

interface ComboboxInputComponentProps {
    title: string;
    name: string;
    value: string;
    options: OptionsOrGroups<
        { value: string; label: string },
        GroupBase<{ value: string; label: string }>
    >;
    onChange: (param: any, ...args: any) => void;
    placeholder: string;
    required?: boolean;
    disabled: boolean;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function ComboboxInputComponent({
    title,
    name,
    value,
    options,
    onChange,
    errors,
    required = true,
    placeholder,
    disabled,
    ...props
}: ComboboxInputComponentProps) {
    useEffect(() => {}, [value]);

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
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder={placeholder}
                    isDisabled={disabled}
                    isSearchable={true}
                    value={options.find((option) => option.label === value)}
                    onChange={(e) => onChange(name, e)}
                    name={name}
                    options={options}
                    classNames={{
                        control: () =>
                            "h-10 w-full rounded-xl shadow-sm text-sm disabled:opacity-50 disabled:pointer-events-none border-gray-200",
                    }}
                    styles={{
                        control: (styles) => ({
                            ...styles,
                            borderRadius: "0.5rem", // rounded-lg
                            backgroundColor: "",
                            border: "border-gray-200/50",
                        }),
                        input: (provided) => ({
                            ...provided,
                            input: {
                                outline: "none !important",
                                border: "none !important",
                                "&focus": { border: "none !important" },
                                "&active": { border: "none !important" },
                            },
                        }),
                    }}
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
