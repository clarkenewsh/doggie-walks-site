<template>
  <div class="grid">
    <header>
      <NavBar />
    </header>
    <main>
      <Nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    NavBar,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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
}

/* Mobile first css grid styles */
.grid {
  display: grid;
  grid-template-columns: 1% 1fr 1%;
  grid-column-gap: 1rem;
  grid-row-gap: 3rem;
}

h1 {
  font-weight: 500;
  font-size: 3rem;
}

h1,
h2,
h3,
h4 {
  color: #2E495E;
}

h2,
h3,
h4 {
  font-family: 'Patrick Hand SC', cursive;
}

header {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url('~assets/nav-background.jpeg');
}

main {
  /* min-height: 100vh; */
  grid-column: 2;
  padding: 60px 0px;
}

/* full width header and footer  */
header, footer {
  grid-column: 1/-1;
}

@media only screen and (min-width: 1024px) {
    .grid {
      grid-template-columns: 3% 1fr 3%;
      grid-column-gap:0;
  }
 }

@media only screen and (min-width: 1400px) {
    .grid {
      grid-template-columns: 3% 1fr 3%;
      grid-column-gap:0;
  }
}
</style>
