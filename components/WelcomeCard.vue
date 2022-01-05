<template>
  <div>
    <div
      class="grid place-items-center h-screen"
    >
      <div
        class="mx-8 sm:max-w-md sm:mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      >
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="/img/amiga.gif"
              alt="Amiga boot"
            />
          </div>
          <div class="p-8">
            <div
              class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Potsky NFT
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Coming soon
            </a>
            <p class="mt-2 text-gray-500">
              Portfolio of Amiga demos from the 90's coded by Potsky
            </p>
            <p class="mt-2 text-gray-500">Soon available as NFT...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeCard'
}
</script>
