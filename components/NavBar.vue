<template>
  <nav>
    <Logo id="logo" />
    <NuxtLink to="/">
      Home
    </NuxtLink>
    <NuxtLink to="/about">
      About Us
    </NuxtLink>
    <NuxtLink to="/about/team">
      Meet the Team
    </NuxtLink>
    <NuxtLink to="/services">
      Services &amp; cost
    </NuxtLink>
    <NuxtLink to="/gallery">
      Gallery
    </NuxtLink>
    <NuxtLink to="/contact">
      Contact
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
nav {
  display: flex;
  border: none;
  font-weight: 700;
  flex-direction: column;
  font-size: 115%;
}

nav a  {
  padding: 10px 0px;
  color: #fff;
  text-align: center;

}

nav a:hover,
nav a:focus,
nav a:active {
  color: #acacac;
  transition: all 0.2s ease;
}

@media only screen and (min-width: 1024px) {
    nav a {
      text-align: left;
  }
 }
</style>
