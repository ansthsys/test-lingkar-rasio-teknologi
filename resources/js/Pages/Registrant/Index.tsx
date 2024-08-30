import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

export default function Index({ auth }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user} pageName="Data Pendaftar">
            <div>aaa</div>
        </AuthenticatedLayout>
    );
}
