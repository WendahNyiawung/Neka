<template>
<div>
 <div class="bg-gray-200 slide-wrapper">
    <div class="slide-1">
   <div class="container mx-auto py-40 lg:py-42">
    <div class="flex items-center justify-between">
      <div class="d invisible"></div>
      <div class="px-5 lg:px-10 lg:w-6/12 pt-64 lg:pt-40">
         <h1 class="font font-extrabold text-3xl md:text-6xl text-white heading-text-1"
          data-aos="fade-down"
           data-aos-delay="500"
           data-aos-duration="1000"
           >NEXT GENERATIONAL</h1>
         <h2 class="font font-extrabold text-3xl md:text-6xl text-white heading-text-2 uppercase" 
          data-aos="fade-up"
             data-aos-duration="1000"
              data-aos-delay="500">Sport marketing</h2>
         <!-- <p class="font font-normal text-lg text-white">Neka Sports Help African sports talent have a fulfilled carrier through diligent and effective marketing and representation at the global stage.</p> -->
      </div>
    </div>
   </div>
  </div>
  
  
  

     <Vision/>
     <div class="bg-gray-100 py-12">
       <Services/>
     </div>
    <div class="py-10">
       <NewsLetter/>
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
        paginationEnabled: false,
        autoplay:true
      }
     
    }
  },
}
</script>
<style scoped>
.slide-wrapper{
  background-color: #F6F6F6;
}
.slide-1{
 background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.288) 35%, rgba(3, 3, 3, 0.877) 98%),
  url('/img/bg.jpg');
 background-position: top center;
 background-size: cover;
 height: 100vh;
}
.heading-text-1{
    font-family: 'Bebas Neue', cursive;
    font-size: 2.2rem;
    
}
.heading-text-2{
    font-family: 'Bebas Neue', cursive;
    font-size: 3.4rem;
    margin-top: -1rem;
    
}
.video-bg{
  background-image:linear-gradient(180deg, rgba(0, 0, 0, 0.288) 35%, rgba(3, 3, 3, 0.877) 98%),
  url('/img/bg.jpg');
   background-position: top center;
 background-size: cover;
}
@media (min-width: 768px) { 
.heading-text-1{
    font-family: 'Bebas Neue', cursive;
    font-size: 3.6rem;
  
}
.heading-text-2{
    font-family: 'Bebas Neue', cursive;
    font-size: 5.5rem;
    margin-top: -1.5rem;  
}

 }

</style>

