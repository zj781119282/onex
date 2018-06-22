<template>
  <section class="media-detail">
    <div class="branches">
      <div class="container">
        <a href="/index" class="item">
          {{$t('MEDIA.INDEX')}}
        </a>
        >
        <a href="/media" class="item">
          {{$t('MEDIA.MEDIA')}}
        </a>
        >
        <a href="javascript:;" class="item ellipsis active">
          {{title}}
        </a>
      </div>
    </div>

    <div class="detail-container">
      <div class="container">
        <h2>{{title}}</h2>
        <p class="date">{{date}}</p>
        <article v-html="detail" class="news-detail"></article>
      </div>
    </div>
  </section>
</template>

<script src="./detail.js"></script>

<style lang="scss" scoped src="./detail.scss"></style>
