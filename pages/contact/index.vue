<script setup>
const { data } = await useFetch(
  "https://portfolio-backend-nestjs.onrender.com/api/about"
);
</script>

<template>
  <Header>Contact</Header>
  <section class="w-full flex flex-col items-center lg:gap-5 gap-7 text-white">
    <form class="lg:w-[60%]">
      <div
        class="flex justify-between items-center lg:gap-10 gap-2 lg:mb-6 mb-3"
      >
        <div class="w-full">
          <label
            for="email"
            class="block lg:mb-2 mb-1 lg:text-sm text-xs font-normal text-white"
            >Fullname</label
          >
          <input
            type="text"
            class="border lg:text-sm text-xs rounded-md block w-full p-2.5 bg-slate-800 focus:bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-yellow-600 focus:border-yellow-600 outline-none"
            placeholder="Shavkat Mirziyoyev"
            required
          />
        </div>
        <div class="w-full">
          <label
            for="email"
            class="block lg:mb-2 mb-1 lg:text-sm text-xs font-normal text-white"
            >Email</label
          >
          <input
            type="email"
            class="border lg:text-sm text-xs rounded-md block w-full p-2.5 bg-slate-800 focus:bg-slate-700 border-slate-600 placeholder-slate-400 text-white focus:ring-yellow-600 focus:border-yellow-600 outline-none"
            placeholder="shavkatmirzoyev@gmail.com"
            required
          />
        </div>
      </div>
      <div class="lg:mb-6 mb-2">
        <label
          for="message"
          class="block lg:mb-2 mb-1 lg:text-sm text-xs font-normal text-white"
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full lg:text-sm text-xs bg-slate-800 focus:bg-slate-700 rounded-md border focus:ring-yellow-600 focus:border-yellow-600 border-slate-600 placeholder-slate-400 text-white outline-none"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white hover:text-white/80 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-normal rounded-md lg:text-sm text-xs w-full sm:w-40 px-5 lg:py-3.5 py-2 text-center focus:ring-yellow-600 float-right"
      >
        SEND
      </button>
    </form>
    <div
      class="lg:w-[60%] w-full bg-yellow-500/70 border-2 text-blue-950 border-slate-700 shadow-xl shadow-slate-600 rounded-3xl lg:p-5 p-2"
    >
      <div
        class="flex flex-row items-center lg:gap-5 gap-1 lg:text-2xl text-sm text-center mb-3"
      >
        <div class="w-full bg-slate-600/60 lg:py-2.5 py-1 rounded-full">
          <span class="text-center">Phone Number:</span>
        </div>
        <div class="w-full bg-slate-600/60 lg:py-2.5 py-1 rounded-full">
          <span class="text-center">{{ data[0].phone }}</span>
        </div>
      </div>
      <div
        class="flex flex-row items-center lg:gap-5 gap-1 lg:text-2xl text-sm text-center"
      >
        <div class="w-full bg-slate-600/60 lg:py-2.5 py-1 rounded-full">
          <span class="text-center">Email:</span>
        </div>
        <div class="w-full bg-slate-600/60 lg:py-2.5 py-1 rounded-full">
          <span class="text-center">{{ data[0].email }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
