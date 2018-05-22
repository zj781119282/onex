<template>
  <section>
    <div class="container">
      <article class="index top">
        <h2>{{$t('INDEX.WALLET')}}</h2>
        <p>{{$t('INDEX.WALLET_1')}}</p>
        <p>{{$t('INDEX.WALLET_2')}}</p>
        <p>{{$t('INDEX.WALLET_3')}}</p>
      </article>
      <div class="img">
        <img src="./../../assets/wallet.png" alt="ONEX"/>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'wallet',
  }
</script>

<style lang="scss" scoped src="./wallet.scss"></style>
