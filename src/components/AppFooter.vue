<template>
	<footer class="footer">
		<div class="container">
			<div class="navbar-content">
				<h5 class="navbar-logo">logo</h5>
				<ul class="navbar-list">
					<li
						class="navbar-item"
						:key="navItem.title"
						v-for="navItem in navbar"
					>
						<a href="/" class="navbar-link">{{ navItem.title }}</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
import { menu } from '@/_config'
export default {
	data() {
		return {
			navbar: menu,
		}
	},
}
</script>

<style lang="scss" scoped></style>
