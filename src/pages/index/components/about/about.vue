<template>
  <section id="about">
    <div class="container">
      <h2 class="section-title">
        {{$t('INDEX.ABOUT.TITLE')}}
      </h2>
      <p class="brief">
        {{$t('INDEX.ABOUT.BRIEF')}}
      </p>
      <p class="desc">
        {{$t('INDEX.ABOUT.DESC')}}
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
