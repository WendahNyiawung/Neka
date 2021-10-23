<template>
<div>
  <div class="z z-20">

  </div>
 <div class="bg-gray-200 z-10">
   
 <carousel  v-bind="options">
         
   <slide>
     
         <div class="slide-1 h-126 lg:h-128 ">
   <div class="container mx-auto py-40 lg:py-42">
    <div class="flex items-center justify-between">
      <div class="d invisible"></div>
      <div class="px-5 lg:px-20 lg:w-6/12">
         <h1 class="font font-extrabold text-3xl md:text-6xl text-white heading-text">NEXT-GEN</h1>
         <h2 class="font font-extrabold text-3xl md:text-6xl text-white heading-text uppercase">Sport</h2>
         <h2 class="font font-extrabold text-3xl md:text-6xl text-white heading-text uppercase ">marketing</h2>
         <p class="font font-normal text-lg text-white">Neka Sports Help African sports talent have a fulfilled carrier through diligent and effective marketing and representation at the global stage.</p>
      </div>
    </div>
   </div>
  </div>
   </slide>
   <slide>
       <Nav/>
         <div class="slide-2 h-126 lg:h-128 ">
   <div class="container mx-auto py-40 lg:py-42">
    <div class="flex items-center justify-between">
      <div class="d invisible"></div>
      <div class="px-5 lg:px-20 lg:w-6/12">
         <h1 class="font font-extrabold text-3xl md:text-6xl text-white heading-text">NEXT-GEN</h1>
         <h2 class="font font-extrabold text-3xl md:text-6xl text-white heading-text uppercase">Sport</h2>
         <h2 class="font font-extrabold text-3xl md:text-6xl text-white heading-text uppercase ">marketing</h2>
         <p class="font font-normal text-lg text-white">Neka Sports Help African sports talent have a fulfilled carrier through diligent and effective marketing and representation at the global stage.</p>
      </div>
    </div>
   </div>
  </div>
   </slide>
 </carousel>
     <Vision/>
     <div class="bg-gray-100 py-12">
       <Services/>
     </div>
     
<!--
<div class="bg-gray-100">
     <div class="px-6 lg:px-32 container mx-auto mt-20 py-12">
      
      <div class="video-bg h-126 py-3 flex items-center justify-center flex-col">
         <div class="flex items-center justify-between">
         <div class="px-4">
           <h1 class="text-black mb-3 text-5xl font-bold" style="font-family: 'Bebas Neue', cursive;">ALL WORKS</h1>
           <h1 class="heading-text text-white">ALL SPORTS</h1>
         </div>
       </div>
       <div class="flex justify-center items-center">
                        <div class="save-btn">
    <button @click="showModal = true">
      <svg class="h-16 w-16 text-white" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>
    </button>
</div>
       </div>
 
    </div>
   </div>
</div> -->
  
    <Modal v-show="showModal"  @close-modal="showModal = false"/>

 </div>
 </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
   components: {
    Carousel,
    Slide
  },
  data() {
    return {
      showModal:false,
       options: {
        loop: true,
        perPage: 1,
        paginationEnabled: false
      }
     
    }
  },
}
</script>
<style scoped>
.slide-1{
 background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.288) 35%, rgba(3, 3, 3, 0.877) 98%),
  url('/img/vision-4.jpg');
 background-position: top center;
 background-size: cover;
}
.slide-2{
 background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.288) 35%, rgba(3, 3, 3, 0.877) 98%),
  url('/img/bg.jpg');
 background-position: top center;
 background-size: cover;
}
.heading-text{
    font-family: 'Bebas Neue', cursive;
    font-size: 4rem;
    margin-top: -2.5rem; 
}

.video-bg{
  background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.288) 35%, rgba(3, 3, 3, 0.877) 98%),
  url('/img/bg.jpg');
   background-position: top center;
 background-size: cover;
}
@media (min-width: 768px) { 
.heading-text{
    font-family: 'Bebas Neue', cursive;
    font-size: 5rem;
    margin-top: -2.5rem;  
}

 }

</style>

