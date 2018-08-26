<template lang="html">
  <div id="footer-app" class="row center-xs middle-xs footer-app">
    <div class="col-xs">
      <v-icon>add_shopping_cart</v-icon>
    </div>
    <div class="col-xs">
      <div class="footer-app__float-icon">
        <v-icon>add</v-icon>
      </div>
    </div>
    <div class="col-xs">
      <v-icon>card_giftcard</v-icon>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Footer',

  data: () => ({
    showSecondary: true,
    firstItem: '',
    secondItem: '',
  }),

}
</script>

<style lang="scss">
.footer-app {
  position: fixed;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  color: #FFF;
  height: 70px;
  cursor: pointer;
  background-color: blue;
  &__float-icon {
    display: inline-block;
    width: 70px;
    height: 70px;
    margin-bottom: 70px;
    font-size: 42px;
    border-radius: 100%;
    transition: .4s margin ease-in-out;
    border: 6px solid #FFF;
    background-color: #000;
    &:hover {
      margin-bottom: 40px;
    }
  }
  .v-icon { font-size: 32px; }
}
</style>
