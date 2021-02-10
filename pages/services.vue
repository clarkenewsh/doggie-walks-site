<template>
  <div class="container">
    <div>
      <h1 class="title">
        Services
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Services'
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
