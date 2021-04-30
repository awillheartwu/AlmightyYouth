<template>
  <Row>
    <Col flex>
      <div class="toolspannel">
        <div v-if="bvs == 1"><Comments /></div>
        <div v-if="bvs == 2"><Banners @AddBanner="AddBanner" /></div>
        <div v-if="bvs == 3"><Brand /></div>
        <div v-if="bvs == 4"><PraviteChat /></div>
      </div>
    </Col>
    <Col flex>
      <div class="siderbar">
        <Button type="text" class="bu1" @click="Bv(1)">
          <Icon type="md-chatboxes" size="20" /><br />
          <span>Comments</span>
        </Button>
        <br />
        <Button type="text" @click="Bv(2)">
          <Icon type="md-square" size="20" /><br />
          <span>Banners</span>
        </Button>
        <br />
        <Button type="text" @click="Bv(3)">
          <Icon type="md-color-palette" size="20" /><br />
          <span>Brand</span>
        </Button>
        <br />
        <Button type="text" @click="Bv(4)">
          <Icon type="ios-chatbubbles" size="20" /><br />
          <span
            >Pravite<br />
            Chat</span
          >
        </Button>
        <br />
        <Divider size="default" class="divider"></Divider>
        <Button type="text" @click="Bv(5)">
          <Icon type="ios-settings" size="20" /><br />
          <span>Settings</span>
        </Button>
      </div>
    </Col>
  </Row>
</template>

<script>
import Comments from "@/components/CPTSiderTools/Comments.vue";
import Banners from "@/components/CPTSiderTools/Banners.vue";
import Brand from "@/components/CPTSiderTools/Brand.vue";
import PraviteChat from "@/components/CPTSiderTools/PraviteChat.vue";

export default {
  name: "CameraPannelSider",
  data: function () {
    return {
      bvs: 1,
    };
  },
  methods: {
    Bv(buttonvalue) {
      //console.log("buttonvalue is:" + buttonvalue);
      this.bvs = buttonvalue;
      //console.log("bvs is :" + this.bvs);
    },
    AddBanner(value){
      this.$emit('AddBanner',value);
    }
  },
  components: {
    Comments,
    Banners,
    Brand,
    PraviteChat,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.siderbar {
  min-height: 96vh;
  padding: 8px 0px;
  background-color: rgb(238, 238, 238);
  border-left: 1px solid rgb(211, 211, 211);
}
.divider {
  margin: 8px;
  height: 1px;
  background-color: rgb(211, 211, 211);
}
.toolspannel {
  width: 400px;
}
button {
  margin: 0px;
  border: 0px;
  text-decoration: none;
  cursor: pointer;
  width: 80px;
  min-height: 80px;
}
span {
  font-size: 50%;
}
</style>