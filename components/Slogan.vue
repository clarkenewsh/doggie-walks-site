<template>
  <div id="welcome">
    <h1 class="title">
      Welcome to Doggie Walks
    </h1>
    <p id="slogan">
      Helping our animal friends one paw at a time &#128062;
    </p>
  </div>
</template>

<script>
export default {
  name: 'Slogan'
}
</script>

<style scoped>
#slogan {
  display: flex;
  grid-column: 1/-1;
  grid-row: 2;
}

#welcome {
  margin-top: 90px;
  color: aliceblue;
}

h1 {
  color: aliceblue;
}

p {
  font-size: 155%;
  font-family: 'Patrick Hand SC', cursive;
  flex-basis: 100%;
  font-weight: 500;
  color: aliceblue;
}
</style>
