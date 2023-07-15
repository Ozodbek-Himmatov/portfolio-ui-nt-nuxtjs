<script setup>
const { data } = await useFetch(
  "https://portfolio-backend-nestjs.onrender.com/api/Addresses"
);

const navbar = ref(false);

const changeValue = () => {
  navbar.value = !navbar.value;
};

const navLinks = [
  { icon: "ph:house-bold", name: "Home", path: "/" },
  { icon: "mdi:about", name: "About", path: "/about" },
  { icon: "grommet-icons:projects", name: "Projects", path: "/projects" },
  { icon: "tabler:brand-blogger", name: "Blog", path: "/blog" },
  { icon: "solar:chat-dots-outline", name: "Contact", path: "/contact" },
];
</script>

<template>
  <aside
    class="absolute lg:left-0 w-72 z-50 lg:z-10 h-screen -left-72 lg:bg-slate-800 bg-slate-800/90 duration-300 border-r-2 border-yellow-400"
    :class="navbar ? 'left-0' : ''"
  >
    <div class="h-full flex flex-col justify-between">
      <div>
        <button
          class="lg:hidden absolute -right-16 text-2xl top-5 lg:bg-slate-800 bg-slate-800/50 flex items-center justify-center rounded-md border border-blue-500 p-1 px-2 text-blue-500"
          @click="changeValue"
        >
          <Icon name="iconamoon:menu-burger-horizontal-bold" />
        </button>
        <a
          href="/"
          class="top-0 left-2 lg:bg-white/40 bg-white/50 gap-2 flex items-center justify-center py-5"
        >
          <img src="/logo.png" alt="logo" />
        </a>
        <div class="px-2">
          <div class="">
            <div v-for="el in navLinks">
              <router-link
                @click="() => (menuId = el.id)"
                :to="el.path"
                class="w-full hover:w-[95%] flex items-center justify-between lg:bg-slate-700 bg-slate-700/80 text-white text-md duration-300 cursor-pointer rounded-md hover:bg-slate-900/80 hover:text-yellow-400 px-5 py-3 mt-3 hover:mt-4"
              >
                <div class="flex items-center text-md gap-2">
                  <Icon :name="el.icon" class="text-xl" />
                  <h4 class="block">{{ el.name }}</h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex gap-3 my-5 px-2">
        <a
          :href="el.address"
          target="_blank"
          v-for="el in data"
          class="p-2 rounded-full flex items-center justify-center hover:bg-cyan-800 bg-slate-500 cursor-pointer"
        >
          <Icon :name="el.icon" class="text-white" />
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  background-color: #0f172a;
}

.header {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.7px);
  -webkit-backdrop-filter: blur(4.7px);
}
</style>
