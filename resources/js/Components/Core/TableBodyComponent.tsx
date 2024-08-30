import { Registrant } from "@/types/model";
import { Pagination } from "@/types/pagination";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function TableBodyComponent({
    paginationResult,
}: {
    paginationResult: Pagination;
}) {
    if (paginationResult.data.length < 1) {
        return (
            <tr>
                <td
                    colSpan={7}
                    className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-800"
                >
                    Tidak ada data
                </td>
            </tr>
        );
    }

    return (
        <>
            {paginationResult?.data?.map((i, idx) => {
                return (
                    <tr key={idx}>
                        <td className="py-3 ps-4 text-center text-sm font-medium">
                            {paginationResult.from + idx}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            {i.nama}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                            {i.nik}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                            {i.umur}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                            <span
                                className={
                                    "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium " +
                                    (i.kelamin === "L"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"
                                        : "bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500")
                                }
                            >
                                {i.kelamin}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-center">
                            {i.user?.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <Link href={route("registrants.show", [i.id])}>
                                <ArrowTopRightOnSquareIcon className="size-6 text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800" />
                            </Link>
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
