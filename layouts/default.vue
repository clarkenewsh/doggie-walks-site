<template>
  <div class="grid">
    <header>
      <NavBar />
      <Slogan />
      <ContactCTA />
    </header>
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Import components int to default layout
import NavBar from '~/components/NavBar.vue'
import TheFooter from '~/components/TheFooter.vue'
import Slogan from '~/components/Slogan.vue'
import ContactCTA from '~/components/ContactCTA.vue'

export default {
  components: {
    NavBar,
    TheFooter,
    Slogan,
    ContactCTA
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;

  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2E495E;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  line-height: 1.6;
}

/* Mobile first css grid styles */
.grid {
  display: grid;
  grid-template-columns: 1% 1fr 1%;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
}

h1 {
  font-weight: 700;
  font-size: 3.1rem;
}

h1,
h2,
h3,
h4 {
  color: #2E495E;
}

h2 {
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.1rem;
  letter-spacing: 1.5px;
  word-spacing: 2.5px;
}

h2,
h3,
h4 {
  font-family: 'Patrick Hand SC', cursive;
}

header {
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),  url('~assets/header-background2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0px 8%;
}

main {
  /* min-height: 100vh; */
  grid-column: 2;
  padding: 20px 0px;
}

/* full width header and footer  */
header, footer {
  grid-column: 1/-1;
}

#welcome > * {
  padding-bottom: 15px;
}

@media only screen and (min-width: 1024px) {
    .grid {
      grid-template-columns: 5% 1fr 5%;
      grid-column-gap:0;
  }
 }

@media only screen and (min-width: 1400px) {
    .grid {
      grid-template-columns: 8% 1fr 8%;
      grid-column-gap:0;
  }
    header {
    min-height: 80vh;
  }
}
</style>
