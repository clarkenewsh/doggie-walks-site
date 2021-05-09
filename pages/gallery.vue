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
          <img src="~/assets/pexels-photo-275717.jpeg">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-283012.jpeg">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-350428.jpeg">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-422220.jpeg">
        </figure>
      </li>
      <li>
        <figure class="photo">
          <img src="~/assets/pexels-photo-1487665.jpeg">
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
      return {
        title: 'Gallery'
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
