<script setup>
import '@/assets/frontend/style.css';
import NavbarView from './partials/NavbarView.vue';
import FooterView from './partials/FooterView.vue';
</script>
<template>
    <div>
      <!-- Frontend Header -->
     <NavbarView/>
     
      <!-- Frontend Content -->
      <main>
        <!-- Your frontend content goes here -->
        <RouterView/>
      </main>
  
      <!-- Frontend Footer -->
     
      <FooterView/>
    </div>
</template>
<style scoped>
  @import '@/assets/frontend/style.css';
</style>
  
  