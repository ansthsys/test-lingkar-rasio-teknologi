import { useState, PropsWithChildren, ReactNode } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, usePage } from "@inertiajs/react";
import { PageProps, User } from "@/types";
import {
    Bars2Icon,
    HomeIcon,
    NewspaperIcon,
    PowerIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";

export default function AuthenticatedLayout({
    user,
    header,
    pageName,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode; pageName?: string }>) {
    const { url, component } = usePage<PageProps>();

    return (
        <>
            <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 lg:ps-[260px]">
                <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
                    <div className="me-5 lg:me-0 lg:hidden">
                        <Link
                            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                            href={route("dashboard")}
                            aria-label="Preline"
                        >
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>

                    <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
                        <div className="hidden md:block">
                            {/* Other Nav item */}
                        </div>

                        <div className="flex flex-row items-center justify-end gap-1">
                            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                <button
                                    id="hs-dropdown-account"
                                    type="button"
                                    className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                    aria-haspopup="menu"
                                    aria-expanded="false"
                                    aria-label="Dropdown"
                                >
                                    <img
                                        className="shrink-0 size-[38px] rounded-full"
                                        src={`https://ui-avatars.com/api/?name=${user.name}`}
                                        alt="Avatar"
                                    />
                                </button>

                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="hs-dropdown-account"
                                >
                                    <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                                        <p className="text-sm text-gray-500">
                                            Signed in as
                                        </p>
                                        <p className="text-sm font-medium text-gray-800">
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="p-1.5 space-y-0.5">
                                        <Link
                                            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 w-full"
                                            method="post"
                                            as="button"
                                            type="button"
                                            href={route("logout")}
                                        >
                                            <PowerIcon className="h-5 text-inherit" />
                                            Team Account
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="-mt-px">
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden">
                    <div className="flex items-center py-2">
                        <button
                            type="button"
                            className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="hs-application-sidebar"
                            aria-label="Toggle navigation"
                            data-hs-overlay="#hs-application-sidebar"
                        >
                            <span className="sr-only">Toggle Navigation</span>
                            <Bars2Icon className="h-5 text-inherit" />
                        </button>

                        {/* Page Name */}
                        <ol className="ms-3 flex items-center whitespace-nowrap">
                            <li
                                className="text-sm font-semibold text-gray-800 truncate"
                                aria-current="page"
                            >
                                {pageName}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div
                id="hs-application-sidebar"
                className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0"
                role="dialog"
                tabIndex={-1}
                aria-label="Sidebar"
            >
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4">
                        <Link
                            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
                            href={route("dashboard")}
                            aria-label="Preline"
                        >
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                        </Link>
                    </div>

                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <nav
                            className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                            data-hs-accordion-always-open
                        >
                            <ul className="flex flex-col space-y-1">
                                <li>
                                    <Link
                                        className={
                                            "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 " +
                                            (url === "/dashboard"
                                                ? "bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                : "")
                                        }
                                        href={route("dashboard")}
                                    >
                                        <HomeIcon className="size-5 text-inherit shrink-0" />
                                        Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={
                                            "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 " +
                                            (component === "Registrant/Create"
                                                ? "bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                : "")
                                        }
                                        href={route("registrants.create")}
                                    >
                                        <NewspaperIcon className="size-5 text-inherit shrink-0" />
                                        Pendaftaran Bantuan
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className={
                                            "w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 " +
                                            (component === "registrants/Index"
                                                ? "bg-gray-100 focus:outline-none focus:bg-gray-100"
                                                : "")
                                        }
                                        href={route("registrants.index")}
                                    >
                                        <UsersIcon className="size-5 text-inherit shrink-0" />
                                        Data Pendaftar
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {/* Content here */}
                    {children}
                </div>
            </div>
        </>
    );
}
