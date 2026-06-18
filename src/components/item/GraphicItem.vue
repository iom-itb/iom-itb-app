<template>
  <div class="max-w-[1400px] mx-auto">
    <h2 class="text-main font-[800] text-[32px] md:text-[50px] text-center leading-tight md:leading-[65.1px] py-[16px]">Grafik</h2>
    <div class="flex flex-col md:flex-row justify-between md:items-center mb-[8px] gap-2 md:px-10">
      <div class="flex gap-2 items-center">
        <button @click="modeHandler('report')" :class="`${mode === 'report' ? 'text-white bg-main' : 'text-main bg-white'} border border-main px-[8px] py-[4px] w-fit h-fit rounded-[5px] text-[14px] md:text-[16px] text-center font-bold tracking-tight`">Laporan</button>
        <button @click="modeHandler('year')" :class="`${mode === 'year' ? 'text-white bg-main' : 'text-main bg-white'} border border-main px-[8px] py-[4px] w-fit h-fit rounded-[5px] text-[14px] md:text-[16px] text-center font-bold tracking-tight`">Pertahun</button> 
        <button @click="modeHandler('grade')" :class="`${mode === 'grade' ? 'text-white bg-main' : 'text-main bg-white'} border border-main px-[8px] py-[4px] w-fit h-fit rounded-[5px] text-[14px] md:text-[16px] text-center font-bold tracking-tight`">Perangkatan</button>
      </div>
      <div class="w-full md:w-fit h-fit flex">
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] md:text-[16px] rounded-[5px] focus:ring-blue-500 focus:border-blue-500 block w-full px-[8px] py-[4px]" v-model="graphic">
          <option v-for="(opt, index) in options" :key="index" :value="index">{{ opt.label }}</option>
        </select>
      </div>
    </div>
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 mt-4 overflow-hidden">
      <img :src="currentImages[graphic]?.src || ''" class="w-full md:px-10 md:py-8 object-contain" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          category: 'report', 
          images: this.loadImages('report')
        },
        {
          category: 'year', 
          images: this.loadImages('year')
        },
        {
          category: 'grade', 
          images: this.loadImages('grade')
        }
      ],
      graphic: 0,
      mode: 'report'
    };
  },
  computed: {
    currentCategory() {
      return this.data.find(d => d.category === this.mode);
    },
    options() {
      if (this.currentCategory) {
        return this.currentCategory.images.map(img => ({
          label: img.label,
          src: img.src
        }));
      }
      return [];
    },
    currentImages() {
      return this.currentCategory ? this.currentCategory.images : [];
    }
  },
  methods: {
    loadImages(category) {
      const images = [];
      
      // Import all images from assets/image folder
      const imageContext = require.context('@/assets/image/', false, /\.png$/);
      
      imageContext.keys().forEach((key) => {
        const filename = key.replace('./', '').replace('.png', '');
        let categoryMatch = '';
        
        // Determine which category this image belongs to
        if (category === 'report' && !filename.includes('pertahun') && !filename.includes('perangkatan')) {
          categoryMatch = 'report';
        } else if (category === 'year' && filename.includes('pertahun')) {
          categoryMatch = 'year';
        } else if (category === 'grade' && filename.includes('perangkatan')) {
          categoryMatch = 'grade';
        }
        
        // If this image matches the current category, add it
        if (categoryMatch === category) {
          // Extract label from filename
          // Example: grafik-biaya-hidup-pertahun.png -> Biaya Hidup
          const label = this.extractLabel(filename, category);
          
          images.push({
            label: label,
            src: imageContext(key),
            filename: filename
          });
        }
      });
      
      return images;
    },
    extractLabel(filename, category) {
      // Remove category suffix
      let cleanName = filename.replace('-pertahun', '').replace('-perangkatan', '');
      
      // Remove common prefixes
      cleanName = cleanName.replace('grafik-', '');
      
      // Convert kebab-case to Title Case
      return cleanName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    modeHandler(v) {
      this.mode = v;
      this.graphic = 0; // Reset select when mode changes
    }
  }
};
</script>
