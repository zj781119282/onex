<template>
  <section id="promise">
    <div class="container">
      <h2 class="section-title">
        {{$t('INDEX.PROMISE.TITLE')}}
      </h2>
      <ul class="promise-list clearfix">
        <li class="clearfix">
          <figure class="clearfix fr promise-1">
            <img class="image-1" src="./../../assets/promise_1.png" :alt="$t('INDEX.PROMISE.HEAD_1')"/>
            <dl>
              <dt>{{$t('INDEX.PROMISE.HEAD_1')}}</dt>
              <dd>{{$t('INDEX.PROMISE.DESC_1')}}</dd>
            </dl>
          </figure>
        </li>
        <li class="clearfix">
          <figure class="clearfix fl promise-2">
            <img class="image-2" src="./../../assets/promise_2.png" :alt="$t('INDEX.PROMISE.HEAD_2')"/>
            <dl>
              <dt>{{$t('INDEX.PROMISE.HEAD_2')}}</dt>
              <dd>{{$t('INDEX.PROMISE.DESC_2')}}</dd>
            </dl>
          </figure>
        </li>
        <li class="clearfix">
          <figure class="clearfix fr promise-3">
            <img class="image-3" src="./../../assets/promise_3.png"
                 :alt="$t('INDEX.PROMISE.HEAD_3')"/>
            <dl>
              <dt>{{$t('INDEX.PROMISE.HEAD_3')}}</dt>
              <dd>{{$t('INDEX.PROMISE.DESC_3')}}</dd>
            </dl>
          </figure>
        </li>
        <li class="clearfix">
          <figure class="clearfix fl promise-4">
            <img class="image-4" src="./../../assets/promise_4.png" :alt="$t('INDEX.PROMISE.HEAD_4')"/>
            <dl>
              <dt>{{$t('INDEX.PROMISE.HEAD_4')}}</dt>
              <dd>{{$t('INDEX.PROMISE.DESC_4')}}</dd>
            </dl>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'promise',
  }
</script>

<style lang="scss" scoped src="./promise.scss"></style>
