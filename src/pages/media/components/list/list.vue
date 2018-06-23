<template>
  <section class="media-list">
    <div class="branches">
      <div class="container">
        <a href="/" class="item">
          {{$t('MEDIA.INDEX')}}
        </a>
        >
        <a href="javascript:;" class="item active">
          {{$t('MEDIA.MEDIA')}}
        </a>
      </div>
    </div>

    <div class="news-list">
      <div class="container">
        <ul>
          <li v-for="item in list">
            <figure class="clearfix">
              <a href="javascript:;" class="anchor hide-lg" @click="goDetail(item.id)"></a>
                <img class="fl" :src="item.image" :alt="item.title" :title="item.title"/>
              <div class="figure-content fl">
                <h4 class="ellipsis">
                  {{item.title}}
                  <span></span>
                </h4>
                <p class="ellipsis">{{item.description}}</p>
                <a href="javascript:;" class="hide-xs" @click="goDetail(item.id)">
                  More >
                </a>
              </div>
            </figure>
          </li>
        </ul>
      </div>

      <recommend class="hide-xs"></recommend>
    </div>
  </section>
</template>

<script src="./list.js"></script>

<style lang="scss" scoped src="./list.scss"></style>
