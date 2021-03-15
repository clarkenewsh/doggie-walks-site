<template>
  <div>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        />
      </b-form-group>

      <b-button type="submit">
        Submit
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      form: {
        email: '',
        name: '',
        text: ''
      }
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      // Trick to reset/clear native browser form validation state
    }
  }
}
</script>

<style scoped>
.doggie-walks-logo {
  animation: 1s appear;
  height: auto;
  max-width: 9rem;
  margin: 0;
  padding: 0;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
