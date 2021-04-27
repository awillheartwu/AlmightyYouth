<template>
  <div class="layout">
    <Layout :style="{ minHeight: '96vh' }">
      <Header class="layout-header">
        <div class="layout-logo" @click="ClickJump">
          <Icon type="ios-bug" size="45" />
        </div>
        <span class="CameraName">{{ CameraName }}</span>
        <div class="header-button">
          <Button class="hb1" type="text">Add a destination</Button>
          <span>
            Recording is a
            <a href="/plan" style="text-decoration: underline"
              >premium feature</a
            >
          </span>
          <Button type="primary" to="/record" size="default" disabled
            >Record</Button
          >
        </div>
      </Header>
      <Layout>
        <Layout :style="{ padding: '0 2px 2px' }">
          <Layout>
            <Content>
              <div class="canvas">
                <canvas
                  id="canvas"
                  ref="canvas"
                  width="1200"
                  height="700"
                ></canvas>
              </div>
              <CameraPannelVideoTag />
              <CameraPannelCards />
            </Content>
            <Footer>
              <section>
                <CameraPannelBottomTools />
              </section>
            </Footer>
          </Layout>
          <Sider class="layout-sider" hide-trigger width="auto">
            <CameraPannelSider />
          </Sider>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import CameraPannelVideoTag from "./CameraPannelTools/CameraPannelVideoTag";
import CameraPannelCards from "./CameraPannelTools/CameraPannelCards";
import CameraPannelBottomTools from "./CameraPannelTools/CameraPannelBottomTools";
import CameraPannelSider from "./CameraPannelTools/CameraPannelSider";

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
  components: {
    CameraPannelVideoTag,
    CameraPannelCards,
    CameraPannelBottomTools,
    CameraPannelSider,
  },
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
  display: flex;
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
.hb1 {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.2;
  color: rgb(45, 156, 219);
}
</style>