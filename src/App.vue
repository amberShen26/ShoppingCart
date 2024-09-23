<script>
  import { RouterView } from 'vue-router';
  import TheNav from '@/components/Template/TheNav.vue';
  import TheFooter from '@/components/Template/TheFooter.vue';

  export default {
    components: {
      TheNav,
      RouterView,
      TheFooter,
    },
    computed: {
      isLoginPage() {
        return this.$route.name === 'login';
      },
    },
    watch: {
      $route(to) {
          document.title = to.meta.title || 'Shopping Cart';
      },
    },
  };
</script>

<template>
  <TheNav v-if="!isLoginPage"/>
  <RouterView />
  <TheFooter v-if="!isLoginPage" />
</template>
