<?php

namespace Database\Factories;

use App\Models\Registrant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Registrant>
 */
class RegistrantFactory extends Factory
{
    protected $model = Registrant::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => null,
            'nama' => $this->faker->name,
            'nik' => $this->faker->numerify('################'),
            'no_kk' => $this->faker->numerify('################'),
            'ktp_url' => $this->faker->imageUrl(),
            'kk_url' => $this->faker->imageUrl(),
            'umur' => $this->faker->numberBetween(25, 60),
            'kelamin' => $this->faker->randomElement(['L', 'P']),
            'provinsi' => $this->faker->state,
            'kota' => $this->faker->city,
            'kecamatan' => $this->faker->streetName,
            'kelurahan' => $this->faker->streetSuffix,
            'alamat' => $this->faker->address,
            'rt' => $this->faker->numberBetween(1, 10),
            'rw' => $this->faker->numberBetween(1, 10),
            'penghasilan_sebelum' => $this->faker->randomFloat(2, 1000000, 10000000),
            'penghasilan_setelah' => $this->faker->randomFloat(2, 500000, 9000000),
            'alasan' => $this->faker->sentence,
        ];
    }
}
