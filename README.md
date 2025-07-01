# SEA Catering

Aplikasi web untuk layanan katering sehat custom, delivery seluruh Indonesia.

## 🚀 Setup & Menjalankan Aplikasi

1. **Clone repository**
   ```bash
   git clone <repo-url>
   cd sea
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   # atau
   bun install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   # atau
   bun dev
   ```

4. **Akses aplikasi**
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

5. **Build untuk production**
   ```bash
   npm run build
   npm start
   ```

6. **Linting**
   ```bash
   npm run lint
   ```

## ⚙️ Environment Variables

Saat ini, aplikasi tidak membutuhkan environment variable khusus untuk dijalankan.

## 👤 Fitur Admin

Fitur admin (dashboard, autentikasi, dsb) **belum diimplementasikan** pada versi kode ini. Jika Anda menambahkan fitur admin, mohon tambahkan instruksi pembuatan akun admin (misal: script database, env, dsb) di bagian ini.

## 📚 Teknologi
- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript
- Three.js, GSAP, motion, dan lainnya (lihat `package.json`)

## 📄 Struktur Direktori
- `app/` - Halaman utama dan route aplikasi
- `components/` - Komponen UI
- `lib/` - Utility functions
- `public/` - Asset publik (gambar, logo, dsb)

## 📝 Catatan
- Untuk pengembangan lebih lanjut, silakan cek file `goals.md` untuk daftar fitur dan milestone.
- Jika Anda ingin men-deploy aplikasi, silakan ikuti dokumentasi Next.js: https://nextjs.org/docs/app/building-your-application/deploying
