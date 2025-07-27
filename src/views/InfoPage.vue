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
          <div class="divider"></div>
          <div class="developer-info">
            <p>Developed by <a href="https://github.com/kevyder" target="_blank">Kevin Rodriguez</a></p>
            <p>Version 1.0.0</p>
            <p>Licensed under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a></p>
          </div>
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
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.info-authors {
  font-size: 20px;
  color: #999;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
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

.copyright-text {
  font-size: 14px !important;
  color: #666;
  margin-top: 10% !important;
  font-style: italic;
}

.divider {
  width: 30%;
  height: 1px;
  background-color: #666;
  margin: 20px auto;
  opacity: 0.3;
}

.developer-info {
  margin-top: 10%;
}

.developer-info p {
  font-size: 14px !important;
  color: #666;
  margin: 5px 0 !important;
}

.developer-info a {
  color: #666;
  text-decoration: none;
  border-bottom: 1px dotted #666;
}

.developer-info a:hover {
  color: #999;
  border-bottom: 1px solid #999;
}
</style>