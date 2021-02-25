<template>
  <section>
    <h1 class="title">
      Services &amp; cost
    </h1>
    <!-- Chnage the services in to service list component and then service card component  -->
    <p>Your dog shall receive the full-length time it deserves. Check for your local branch and pop in if you’re unsure which service is right for you. Every dog is unique, meaning that every dog deserves our full attention 7 days a week.</p>
    <div class="service card">
      <h2>Dog Walking</h2>
      <ul>
        <li>£12/h</li>
        <li>Duration: 1 hour (enquire for more)</li>
        <li>Not all dogs enjoy group walks, therefore we provide two different services. Solo or
group, discover which option is best for your dog.</li>
      </ul>
    </div>
     <div class="service card">
      <h2>House Calls</h2>
      <ul>
        <li>£15/h</li>
        <li>Duration: 1 hour (enquire for more)</li>
        <li>Need your dog looking after while you’re not home? This service allows you to have
peace of mind while we ensure that your dog has the attention and care it deserves.</li>
      </ul>
    </div>
     <div class="service card">
      <h2>Day Care</h2>
      <ul>
        <li>£60 Day</li>
        <li>Duration: 8 hours per day</li>
        <li>Our professional day care centers provide the most up to date and clean facilities which
ensures that your dog is safe, protected and healthy. This will cover all services from feeding, bathing walking and sleeping.</li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      title: 'Services & cost'
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
  
}

div {
  display: flex;
}
</style>
