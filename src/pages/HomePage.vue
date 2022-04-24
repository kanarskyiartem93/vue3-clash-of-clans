<template>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide class="card__wrapper" v-for="item in items" :key="item.id">
        <card-u-i :link="`/${item.alias}`" :title="item.title" :name="`${item.lvl} lvl`" :img-url="item.img">
          <template v-slot:body>{{ item.description }}</template>
          <template v-slot:footer>
            <div class="card-stats">
              <div class="one-third" v-for="(stat,index) in item.info" :key="index">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat">{{ stat.title }}</div>
              </div>
            </div>
          </template>
        </card-u-i>
      </slide>
      <template #addons>
        <navigation/>
      </template>
    </carousel>
</template>

<script>
import items from '@/seeders/items.js'
import CardUI from "@/components/UI/Card";
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Navigation} from 'vue3-carousel';

export default {
  name: "HomePage",
  components: {CardUI, Carousel, Slide, Navigation},
  data() {
    return {
      items: items,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: 'center',
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        }
      }
    }
  }
}
</script>

<style scoped>

</style>