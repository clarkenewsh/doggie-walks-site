<template>
  <section>
    <h1 class="title">
      Gallery &#128062;
    </h1>
    <p>Every week is a busy week! Checkout how much fun our guests have within our day care centers. All photos have been taken with the consent of every owner</p>
    <figure>
      <!-- image gallery component here -->
      <ImageGallery />
    </figure>
  </section>
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
section {
    grid-column: 2;
}
</style>
