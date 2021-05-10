<template>
  <div class="cta-block">
    <button id="cta-phone">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-telephone-fill"
        viewBox="0 0 16 16"
      >
        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
      </svg>
      <a href="tel:01695-883-112">01695 883 112</a>
    </button>
    <button id="cta-email">
      <a href="mailto:info@doggiewalks.co.uk">info@doggiewalks.co.uk</a>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ContactCTA'
}
</script>

<style scoped>

.cta-block{
  grid-column: 1/-1;
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
  margin: 5px;
  transition: all 0.2s ease;
}

a {
  color: #fff;
}

button:hover {
  transform: translateY(4px);
}

@media only screen and (min-width: 1024px) {
    .cta-block {
      flex-direction: row;
  }
 }
</style>
