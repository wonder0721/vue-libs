<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button @click="showMessage" type="info">Info</Button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage() {
      this.$message({ duration: 3000, type: 'error', content: 'This is an about page' });
    },
  }
}
</script>
