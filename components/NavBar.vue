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
    <div class="cta-block">
      <ContactCTA />
    </div>
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
  align-items: center;
  text-transform: capitalize;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url('~assets/nav-background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  font-weight: 700;
  padding: 0px 3%;
  flex-direction: column;
  min-height: 450px;
}

nav a  {
  padding: 5px 10px;
  color: #fff;

}

nav a:hover,
nav a:focus,
nav a:active {
  color: #acacac;
  transition: all 0.2s ease;
}

.cta-block {
  margin-left: auto;
}

/* not needed as layout controls this universally */
/* @media only screen and (min-width: 1024px) {
    nav{
      padding: 3% 1fr 3%;
      flex-direction: row;
  }
 }

@media only screen and (min-width: 1400px) {
      nav {
      padding: 5% 1fr 5%;
  }
} */

</style>
