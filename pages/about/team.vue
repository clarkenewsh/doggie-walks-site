<template>
  <section>
    <h1 class="title">
      Meet the Team &#128062;
    </h1>
    <p>Meet the doggie walks team! We’re fully trained and insured to work with animals and are committed to the health and benefits of your pet. We aim to keep providing the best knowledge regarding dogs as we can, and to do this we believe you cannot sit still in this occupation as we learn more about dogs daily. </p>
    <p>We ensure that our knowledge is kept up-to-date by attending regular seminars and courses presented by well-respected canine trainers, behaviorists and practitioners.</p>
    <div>
      <figure>
        <img src="~/assets/lori-hanson.jpg" alt="Portrait of Lori Hanson">
        <h3>Lori Hanson</h3>
        <figcaption>Founder of Doggie Walks</figcaption>
      </figure>
      <figure>
        <img src="~/assets/gary-simpson.jpg" alt="Portrait of Gary Simpson">
        <h3>Gary Simpson</h3>
        <figcaption>Team manager</figcaption>
      </figure>
      <figure>
        <img src="~/assets/rebecca-harrison.jpg" alt="Portrait of Rebecca Harrison">
        <h3>Rebecca Harrison</h3>
        <figcaption>Professional dog walker</figcaption>
      </figure>
      <figure>
        <img src="~/assets/joanna-davies.jpg" alt="Portrait of Joanna Davies">
        <h3>Joanna Davies</h3>
        <figcaption>Professional Dog walker</figcaption>
      </figure>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    // Assign page title
    return {
      title: 'Meet the Team'
    }
  },
  head () {
    // Return page title
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

div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

figure {
  padding: 15px;
  box-shadow: 0 6px 10px rgb(0 0 0 / 8%);
  border-radius: 10px;
  background-color: #fff;
  color: #023373;
  text-align: center;
}
</style>
