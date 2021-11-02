<template>
    <div class="container mx-auto py-10">
    <h1 class="vision-heading text-center text-3xl font-bold"
      data-aos="fade-up"
             data-aos-duration="1000"
              data-aos-delay="500">
                OUR SERVICES
            </h1>
        <p class="vision-p text-xl text-center px-4 lg:px-56 mt-10"
          data-aos="fade-up"
             data-aos-duration="1000"
              data-aos-delay="600">
          Our goal is to represent Africa’s best talents, using our networks, skills, and experiences to negotiate playing contracts for the best clubs and leagues in the world and also provide pre and post-career mentorship.
        </p>
     <div class="grid grid-cols-1 gap-2  sm:grid-cols-2 lg:px-32 mt-10" 
            data-aos="fade-up"
             data-aos-duration="1000"
              data-aos-delay="900" >
         <div  class="mx-4 mt-5" >
          <div class="flex flex-col lg:flex-row max-w-md mx-auto overflow-hidden bg-white rounded-lg lg:h-48 shadow-lg dark:bg-gray-800">
               <img src="/img/contract.jpg"  alt="talents" class="object-cover h-48 lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-4 py-5 lg:py-0">
               <h2 class="vision-heading lg:mt-6 text-lg text-gray-800">Contract negotiations</h2>
            <p class="text-left text-gray-700 vision-p">
              We have lots of skills to generate maximum compensation for our clients.  

            </p>
          </div>
          </div>
         </div>
         <div  class="mx-4 mt-5" >
          <div class="flex flex-col lg:flex-row max-w-md mx-auto overflow-hidden bg-white rounded-lg lg:h-48 shadow-lg dark:bg-gray-800">
               <img src="/img/marketing.jpg"  alt="talents" class="object-cover h-48 lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-4 py-5 lg:py-0">
               <h2 class="vision-heading lg:mt-6 text-md text-gray-800">Marketing and brand development</h2>
            <p class="text-left text-gray-700 vision-p">
            We create appealing and unique brands for our clients, helping them have a strong social media presence and endorsements. 

            </p>
          </div>
          </div>
         </div>
         <div  class="mx-4 mt-5" >
          <div class="flex flex-col lg:flex-row max-w-md mx-auto overflow-hidden bg-white rounded-lg lg:h-48 shadow-lg dark:bg-gray-800">
               <img src="/img/mentor.jpg"  alt="talents" class="object-cover h-48 lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-4 py-5 lg:py-0">
               <h2 class="vision-heading lg:mt-6 text-md text-gray-800">Mentorship </h2>
            <p class="text-left text-gray-700 vision-p">
           Inspire and motivate our clients, to be productive and adaptive during their professional careers. 

            </p>
          </div>
          </div>
         </div>
         <div  class="mx-4 mt-5" >
          <div class="flex flex-col lg:flex-row max-w-md mx-auto overflow-hidden bg-white rounded-lg lg:h-48 shadow-lg dark:bg-gray-800">
               <img src="/img/financial.jpg"  alt="talents" class="object-cover h-48 lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-4 py-5 lg:py-0">
               <h2 class="vision-heading lg:mt-6 text-md text-gray-800">Financial and legal services  </h2>
            <p class=" text-left text-gray-700 vision-p">
          We have a strong financial and legal team that works tirelessly to meet the financial and legal needs of our clients. 

            </p>
          </div>
          </div>
         </div>
         <div  class="mx-4 mt-5" >
          <div class="flex flex-col lg:flex-row max-w-lg mx-auto overflow-hidden bg-white rounded-lg  shadow-lg dark:bg-gray-800">
               <img src="/img/post.jpg"  alt="talents" class="object-cover h-50 lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-4 py-5 lg:py-0">
               <h2 class="vision-heading lg:mt-6 text-md text-gray-800">Post career services </h2>
            <p class=" text-left text-gray-700 vision-p">
         We provide strategic planning and counseling in preparation for our client’s post-career. 

            </p>
          </div>
          </div>
         </div>
         <div  class="mx-4 mt-5" >
          <div class="flex flex-col lg:flex-row max-w-lg mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
               <img src="/img/team.jpg"  alt="talents" class="object-cover  lg:w-2/6 bg-cover">
          <div class="lg:w-4/6 px-4 py-5 lg:py-0">
               <h2 class="vision-heading lg:mt-6 text-md text-gray-800" >Teams</h2>
            <p class="text-left text-gray-700 vision mb-6">
              We have a committed and visionary management team taking into account every detail of a pro-life. Which includes; contract negotiations, social media and brand marketing, finance, and investment choices.

            </p>
          </div>
          </div>
         </div>
     </div>
    </div>
</template>
// <script>
// export default {
//     data() {
//         return {
//             vision:[
//                 {src:require('../static/img/contract.jpg'), title:'Contract negotiations', p:' We have lots of skills to generate maximum compensation for our clients. '},
//                 {src:require('../static/img/marketing.jpg'), title:'Marketing and brand development ', p:' We create appealing and unique brands for our clients, helping them have a strong social  media presence and endorsements. '},
//                 {src:require('../static/img/mentor.jpg'), title:'Mentorship', p:' Inspire and motivate our clients, to be productive and adaptive during their professional careers. '},
//                 {src:require('../static/img/financial.jpg'), title:'Financial and legal services ', p:'We have a strong financial and legal team that works tirelessly to meet the financial and legal needs of our clients.'},
//                 {src:require('../static/img/post.jpg'), title:'Post career services', p:'We provide strategic planning and counseling in preparation for our client’s post-career. '},
//                  {src:require('../static/img/team.jpg'), title:'Teams ', p:'We have a committed and visionary management team taking into account every detail of a pro-life. Which includes; contract negotiations, social media and brand marketing, finance, and investment choices.'},
//             ]
//         }
//     },
// }
// </script>

<style scoped>
.vision-p{
 font-family: 'Montserrat', sans-serif;
  color: #716F6F;  
  font-size: 1rem;
}

.vision-heading{
    font-family: 'Organetto';
    color: #B9B9B9;
}
</style>