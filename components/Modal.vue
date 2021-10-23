<template>
  <div class="modal-overlay flex items-start justify-center py-12"  @click="$emit('close-modal')">
    <div class="bg-white px-6 py-4 rounded w-96 lg:w-10/12">
        <div class="flex items-center justify-end" @click="$emit('close-modal')">
      <svg  class="h-6 w-6 close-icon text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
       </svg>
    </div>
     <div class="flex items-center justify-center">
         <iframe class="w-96 lg:w-10/12 h-64 lg:h-128"
       src="https://www.youtube.com/embed/THb5HSyYwCM"
       title="YouTube video player" frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen>
     </iframe>
     </div>
    </div>
    
  </div>
</template>

<script>
  export default {
}
</script>
<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000da;
}
</style>