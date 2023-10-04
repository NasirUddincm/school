<script setup>
import SidebarComponent from '@/views/backend/partials/SidebarView.vue'
import HeaderComponent from '@/views/backend/partials/HeaderView.vue'
import FooterComponent from '@/views/backend/partials/FooterView.vue'
</script>
<template>    
    <!-- sidebar start -->
    <SidebarComponent/>
    <!-- sidebar ends -->
    <div class="page-content"  id="content">
      <!-- start header -->
      <HeaderComponent/>         
      <!-- end header -->
      
      <!-- start main content -->
      <div class="px-3 py-2">

        <RouterView/>

        <FooterComponent/>        
      </div>
      <!-- end main content -->
    </div>
    
</template> 
<style scoped>
@import '@/assets/backend/style.css';
</style>