<template>
  <section>
    <h1 class="title">
      Welcome to Doggie Walks! We are committed to providing professional and personal care to your beloved four-legged friends.
    </h1>
    <p>We are based in Ormskirk we offer exciting and stimulating walks all over the beautiful Lancashire and Merseyside countryside. We guarantee your dog will come home tired and content.</p>
    <p>
      We recognise every dog's needs are different and how busy daily life can be. With services starting from only £10 we ensure you the best possible service to suit the needs of both you and your pooch.
      We are also fully insured for everybody's peace of mind, for more information on this please contact us or email at info@doggiewalks.co.uk
    </p>
    <ul>
      <li>Pet Sitting (Puppy and Elderly)</li>
      <li>Small pet visits</li>
      <li>Overnight Pet Sitting</li>
    </ul>
    <p>There's something to suit everyone but if you can't find what you're looking for don't hesitate to contact us and we'll find the perfect solution for you and your companion!</p>
  </section>
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
section {
  grid-column: 2;
}

</style>
