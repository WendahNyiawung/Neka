<template>
  <div class="bg-gray-100">
    <div class="slide-1 h-126 lg:h-128 ">
      <div class="container mx-auto py-40 lg:py-42">
        <div class="flex items-center justify-center">
          <!-- <div class="invisible lg:visible px-5 lg:px-20 lg:w-6/12 pt-24">
            <h1 class="text-white font-primary text-5xl ">About Us</h1>
          </div> -->
          <div class="px-5 lg:px-20 w-full lg:w-6/12">
            <img src="/img/about.png" alt="" class="" />
            <p class="font font-normal text-lg text-white">
              Neka Sports Help African sports talent have a fulfilled carrier
              through diligent and effective marketing and representation at the
              global stage.
            </p>
            <h1
              class="text-white font-primary text-3xl lg:text-5xl mt-5 lg:mt-16"
            >
              Contact
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="service-bg py-12 ">
      <div
        class="container mx-auto flex flex-col items-center justify-center px-5 lg:px-24"
      >
       
    <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Get in touch</h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        
        <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>

                <span class="mt-2">121 Street, NY</span>
            </a>

            <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span class="mt-2">+2499999666600</span>
            </a>

            <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span class="mt-2">example@example.com</span>
            </a>
        </div>
        
        <div class="mt-6 ">
            <div class="items-center -mx-2 md:flex">
                <div class="w-full mx-2">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

                    <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text">
                </div>

                <div class="w-full mx-2 mt-4 md:mt-0">
                    <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

                    <input class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email">
                </div>
            </div>

            <div class="w-full mt-4">
                <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

                <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>

            <div class="flex justify-center mt-6">
                <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
            </div>
        </div>
    </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowing: false
    };
  }
};
</script>
<style scoped>
.slide-1 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.288) 35%,
      rgb(3, 3, 3) 98%
    ),
    url("/img/vision-4.jpg");
  background-position: top center;
  background-size: cover;
}
.slide-2 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.288) 35%,
      rgba(3, 3, 3, 0.877) 98%
    ),
    url("/img/bg.jpg");
  background-position: top center;
  background-size: cover;
}

.service-bg {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.288) 35%,
      rgba(3, 3, 3, 0.877) 98%
    ),
    url("/img/service-bg.jpg");
  background-position: top center;
  background-size: cover;
}
</style>
