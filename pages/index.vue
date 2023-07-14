<script setup>
let about = ref(null);
let Addresses = ref(null);
setTimeout(async () => {
  const { data } = await useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/About"
  );
  const { data: addresses } = useFetch(
    "https://portfolio-backend-nestjs.onrender.com/api/Addresses"
  );
  console.log(addresses.value);
  about.value = data.value;
  Addresses.value = addresses.value;
}, 1000);
</script>

<template>
  <section>
    <div v-if="!about" class="w-full flex items-center justify-evenly py-10">
      <div class="md:w-[50%] w-full mb-5 text-white">
        <h1 class="flex flex-col my-4 gap-2">
          <span
            class="border-2 lg:h-[50px] lg:w-[500px] h-[70px] w-[300px] rounded-md bg-slate-700 border-slate-500/50 animate-pulse"
          ></span>
          <span
            class="border-2 lg:h-[45px] lg:w-[230px] h-[30px] w-[150px] rounded-md bg-slate-700 border-slate-500/50 animate-pulse"
          ></span>
        </h1>
        <h3
          class="border-2 lg:h-[45px] lg:w-[210px] h-[35px] w-[310px] rounded-md bg-slate-700 border-slate-500/50 animate-pulse"
        ></h3>
        <div class="lg:flex items-center">
          <div class="w-full flex items-center gap-3 mt-2 mb-3">
            <span
              class="border h-[30px] w-[155px] rounded-md bg-slate-700 border-slate-500/50 animate-pulse mr-5"
            ></span>
            <div
              v-for="el in 3"
              class="p-2 rounded-md cursor-pointer border border-slate-500 flex items-center justify-center animate-pulse bg-slate-700 hover:border-slate-700"
            ></div>
          </div>
          <button
            class="w-[160px] h-[40px] border border-slate-500 bg-slate-700 hover:border-slate-700 px-5 py-2 animate-pulse rounded-lg"
          ></button>
        </div>
      </div>
      <div class="hidden md:block md:w-[50%] relative">
        <div
          class="w-[300px] h-[300px] md:w-[300px] md:h-[300px] border-4 p-2 border-slate-500 mx-auto object-cover animate-pulse rounded-md"
        ></div>
      </div>
    </div>
    <div v-else class="w-full flex items-center justify-evenly py-10">
      <div class="md:w-[50%] w-full mb-5 text-white">
        <h1 class="flex flex-col lg:my-4">
          <span class="lg:text-4xl text-2xl"
            >Assalomu aleykum va raxmatullohi va barakotuh</span
          >
          <span class="lg:text-3xl text-xl text-blue-500">I am Ozodbek,</span>
        </h1>
        <h3 class="text-2xl text-blue-700 my-3 animate-pulse">
          FullStack Software Engineer
        </h3>
        <div class="lg:flex items-center gap-5">
          <div class="w-full flex items-center gap-3 my-5">
            <span class="mr-5">My Social Addresses:</span>
            <a
              v-for="el in Addresses"
              target="_blank"
              :href="el.link"
              class="p-2 rounded-md border border-slate-500 flex items-center justify-center bg-slate-700 hover:border-slate-700"
            >
              <Icon :name="el.icon" class="block text-white" />
            </a>
          </div>
          <button
            class="md:w-[170px] hover:bg-blue-700/50 bg-blue-700 hover:text-yellow-300 px-5 py-2 rounded-lg"
          >
            Download CV
          </button>
        </div>
      </div>
      <div class="hidden md:w-[20%] md:block md:relative">
        <img
          :src="about[0].user_photo"
          alt="my_pic"
          class="w-[300px] h-[300px] md:w-[300px] md:h-[300px] border-2 border-blue-500 hover:border-yellow-500 mx-auto object-cover rounded-full"
        />
      </div>
    </div>
  </section>
</template>
