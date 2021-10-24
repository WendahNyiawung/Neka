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
              About Us
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-gray-700 container mx-auto py-12 flex items-center justify-center px-5 lg:px-24"
    >
      <p class="font font-normal text-lg">
        NEKA SPORT was founded in 2017, by Njang Spongeon and Ebot Besong.
        Representing some of Africa’s best talent across major sports leagues in
        the world. We have a motivated, and committed management team with an
        ever-growing network that spans all continents of the world. At NEKA
        SPORTS, we put our client’s interest first, and working with us is a
        “faith that works”
      </p>
    </div>
    <div class="service-bg py-12 ">
      <div
        class="container mx-auto flex flex-col items-center justify-center px-5 lg:px-24"
      >
        <h1
          class="text-white font-primary text-3xl lg:text-5xl my-5 lg:mt-16 uppercase"
        >
          Our Team
        </h1>
        <div class="flex justify-center flex-col lg:flex-row">
          <div
            class="max-w-sm mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-4"
          >
            <img
              class="object-contain object-top w-full h-48"
              src="/img/NJANG-CEO.jpeg"
              alt="avatar"
            />

            <div class="flex items-center px-6 py-3 bg-gray-900">
              <h1 class="mx-3 text-lg font-semibold text-white">
                CEO & Intermediary
              </h1>
            </div>

            <div class="px-3 py-4">
              <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
                Njang Spongeon
              </h1>

              <p class="text-gray-700 dark:text-gray-400">
                Spongeon is a certified Agent (SMWW) and a holder of a Master’s
                degree in Chemical Pathology (MSc) and Business Administration
                (MBA).
                <span class="show-more" @click="isShowing ^= true"
                  >Read More...</span
                >
              </p>
              <template>
                <div v-show="isShowing">
                  <p class="text-gray-700 dark:text-gray-400">
                    He is a passionate lover of sports, who is adept at
                    negotiation, customer service, relationship building, and
                    getting results. He is also known for his eagle’s eye in
                    identifying new talents and a specialty in sports analytics
                    and performance enhancement. His extensive knowledge about
                    the business of sports and networks is invaluable to the
                    team.
                  </p>
                </div>
              </template>
            </div>
          </div>
          <div
            class="max-w-sm mx-4 my-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <img
              class="object-cover object-top w-full h-48"
              src="/img/PETMAN-COO.jpg"
              alt="avatar"
            />

            <div class="flex items-center px-6 py-3 bg-gray-900">
              <h1 class="mx-3 text-lg font-semibold text-white">
                COO & Intermediary
              </h1>
            </div>

            <div class="px-3 py-4">
              <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
                Ebot Besong
              </h1>

              <p class="text-gray-700 dark:text-gray-400">
                Ebot Besong is a talented, poised, and determined football
                agent, passionate about player success on and off the pitch. His
                extensive knowledge, skills, and experience in accounting and
                digital marketing easily translate to endorsement contracts and
                the creation of unique brands for players – A key aspect of a
                pro career.
              </p>
            </div>
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
      rgba(3, 3, 3, 0.877) 98%
    ),
    url("/img/vision-4.jpg");
  background-position: top center;
  background-size: cover;
}
.slide-2 {
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.288) 35%,
      rgb(3, 3, 3) 98%
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
