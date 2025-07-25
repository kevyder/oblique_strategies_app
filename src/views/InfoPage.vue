<template>
  <ion-page>
    <ion-content>
      <div class="info-wrapper">
        <div class="info-container">
          <h1 class="info-title">Oblique Strategies</h1>
          <h2 class="info-authors">Brian Eno / Peter Schmidt</h2>
          <h3 class="info-subtitle">Over One Hundred Worthwhile Dilemmas</h3>
          <p>Designed to help artists, musicians, writers, and creatives break through mental roadblocks and approach
            their work from fresh, unexpected angles. Created in 1975 by Brian Eno and artist Peter Schmidt, this unique
            tool encourages lateral thinking by offering unconventional prompts and creative dilemmas.</p>
        </div>
      </div>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="chevronUpOutline"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="top">
          <ion-fab-button @click="router.push('/')">
            <ion-icon :icon="albumsOutline"></ion-icon>
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
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import {
  chevronUpOutline,
  albumsOutline,
} from 'ionicons/icons';


export default defineComponent({
  components: {
    IonContent,
    IonPage,
    IonFab,
    IonFabButton,
    IonFabList,
    IonIcon
  },
  setup() {
    const router = useRouter();
    return {
      chevronUpOutline,
      albumsOutline,
      router
    };
  }
});
</script>
<style scoped>

.info-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.info-container {
  text-align: center;
  width: 80%;
  height: 75%;
  margin: auto;
}

.info-title {
  font-size: 28px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 12px;
}

.info-authors {
  font-size: 20px;
  color: #999;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: normal;
}

.info-subtitle {
  font-size: 18px;
  color: #999;
  margin-bottom: 20px;
}

.info-container p {
  text-align: center;
  margin-top: 10%;
  font-size: 18px;
}
</style>