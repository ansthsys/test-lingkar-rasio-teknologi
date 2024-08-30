import { HTMLAttributes, HTMLInputTypeAttribute } from "react";

interface TextInputGroupComponentProps {
    title: string;
    name: string;
    value: string;
    required?: boolean;
    pageMode: "create" | "show";
    leading: string;
    type: HTMLInputTypeAttribute;
    onChange: (param: any, ...args: any) => void;
    errors: Record<string, string>;
    [key: string]: HTMLAttributes<HTMLInputElement> | any;
}

export default function TextInputGroupComponent({
    title,
    name,
    value,
    type,
    leading,
    pageMode,
    required = true,
    onChange,
    errors,
    ...props
}: TextInputGroupComponentProps) {
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
                <div className="relative">
                    <input
                        id={"af-submit-application-full-" + name}
                        title={title}
                        name={name}
                        type={type}
                        value={value}
                        readOnly={pageMode === "show"}
                        onChange={(e) => onChange(name, e.target.value)}
                        onWheel={(e) => e.currentTarget.blur()}
                        className={
                            "py-2 px-3 ps-12 pe-11 block w-full shadow-sm rounded-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none " +
                            (errors && errors[name]
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:border-blue-500 focus:ring-blue-500")
                        }
                        {...props}
                    />

                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                        <span className="text-gray-500 dark:text-neutral-500">
                            {leading}
                        </span>
                    </div>
                </div>

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
