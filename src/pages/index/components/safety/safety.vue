<template>
  <section>
    <div class="container clearfix">
      <div class="img fl">
        <img src="../../assets/safety.png" alt="ONEX"/>
      </div>
      <article class="index side fl">
        <h2>{{$t('INDEX.SAFETY')}}</h2>
        <p>{{$t('INDEX.SAFETY_1')}}</p>
        <p>{{$t('INDEX.SAFETY_2')}}</p>
        <p>{{$t('INDEX.SAFETY_3')}}</p>
      </article>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'safety',
  }
</script>

<style lang="scss" scoped src="./safety.scss"></style>
