import { useState } from "react";

interface Provinsi {
    id: string;
    name: string;
}

interface Kota {
    id: string;
    name: string;
    provinsi_id: string;
}

interface Kecamatan {
    id: string;
    name: string;
    regency_id: string;
}

interface Kelurahan {
    id: string;
    district_id: string;
    name: string;
}

export default function useWilayah() {
    const baseUrl = import.meta.env.VITE_URL_WILAYAH_API;
    const [provinsi, setProvinsi] = useState<Provinsi[]>([]);
    const [kota, setKota] = useState<Kota[]>([]);
    const [kecamatan, setKecamatan] = useState<Kecamatan[]>([]);
    const [kelurahan, setKelurahan] = useState<Kelurahan[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchProvinsi = async () => {
        setLoading(true);

        const response = await fetch(`${baseUrl}/provinces.json`);
        const data = await response.json();

        setProvinsi(data);
        setLoading(false);
    };

    const fetchKota = async (provinsiId: string) => {
        setLoading(true);

        const response = await fetch(`${baseUrl}/regencies/${provinsiId}.json`);
        const data = await response.json();

        setKota(data);
        setLoading(false);
    };

    const fetchKecamatan = async (kotaId: string) => {
        setLoading(true);

        const response = await fetch(`${baseUrl}/districts/${kotaId}.json`);
        const data = await response.json();

        setKecamatan(data);
        setLoading(false);
    };

    const fetchKelurahan = async (kecamatanId: string) => {
        setLoading(true);

        const response = await fetch(`${baseUrl}/villages/${kecamatanId}.json`);
        const data = await response.json();

        setKelurahan(data);
        setLoading(false);
    };

    return {
        provinsi,
        kota,
        kecamatan,
        kelurahan,
        loading,
        fetchProvinsi,
        fetchKota,
        fetchKecamatan,
        fetchKelurahan,
    };
}
