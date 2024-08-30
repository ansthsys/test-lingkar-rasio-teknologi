import { FormEvent, useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
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

export default function Create({ auth }: PageProps) {
    const [isAgree, setIsAgree] = useState(false);
    const [wilayah, setWilayah] = useState({
        provinsi: "",
        kota: "",
        kecamatan: "",
        kelurahan: "",
    });

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
        nama: "",
        nik: "",
        no_kk: "",
        ktp_url: "",
        kk_url: "",
        umur: "",
        kelamin: "",
        provinsi: "",
        kota: "",
        kecamatan: "",
        kelurahan: "",
        alamat: "",
        rt: "",
        rw: "",
        penghasilan_sebelum: "",
        penghasilan_setelah: "",
        alasan: "",
    });

    function handleComboboxChange(
        key: string,
        v: { value: string; label: string }
    ) {
        setWilayah((prev) => {
            return { ...prev, [key]: v.value };
        });

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
        post(route("registrants.store"));
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
                                title="Nama Lengkap"
                                name="nama"
                                type="text"
                                value={data.nama}
                                onChange={setData}
                                errors={errors}
                            />

                            <TextInputComponent
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
                                title="Umur"
                                name="umur"
                                type="number"
                                value={data.umur}
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />

                            <SelectInputComponent
                                title="Jenis Kelamin"
                                name="kelamin"
                                value={data.kelamin}
                                options={[
                                    { value: "L", label: "Laki-laki" },
                                    { value: "P", label: "Perempuan" },
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
                                title="Alamat"
                                name="alamat"
                                type="text"
                                value={data.alamat}
                                onChange={setData}
                                errors={errors}
                            />

                            <TextInputColumn2Component
                                title="Nomor RT/RW"
                                name1="rt"
                                value1={data.rt}
                                name2="rw"
                                placeholder1="RT"
                                value2={data.rw}
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
                                title="Penghasilan Sebelum Pandemi"
                                name="penghasilan_sebelum"
                                type="number"
                                leading="Rp"
                                value={data.penghasilan_sebelum}
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />

                            <TextInputGroupComponent
                                title="Penghasilan Setelah Pandemi"
                                name="penghasilan_setelah"
                                type="number"
                                leading="Rp"
                                value={data.penghasilan_setelah}
                                onChange={setData}
                                errors={errors}
                                min={0}
                            />

                            <SelectAnotherInputComponent
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
                                title="Foto KTP"
                                name="ktp_url"
                                value={data.ktp_url}
                                placeholder="Pilih foto KTP"
                                onChange={setData}
                                errors={errors}
                                accept="image/*"
                            />

                            <FileInputComponent
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
                            <h2 className="text-lg font-semibold text-gray-800">
                                Ajukan Pengajuan Bantuan
                            </h2>

                            <div className="mt-5 flex">
                                <input
                                    type="checkbox"
                                    onChange={(e) => setIsAgree(!isAgree)}
                                    className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    id="af-submit-application-agreement"
                                />
                                <label
                                    htmlFor="af-submit-application-agreement"
                                    className="text-sm text-gray-500 ms-2"
                                >
                                    Saya menyatakan bahwa data yang diisikan
                                    adalah benar dan siap mempertanggungjawabkan
                                    apabila ditemukan ketidaksesuaian dalam data
                                    tersebut.
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={!isAgree}
                            className={
                                "w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none " +
                                (!isAgree ? "" : "disabled:cursor-not-allowed")
                            }
                        >
                            Simpan Formulir
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
