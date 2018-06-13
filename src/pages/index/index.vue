<template>
  <div class="wrapper">
    <head-top @tip="showDownloadTip"></head-top>
    <div class="content">
      <banner @tip="showDownloadTip"></banner>
      <product></product>
      <about></about>
      <service></service>
      <promise></promise>
      <download></download>
      <foot></foot>
    </div>
    <loading v-if="!loaded"></loading>
    <tip v-if="showTip"></tip>
  </div>
</template>

<script src="./index.js"></script>
