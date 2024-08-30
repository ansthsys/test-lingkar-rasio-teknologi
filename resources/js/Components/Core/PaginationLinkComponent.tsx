import { PaginationLink } from "@/types/pagination";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function PaginationLinkComponent({
    links,
}: {
    links: PaginationLink[];
}) {
    return (
        <nav className="flex items-center space-x-1" aria-label="Pagination">
            {links?.map((i, idx) => {
                if (idx === 0) {
                    return (
                        <Link
                            key={idx}
                            as="button"
                            type="button"
                            href={i.url ?? ""}
                            className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <ChevronLeftIcon className="size-4" />
                        </Link>
                    );
                } else if (idx === links.length - 1) {
                    return (
                        <Link
                            key={idx}
                            as="button"
                            type="button"
                            href={i.url ?? ""}
                            className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <ChevronRightIcon className="size-4" />
                        </Link>
                    );
                } else {
                    return (
                        <Link
                            key={idx}
                            as="button"
                            type="button"
                            href={i.url ?? ""}
                            className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {i.label}
                        </Link>
                    );
                }
            })}
        </nav>
    );
}
