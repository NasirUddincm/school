<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  collapsSidebar()
});

// sidebar toggle menu
const collapsSidebar = () => {
  const sidebarCollapse = document.querySelector("#sidebarCollapse");
  sidebarCollapse.addEventListener("click", function () {
    const sidebar = document.querySelector("#sidebar");
    const content = document.querySelector("#content");
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
  });
}


</script>

<template>
     <nav class="py-2 sticky-top bg-light border-bottom" id="topbar">
        <div class="d-flex flex-wrap">
          <ul class="nav me-auto">
            <a id="sidebarCollapse"  class="btn ms-2  btn-sm" href="#">
              <i class="fa fa-bars"></i>
            </a>
            <h5 class="mx-2">Company Name</h5>
    
            <!-- <span id='date-time' class="d-none d-md-inline-block"></span> -->
            
          </ul>
          <!-- right side navbar start -->
          <ul class="nav">               
             
              <!-- <a href="/" class="btn btn-sm btn-success me-1">
                <i class="fa fa-shopping-cart"></i>
              </a> -->
              
            <li class="nav-item">
              <span class="btn btn-sm btn-success me-1 d-none d-sm-inline-block">
                <i class="fa fa-arrows-alt"
               ></i>
               </span>
            </li>
            
            <li class="nav-item dropdown">
              <a class="me-4 ms-2" role="button" data-bs-toggle="dropdown" >
                <img src="/assets/img/admin-avatar.png" alt="Admin Avatar"  style="width:20px" />
              </a>
    
              <div class="dropdown-menu dropdown-menu-right" >
                <strong class="ms-4">Name</strong>
               
                <router-link class="dropdown-item" to="/">
                  <i class="fa fa-user"></i> Profile 
                </router-link>
                
                <button class="dropdown-item" >
                  <i class="fa fa-sign-out"></i> Logout
                </button>
                
              </div> 
            </li>
          </ul>
          <!-- right side navbar end -->
        </div>
    </nav>   
</template>