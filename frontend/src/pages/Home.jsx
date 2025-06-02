import Navbar from "../components/Navbar";
import "../style/Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="wrapper" />
      <div class="kolom">
        <p class="deskripsi">
          Bangun efisiensi operasional Toko Anda mulai hari ini!
        </p>
        <p>
          <img src="gambar/operasional.jpg" height="300" />
        </p>
        <h2>📦 Modern. Cepat. Andal.</h2>
        <p>
          Selamat datang di Sistem Inventory Kafe: Manajemen Stok Modern —
          solusi pintar untuk mengelola stok bahan, produk, dan mitra usaha
          dengan efisien. Dirancang khusus untuk kebutuhan kafe masa kini,
          sistem ini membantu Anda:
        </p>
        <p>
          <a href="" class="tbl-pink">
            Pelajari Lebih Lanjut
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
