<template>
  <section>
    <h1 class="title">
      Gallery &#128062;
    </h1>
    <p>
      Every week is a busy week! Checkout how much fun our guests have within our day care centers. All photos have
      been taken with the consent of every owner
    </p>
    <ul class="gallery">
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-275717.jpeg" alt="Dog shaking a paw with woman">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-283012.jpeg" alt="Person walking a dog">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-350428.jpeg" alt="Dog laying on the grass">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-422220.jpeg" alt="Dog running across grass with toy in mouth">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-1487665.jpeg" alt="dog sitting on the grass">
        </figure>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ImageGallery'
}

</script>

<script>
  export default {
    data() {
        // Assign page title
      return {
        title: 'Gallery'
      }
    },
    head() {
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

.gallery {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  padding: 0;
}

.photo {
  margin: 0;
  overflow: hidden;
  background-color: black;
  position: relative;
  margin: 5px;
  border-radius: 5px;
}

.gallery ul {
  padding: 0;
}

.photo img {
  max-width: 100%;
  width: 22rem;
  height: 12rem;
  opacity: 0.4;
  transform: scale(1.15);
  transition: transform 0.5s, opacity 0.5s;
  margin: 0 auto;
  padding: 0;

}

.photo img:hover {
  transform: scale(1.04);
  opacity: 1;
}

</style>
