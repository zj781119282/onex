<template>
  <div class="wrapper">
    <head-top></head-top>
    <div class="content">
      <banner></banner>
      <product></product>
      <about></about>
      <service></service>
      <promise></promise>
      <download></download>
      <foot></foot>
    </div>
    <loading v-if="!loaded"></loading>
  </div>
</template>

<script src="./index.js"></script>
