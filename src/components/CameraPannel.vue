<template>
  <div class="layout">
    <Layout :style="{ minHeight: '98vh' }">
      <Header :style="{ background: '#fff', padding: '0 0px' }">Header</Header>
      <Layout>
        <Content
          ><p>{{ CameraName }}</p></Content
        >
        <Sider hide-trigger>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "CameraPannel",
  data: function () {
    return {};
  },
  methods: {},
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
</style>