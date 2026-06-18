<template>
  <div class="bg-colorSecond pt-[10px] pb-[32px] px-[18px] md:px-[70px]">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="w-full md:w-1/2">
        <p class="font-[500] text-[16px] md:text-[18px] text-main whitespace-pre-line">
          Kami lakukan ini untuk mahasiswa
        </p>
        <h4 class="text-[24px] md:text-[50px] capitalize text-main font-[700] mb-[4px]">Mari Berdonasi Bersama
          IOM-ITB
        </h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line mb-[24px]">
          IOM-ITB membantu para mahasiswa ITB yang membutuhkan bantuan, baik dalam hal finansial (UKT, Biaya Hidup, dll) ataupun non-finansial (pendampingan).
        </p>
        <button @click="openTallyPopup" class="inline-flex items-center px-3 py-2 text-[18px] font-medium text-center text-white bg-main rounded-full hover:opacity-[0.8] focus:ring-4 focus:outline-none focus:ring-blue-300">
          Donasi Sekarang
        </button>
      </div>
      <img :src="require('@/assets/image/donation-header.png')" alt="Donation" class="w-full md:w-1/2 p-4 md:p-20 hidden md:block">
    </div>
  </div>

  <div class="bg-white py-[16px] md:py-[24px] px-[18px] md:px-[70px]">
    <div class="flex flex-col lg:flex-row justify-center items-center  px-[18px] md:px-[70px]">
      <div class="flex items-center gap-4 w-full lg:w-1/2 mb-4 lg:mb-0 lg:justify-end lg:mr-8">
        <img :src="require('@/assets/icon/icon-sukarelawan.png')" alt="sukarelawan" class="w-[100px]">
        <div>
          <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">Mari Berdonasi Bersama IOM-ITB</h4>
          <p class="font-[400] text-[16px] md:text-[18px] text-main whitespace-pre-line">
            Kami lakukan ini untuk mahasiswa
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 w-full lg:w-1/2 mb-4 lg:mb-0">
        <img :src="require('@/assets/icon/icon-dana.png')" alt="dana" class="w-[100px]">
        <div>
          <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">Galang Dana Cepat</h4>
          <p class="font-[400] text-[16px] md:text-[18px] text-main whitespace-pre-line">
            Kami membantu untuk mengembangkan secepatnya bantuan yang ada.
          </p>
        </div>
      </div>
     
    </div>
    <div class="flex justify-center items-center  px-[18px] md:px-[70px]">
    <div class="flex justify-center items-center gap-4 w-full lg:w-1/2">
        <img :src="require('@/assets/icon/icon-donasi.png')" alt="donasi" class="w-[100px]">
        <div>
          <h4 class="text-[24px] md:text-[26px] capitalize text-main font-[700] mb-[4px]">Mulai Donasi</h4>
          <p class="font-[400] text-[16px] md:text-[18px] text-main whitespace-pre-line">
            Mari bersama-sama untuk melakukan kebaikan demi kepentingan mahasiswa yang dibutuhkan.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="border w-[90%] mx-auto opacity-50"></div>

  <div class="bg-colorSecond py-[50px] md:py-[80px] px-[18px] md:px-[70px]">
    <div class="max-w-[1400px] mx-auto">
      <div class="text-center mb-16">
        <h4 class="text-main/60 text-[16px] font-[600] uppercase tracking-widest mb-2">Program Kontribusi</h4>
        <h2 class="text-main font-[800] text-[32px] md:text-[50px] mb-4">ISSUMIT</h2>
        <p class="text-main/70 text-[18px]">Iuran, Sumbangan Sukarela & Kemitraan</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Iuran Anggota -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-main/5 relative overflow-hidden group hover:-translate-y-2 transition-transform">
          <div class="absolute top-0 right-0 w-24 h-24 bg-main opacity-5 -translate-y-12 translate-x-12 rounded-full"></div>
          <h3 class="text-[22px] text-main font-[800] mb-4">Iuran Sukarela Anggota</h3>
          <p class="text-[28px] text-main font-[900] mb-6">Rp 1.000.000,-</p>
          <p class="text-main/60 text-[15px] leading-relaxed mb-6">Kontribusi satu kali selama menjadi anggota IOM-ITB (estimasi studi 4 tahun) untuk mendukung operasional dan program bantuan.</p>
          <div class="flex items-center text-main font-bold text-[14px] group-hover:gap-3 transition-all">
            Kontribusi Sekarang <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </div>

        <!-- Orang Tua Asuh -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-main/5 relative overflow-hidden group hover:-translate-y-2 transition-transform">
          <h3 class="text-[22px] text-main font-[800] mb-4">Orang Tua Asuh (OTA)</h3>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center gap-3 text-main/70 text-[15px]"><span class="w-1.5 h-1.5 bg-main rounded-full"></span> Komitmen minimal 1 Semester</li>
            <li class="flex items-center gap-3 text-main/70 text-[15px]"><span class="w-1.5 h-1.5 bg-main rounded-full"></span> Penyaluran bulanan ke mahasiswa</li>
            <li class="flex items-center gap-3 text-main/70 text-[15px]"><span class="w-1.5 h-1.5 bg-main rounded-full"></span> Laporan perkembangan berkala</li>
          </ul>
          <router-link to="/pendataan-anggota" class="block w-full text-center py-3 bg-[#1c3faa] text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all">Daftar OTA</router-link>
        </div>

        <!-- ZIS -->
        <div class="bg-[#F2F7FC] p-8 rounded-3xl border border-main/10 group hover:-translate-y-2 transition-transform">
          <h3 class="text-[22px] text-main font-[800] mb-4">Zakat, Infaq, Sadaqah</h3>
          <p class="text-main/60 text-[15px] leading-relaxed mb-6">Bekerja sama dengan <span class="font-bold">Rumah Amal Salman</span> untuk pengelolaan dana ZIS yang tepat sasaran bagi mahasiswa terdampak.</p>
          <div class="flex items-center gap-4 grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100">
             <span class="font-black text-main tracking-tighter italic">RumahAmalSalman</span>
          </div>
        </div>

        <!-- Merchandise -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-main/5 relative overflow-hidden group hover:-translate-y-2 transition-transform">
          <h3 class="text-[22px] text-main font-[800] mb-4">IOM Merchandise</h3>
          <p class="text-main/60 text-[15px] leading-relaxed mb-6">Dapatkan produk eksklusif IOM-ITB hasil kolaborasi dengan <span class="font-bold">ITB Press</span>. Seluruh hasil penjualan didonasikan.</p>
          <router-link to="/merchandise" class="inline-block px-6 py-2 border-2 border-[#1c3faa] text-[#1c3faa] rounded-full font-bold hover:bg-[#1c3faa] hover:text-white transition-all">Buka Katalog</router-link>
        </div>

        <!-- Dana Lestari -->
        <div class="bg-white p-8 rounded-3xl shadow-lg border border-main/5 relative overflow-hidden group hover:-translate-y-2 transition-transform">
          <div class="absolute top-4 right-4 bg-main/10 text-main text-[10px] font-bold px-3 py-1 rounded-full uppercase">Development</div>
          <h3 class="text-[22px] text-main font-[800] mb-4">Dana Lestari / Wakaf</h3>
          <p class="text-main/60 text-[15px] leading-relaxed mb-6">Program kemitraan strategis bersama <span class="font-bold">BPUDL</span> dan Bank Syariah untuk keberlangsungan dana beasiswa jangka panjang.</p>
          <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div class="w-2/3 h-full bg-main"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="border w-[90%] mx-auto opacity-50"></div>

  <div class="bg-white py-[24px] px-[18px] md:px-[70px]">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <img :src="require('@/assets/image/iom-itb.png')" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20">
      <div class="w-full md:w-1/2 text-justify p-4 md:p-0">
        <h4 class="text-[24px] md:text-[50px] capitalize text-main font-[700]">Berdonasi Bersama IOM-ITB</h4>
        <p class="font-[500] text-[14px] md:text-[16px] text-main whitespace-pre-line">
          {{ "Setiap tahunnya, Institut Teknologi Bandung menerima ribuan mahasiswa dari berbagai provinsi di Indonesia. Mereka masuk ke ITB melalui tiga jalur penerimaan, di antaranya SNBP, SNBT, Seleksi Mandiri dan ITB International Undergraduate Program (IUP).\n\nKita memahami, para mahasiswa yang belajar di ITB memiliki latar belakang ekonomi yang berbeda dan  ITB tidak ingin membatasi kesempatan belajar bagi mahasiswanya karena masalah finansial. Untuk itu, berbagai fasilitas beasiswa disediakan oleh ITB untuk membantu mahasiswa yang kesulitan di bidang ekonomi, salah satunya adalah bantuan dan beasiwa IOM. Bantuan dan Beasiswa yang disalurkan IOM melalui ITB berasal dari Iuran dan kontribusi para Orang Tua Mahasiswa. IOM mengajak para Orang Tua Mahasiswa untuk turut berkontribusi dalam membantu Mahasiswa yang memerlukan dukungan baik secara finansial ataupun non finansial." }}
        </p>
        <br>
        <div class="w-fit text-center">
        <img :src="require('@/assets/image/ketua-umum-iom.png')" alt="Ketua Umum Iom" class="w-[500px]">
        <span class="text-gray-500">Ketua Umum - Hendro Setyanto, S.Si., M.Si.</span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderItem from "@/components/header/HeaderItem.vue";

