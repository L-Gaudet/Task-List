<template>
	<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
		<div class="bg-blue-600 h-2.5 rounded-full" 
				style="{ width: (startProgress / maxSize) * 100 + '%' }">
		</div>
	</div>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      startProgress: {
        type: Number,
        required: true
      },
      maxSize: {
        type: Number,
        required: true
      }
    }
  })
</script>