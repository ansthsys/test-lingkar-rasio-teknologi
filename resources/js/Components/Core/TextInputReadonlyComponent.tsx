interface TextInputReadonlyComponentProps {
    title: string;
    name: string;
    value: string;
}

export default function TextInputReadonlyComponent({
    title,
    name,
    value,
}: TextInputReadonlyComponentProps) {
    return (
        <input
            title={title}
            name={name}
            type={"text"}
            value={value}
            readOnly={true}
            className={
                "py-2 px-3 pe-11 block w-full shadow-sm text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
            }
        />
    );
}
