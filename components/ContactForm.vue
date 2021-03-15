<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          id="InputName1"
          type="text"
          class="form-control"
          placeholder="Name"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="InputEmail1"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        >
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Enquiry here</label>
        <textarea id="FormControlTextarea1" class="form-control" rows="3" />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
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
  form {
    margin-bottom: 100px;
    border: 2px solid #023373;
    border-radius: 10px;
    background-color: #fff;
    padding: 50px;
  }

  button {
    border-radius: 5px;
    font-weight: 500;
    padding: 10px 15px;
    cursor: pointer;
    color: #fff;
    background-color: #023373;
    border: none;
    transition: 0.5s;
    margin: 5px;
    transition: all 0.2s ease;
  }

  button a {
    color: white;
  }

  button:hover {
    transform: translateY(4px);
  }

</style>
