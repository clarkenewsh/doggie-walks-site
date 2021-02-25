<template>
  <section>
    <h1 class="title">
      Contact Us
    </h1>
    <p>We have a wide variety of daycare facilities, listed below is all our locations and their address’. Feel free to
      pop in or fill out the form below.</p>
    <!-- Contact list component here  -->
    <div>
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
    <!-- contact form component here  -->
    <ContactForm />
  </section>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Contact'
      }
    },
    head() {
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