export default {
  components: {
    HeaderItem,
  },
  setup() {
    return {};
  },
  data() {
    return {
      history: "IOM-ITB merupakan perkumpulan Orang Tua Mahasiswa ITB yang menjadi salah satu mitra Institut Teknologi Bandung.\n\nBerdiri sejak tanggal 14 Juli 1968, dan digagas oleh istri-istri dosen ITB atas dasar kepedulian terhadap kondisi mahasiswa yang terkendala biaya dalam melaksanakan studinya selama perkuliahan berlangsung.\n\nDISAHKAN SEBAGAI BADAN HUKUM : Pada tanggal 16 Desember 1974 berdasarkan: \nSurat Keputusan Pengadilan Negeri Kelas I Bandung \nNo: 1/1974/PBH/Bdg.\n\n",
      functionality: "IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.\n\n",
      goals: "IOM-ITB bermaksud dan bertujuan ikut serta membina mahasiswa, dengan menjalin hubungan antar sesama orangtua mahasiswa, menghimpun, menampung dan menyalurkan daya dan usaha.",
      activity: [
        {
          image: "slide1.png",
          title: "Noteworthy technology acquisition 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          url: "/",
        },
        {
          image: "slide1.png",
          title: "Noteworthy technology acquisition 2023",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          url: "/",
        },
        {
          image: "slide1.png",
          title: "Noteworthy technology acquisition 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          url: "/",
        },
        {
          image: "slide1.png",
          title: "Noteworthy technology acquisition 2023",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          url: "/",
        },
        {
          image: "slide1.png",
          title: "Noteworthy technology acquisition 2021",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          url: "/",
        },
        {
          image: "slide1.png",
          title: "Noteworthy technology acquisition 2023",
          description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
          url: "/",
        },
      ],
    };
  },
  computed: {},
  methods: {
    openTallyPopup() {
      const formId = 'mZJe8e';
      const options = {
        layout: 'modal',
        width: 700,
        autoClose: 5000,
        hiddenFields: {
          ref: 'downloads',
          email: 'alice@example.com'
        },
        onOpen: () => {
          // Callback saat popup dibuka
          console.log('Popup form dibuka');
        },
        onClose: () => {
          // Callback saat popup ditutup
          console.log('Popup form ditutup');
        },
        onSubmit: (payload) => {
          // Callback saat form disubmit
          console.log('Form disubmit dengan payload:', payload);
        }
      };
      Tally.openPopup(formId, options);
    }
  },
};
</script>

<style scoped>
.bg-colorSecond {
  background-color: #f3f4f6;
}
.bg-main {
  background-color: #1c3faa;
}
.text-main {
  color: #1c3faa;
}
</style>
