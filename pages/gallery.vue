<template>
  <div class="container">
    <div>
      <h1 class="title">
        Gallery
      </h1>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Gallery'
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
