<template>
  <ion-page>
    <ion-content>
      <swiper :slidesPerView="'1.25'" :centeredSlides="true" :spaceBetween="5" :loop="true">
        <swiper-slide v-for="(strategy, index) in strategies" :key="index">
          <div class="strategy-card">
            <p class="strategy-text">{{ strategy }}</p>
          </div>
        </swiper-slide>
      </swiper>

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="chevronUpOutline"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button @click="router.push('/info')">
            <ion-icon :icon="informationOutline"></ion-icon>
          </ion-fab-button>
        </ion-fab-list>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon
} from '@ionic/vue';
import { defineComponent, ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import { strategies as allStrategies } from '@/data/strategies';
import {
  chevronUpOutline,
  contrastOutline,
  informationOutline,
} from 'ionicons/icons';

import 'swiper/css';
import '@ionic/vue/css/ionic-swiper.css';

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    IonContent,
    IonPage,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon
  },
  setup() {
    const router = useRouter();
    const strategies = ref([]);

    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    onMounted(() => {
      strategies.value = shuffleArray(allStrategies);
    });

    return {
      strategies,
      router,
      chevronUpOutline,
      informationOutline,
      contrastOutline,
    };
  }
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  background-color: rgb(30, 30, 30);
}

.strategy-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 50%;
  background-color: rgb(230, 230, 230);
  border-radius: 50px;
}

.strategy-card .strategy-text {
  font-size: 24px;
  font-weight: 500;
  color: rgb(31, 31, 31);
  text-align: center;
  padding: 10%;
}
</style>
