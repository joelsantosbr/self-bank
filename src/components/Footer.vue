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
  background-color: #598FE2;

  .v-icon { font-size: 32px; }

  &__float-icon {
    display: inline-block;
    width: 70px;
    height: 70px;
    margin-bottom: 70px;
    font-size: 48px;
    border-radius: 100%;
    background-color: #00F898;
    transition: .4s margin ease-in-out;
    box-shadow: 0 6px 6px rgba(0, 0, 0, .24);

    .v-icon { font-size: 42px; }

    &:active,
    &:hover {
      margin-bottom: 40px;
    }
  }
}
</style>
