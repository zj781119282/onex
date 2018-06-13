<template>
  <section id="about">
    <div class="container">
      <h2 class="section-title">
        {{$t('INDEX.SERVICE.TITLE')}}
      </h2>
      <p class="brief">
        {{$t('INDEX.SERVICE.BRIEF')}}
      </p>
      <p class="desc">
        {{$t('INDEX.SERVICE.DESC_1')}}
      </p>
      <p class="desc">
        {{$t('INDEX.SERVICE.DESC_2')}}
        <a href="javascript:;" class="common-anchor" style="color: #fff;" target="_blank">
          {{$t('INDEX.SERVICE.URL')}}
        </a>
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'about',
  }
</script>

<style lang="scss" scoped src="./about.scss"></style>
