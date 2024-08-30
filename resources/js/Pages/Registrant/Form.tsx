import { FormEvent, useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ComboboxInputComponent from "@/Components/Core/ComboboxInputComponent";
import SelectInputComponent from "@/Components/Core/SelectInputComponent";
import TextInputComponent from "@/Components/Core/TextInputComponent";
import TextInputColumn2Component from "@/Components/Core/TextInputColumn2Component";
import TextInputGroupComponent from "@/Components/Core/TextInputGroupComponent";
import SelectAnotherInputComponent from "@/Components/Core/SelectAnotherInputComponent";
import FileInputComponent from "@/Components/Core/FileInputComponent";
import { PageProps } from "@/types";
import useWilayah from "@/Hooks/useWilayah";
import { Registrant } from "@/types/model";
import toast from "react-hot-toast";

export default function Form({
    auth,
    pageMode,
    registrant,
}: PageProps<{ pageMode: "create" | "show"; registrant?: Registrant }>) {
    const [isAgree, setIsAgree] = useState(false);

    const {
        fetchKecamatan,
        fetchKelurahan,
        fetchKota,
        fetchProvinsi,
        kecamatan,
        kelurahan,
        kota,
        provinsi,
        loading,
    } = useWilayah();

    const { data, setData, post, errors } = useForm({
        nama: registrant?.nama ?? "",
        nik: registrant?.nik ?? "",
        no_kk: registrant?.no_kk ?? "",
        ktp_url: registrant?.ktp_url ?? "",
        kk_url: registrant?.kk_url ?? "",
        umur: registrant?.umur ?? "",
        kelamin: registrant?.kelamin ?? "",
        provinsi: registrant?.provinsi ?? "",
        kota: registrant?.kota ?? "",
        kecamatan: registrant?.kecamatan ?? "",
        kelurahan: registrant?.kelurahan ?? "",
        alamat: registrant?.alamat ?? "",
        rt: registrant?.rt ?? "",
        rw: registrant?.rw ?? "",
        penghasilan_sebelum: registrant?.penghasilan_sebelum ?? "",
        penghasilan_setelah: registrant?.penghasilan_setelah ?? "",
        alasan: registrant?.alasan ?? "",
    });

    function handleComboboxChange(
        key: string,
        v: { value: string; label: string }
    ) {
        setData(key as any, v.label);

        switch (key) {
            case "provinsi":
                fetchKota(v.value);
                setData((prev) => {
                    return {
                        ...prev,
                        [key]: v.label,
                        kota: "",
                        kecamatan: "",
                        kelurahan: "",
                    };
                });
                break;
            case "kota":
                fetchKecamatan(v.value);
                setData((prev) => {
                    return {
                        ...prev,
                        [key]: v.label,
                        kecamatan: "",
                        kelurahan: "",
                    };
                });
                break;
            case "kecamatan":
                fetchKelurahan(v.value);
                setData((prev) => {
                    return {
                        ...prev,
                        [key]: v.label,
                        kelurahan: "",
                    };
                });
                break;
            default:
                setData((prev) => {
                    return {
                        ...prev,
                        [key]: v.label,
                    };
                });
                break;
        }
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (pageMode === "show") return;

        const toastId = toast.loading("Menyimpan data...");

        post(route("registrants.store"), {
            onSuccess: () => {
                toast.success("Pengajuan berhasil dibuat", { id: toastId });
            },
            onError: () => {
                toast.error("Gagal menyimpan data", { id: toastId });
            },
        });
    }

    useEffect(() => {
        fetchProvinsi();
    }, [data.provinsi, data.kota, data.kecamatan, data.kelurahan]);

    return (
        <AuthenticatedLayout user={auth.user} pageName="Pendaftaran Bantuan">
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="bg-white rounded-xl shadow p-4 sm:p-7">
                    <form onSubmit={handleSubmit} method="post">
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                            <div className="sm:col-span-12">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Data Pribadi
                                </h2>
                            </div>

                            <TextInputComponent
                                pageMode={pageMode}
                                title="Nama Lengkap"
                                name="nama"
                                type="text"
                                value={data.nama}
                                onChange={setData}
                                errors={errors}
                            />

                            <TextInputComponent
                                pageMode={pageMode}
                                title="Nomor NIK"
                                name="nik"
                                type="number"
                                value={data.nik}
                                onChange={setData}
                                errors={errors}
                                min={0}
                                minLength={16}
                                maxLength={16}
                                pattern="[0-9]{16}"
                            />

                            <TextInputComponent
                                pageMode={pageMode}
                                title="Nomor Kartu Keluarga"
                                name="no_kk"
                                type="number"
                                value={data.no_kk}
                                onChange={setData}
                                errors={errors}
                                min={0}
                                minLength={16}
                                maxLength={16}
                                pattern="[0-9]{16}"
                            />

                            <TextInputComponent
                                pageMode={pageMode}
                                title="Umur"
                                name="umur"
                                type="number"
                                value={data.umur as string}
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />

                            <SelectInputComponent
                                pageMode={pageMode}
                                title="Jenis Kelamin"
                                name="kelamin"
                                value={data.kelamin}
                                options={[
                                    { value: "Laki-laki", label: "Laki-laki" },
                                    { value: "Perempuan", label: "Perempuan" },
                                ]}
                                placeholder="Pilih jenis kelamin"
                                onChange={setData}
                                errors={errors}
                            />
                        </div>

                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                            <div className="sm:col-span-12">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Tempat Tinggal
                                </h2>
                            </div>

                            <ComboboxInputComponent
                                pageMode={pageMode}
                                title="Provinsi"
                                name="provinsi"
                                placeholder="Pilih provinsi"
                                value={data.provinsi}
                                onChange={handleComboboxChange}
                                errors={errors}
                                disabled={false}
                                options={provinsi?.map((i) => {
                                    return { value: i.id, label: i.name };
                                })}
                            />

                            <ComboboxInputComponent
                                pageMode={pageMode}
                                title="Kota atau Kabupaten"
                                name="kota"
                                placeholder="Pilih kota atau kabupaten"
                                value={data.kota}
                                onChange={handleComboboxChange}
                                errors={errors}
                                disabled={!kota.length || loading}
                                options={kota?.map((i) => {
                                    return { value: i.id, label: i.name };
                                })}
                            />

                            <ComboboxInputComponent
                                pageMode={pageMode}
                                title="Kecamatan"
                                name="kecamatan"
                                placeholder="Pilih kecamatan"
                                value={data.kecamatan}
                                onChange={handleComboboxChange}
                                errors={errors}
                                disabled={!kecamatan.length || loading}
                                options={kecamatan?.map((i) => {
                                    return { value: i.id, label: i.name };
                                })}
                            />

                            <ComboboxInputComponent
                                pageMode={pageMode}
                                title="Kelurahan atau Desa"
                                name="kelurahan"
                                placeholder="Pilih kelurahan atau desa"
                                value={data.kelurahan}
                                onChange={handleComboboxChange}
                                errors={errors}
                                disabled={!kelurahan.length || loading}
                                options={kelurahan?.map((i) => {
                                    return { value: i.id, label: i.name };
                                })}
                            />

                            <TextInputComponent
                                pageMode={pageMode}
                                title="Alamat"
                                name="alamat"
                                type="text"
                                value={data.alamat}
                                onChange={setData}
                                errors={errors}
                            />

                            <TextInputColumn2Component
                                pageMode={pageMode}
                                title="Nomor RT/RW"
                                name1="rt"
                                value1={data.rt as string}
                                name2="rw"
                                placeholder1="RT"
                                value2={data.rw as string}
                                placeholder2="RW"
                                type="number"
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />
                        </div>

                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                            <div className="sm:col-span-12">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Data Lainnya
                                </h2>
                            </div>

                            <TextInputGroupComponent
                                pageMode={pageMode}
                                title="Penghasilan Sebelum Pandemi"
                                name="penghasilan_sebelum"
                                type="number"
                                leading="Rp"
                                value={data.penghasilan_sebelum as string}
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />

                            <TextInputGroupComponent
                                pageMode={pageMode}
                                title="Penghasilan Setelah Pandemi"
                                name="penghasilan_setelah"
                                type="number"
                                leading="Rp"
                                value={data.penghasilan_setelah as string}
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />

                            <SelectAnotherInputComponent
                                pageMode={pageMode}
                                title="Alasan Membutuhkan Bantuan"
                                name="alasan"
                                value={data.alasan}
                                options={[
                                    {
                                        value: "Kehilangan pekerjaan",
                                        label: "Kehilangan pekerjaan",
                                    },
                                    {
                                        value: "Kepala keluarga",
                                        label: "Kepala keluarga",
                                    },
                                    {
                                        value: "Tergolong fakir/miskin",
                                        label: "Tergolong fakir/miskin",
                                    },
                                    { value: "other", label: "Lainnya..." },
                                ]}
                                placeholderSelect="Pilih alasan memerlukan bantuan"
                                placeholderTextarea="Masukan alasan memerlukan bantuan"
                                onChange={setData}
                                errors={errors}
                            />
                        </div>

                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                            <div className="sm:col-span-12">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Dokumen Pendukung
                                </h2>
                            </div>

                            <FileInputComponent
                                pageMode={pageMode}
                                title="Foto KTP"
                                name="ktp_url"
                                value={data.ktp_url}
                                placeholder="Pilih foto KTP"
                                onChange={setData}
                                errors={errors}
                                accept="image/*"
                            />

                            <FileInputComponent
                                pageMode={pageMode}
                                title="Foto Kartu Keluarga"
                                name="kk_url"
                                value={data.kk_url}
                                placeholder="Pilih foto KK"
                                onChange={setData}
                                errors={errors}
                                accept="image/*"
                            />
                        </div>

                        <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                            {pageMode === "create" && (
                                <>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        Ajukan Pengajuan Bantuan
                                    </h2>

                                    <div className="mt-5 flex">
                                        <input
                                            type="checkbox"
                                            onChange={(e) =>
                                                setIsAgree(!isAgree)
                                            }
                                            className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            id="af-submit-application-agreement"
                                        />
                                        <label
                                            htmlFor="af-submit-application-agreement"
                                            className="text-sm text-gray-500 ms-2"
                                        >
                                            Saya menyatakan bahwa data yang
                                            diisikan adalah benar dan siap
                                            mempertanggungjawabkan apabila
                                            ditemukan ketidaksesuaian dalam data
                                            tersebut.
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>

                        {pageMode === "create" ? (
                            <button
                                type="submit"
                                disabled={!isAgree}
                                className={
                                    "w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none " +
                                    (!isAgree
                                        ? ""
                                        : "disabled:cursor-not-allowed")
                                }
                            >
                                Simpan Formulir
                            </button>
                        ) : (
                            <Link
                                type="button"
                                as="button"
                                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                href={route("registrants.index")}
                            >
                                Kembali
                            </Link>
                        )}
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
