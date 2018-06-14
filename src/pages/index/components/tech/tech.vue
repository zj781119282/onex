<template>
  <section id="tech">
    <div class="container">
      <h2 class="section-title">
        {{$t('INDEX.TECH.TITLE')}}
      </h2>
      <article class="help">
        <p class="tc">{{$t('INDEX.TECH.P_1')}}</p>
        <p class="tc">{{$t('INDEX.TECH.P_2')}}</p>
        <p class="tc">{{$t('INDEX.TECH.P_3')}}</p>
        <p class="tc">{{$t('INDEX.TECH.P_4')}}</p>
        <p class="tc">{{$t('INDEX.TECH.P_5')}}</p>
        <p class="tc">{{$t('INDEX.TECH.P_6')}}</p>
      </article>
      <ul class="clearfix">
        <li>
          <figure>
            <img src="./../../assets/tech_1.png" alt="ONEX"/>
            <dl>
              <dt>
                {{$t('INDEX.TECH.TECH_1')}}
              </dt>
              <dd>
                {{$t('INDEX.TECH.DESC_1')}}
              </dd>
            </dl>
          </figure>
        </li>
        <li>
          <figure>
            <img src="./../../assets/tech_2.png" alt="ONEX"/>
            <dl>
              <dt>
                {{$t('INDEX.TECH.TECH_2')}}
              </dt>
              <dd>
                {{$t('INDEX.TECH.DESC_2')}}
              </dd>
            </dl>
          </figure>
        </li>
        <li>
          <figure>
            <img src="./../../assets/tech_3.png" alt="ONEX"/>
            <dl>
              <dt>
                {{$t('INDEX.TECH.TECH_3')}}
              </dt>
              <dd>
                {{$t('INDEX.TECH.DESC_3')}}
              </dd>
            </dl>
          </figure>
        </li>
        <li>
          <figure>
            <img src="./../../assets/tech_4.png" alt="ONEX"/>
            <dl>
              <dt>
                {{$t('INDEX.TECH.TECH_4')}}
              </dt>
              <dd>
                {{$t('INDEX.TECH.DESC_4')}}
              </dd>
            </dl>
          </figure>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'tech',
  }
</script>

<style lang="scss" scoped src="./tech.scss"></style>
