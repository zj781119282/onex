<template>
  <header v-show="showHeader">
    <div class="container">
      <a href="#/index" class="logo col-xs-4">
        <img src="../../assets/Logo.png" alt="ONEX"/>
      </a>
      <div class="lang" v-show="!withQuery">
        <a href="javascript:;"
           class="common-anchor"
           :class="{active: currLang === 'zh_CN'}"
           @click="switchLang('zh_CN')">中文</a>
        /
        <a href="javascript:;"
           class="common-anchor"
           :class="{active: currLang === 'en_US'}"
           @click="switchLang('en_US')">English</a>
      </div>
    </div>
  </header>
</template>

<script src="./header.js"></script>

<style lang="scss" src="./header.scss" scoped></style>
