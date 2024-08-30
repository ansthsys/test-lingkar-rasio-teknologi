<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Registrant extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nama',
        'nik',
        'no_kk',
        'ktp_url',
        'kk_url',
        'umur',
        'kelamin',
        'provinsi',
        'kota',
        'kecamatan',
        'kelurahan',
        'alamat',
        'rt',
        'rw',
        'penghasilan_sebelum',
        'penghasilan_setelah',
        'alasan',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
