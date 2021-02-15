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
    <ContactCTA />
    <Slogan />
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
  background-color: #f2f2f2;
  justify-content:flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  text-transform: capitalize;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url('~assets/nav-background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  font-size: 110%;
}

nav a  {
  padding-right: 25px;
  display: block;
  color: #fff;
}
</style>
