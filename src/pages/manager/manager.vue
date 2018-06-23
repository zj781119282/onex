<template>
  <div class="wrapper hide-xs">
    <head-top></head-top>
    <div class="content">
      <router-view></router-view>
      <foot></foot>
    </div>
    <loading v-if="!loaded"></loading>
  </div>
</template>

<script src="./manager.js"></script>
