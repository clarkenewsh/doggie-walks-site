<template>
  <section>
    <h1 class="title">
      Contact Us &#128062;
    </h1>
    <p>
      We have a wide variety of daycare facilities, listed below is all our locations and their address’. Feel free to
      pop in or fill out the form below.
    </p>
    <div>
      <div class="form-block">
        <!-- contact form component here  -->
        <ContactForm />
      </div>
      <!-- Contact list component here  -->
      <div id="address-list">
        <h2>Areas we cover</h2>
        <h3>Ormskirk</h3>
        <ul>
          <li>Doggie walks</li>
          <li>3-5 St Helens Road,</li>
          <li>Ormskirk</li>
          <li>L35 4PO</li>
        </ul>
      </div>
      <div>
        <h3>Southport</h3>
        <ul>
          <li>Doggie walks</li>
          <li>150 Lord Street,</li>
          <li>Southport,</li>
          <li>PR9 0NP</li>
        </ul>
      </div>
      <div>
        <h3>Warrington</h3>
        <ul>
          <li>Doggie walks</li>
          <li>47 Old Liverpool Road,</li>
          <li>Warrington,</li>
          <li>WA5 1AF</li>
        </ul>
      </div>
      <div id="opening-times">
        <h2>Opening Times</h2>
        <ul>
          <li>Monday – Friday (8am – 7pm)</li>
          <li>Saturday (8am – 5pm)</li>
          <li>Sunday (12pm - 5pm)</li>
        </ul>
      </div>
    </div>
  </section>
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
  section {
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr;
  }

  div:first-of-type {


  }

  .form-block {
    grid-column: 1/3;
  }

   #address-list {
     grid-column: 3/-1;
     grid-row: 2;
  }

  .opening-times {
    grid-column: 3/-1;
    grid-row: 2;
  }

  @media only screen and (max-width: 1024px) {
  section {
  }
}
</style>
