<template>
  <nav>
    <Logo />
    <div class="nav__link">
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
nav {
  display: flex;
  background-color: #f2f2f2;
}
/* .nav__link {
} */
</style>
