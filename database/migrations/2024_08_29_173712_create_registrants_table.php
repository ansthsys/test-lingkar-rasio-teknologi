<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users', 'id');
            $table->string('nama');
            $table->string('nik');
            $table->string('no_kk');
            $table->text('ktp_url');
            $table->text('kk_url');
            $table->integer('umur');
            $table->enum('kelamin', ['L', 'P']);
            $table->string('provinsi');
            $table->string('kota');
            $table->string('kecamatan');
            $table->string('kelurahan');
            $table->string('alamat');
            $table->integer('rt');
            $table->integer('rw');
            $table->decimal('penghasilan_sebelum', 15, 2);
            $table->decimal('penghasilan_setelah', 15, 2);
            $table->text('alasan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrants');
    }
};
