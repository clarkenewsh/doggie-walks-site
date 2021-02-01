<template>
  <nav>
    <div class="nav__link">
      <Logo />
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.nav {
  display: flex;
}

.nav__link {
  padding: 1rem;
}
</style>
