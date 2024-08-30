export default function TableHeaderComponent({ items }: { items: string[] }) {
    return (
        <tr>
            {items.map((i, idx) => {
                return (
                    <th
                        key={idx}
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                        {i}
                    </th>
                );
            })}
        </tr>
    );
}
