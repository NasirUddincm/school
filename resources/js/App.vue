<template>
    <component :is="currentLayout">
      <router-view/>
    </component>
</template>
   
<script>
  import FrontendLayout from '@/views/frontend/layout.vue';
  import BackendLayout from '@/views/backend/layout.vue';
  export default {
    name: 'App',
    computed: {
      currentLayout() {
        // Check the current route and return the appropriate layout component
        if (this.$route.meta.backend) {
          return BackendLayout;
        } else {
          return FrontendLayout;
        }
      },
    },
  };
</script>
  
  