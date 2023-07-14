<script setup>
import moment from "moment";
let projects = ref(null);
setTimeout(async () => {
  const { data } = await useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/posts"
  );
  projects.value = data.value;
  console.log(projects.value);
}, 1000);
console.log(projects.value);
</script>

<template>
  <div class="w-full h-full">
    <Header>Blog</Header>
    <div class="grid md:grid-cols-3 gap-5">
      <div
        v-if="!projects"
        v-for="load in 2"
        class="border-2 border-blue-500 bg-slate-700/50 rounded-md p-3 animate-pulse"
      >
        <div class="w-full text-center">
          <div class="h-20 rounded-md mx-auto bg-slate-700 w-[80%] mb-2"></div>
          <div class="border-b border-blue-500 my-4"></div>
        </div>
        <div class="flex">
          <div
            v-for="el in 3"
            class="mr-2 bg-slate-950/50 mt-2 h-10 rounded-md bg-slate-700 w-20 mb-2"
          ></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
      <div
        v-else
        v-for="el in projects"
        class="border-2 border-blue-500 bg-slate-700/50 rounded-md min-h-[100px] p-3 relative"
      >
        <div class="flex">
          <div class="py-3">
            <div class="flex items-center gap-2 mb-3">
              <Icon
                name="solar:calendar-linear"
                class="text-lg text-slate-400"
              />
              <span class="text-slate-400 text-sm">
                {{ moment(el.createdAt).format("H:mm:ss ") }} /
              </span>
              <span class="text-slate-400 text-sm">
                {{ moment(el.createdAt).format("Do MMMM YYYY, dddd") }}
              </span>
            </div>
            <router-link
              :to="`blog/${el._id}`"
              class="hover:text-yellow-400 break-all line-clamp-4 overflow-y-auto text-lg text-blue-400"
            >
              {{ el?.title }}
            </router-link>
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
  background: #2563eb;
  border-radius: 3px;
}
</style>
