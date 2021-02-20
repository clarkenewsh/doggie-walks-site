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
  justify-content: center;
  text-transform: capitalize;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url('~assets/nav-background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  font-size: 110%;
  font-weight: 700;
  padding: 3%;
  flex-direction: column;
  min-height: 450px;
}

nav a  {
  padding: 10px 15px;
  color: #fff;
  align-items: center;
}

@media only screen and (min-width: 1024px) {
    nav{
      padding: 3% 1fr 3%;
      flex-direction: row;
  }
 }

@media only screen and (min-width: 1400px) {
      nav {
      padding: 7% 1fr 7%;
  }
}

</style>
