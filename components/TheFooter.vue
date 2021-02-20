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
      <li>Phone: 01695 883 112</li>
      <li>
        Email: info@doggiewalks.co.uk
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
  background: #0B415E;
  padding: 60px 0px;
  display: flex;
  color: white;
  grid-column: 2;
}

ul {
  list-style: none;
}
</style>
