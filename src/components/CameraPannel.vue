<template>
  <div class="layout">
    <Layout :style="{ minHeight: '98vh' }">
      <Header class="layout-header">
        <div class="layout-logo" @click="ClickJump">
          <Icon type="ios-bug" size="45" />
        </div>
        <span class="CameraName">{{ CameraName }}</span>
        <div class="header-button">
          <Button type="text">Add a destination</Button>
          <span
            >Recording is a
            <a href="/plan" style="text-decoration: underline"
              >premium feature</a
            ></span
          >
          <Button type="primary" to="/record" size="default" disabled
            >Record</Button
          >
        </div>
      </Header>
      <Layout>
        <Layout :style="{ padding: '0 2px 2px' }">
          <Content>
            <div>
              <canvas
                id="canvas"
                ref="canvas"
                width="700"
                height="400"
              ></canvas>
            </div>
            <section>
              <div>videotag</div>
              <div>cards</div>
              <div>bottom tools</div>
            </section>
          </Content>
          <Sider class="layout-sider" hide-trigger width="300"> </Sider>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "CameraPannel",
  data: function () {
    return {};
  },
  methods: {
    ClickJump() {
      this.$router.push({ name: "broadcasts" });
    },
  },
  components: {},
  computed: {
    CameraName() {
      return this.$store.state.cameraname;
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: auto;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  //top: 15px;
  left: 20px;
  text-align: left;
  margin-right: 24px;
}
.layout-header {
  border-bottom: 1px solid rgb(211, 211, 211);
  background: #fff;
  padding: 0 0px;
}
.layout-sider {
  border-left: 1px solid rgb(211, 211, 211);
  background: #fff;
  padding: 0 0px;
}
.CameraName {
  float: left;
  margin-left: 24px;
  text-align: center;
}
.header-button {
  float: right;
  margin-right: 24px;
}
</style>