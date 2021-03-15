<template>
  <div id="special-offer-block">
    <h2>Special Offer Avaliable Now &#128062;</h2>
    <p>50% off home visits for new customers.</p>
     <!-- Nuxt link to the service page route -->
      <button>
        <NuxtLink to="/contact">
          Contact Us
        </NuxtLink>
      </button>
  </div>
</template>

<script>
export default {
  name: 'SpecialOffer'
}
</script>

<style scoped>

#special-offer-block {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),  url('~assets/offer-background.jpg');
  background-position: bottom;
  color: aliceblue;
  border: none;
  padding: 120px 50px;
}

h2 {
  color: aliceblue;
}

p {
  font-weight: 700;
  font-size: 140%;
  padding-top: 15px;
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
}

button a {
  color: white;
}

button:hover {
  transform: translateY(4px);
}

</style>
