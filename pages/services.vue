<template>
  <section>
    <h1 class="title">
      Services &amp; Cost &#128062;
    </h1>
    <p>Your dog shall receive the full-length time it deserves. Check for your local branch and pop in if you’re unsure which service is right for you. Every dog is unique, meaning that every dog deserves our full attention 7 days a week.</p>
    <div class="service-card">
      <img src="~/assets/dog-walk.png">
      <h2>Dog Walking</h2>
      <ul>
        <li>£12/h</li>
        <li>Duration: 1 hour (enquire for more)</li>
        <li>
          Not all dogs enjoy group walks, therefore we provide two different services. Solo or
          group, discover which option is best for your dog.
        </li>
      </ul>
    </div>
    <div class="service-card">
      <img src="~/assets/house.png">
      <h2>House Calls</h2>
      <ul>
        <li>£15/h</li>
        <li>Duration: 1 hour (enquire for more)</li>
        <li>
          Need your dog looking after while you’re not home? This service allows you to have
          peace of mind while we ensure that your dog has the attention and care it deserves.
        </li>
      </ul>
    </div>
    <div class="service-card">
      <img src="~/assets/day-care.png">
      <h2>Day Care</h2>
      <ul>
        <li>£60 Day</li>
        <li>Duration: 8 hours per day</li>
        <li>
          Our professional day care centers provide the most up to date and clean facilities which
          ensures that your dog is safe, protected and healthy. This will cover all services from feeding, bathing walking and sleeping.
        </li>
      </ul>
    </div>
    <button>
      <NuxtLink to="/contact">
        Contact Us
      </NuxtLink>
    </button>
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

.service-card {
  margin-bottom: 125px;
  border: none;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 6px 10px rgb(0 0 0 / 8%);
  border-radius: 10px;
  background-color: #fff;
}

.service-card img {
  width: 250px;
  height: 150px;
}

p {
  padding: 30px 0px;
}

h2 {
  flex-basis: 30%;
}

ul {
  margin-top: 20px;
}

ul li {
  list-style: square;
  padding-bottom: 15px;
}

button {
  border-radius: 5px;
  font-weight: 500;
  padding: 15px 25px;
  cursor: pointer;
  color: #fff;
  background-color: #023373;
  border: none;
  transition: 0.5s;
  transition: all 0.2s ease;
  float: right;
}

button a {
  color: white;
}

button:hover {
  transform: translateY(4px);
}
</style>
