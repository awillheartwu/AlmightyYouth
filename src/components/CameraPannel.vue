<template>
  <div class="layout">
    <Layout :style="{ minHeight: '98vh' }">
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>