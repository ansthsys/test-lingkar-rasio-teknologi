interface TextareaInputReadonlyComponentProps {
    title: string;
    name: string;
    value: string;
}

export default function TextareaInputReadonlyComponent({
    title,
    name,
    value,
}: TextareaInputReadonlyComponentProps) {
    return (
        <textarea
            id={"af-submit-application-textarea-" + name}
            title={title}
            name={name}
            rows={6}
            defaultValue={value}
            className="mt-2 py-2 px-3 pe-11 block w-full shadow-sm text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
    );
}
