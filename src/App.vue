<template>
  <AppHeader />
  <div class="wrapper-content">
    <div class="container">
      <router-view></router-view>
      <ul class="items">
        <li class="item" :key="card.id" v-for="card in cards">
          <card-item
            :alias="card.alias"
            :title="card.name"
            :img="card.img"
            :lvl="card.lvl"
          >
            <template v-slot:desc>
              {{ card.desc }}
            </template>
            <template v-slot:footer>
              <div class="card-status">
                <div
                  class="one-third"
                  :key="i"
                  v-for="(oneInfo, i) in card.info"
                >
                  <span class="state-value">{{ oneInfo.value }}</span>
                  <span class="state-card">{{ oneInfo.title }}</span>
                </div>
              </div>
            </template>
          </card-item>
        </li>
      </ul>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import CardItem from '@/components/UI/CardItem.vue'
import Cards from '@/seeders/cards.js'
export default {
  components: {
    AppHeader,
    AppFooter,
    CardItem
  },
  data() {
    return {
      cards: Cards
    }
  }
}
</script>

<style></style>
