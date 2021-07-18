<template>
  <section class="container">
    <p>{{ str }}</p>

    <hr>

    <router-link to="/price">Price</router-link>
  </section>
</template>

<script>

export default {
  data: function() {
    return {
      str: "Hello World"
    }
  }
}

</script>
