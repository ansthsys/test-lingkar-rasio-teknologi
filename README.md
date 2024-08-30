# Technical Test

Tes kode dari CV Lingkar Rasio Teknologi

## Tech Stack

Server Side: `Laravel 11`

Client Side: `React`, `Inertia.js`

Database: `SQLite`

Styling: `Tailwind CSS`, `Preline UI`

## Demo

Website telah di deploy dan dapat diakses pada tautan berikut:

https://lingkar-rasio-teknologi.ansthsys.me

### Akun

Terdapat 3 akun admin yang sudah dibuat di awal agar bisa menggunakan website:

1. email: `admin1@email.com`, password: `admin1`
2. email: `admin2@email.com`, password: `admin2`
3. email: `admin3@email.com`, password: `admin3`

## Run Locally

Untuk menjalankan projek secara lokal, diperlukan beberapa langkah sebagai berikut:

1. Clone projek

```bash
  git clone https://github.com/ansthsys/test-lingkar-rasio-teknologi.git
```

2. Masuk kedalam folder projek

```bash
  cd ./test-lingkar-rasio-teknologi
```

3. Install dependencies

```bash
  composer install
```

```bash
  npm install
```

4. Buat environment

```bash
cp .env.example .env
```

5. Generate key

```bash
php artisan key:generate
```

6. Buat file database SQLite

```bash
touch ./database/database.sqlite
```

7. Lakukan migrasi dan seeder

```bash
php artisan migrate:fresh --seed
```

8. Jalankan server side

```bash
php artisan serve
```

9. Buka terminal lain, dan jalankan client side

```bash
npm run dev
```
