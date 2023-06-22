<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/" class="navbar-logo">{{ logo }}</router-link>
        <ul class="navbar-list">
          <li
            class="navbar-item"
            :key="navItem.title"
            v-for="navItem in navbar"
          >
            <router-link :to="navItem.link" class="navbar-link">{{
              navItem.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { app } from '@/_config'
import { menu } from '@/_config'
export default {
  data() {
    return {
      navbar: menu,
      logo: app.logo
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped></style>
