<template>
  <div class="wrapper">
    <head-top></head-top>
    <div class="content">
      <section class="banner">
        <img class="hide-xs" src="./assets/media_banner.png" alt="ONEX"/>
        <img class="hide-lg" src="./assets/media_banner-mobile.png" alt="ONEX"/>
      </section>
      <router-view></router-view>
      <foot></foot>
    </div>
    <loading v-if="!loaded"></loading>
  </div>
</template>

<script src="./media.js"></script>

<style lang="scss" src="./media.scss"></style>
