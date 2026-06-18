<template>
  <div class="overflow-hidden">
    <HeaderItem />
  </div>
  <div class="bg-white">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Tentang Kami</h2>
    <div class="flex flex-col md:flex-row justify-between items-center">
      <img :src="require('@/assets/image/iom-itb.png')" alt="IOM-ITB" class="w-full md:w-1/2 object-cover p-4 md:p-20">
      <div class="w-full md:w-[45%] bg-main rounded-l-[50px] py-[40px] md:py-[61px] px-[30px] md:px-[70px]">
        <h4 class="text-[24px] md:text-[26px] capitalize text-white font-[700]">Ikatan Orang Tua</h4>
        <h5 class="text-[18px] md:text-[20px] capitalize text-white font-[600]">Mahasiswa ITB</h5>
        <br>
        <p class="font-[500] text-[14px] md:text-[16px] text-white">IOM-ITB berfungsi sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.</p>
        <br>
        <p class="font-[500] text-[14px] md:text-[16px] text-white">Melalui program BANKES (Bantuan Mahasiswa & Kesehatan) dan PMK (Pembinaan Mahasiswa & Konseling), kami berkomitmen membantu kelancaran studi dan pengembangan karakter mahasiswa ITB.</p>
        <br>
        <br>
        <a href="/tentang-kami" class="bg-white text-main font-[600] text-[16px] md:text-[18px] rounded-full p-[10px] md:p-[12px] hover:opacity-[0.8]">Baca Selengkapnya</a>
      </div>
    </div>
  </div>

  <div class="bg-white p-[16px] md:p-[24px] w-full">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">10 Donatur Terakhir</h2>
    <TableDonation class="w-full"/>
  </div>

  <div class="bg-white p-[16px] md:p-[24px]">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Kegiatan</h2>
    <ActivitiesItem />
  </div>

  <div class="bg-white py-[50px] md:py-[104px] px-[20px] md:px-[42px] text-center">
    <GraphicItem/>
  </div>

  <div class="bg-colorSecond py-[50px] md:py-[104px] px-[20px] md:px-[70px]">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
      <!-- VISI -->
      <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-main/5 hover:shadow-md transition-shadow">
        <div class="w-16 h-16 bg-main/10 rounded-full flex items-center justify-center mb-6">
          <VisiSvg className="w-8 h-8 text-main" />
        </div>
        <h4 class="text-[24px] text-main font-[800] mb-4">Visi</h4>
        <p class="text-[16px] text-main/80 font-[400]">Bersama ITB, melahirkan anak bangsa yang cerdas, tangguh dan berakhlak mulia.</p>
      </div>

      <!-- MISI -->
      <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-main/5 hover:shadow-md transition-shadow">
        <div class="w-16 h-16 bg-main/10 rounded-full flex items-center justify-center mb-6">
          <MisiSvg className="w-8 h-8 text-main" />
        </div>
        <h4 class="text-[24px] text-main font-[800] mb-4">Misi</h4>
        <p class="text-[16px] text-main/80 font-[400]">Memotivasi dan membantu mahasiswa ITB untuk mengatasi kendala dalam studinya serta berperan aktif dalam pembinaan watak, kepedulian sosial dan budaya.</p>
      </div>

      <!-- MAKSUD & TUJUAN -->
      <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-main/5 hover:shadow-md transition-shadow">
        <div class="w-16 h-16 bg-main/10 rounded-full flex items-center justify-center mb-6">
          <TujuanSvg className="w-8 h-8 text-main" />
        </div>
        <h4 class="text-[24px] text-main font-[800] mb-4">Maksud & Tujuan</h4>
        <p class="text-[16px] text-main/80 font-[400]">Ikut serta membina mahasiswa, dengan menjalin hubungan antar sesama orang tua mahasiswa, menghimpun dan menyalurkan daya dan usaha.</p>
      </div>

      <!-- FUNGSI -->
      <div class="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-main/5 hover:shadow-md transition-shadow">
        <div class="w-16 h-16 bg-main/10 rounded-full flex items-center justify-center mb-6">
          <FungsiSvg className="w-8 h-8 text-main" />
        </div>
        <h4 class="text-[24px] text-main font-[800] mb-4">Fungsi</h4>
        <p class="text-[16px] text-main/80 font-[400]">Sebagai mitra ITB, khususnya dalam pembinaan kelangsungan pendidikan yang bersifat sosial dan kekeluargaan.</p>
      </div>
    </div>
  </div>

  <div class="bg-main pt-[24px] pb-[34px]">
    <h2 class="text-[32px] md:text-[50px] capitalize text-white font-[800] text-center mb-[24px] md:mb-[42px]">Video</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center px-8">
      <div v-for="video in videos" :key="video.id" class="text-center">
        <hr class="blue mb-4">
        <iframe width="100%" height="180px" class="embed-responsive-item" :src="video.url" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_ACTIVITIES } from "@/store/activities.module";
import HeaderItem from "@/components/header/HeaderItem.vue";
import GraphicItem from "@/components/item/GraphicItem.vue";
import ActivitiesItem from "@/components/card/ActivitiesItem.vue";
import TableDonation from "@/components/table/TableDonation.vue";
import videoData from "@/assets/mock/videos.json";
import VisiSvg from "@/assets/icon/VisiSvg.vue";
import MisiSvg from "@/assets/icon/MisiSvg.vue";
import TujuanSvg from "@/assets/icon/TujuanSvg.vue";
import FungsiSvg from "@/assets/icon/FungsiSvg.vue";

export default {
  components: {
    HeaderItem,
    GraphicItem,
    ActivitiesItem,
    TableDonation,
    VisiSvg,
    MisiSvg,
    TujuanSvg,
    FungsiSvg
  },
  computed:{
  },
  setup() {
    return {};
  },
  data() {
    return {
      videos: videoData
    };
  },
  mounted(){
    this.getData()
  },
  methods: {
    async getData() {
      try {
        await this.$store.dispatch(GET_ACTIVITIES, {
          search: "",
          limit: 1000,
          page: 1,
        });
      } catch (err) {
        console.error(err);
      }
    },
  }
};
</script>

<style scoped>
.blue {
  border-color: #003A6E;
}
</style>
