<script setup>
let projects = ref(null);
setTimeout(async () => {
  const { data } = await useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/projects"
  );
  projects.value = data.value;
}, 1000);
</script>

<template>
  <div class="w-full h-full">
    <Header>My Projects</Header>
    <div class="pb-10">
      <div class="grid md:grid-cols-3 gap-5">
        <div
          v-if="!projects"
          v-for="load in 3"
          class="border-2 border-blue-500 bg-slate-700/50 min-h-[400px] p-3 animate-pulse"
        >
          <div
            class="flex items-center justify-center w-full h-[300px] bg-gray-700 mb-4"
          >
            <svg
              class="w-12 h-12 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
              />
            </svg>
          </div>
          <div class="w-full text-center">
            <div class="h-6 rounded-full mx-auto bg-gray-700 w-64 mb-2"></div>
            <div class="h-5 rounded-full mx-auto bg-gray-700 w-full mb-4"></div>
            <div class="border-b border-blue-500 my-4"></div>
            <div class="flex items-center justify-between gap-10">
              <button
                class="flex items-center justify-center gap-1 bg-blue-500/70 hover:bg-blue-500 p-1 px-2 rounded-md"
              >
                <span>Preview</span>
                <Icon name="logos:netlify-icon" class="text-xl" />
              </button>
              <button
                class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-blue-500 p-1 px-3 rounded-md"
              >
                <span>Demo</span>
                <Icon
                  name="vscode-icons:folder-type-github-opened"
                  class="text-xl"
                />
              </button>
            </div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
        <div
          v-else
          v-for="el in projects"
          class="border-2 border-blue-500 bg-slate-700/50 rounded min-h-[400px] p-3"
        >
          <Image :src="el?.img" class="h-[230px]" />
          <h1 class="text-blue-400 text-2xl text-center mt-3">
            {{ el?.title }}
          </h1>
          <div class="border-b border-blue-500 my-4"></div>
          <p
            class="text-sm line-clamp-3 lg:break-all overflow-y-auto text-blue-100 text-center"
          >
            {{ el?.description }}
          </p>
          <div class="border-b border-blue-500 my-4"></div>
          <div class="flex items-center justify-between gap-10">
            <a
              target="_blank"
              :href="el.preview"
              class="flex items-center justify-center gap-1 bg-blue-600 text-white/90 hover:text-slate-900 hover:bg-blue-500/50 p-1 px-2 rounded-md"
            >
              <span>Preview</span>
              <Icon name="logos:netlify-icon" class="text-xl" />
            </a>
            <a
              target="_blank"
              :href="el.demo"
              class="flex items-center justify-center gap-1 bg-slate-900 text-white hover:text-slate-900 hover:bg-slate-500/50 p-1 px-3 rounded-md"
            >
              <span> Demo </span>
              <Icon
                name="vscode-icons:folder-type-github-opened"
                class="text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background: rgb(6 182 212);
  border-radius: 5px;
}
</style>
