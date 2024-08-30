import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface TextInputComponentProps {
    title: string;
    name1: string;
    value1: string;
    name2: string;
    value2: string;
    required?: boolean;
    type: HTMLInputTypeAttribute;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function TextInputColumn2Component({
    title,
    name1,
    value1,
    name2,
    value2,
    type,
    onChange,
    required = true,
    errors,
    ...props
}: TextInputComponentProps) {
    return (
        <>
            <div className="sm:col-span-3">
                <label
                    htmlFor={"af-submit-application-full-" + name1}
                    className="inline-block text-sm font-medium text-gray-500 mt-2.5"
                >
                    {title}
                    {required && (
                        <span className="text-red-500 font-medium">{" *"}</span>
                    )}
                </label>
            </div>

            <div className="sm:col-span-9">
                <div className="sm:flex">
                    <input
                        id={"af-submit-application-full-" + name1}
                        title={name1}
                        name={name1}
                        type={type}
                        value={value1}
                        placeholder={props.placeholder1}
                        onChange={(e) => onChange(name1, e.target.value)}
                        onWheel={(e) => e.currentTarget.blur()}
                        className={
                            "py-2 px-3 pe-11 block w-full shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none " +
                            (errors && errors[name1]
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                        }
                        {...props}
                    />
                    <input
                        id={"af-submit-application-full-" + name2}
                        title={name2}
                        name={name2}
                        type={type}
                        value={value2}
                        placeholder={props.placeholder2}
                        onChange={(e) => onChange(name2, e.target.value)}
                        onWheel={(e) => e.currentTarget.blur()}
                        className={
                            "py-2 px-3 pe-11 block w-full shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none " +
                            (errors && errors[name2]
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                        }
                        {...props}
                    />
                </div>

                <div className="sm:flex">
                    {errors && (errors[name1] || errors[name2]) && (
                        <p
                            className="mt-2 text-sm w-full text-red-500 dark:text-red-500"
                            id={"hs-input-helper-text-" + name1}
                        >
                            {errors[name1]}
                        </p>
                    )}
                    {errors && (errors[name1] || errors[name2]) && (
                        <p
                            className="mt-2 text-sm w-full text-red-500 dark:text-red-500"
                            id={"hs-input-helper-text-" + name2}
                        >
                            {errors[name2]}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}
