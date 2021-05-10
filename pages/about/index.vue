<template>
  <section>
    <div class="welcome">
      <h1 class="title">
        About us &#128062;
      </h1>
      <p>Doggie walks are committed to ensuring that your pet is safe, healthy and active. Our canine friends should feel different terrain under their paws, hear different sounds and see different sights and have a decent sniff about!</p>
      <p>
        While dogs need daily exercise in order to stay healthy, for many people it's not always possible to walk their pets regularly. That's why we established Doggie Walks, to help people across Lancashire and Merseyside ensure their dogs live happy lives.
      </p>
      <h2>How it works</h2>
      <p>Your dog will be collected from your home and taken to a local park for a walk with their pals. Exercise, mental stimulation, socialisation and play make for a happier, calmer and more contented dog. With a maximum of 4 dogs per walk you can be sure that your best friend is getting all the attention they deserve.</p>
      <p>
        However, we also accept drop-offs at your nearest local branch. You can find out more about where your nearest branch is via our contact page.
      </p>
    </div>
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
    <div id="opening-times">
      <h2>Opening Times</h2>
      <ul>
        <li>Monday – Friday (8am – 7pm)</li>
        <li>Saturday (8am – 5pm)</li>
        <li>Sunday (12pm - 5pm)</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    // Assign page title
    return {
      title: 'About us'
    }
  },
  head () {
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
    grid-column: 1fr;
    grid-column-gap: 100px;
    grid-row-gap: 50px;
}

#areas,
#opening-times {
    box-shadow: 0 6px 10px rgb(0 0 0 / 8%);
    border-radius: 10px;
    background-color: #fff;
}

  @media only screen and (min-width: 1024px) {
    section {
    }
    #opening-times {
    }

    #areas {
    }
  }

</style>
