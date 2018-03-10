<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout'

export default {
  name: 'App',
  computed: {
    layout () {
      let currentRouteMeta = this.$route.meta

      if (currentRouteMeta.hasOwnProperty('layout')) {
        return currentRouteMeta.layout
      }

      return MainLayout
    }
  }
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";

// Vars
$primary: #3C1738;

@import "~bulma/sass/utilities/derived-variables.sass";

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
