<template>
  <section>
    <h2>We are committed to providing professional and personal care to your beloved four-legged friends.</h2>
    <p>
      We are based in <strong>Ormskirk</strong> we offer exciting and <strong>stimulating walks</strong> all over the
      <strong>beautiful Lancashire and
        Merseyside countryside</strong>. We guarantee your dog will come home <strong>tired</strong> and
      <strong>content.</strong>
    </p>

    <div id="how-it-works">
      <h2>Our Services</h2>
      <p>
        We recognise every dog's needs are different and how busy daily life can be. With services starting from only
        £10 we ensure you the best possible service to suit the needs of both you and your pooch.
       <p> We are also fully insured for everybody's peace of mind, for more information on this please <a href="">contact
          us</a> or email at <a href="mailto:info@doggiewalks.co.uk">info@doggiewalks.co.uk</a>
      </p>
      <div>
        <figure>
          <img src="~/assets/dog-walk.png">
          <li>Pet Sitting (Puppy and Elderly)</li>
        </figure>
        <figure>
          <img src="~/assets/pet-sitting.png">
          <li>Small pet visits</li>
        </figure>
        <figure>
          <img src="~/assets/night-sitting.png">
          <li>Overnight Pet Sitting</li>
        </figure>
      </div>

      <p>
        There's something to suit everyone but if you can't find what you're looking for don't hesitate to <NuxtLink
          to="/contact"
        >
          Contact Us
        </NuxtLink>and we'll find the perfect solution for you and your companion!
      </p>
      <!-- Nuxt link to the service page route -->
      <button>
        <NuxtLink to="/services">
          Find out more
        </NuxtLink>
      </button>
    </div>
    <SpecialOffer />
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

  #how-it-works div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: #023373;
    font-weight: 700;
    margin: 100px 0px;
  }

  #how-it-works figure {
    padding: 10px;
    margin: 30px;
    box-shadow: 0 6px 10px rgb(0 0 0 / 8%);
    border-radius: 10px;
    background-color: #fff;
  }

  #how-it-works figure img {
      max-width: 100%;
  }

  #how-it-works figure li {
    list-style: none;
  }

  #areas {
  background: #f5f5f5f5;
  border: none;
  border-radius: 5px;
  padding: 30px;
  }

  button {
  border-radius: 5px;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  background-color: #023373;
  border: none;
  transition: 0.5s;
  margin: 5px;
  transition: all 0.2s ease;
  text-align: center;
}

button a {
  color: white;
}

button:hover {
  transform: translateY(4px);
}

  @media only screen and (min-width: 1024px) {
    #how-it-works figure img {
      max-width: 100%;
      width: 15rem;
      height: 12rem;
  }
    section {
    }

    #welcome {
    }

    #how-it-works {
    }

    #special-offer-block {
    }

    #areas {

    }
  }

</style>
