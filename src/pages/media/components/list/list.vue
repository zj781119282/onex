<template>
  <section class="media-list">
    <div class="branches">
      <div class="container">
        <a href="/index" class="item">
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
              <img class="fl" :src="item.thumbnail" :alt="item.title" :title="item.title"/>
              <div class="figure-content fl">
                <h4 class="ellipsis">{{item.title}}</h4>
                <p>{{item.brief}}</p>
                <a href="javascript:;">
                  More
                </a>
              </div>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script src="./list.js"></script>

<style lang="scss" scoped src="./list.scss"></style>
