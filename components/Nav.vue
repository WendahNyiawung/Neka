<template>
    <nav class="navbar fixed inset-x-0 py-2 px-5 md:px-16 bg-transparent transition-colors duration-500" 
    :class="{'bg-gray-900': scrollPosition > 50}">
      <div class="flex items-center justify-between">
        <!-- Header logo -->
        <div> 
             <nuxt-link to="/">
              <img src="/img/about.png" alt="" class="h-16 w-48">
             </nuxt-link>
        </div>

        <!-- Mobile toggle -->
        <div class="md:hidden">
          <button @click="drawer">
            <svg
              class="h-8 w-8 fill-current text-white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-8 text-lg font-primary text-white">
           <nuxt-link to="/">
              <li><a class="">Home</a></li>
           </nuxt-link>
           <nuxt-link to="about">
              <li><a class="">About Us</a></li>
           </nuxt-link>
           <nuxt-link to="/contact">
              <li><a class="">Contact</a></li>
           </nuxt-link>
            
          </ul>
        </div>

        <!-- Dark Background Transition -->
        <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0"
        >
          <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity"
          >
            <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"
            ></div>
          </div>
        </transition>

        <!-- Drawer Menu -->
        <aside
          class="
            p-5
            transform
            top-0
            left-0
            w-64
            bg-white
            fixed
            h-full
            overflow-auto
            ease-in-out
            transition-all
            duration-300
            z-30
          "
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click="isOpen = false"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b"
          >
             <div> 
              <img src="/img/logo.png" alt="" class="h-14 md:h-24">
        </div>
         
          </span>

          <ul class="divide-y font-sans z-30">
          <span  @click="isOpen = false" class="flex w-full items-center  border-b">
              <li>
              <nuxt-link to="/" @click="isOpen = false" class="my-4 inline-block"
                >Home</nuxt-link
              >
            </li>
          </span>
          <span  @click="isOpen = false" class="flex w-full items-center  border-b">
              <li>
              <nuxt-link to="/about" @click="isOpen = false" class="my-4 inline-block"
                >About Us</nuxt-link
              >
            </li>
          </span>
          <span  @click="isOpen = false" class="flex w-full items-center  border-b">
              <li>
              <nuxt-link to="/contact" @click="isOpen = false" class="my-4 inline-block"
                >Contact Us</nuxt-link
              >
            </li>
          </span>
        

          </ul>
        </aside>
      </div>
    </nav>

</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
       scrollPosition: null
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
     updateScroll() {
       this.scrollPosition = window.scrollY
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      },
    },
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
      window.addEventListener('scroll', this.updateScroll);
  },
  
};
</script>



