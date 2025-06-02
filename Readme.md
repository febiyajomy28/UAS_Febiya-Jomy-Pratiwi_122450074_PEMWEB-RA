# ☕️ Sistem Manajemen Café - Fullstack 🚀

## 📌 Deskripsi Proyek

Sistem Manajemen Café adalah aplikasi fullstack yang dirancang untuk membantu pengelolaan operasional café secara digital, terdiri dari:

- 🖥️ **Frontend:** Aplikasi berbasis React.js sebagai antarmuka pengguna.
- ⚙️ **Backend:** Layanan API berbasis Pyramid (Python) untuk manajemen data.

Sistem ini memungkinkan pengelolaan:

- Menu café (makanan, minuman, snack)
- Data pelanggan dan sistem poin loyalitas
- Dashboard analitik untuk melihat statistik menu dan pelanggan

---

## ⭐ Fitur Utama

### 🎨 Frontend (React.js)

- Manajemen Menu (CRUD)
- Manajemen Pelanggan (CRUD)
- Dashboard visualisasi data:
  - Distribusi kategori menu
  - Distribusi poin pelanggan
  - Statistik jumlah menu dan pelanggan
- Responsive Design

### 🔧 Backend (Pyramid)

- REST API untuk:
  - Manajemen menu
  - Manajemen pelanggan
  - Autentikasi pengguna
- Validasi data input dan penanganan error terstruktur
- Dukungan CORS untuk integrasi frontend-backend

---

## 🛠️ Teknologi yang Digunakan

### 💻 Frontend

- React.js
- React Router
- Chart.js
- CSS Modules
- Custom Hooks

### 🐍 Backend

- Pyramid - Framework web Python
- SQLAlchemy (ORM) - ORM untuk interaksi database
- PostgreSQL - Database relasional
- Waitress - WSGI server untuk production
- Alembic - Migrasi database
- Pyramid Debug Toolbar - Untuk debugging di development

---

## 🧩 Instalasi dan Menjalankan Proyek

### Prasyarat

- Node.js (untuk frontend)
- Python 3.7+ (untuk backend)
- PostgreSQL

### 🚀 Langkah-langkah

#### 1️⃣ Clone repositori

```bash
git clone https://github.com/febiyajomy28/UAS_Febiya-Jomy-Pratiwi_122450074_PEMWEB-RA.git
cd backendd
```

#### 2️⃣ Backend Setup:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -e ".[testing]"
```

```bash
alembic -c development.ini revision --autogenerate -m "init"
alembic -c development.ini upgrade head
pserve development.ini
```

#### 3️⃣ Frontend Setup:

```bash
npm install
npm run dev
```

---

## 👩‍💻 Authors

- FEBIYA JOMY PRATIWI - Creator
