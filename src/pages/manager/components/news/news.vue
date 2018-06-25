<template>
  <section class="news-editor">
    <div class="container" v-if="isManager">
      <label for="title">
        <span class="head">
          {{$t('MANAGER.NEWS.TITLE')}}
        </span>
        <input type="text" id="title" v-model="title" :placeholder="$t('MANAGER.NEWS.TITLE')"/>
      </label>

      <label for="desc">
        <span class="head">
          {{$t('MANAGER.NEWS.DESC')}}
        </span>
        <input type="text" id="desc" v-model="desc" :placeholder="$t('MANAGER.NEWS.DESC')"/>
      </label>

      <label>
        <span class="head">
          {{$t('MANAGER.NEWS.STATUS')}}
        </span>
        <select name="status" id="status" v-model="status">
          <option value="1">{{$t('MANAGER.NEWS.ENABLE')}}</option>
          <option value="-1">{{$t('MANAGER.NEWS.DELAY')}}</option>
        </select>
      </label>


      <label>
        <span class="head">
          {{$t('MANAGER.NEWS.RECOMMEND')}}
        </span>
        <select name="recommend" id="recommend" v-model="recommend">
          <option value="1">是</option>
          <option value="-1">否</option>
        </select>
      </label>

      <label>
        <span class="head" style="margin-bottom: 20px;">
          {{$t('MANAGER.NEWS.CONTENT')}}
        </span>
        <ueditor v-model="content"></ueditor>
      </label>

      <label>
        <span class="head" style="margin: 20px 0;">
          {{$t('MANAGER.NEWS.IMAGE')}}
        </span>
        <image-uploader @src="getImage"></image-uploader>
      </label>

      <div class="btn-group">
        <a href="javscript:;" @click="uploadNews" class="common-btn">
          保存
        </a>
        <a href="javascript:;" @click="cancel" class="common-btn">
          取消
        </a>
      </div>
    </div>
  </section>
</template>

<script src="./news.js"></script>

<style lang="scss" scoped src="./news.scss"></style>
