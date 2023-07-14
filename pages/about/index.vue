<script setup>
let about = ref(null);
let skills = ref(null);
let experience = ref(null);
setTimeout(async () => {
  const { data } = await useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/about"
  );
  const { data: Skills } = await useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/skills"
  );
  const { data: Experience } = await useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/experience"
  );
  about.value = data.value;
  skills.value = Skills.value;
  experience.value = Experience.value;
}, 1000);
</script>

<template>
  <Header>About Me</Header>
  <Loading v-if="!about" />
  <section v-else>
    <div
      class="my-5 flex lg:flex-row flex-col lg:gap-2 w-full justify-between items-center"
    >
      <p
        class="text-white p-2 inline-block w-full mb-3 lg:mx-10 border-t border-b"
      >
        {{ about[0].description }}
      </p>
      <div class="w-full flex flex-col items-center gap-2 lg:gap-0.5">
        <div
          class="lg:w-[60%] w-full text-blue-200 border lg:p-3 p-2 border-blue-700 hover:border-yellow-500 rounded-md"
        >
          <span class="text-base font-semibold">Fullname: </span>
          <span class="text-sm font-normal">{{ about[0].fullname }}</span>
        </div>
        <div
          class="lg:w-[60%] w-full text-blue-200 border lg:p-3 p-2 border-blue-700 hover:border-yellow-500 rounded-md"
        >
          <span class="text-base font-semibold">Age : </span>
          <span class="text-sm font-normal">{{
            new Date().getFullYear() - 2006
          }}</span>
        </div>
        <div
          class="lg:w-[60%] w-full text-blue-200 border lg:p-3 p-2 border-blue-700 hover:border-yellow-500 rounded-md"
        >
          <span class="text-base font-semibold">Email : </span>
          <span class="text-sm font-normal">{{ about[0].email }}</span>
        </div>
        <div
          class="lg:w-[60%] w-full text-blue-200 border lg:p-3 p-2 border-blue-700 hover:border-yellow-500 rounded-md"
        >
          <span class="text-base font-semibold">Phone : </span>
          <span class="text-sm font-normal">{{ about[0].phone }}</span>
        </div>
        <div
          class="lg:w-[60%] w-full text-blue-200 border lg:p-3 p-2 border-blue-700 hover:border-yellow-500 rounded-md"
        >
          <span class="text-base font-semibold">City : </span>
          <span class="text-sm font-normal">{{ about[0].phone }}</span>
        </div>
      </div>
    </div>
    <div class="w-full border-2 mb-5 border-blue-400 rounded-md"></div>
    <Header>Experience</Header>
    <ul
      class="parent flex flex-row gap-5 h-[40px] relative border-l border-blue-700 hover:border-blue-500"
    >
      <li
        v-for="el in experience"
        class="child h-0 border-l border-blue-700 flex flex-col mb-10 ml-0.5 pl-4 transition-all duration-500"
      >
        <div
          class="absolute w-3 h-3 rounded-full mt-4 -left-1.5 border border-slate-600 bg-slate-700"
        ></div>
        <time
          class="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500"
          >{{ el.start_time }} - {{ el.end_time }}</time
        >
        <a
          :href="el.link"
          class="text-lg font-medium text-slate-900 dark:text-white"
        >
          {{ el.company_name }}
        </a>
      </li>
    </ul>
    <div class="my-10 gap-3 w-full">
      <Header>Skills</Header>
      <div class="flex flex-wrap">
        <a
          v-for="skill in skills"
          target="_blank"
          :href="`https://www.google.com/search?q=${skill.title}&oq=html&aqs=chrome..69i57j0i67i650l2j0i512l3j69i60l2.590j0j7&sourceid=chrome&ie=UTF-8`"
          class="cursor-pointer bg-slate-800 border border-yellow-600 hover:border-slate-900 hover:bg-slate-900 transition-colors duration-100 px-3 p-2 mb-3 rounded-md text-blue-200 mr-3 flex items-center gap-2"
        >
          <Icon :name="skill.icon" class="text-xl" />
          <span>{{ skill.title }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.parent:hover .child {
  height: 35px;
}
</style>
