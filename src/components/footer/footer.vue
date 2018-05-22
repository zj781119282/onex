<template>
  <footer>
    <div class="container">
      <h3>{{$t('INDEX.CONTACT')}}</h3>
      <div class="icon-list">
        <a href="#" class="weixin"></a>
        <a href="#" class="qq"></a>
        <a href="#" class="twitter"></a>
        <a href="#" class="facebook"></a>
        <a href="#" class="send"></a>
      </div>
      <p class="copy horizontal-center">
        copyright&copy;2018
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'foot',
  }
</script>

<style lang="scss" scoped src="./footer.scss"></style>
