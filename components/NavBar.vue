<template>
  <nav>
    <div class="nav__link">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    // eslint-disable-next-line vue/require-default-prop
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
