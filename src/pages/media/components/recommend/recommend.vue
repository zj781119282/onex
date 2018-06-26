<template>
  <div class="recommend-list">
    <h5>{{$t('MEDIA.RECOMMEND')}}</h5>
    <div class="article" v-for="item in list">
      <a href="javascript:;" @click="goDetail(item.id)">{{item.title}}</a>
      <span>{{timeTransfer(item.createDate)}}</span>
    </div>
  </div>
</template>

<script src="./recommend.js"></script>

<style lang="scss" scoped src="./recommend.scss"></style>
