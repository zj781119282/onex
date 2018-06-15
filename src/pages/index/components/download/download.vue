<template>
  <section id="download">
    <div class="container">
      <h3 class="hide-xs">
        {{$t('INDEX.DOWNLOAD.TITLE')}}
      </h3>
      <div class="btn-group">
        <a href="javascript:;" class="common-btn product" @click="goAnchor('#product')">
          {{$t('INDEX.DOWNLOAD.PRODUCT')}}
        </a>
        <a href="javascript:;" class="common-btn hide-xs" @click="goAnchor('#banner')">
          {{$t('INDEX.DOWNLOAD.DOWN')}}
        </a>
        <a href="javascript:;" class="common-btn hide-lg" @click="download">
          {{$t('INDEX.DOWNLOAD.DOWN')}}
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./download.js"></script>

<style lang="scss" scoped src="./download.scss"></style>
