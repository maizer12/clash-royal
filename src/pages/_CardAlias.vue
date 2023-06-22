<template>
  <div v-if="card">
    <h1 class="title">{{ card.name }}</h1>
    <img :src="card.img" :alt="card.name" />
    <div class="card-status">
      <div class="one-third" :key="i" v-for="(oneInfo, i) in card.info">
        <span class="state-value">{{ oneInfo.value }}</span>
        <span class="state-card">{{ oneInfo.title }}</span>
      </div>
    </div>
    <router-link to="/" class="btn btnPrimary">Повернутись</router-link>
  </div>
</template>

<script>
import cards from '@/seeders/cards'
export default {
  data() {
    return {
      card: null
    }
  },
  created() {
    const alias = this.$route.params.cardAlias
    const result = cards.find(e => e.alias === alias)
    this.card = result
  }
}
</script>

<style lang="scss" scoped></style>
