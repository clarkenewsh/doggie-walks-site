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
  grid-column: 1/-1;
  justify-content: flex-start;
  align-items: center;
}

nav a  {
  padding: 0px 20px;
  color: aliceblue;
  text-align: center;

}

nav a:hover,
nav a:focus,
nav a:active {
  color: gray;
  transition: all 0.2s ease;
}

@media only screen and (max-width: 1024px) {
    nav {
      flex-direction: column;
    }
    nav a {
      text-align: left;
      padding: 15px;
  }
 }
</style>
