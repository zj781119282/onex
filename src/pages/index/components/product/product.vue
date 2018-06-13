<template>
  <section id="product">
    <h2 class="section-title">
      {{$t('INDEX.PRODUCT.TITLE')}}
    </h2>
    <div class="index-intro intro-1">
      <div class="container clearfix image-lay-left">
        <img src="./../../assets/intro_1.png" class="intro-image" alt="ONEX"/>
        <article class="product-intro">
          <img src="./../../assets/mark_1.png" class="number" :alt="$t('INDEX.PRODUCT.INTRO_1')"/>
          <h1>
            {{$t('INDEX.PRODUCT.INTRO_1')}}<br/>
            {{$t('INDEX.PRODUCT.INTRO_1_1')}}
          </h1>
          <p>{{$t('INDEX.PRODUCT.DESC_1_1')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_1_2')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_1_3')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_1_4')}}</p>
        </article>
      </div>
    </div>
    <div class="index-intro intro-2">
      <div class="container clearfix image-lay-right">
        <img src="./../../assets/intro_2.png" class="intro-image" alt="ONEX"/>
        <article class="product-intro">
          <img src="./../../assets/mark_2.png" class="number" :alt="$t('INDEX.PRODUCT.INTRO_2')"/>
          <h1>
            {{$t('INDEX.PRODUCT.INTRO_2')}}
          </h1>
          <p>{{$t('INDEX.PRODUCT.DESC_2_1')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_2_2')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_2_3')}}</p>
        </article>
      </div>
    </div>
    <div class="index-intro intro-3">
      <div class="container clearfix image-lay-left">
        <img src="./../../assets/intro_3.png" class="intro-image" alt="ONEX"/>
        <article class="product-intro">
          <img src="./../../assets/mark_3.png" class="number" :alt="$t('INDEX.PRODUCT.INTRO_3')"/>
          <h1>
            {{$t('INDEX.PRODUCT.INTRO_3')}}<br>
            {{$t('INDEX.PRODUCT.INTRO_3_1')}}
          </h1>
          <p>{{$t('INDEX.PRODUCT.DESC_3_1')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_3_2')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_3_3')}}</p>
        </article>
      </div>
    </div>
    <div class="index-intro intro-5">
      <div class="container clearfix image-lay-right">
        <img src="./../../assets/intro_5.png" class="intro-image" alt="ONEX"/>
        <article class="product-intro">
          <img src="./../../assets/mark_4.png" class="number" :alt="$t('INDEX.PRODUCT.INTRO_5')"/>
          <h1>
            {{$t('INDEX.PRODUCT.INTRO_5')}}
          </h1>
          <p>{{$t('INDEX.PRODUCT.DESC_5_1')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_5_2')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_5_3')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_5_4')}}</p>
          <p>{{$t('INDEX.PRODUCT.DESC_5_5')}}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'product',
  }
</script>

<style lang="scss" scoped src="./product.scss"></style>
