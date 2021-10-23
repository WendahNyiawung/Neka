<template>
    <div class="container mx-auto py-10">
     <h1 class="text font-semibold font-primary text-2xl md:text-3xl text-center text-gray-900">OUR VISION</h1>
     <p class="text text-md text-center text-gray-700 px-6 lg:px-64">
         Inspire and support African talent to maximize their potential at the highest level of their professional careers and beyond.
     </p>
     <div class="flex items-center justify-center flex-col md:flex-row mt-4 px-6 lg:px-48">
         <div v-for="vision in vision" :key="vision.title" class="mx-4 mt-3" >
           <img :src="vision.src" alt="talents" class="w-full  h-48 object-cover">
           <h2 class="font-primary mt-4 text-xl leading-tighter leading-7 text-gray-800">{{vision.title}}</h2>
            <p class="text text-md text-left text-gray-700">
                {{vision.p}}
            </p>
         </div>
     </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            vision:[
                {src:require('../static/img/vision5.jpg'), title:'Talent Scouting', p:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus!'},
                {src:require('../static/img/vision1.jpg'), title:'Talent coaching', p:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus!'},
                {src:require('../static/img/vision6.jpg'), title:'Player Mentoring', p:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus!'},
            ]
        }
    },
}
</script>