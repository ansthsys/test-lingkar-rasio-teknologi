import { ChangeEvent } from "react";
import { router, useForm } from "@inertiajs/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { debounce, values } from "lodash";
import PaginationLinkComponent from "@/Components/Core/PaginationLinkComponent";
import TableBodyComponent from "@/Components/Core/TableBodyComponent";
import TableHeaderComponent from "@/Components/Core/TableHeaderComponent";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Registrant } from "@/types/model";
import { Pagination } from "@/types/pagination";
export default function Index({
    auth,
    registrants,
}: PageProps<{ registrants: Pagination<Registrant> }>) {
    const { data, setData } = useForm({
        search: "",
    });

    const debouncedSearch = debounce((val: string) => {
        router.get(
            route("registrants.index"),
            { search: val },
            { preserveState: true }
        );
    }, 1000);

    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        debouncedSearch(e.target.value);
        setData("search", e.target.value);
    }

    return (
        <AuthenticatedLayout user={auth.user} pageName="Data Pendaftar">
            <div className="max-w-7xl px-2 py-5 sm:px-3 lg:px-4 lg:py-7 mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg divide-y divide-gray-200">
                                <div className="py-3 px-4">
                                    <div className="relative max-w-xs">
                                        <label className="sr-only">
                                            Search
                                        </label>
                                        <input
                                            id={"search"}
                                            name={"search"}
                                            type="text"
                                            value={data.search}
                                            onChange={handleSearchChange}
                                            className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder={"Cari nama pendaftar"}
                                        />
                                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                            <MagnifyingGlassIcon className="size-4 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <TableHeaderComponent
                                                items={[
                                                    "",
                                                    "Nama",
                                                    "NIK",
                                                    "Umur",
                                                    "Jenis Kelamin",
                                                    "Terdaftar Oleh",
                                                    "",
                                                ]}
                                            />
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            <TableBodyComponent
                                                paginationResult={registrants}
                                            />
                                        </tbody>
                                    </table>
                                </div>
                                <div className="py-1 px-4">
                                    <PaginationLinkComponent
                                        links={registrants.links}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
