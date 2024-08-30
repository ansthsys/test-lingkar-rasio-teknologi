<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File;

class StoreRegistrantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama' => ['required', 'string', 'max:255'],
            'nik' => ['required', 'integer', 'digits:16'],
            'no_kk' => ['required', 'integer', 'digits:16'],
            'ktp_url' => ['required', File::image()->max('2mb')],
            'kk_url' => ['required', File::image()->max('2mb')],
            'umur' => ['required', 'integer', 'min:25'],
            'kelamin' => ['required', 'string', Rule::in(['Laki-laki', 'Perempuan'])],
            'provinsi' => ['required', 'string', 'max:255'],
            'kota' => ['required', 'string', 'max:255'],
            'kecamatan' => ['required', 'string', 'max:255'],
            'kelurahan' => ['required', 'string', 'max:255'],
            'alamat' => ['required', 'string', 'max:255'],
            'rt' => ['required', 'numeric', 'min:0'],
            'rw' => ['required', 'numeric', 'min:0'],
            'penghasilan_sebelum' => ['required', 'numeric', 'min:0'],
            'penghasilan_setelah' => ['required', 'numeric', 'min:0'],
            'alasan' => ['required', 'string', 'max:1000'],
        ];
    }

    public function messages()
    {
        return [
            'nama.required' => 'Nama harus diisi',
            'nik.required' => 'Nomor NIK harus diisi',
            'no_kk.required' => 'Nomor KK harus diisi',
            'ktp_url.required' => 'Foto KTP harus diisi',
            'kk_url.required' => 'Foto KK harus diisi',
            'umur.required' => 'Umur harus diisi',
            'kelamin.required' => 'Jenis kelamin harus diisi',
            'provinsi.required' => 'Provinsi harus diisi',
            'kota.required' => 'Kota harus diisi',
            'kecamatan.required' => 'Kecamatan harus diisi',
            'kelurahan.required' => 'Kelurahan harus diisi',
            'alamat.required' => 'Alamat harus diisi',
            'rt.required' => 'Nomor RT harus diisi',
            'rw.required' => 'Nomor RW harus diisi',
            'penghasilan_sebelum.required' => 'Penghasilan sebelum pandemi harus diisi',
            'penghasilan_setelah.required' => 'Penghasilan setelah pandemi harus diisi',
            'alasan.required' => 'Alasan harus diisi',
            'nik.integer' => 'Nomor NIK harus berupa angka',
            'no_kk.integer' => 'Nomor KK harus berupa angka',
            'umur.integer' => 'Umur harus berupa angka',
            'rt.numeric' => 'Nomor RT harus berupa angka',
            'rw.numeric' => 'Nomor RW harus berupa angka',
            'penghasilan_sebelum.numeric' => 'Penghasilan sebelum pandemi harus berupa angka',
            'penghasilan_setelah.numeric' => 'Penghasilan setelah pandemi harus berupa angka',
            'nik.digits' => 'Nomor NIK harus 16 digit',
            'no_kk.digits' => 'Nomor KK harus 16 digit',
            'ktp_url.image' => 'Foto KTP harus berupa gambar',
            'kk_url.image' => 'Foto KK harus berupa gambar',
            'ktp_url.max' => 'Foto KTP tidak boleh lebih dari 2MB',
            'kk_url.max' => 'Foto KK tidak boleh lebih dari 2MB',
            'umur.min' => 'Umur minimal 25 tahun',
            'rt.min' => 'Nomor RT tidak boleh negatif',
            'rw.min' => 'Nomor RW tidak boleh negatif',
            'penghasilan_sebelum.min' => 'Penghasilan sebelum pandemi tidak boleh negatif',
            'penghasilan_setelah.min' => 'Penghasilan setelah pandemi tidak boleh negatif',
            'alasan.max' => 'Alasan tidak boleh lebih dari 1000 karakter',
            'kelamin.in' => 'Jenis kelamin harus L atau P',
        ];
    }
}
