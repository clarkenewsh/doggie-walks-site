<template>
  <section>
    <div id="welcome">
      <h1 class="title">
        Welcome to Doggie Walks &#128062;
      </h1>
      <h2>We are committed to providing professional and personal care to your beloved four-legged friends.</h2>
      <p>
        We are based in <strong>Ormskirk</strong> we offer exciting and <strong>stimulating walks</strong> all over the
        <strong>beautiful Lancashire and
          Merseyside countryside</strong>. We guarantee your dog will come home <strong>tired</strong> and
        <strong>content.</strong>
      </p>
    </div>
    <div id="how-it-works">
      <h2>How it works</h2>
      <p>
        We recognise every dog's needs are different and how busy daily life can be. With services starting from only
        £10 we ensure you the best possible service to suit the needs of both you and your pooch.
        We are also fully insured for everybody's peace of mind, for more information on this please <a href="">contact
          us</a> or email at <a href="mailto:info@doggiewalks.co.uk">info@doggiewalks.co.uk</a>
      </p>
      <figure>
        Pet Sitting (Puppy and Elderly)
      </figure>
      <figure>
        <li>Small pet visits</li>
      </figure>
      <figure>
        <li>Overnight Pet Sitting</li>
      </figure>
      <!-- Nuxt link to the service page route -->
      <button>
        <NuxtLink to="/services">
          Find out more
        </NuxtLink>
      </button>
      <p>
        There's something to suit everyone but if you can't find what you're looking for don't hesitate to <NuxtLink
          to="/contact"
        >
          Contact Us
        </NuxtLink>and we'll find the perfect solution for you and your companion!
      </p>
    </div>
    <SpecialOffer />
    <div id="areas">
      <h2>Areas we cover</h2>
      <ul>
        <li>Ormskirk</li>
        <li>Southport</li>
        <li>Preston</li>
        <li>Liverpool</li>
        <li>Warrington</li>
      </ul>
    </div>
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
    display: grid;
    grid-column: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 50px;
  }

  #welcome > * {
    padding-bottom: 15px;
  }

  #how-it-works {
  }

  #areas {
  background: #f5f5f5f5;
  border: none;
  border-radius: 5px;
  padding: 30px;
  }

  @media only screen and (min-width: 1024px) {
    section {
    display: grid;
    grid-template-columns: 3fr 1fr;
    }

    #welcome {
      grid-column: 1;
    }

    #how-it-works {
      grid-column: 1;
    }

    #special-offer-block {
      grid-column: 2;
      grid-row: 1;
    }

    #areas {
      grid-column: 2;

    }
  }

</style>
