<template>
  <header>
    <div class="container">
      <a href="#/index" class="logo col-xs-4">
        <img src="../../assets/Logo.png" alt="ONEX"/>
      </a>
      <nav :class="{'close':!navShow, open:navShow}">
        <ul>
          <li>
            <a href="javascript:;" @click="goAnchor('#product')">
              {{$t('HEADER.PRODUCT')}}
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="goAnchor('#about')">
              {{$t('HEADER.ABOUT')}}
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="goAnchor('#service')">
              {{$t('HEADER.SERVICE')}}
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="goAnchor('#promise')">
              {{$t('HEADER.PROMISE')}}
            </a>
          </li>
          <li>
            <a href="javascript:;">
              {{$t('HEADER.MEDIA')}}
            </a>
          </li>
          <li>
            <a href="javascript:;" @click="download" class="hide-lg">
              {{$t('HEADER.DOWNLOAD')}}
            </a>
          </li>
        </ul>
      </nav>
      <span class="space-padding hide-lg"></span>
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
      <a href="javascript:;" @click="toggleNav" class="button hide-lg" :class="{close:navShow, open:!navShow}">

      </a>
    </div>
  </header>
</template>

<script src="./header.js"></script>

<style lang="scss" src="./header.scss" scoped></style>
