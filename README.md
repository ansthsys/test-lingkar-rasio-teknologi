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

-   email: `admin1@email.com`, password: `admin1`

-   email: `admin2@email.com`, password: `admin2`

-   email: `admin3@email.com`, password: `admin3`

## Run Locally

Untuk menjalankan projek secara lokal, diperlukan beberapa langkah sebagai berikut:

Clone projek

```bash
  git clone https://github.com/ansthsys/test-lingkar-rasio-teknologi.git
```

Masuk kedalam folder projek

```bash
  cd ./test-lingkar-rasio-teknologi
```

Install dependencies

```bash
  composer install
```

```bash
  npm install
```

Buat environment

```bash
cp .env.example .env
```

Generate key

```bash
php artisan key:generate
```

Tautkan folder storage

```bash
php artisan storage:link
```

Buat file database SQLite

```bash
touch ./database/database.sqlite
```

Lakukan migrasi dan seeder

```bash
php artisan migrate:fresh --seed
```

Jalankan server side

```bash
php artisan serve
```

Buka terminal lain, dan jalankan client side

```bash
npm run dev
```
