<template>
  <button @click="getUserAgent" style="font-size: 32px;padding: 20px;">点我</button>
</template>

<script>
  export default {
    name: 'user-agent',
    methods: {
      getUserAgent() {
        alert(navigator.userAgent)
      },
    },
  }
</script>
