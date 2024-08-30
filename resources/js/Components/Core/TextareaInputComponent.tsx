import { HTMLAttributes } from "react";

interface TextareaInputComponentProps {
    title: string;
    name: string;
    value: string;
    required?: boolean;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLTextAreaElement> | any;
}

export default function TextareaInputComponent({
    title,
    name,
    value,
    required = true,
    onChange,
    errors,
    ...props
}: TextareaInputComponentProps) {
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
                <textarea
                    id={"af-submit-application-" + name}
                    rows={6}
                    value={value}
                    onChange={(e) => onChange(name, e.target.value)}
                    className={
                        "py-2 px-3 pe-11 block w-full shadow-sm text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none " +
                        (errors && errors[name]
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                    }
                    {...props}
                ></textarea>

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
