<template>
  <RouterView />
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';

export default class AppComponents extends Vue {
  mounted(): void {
      console.log(1111);
  }
}
</script>

<style lang="scss" scoped>

</style>
