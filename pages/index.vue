<template>
  <div>
    <h1 class="title">
      Home Page
    </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Home Page'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped>
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
