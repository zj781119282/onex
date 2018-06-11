<template>
  <div class="wrapper">
    <head-top></head-top>
    <div class="content">
      <router-view></router-view>
      <foot></foot>
    </div>
    <loading v-if="!loaded"></loading>
  </div>
</template>

<script src="./help.js"></script>

<style lang="scss">
  @media only screen and (min-width: 1081px) {
    .wrapper {
      .help-container {
        width: 1200px;
        margin: 0 auto;
        padding: 200px 0;
      }
    }
  }

  @media only screen and (max-width: 1080px) {
    .wrapper {
      .help-container {
        padding: 1rem .4rem 2rem;
      }
    }
  }
</style>
