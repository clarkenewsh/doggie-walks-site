<template>
  <div>
    <h1 class="title">
      Contact
    </h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Contact'
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
