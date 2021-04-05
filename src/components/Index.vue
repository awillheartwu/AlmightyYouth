<template>
  <div class="layout">
    <Layout :style="{minHeight: '98vh'}">
      <Header :style="{ background: '#fff', padding: '0 0px' }">
        <Menu mode="horizontal" active-name="1">
          <div class="layout-logo">
            <Icon type="ios-bug" size="50" />
            <span>Stream<b>Canvas</b></span>
          </div>
          <div class="layout-nav">
            <MenuItem name="1"> Upgrade </MenuItem>
            <Submenu name="2">
              <template slot="title"> My Account </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{ background: '#fff' }">
          <Menu active-name="1-2" width="auto">
            <MenuItem name="1-1" to="/broadcasts" replace>
              <Icon type="ios-videocam" />
              <span>Broadcasts</span>
            </MenuItem>
            <MenuItem name="1-2">
              <Icon type="md-share" />
              <span>Destinations</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout :style="{ padding: '0 2px 2px' }">
          <div :style="{ margin: '2px 0' }"></div>
          <Content
            :style="{
              padding: '2px',
             
              background: '#fff',
            }"
          >
            <Broadcasts></Broadcasts>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>


<script>
import Broadcasts from "./IndexMoudles/Broadcasts";
export default {
  name: "index",
  data: function () {
    return {};
  },
  methods: {},
  components: {
    Broadcasts,
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
  span {
    font-size: 200%;
  }
}
.layout-nav {
  width: auto;
  margin: 0 auto;
  margin-right: 0px;
  float: right;
}
</style>