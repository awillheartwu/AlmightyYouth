<template>
  <div class="header">
    <Icon type="ios-bug" size="56" />
    <Button id="accountbutton" type="text" to="/" replace>My accout</Button>
    <Button id="upbutton" to="/" replace>Upgrade</Button>

    <div class="logo">
      <span>Stream<b>Canvas</b></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headbar",
  data: function () {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* 头部样式 */
.header {
  position: absolute;
  line-height: 56px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #ffffff;
  border-bottom: 1px solid rgb(211, 211, 211);
  font-size: 60px;
  i {
    float: left;
  }
  .logo {
    text-align: left;
    color: rgb(46, 128, 221);
    font-family: "PingFang SC";
    font-size: 30px;
  }
  #upbutton {
    margin: 10px auto;
    float: right;
  }
  #accountbutton {
    margin: 10px auto;
    float: right;
  }
}
</style>