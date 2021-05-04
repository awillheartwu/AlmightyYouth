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
              <div class="videocase">
                <div>
                  <video
                    ref="videobig"
                    width="1200"
                    height="834"
                    autoplay
                    id="videobig"
                  ></video>
                </div>
                <div class="bannerposition">
                  <div v-if="isbanner" class="defaultbanner">
                    <div class="bannercic"></div>
                    <div class="bannertext">
                      <p>{{ this.bannercontent }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="canvas">
                <canvas
                  id="canvas"
                  ref="canvas"
                  width="1200"
                  height="700"
                ></canvas>
              </div>
              <div><Button @click="canvasFun">play</Button></div>

              <CameraPannelVideoTag />
              <CameraPannelCards @AddCamera="AddCamera" />
            </Content>
            <Footer>
              <section>
                <CameraPannelBottomTools />
              </section>
            </Footer>
          </Layout>
          <Sider class="layout-sider" hide-trigger width="auto">
            <CameraPannelSider @AddBanner="AddBanner" />
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
    return {
      bannercontent: "text",
      isbanner: 0,
    };
  },
  methods: {
    ClickJump() {
      this.$router.push({ name: "broadcasts" });
    },
    canvasFun() {
      let canvas = document.getElementById("canvas");
      let video = document.getElementById("videobig");
      var ctx = canvas.getContext("2d");
      window.setInterval(function () {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        //console.log(video.currentTime);
      }, 20);
    },
    AddCamera() {
      // H5调用电脑摄像头API
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((success) => {
          // 摄像头开启成功
          this.$refs["videobig"].srcObject = success;
          // 实时拍照效果
          this.$refs["videobig"].play();
        })
        .catch((error) => {
          console.error("摄像头开启失败，请检查摄像头是否可用！");
          // this.isdevice = 1;
        });
    },
    AddBanner(text) {
      this.isbanner == 0 ? (this.isbanner = 1) : (this.isbanner = 0);
      this.bannercontent = text;
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
  mounted() {},
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
.videocase {
  flex: 1 1 0%;
  position: relative;
  background: rgb(17, 17, 17);
  z-index: 0;
  overflow: visible;
}
.bannerposition {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 20;
  user-select: none;
}
.defaultbanner {
  width: 700px;
  height: 70px;
  position: absolute;
  bottom: 3%;
  left: 0px;
  transform-origin: left bottom;
  transition: bottom 0.3s ease 0s, transform 0.3s ease 0s;
  user-select: none;
  pointer-events: none;
}
.bannercic {
  position: absolute;
  inset: 0px;
  border-radius: 12px;
  transform: skew(-20deg);
  margin-left: -500px;
  padding-left: 500px;
  background-color: rgb(48, 56, 72);
}
.bannertext {
  width: 100%;
  min-height: 106px;
  padding: 6px 60px 6px 50px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  overflow-wrap: break-word;
  p {
    width: 100%;
    margin: 0px;
    font-size: 80px;
    font-weight: 800;
    user-select: none;
    color: rgb(255, 255, 255);
  }
}
</style>