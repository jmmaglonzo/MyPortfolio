<template>
  <div class="flex flex-col space-y-2 text-white">
    <span class="text-center font-bold uppercase md:text-left">
      <slot name="title"></slot>
    </span>
    <base-card
      class="p-4 text-center text-xs leading-relaxed md:text-start md:text-sm"
    >
      <slot name="description"> </slot>
    </base-card>

    <div class="flex justify-center gap-2 text-xs md:justify-start">
      <slot name="technologies"> </slot>
    </div>

    <div
      class="flex items-center justify-center space-x-2 text-xl md:justify-start"
    >
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
