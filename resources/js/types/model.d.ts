import { User } from ".";

export interface Registrant {
    id: number;
    user_id: number;
    nama: string;
    nik: string;
    no_kk: string;
    ktp_url: string;
    kk_url: string;
    umur: number;
    kelamin: "Laki-laki" | "Perempuan" | string;
    provinsi: string;
    kota: string;
    kecamatan: string;
    kelurahan: string;
    alamat: string;
    rt: number;
    rw: number;
    penghasilan_sebelum: number;
    penghasilan_setelah: number;
    alasan: string;
    created_at: string;
    updated_at: string;

    user?: User;
}
