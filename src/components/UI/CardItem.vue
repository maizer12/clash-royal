<template>
  <div class="card">
    <div class="card-img__wrapper">
      <img :src="img" alt="" class="card-img" />
    </div>
    <h4 class="card-name">{{ `${lvl} Уровень` }}</h4>
    <p class="card-title">{{ title }}</p>
    <div class="card-body">
      <slot name="desc"></slot>
    </div>
    <router-link :to="`/${alias}`" class="btn">Відкрити</router-link>

    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  props: {
    lvl: Number,
    title: String,
    img: String,
    alias: String
  }
}
</script>

<style lang="scss" scoped></style>
