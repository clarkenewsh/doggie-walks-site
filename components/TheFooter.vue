<template>
  <footer>
    <Logo id="logo" />
    <ul>
      <li><strong>Doggie Walks</strong></li>
      <li>Head Office:</li>
      <li>3-5 St Helens Road</li>
      <li>Ormskirk</li>
      <li>L35 4PO</li>
    </ul>
    <ul>
      <li><strong>Opening Times</strong></li>
      <li>Monday – Friday (8am – 7pm)</li>
      <li>Saturday (8am – 5pm)</li>
      <li>Sunday (12pm - 5pm)</li>
    </ul>
    <ul>
      <li><strong>Contact Us</strong></li>
      <li><a href="">Phone: 01695 883 112</a></li>
      <li>
        <a href="mailto:info@doggiewalks.co.uk">Email: info@doggiewalks.co.uk</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>

footer {
  background: #022340;
  padding: 60px 5%;
  display: flex;
  color: white;
  justify-content: space-around;
}

ul {
  list-style: none;
  margin: 0;
  padding: 15px;

}

ul li:first-child {
  padding-bottom: 10px;
}

a {
  color: white;
}

@media only screen and (max-width: 1024px) {
    footer {
      flex-direction: column;
      text-align: center;
  }
 }
</style>
