<template>
  <section id="download">
    <div class="container">
      <h3 class="hide-xs">
        {{$t('INDEX.DOWNLOAD.TITLE')}}
      </h3>
      <div class="btn-group">
        <a href="javascript:;" class="btn product">
          {{$t('INDEX.DOWNLOAD.PRODUCT')}}
        </a>
        <a href="javascript:;" class="btn download" @click="download">
          {{$t('INDEX.DOWNLOAD.DOWN')}}
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./download.js"></script>

<style lang="scss" scoped src="./download.scss"></style>
