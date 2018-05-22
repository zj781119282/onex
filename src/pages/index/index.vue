<template>
  <div class="wrapper">
    <head-top></head-top>
    <div class="content">
      <banner></banner>
      <decenter></decenter>
      <alipay></alipay>
      <multiple></multiple>
      <one-stop></one-stop>
      <wallet></wallet>
      <safety></safety>
      <undertake></undertake>
      <foot></foot>
    </div>
    <loading v-if="!loaded"></loading>
  </div>
</template>

<script src="./index.js"></script>
