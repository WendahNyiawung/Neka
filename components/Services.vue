<template>
    <div class="container mx-auto py-10">
     <h1 class="text font-semibold font-primary text-2xl md:text-3xl text-center text-gray-900">OUR SERVICES</h1>
     <p class="text text-md text-center text-gray-700 px-6 lg:px-64">
        Our goal is to represent Africa’s best talents, using our networks, skills, and experiences to negotiate playing contracts for the best clubs and leagues in the world and also provide pre and post-career mentorship.
     </p>
     <div class="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2  lg:px-48">
         <div v-for="vision in vision" :key="vision.title" class="mx-4 mt-3" >
          <div class="flex flex-col lg:flex-row max-w-md mx-auto overflow-hidden bg-white rounded-lg lg:h-40 shadow-lg dark:bg-gray-800">
               <img :src="vision.src" alt="talents" class="object-cover h-48 lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-3 py-3 lg:py-0">
               <h2 class="font-primary lg:mt-1 text-xl leading-tighter leading-7 text-gray-800">{{vision.title}}</h2>
            <p class="text text-sm text-left text-gray-700">
                {{vision.p}}
            </p>
          </div>
          </div>
         </div>
     </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            vision:[
                {src:require('../static/img/contract.jpg'), title:'Contract negotiations', p:' We have lots of skills to generate maximum compensation for our clients. '},
                {src:require('../static/img/marketing.jpg'), title:'Marketing and brand development ', p:' We create appealing and unique brands for our clients, helping them have a strong social  media presence and endorsements. '},
                {src:require('../static/img/mentor.jpg'), title:'Mentorship', p:' Inspire and motivate our clients, to be productive and adaptive during their professional careers. '},
                {src:require('../static/img/financial.jpg'), title:'Financial and legal services ', p:'We have a strong financial and legal team that works tirelessly to meet the financial and legal needs of our clients.'},
                {src:require('../static/img/post.jpg'), title:'Post career services', p:'We provide strategic planning and counseling in preparation for our client’s post-career. '},
                 {src:require('../static/img/team.jpg'), title:'Teams ', p:'We have a committed and visionary management team taking into account every detail of a pro-life. Which includes; contract negotiations, social media and brand marketing, finance, and investment choices.'},
            ]
        }
    },
}
</script>