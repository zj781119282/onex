<template>
  <section id="service">
    <div class="container">
      <h2 class="section-title">
        {{$t('INDEX.SERVICE.TITLE')}}
      </h2>
      <p class="desc">
        {{$t('INDEX.SERVICE.DESC')}}
      </p>
      <ul class="service-list clearfix">
        <li>
          <figure>
            <img src="./../../assets/service_1.png" :alt="$t('INDEX.SERVICE.SERVICE_1')"/>
            <p>{{$t('INDEX.SERVICE.SERVICE_1')}} </p>
          </figure>
        </li>
        <li>
          <figure>
            <img src="./../../assets/service_2.png" :alt="$t('INDEX.SERVICE.SERVICE_2')"/>
            <p>{{$t('INDEX.SERVICE.SERVICE_2')}} </p>
          </figure>
        </li>
        <li>
          <figure>
            <img src="./../../assets/service_3.png" :alt="$t('INDEX.SERVICE.SERVICE_3')"/>
            <p>{{$t('INDEX.SERVICE.SERVICE_3')}} </p>
          </figure>
        </li>
        <li>
          <figure>
            <img src="./../../assets/service_4.png" :alt="$t('INDEX.SERVICE.SERVICE_4')"/>
            <p>{{$t('INDEX.SERVICE.SERVICE_4')}} </p>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'service',
  }
</script>

<style lang="scss" scoped src="./service.scss"></style>
