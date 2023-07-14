<script setup>
const router = useRouter();
const { params } = useRoute();
const { data } = await useFetch(
  `https://portfolio-backend-nestjs.onrender.com/api/posts/${params.id}`
);
console.log(data.value.content);
</script>

<template>
  <div class="h-full text-white text-center pb-10">
    <div class="w-full flex items-center justify-between">
      <button
        class="flex items-center gap-2 text-xl border-2 border-slate-900 hover:border-slate-950 px-4 rounded-md p-1 hover:bg-slate-800 duration-100"
        @click="router.go(-1)"
      >
        <Icon name="material-symbols:arrow-back-rounded" />
        Back
      </button>
    </div>
    <div class="p-5 bg-slate-800 rounded-md my-5 text-blue-500">
      <h1 class="text-3xl mb-10 pb-2 font-bold border-b border-slate-600">
        {{ data?.title }}
      </h1>
      <div class="pb-2 leading-10" v-html="data.content"></div>
    </div>
  </div>
</template>
