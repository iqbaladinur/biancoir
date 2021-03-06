<template>
  <div>
    <form class="flex items-center justify-center px-5">
      <div
        class="flex w-full md:w-2/3 lg:w-2/3 xl:w-2/3 shadow-md rounded-full"
      >
        <input
          type="text"
          placeholder="Type a word to generate color..."
          class="w-full rounded-l-full h-10 pl-5 focus:outline-none"
        />
        <div class="flex w-10 h-10 items-center rounded-r-full bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search w-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Generator',
}
</script>
