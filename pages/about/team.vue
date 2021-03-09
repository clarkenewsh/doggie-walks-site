<template>
  <section>
    <h1 class="title">
      Meet the Team &#128062;
    </h1>
    <p>Meet the doggie walks team! We’re fully trained and insured to work with animals and are committed to the health and benefits of your pet. We aim to keep providing the best knowledge regarding dogs as we can, and to do this we believe you cannot sit still in this occupation as we learn more about dogs daily. </p>
    <p>We ensure that our knowledge is kept up-to-date by attending regular seminars and courses presented by well-respected canine trainers, behaviorists and practitioners.</p>
    <figure>
      <h2>Lori Hanson</h2>
      <figcaption>Founder of Doggie Walks</figcaption>
    </figure>
    <figure>
      <h2>Gary Simpson</h2>
      <figcaption>Team manager</figcaption>
    </figure>
    <figure>
      <h2>Rebecca Harrison</h2>
      <figcaption>Professional dog walker</figcaption>
    </figure>
    <figure>
      <h2>Joanna Davies</h2>
      <figcaption>Professional Dog walker</figcaption>
    </figure>
  </section>
</template>
<script>
export default {
  data () {
    return {
      title: 'Meet the Team'
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

figure {
  background: #f5f5f5f5;
  border: none;
  border-radius: 5px;
  padding: 30px;
}
</style>
