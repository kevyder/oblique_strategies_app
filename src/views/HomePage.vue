<template>
  <ion-page>
    <ion-content>
      <swiper :slidesPerView="'1.4'" :centeredSlides="true" :loop="true">
        <swiper-slide v-for="(strategy, index) in strategies" :key="index">
          <div class="strategy-card">
            <p class="strategy-text">{{ strategy }}</p>
          </div>
        </swiper-slide>
      </swiper>

      <div class="swipe-hint">
        <p>← Swipe cards left or right →</p>
      </div>

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
  width: 95%;
  height: 40%;
  background-color: rgb(230, 230, 230);
  border-radius: 50px;
}

.strategy-card .strategy-text {
  font-size: 1.3rem;
  color: rgb(30, 30, 30);
  padding: 7%;
  text-align: center;
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: 0.7;
}

.swiper-slide-prev,
.swiper-slide-next {
  animation: hithere 9s ease infinite;
}

@keyframes hithere {
  0% { transform: scale(1); }
  5% { transform: scale(0.8); }
  10%, 20% { transform: rotate(-5deg) scale(0.8); }
  15% { transform: rotate(5deg) scale(0.8); }
  25% { transform: rotate(0deg) scale(0.8); }
  30% { transform: scale(0.8) scale(1); }
  100% { transform: scale(0.8) scale(1); }
}

.swipe-hint {
  position: fixed;
  bottom: 80px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 100;
}

.swipe-hint p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  margin: 0;
  animation: fadeInOut 2s ease-in-out infinite;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}
</style>
