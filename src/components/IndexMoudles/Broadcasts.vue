<template>
  <Tabs value="name1" :animated="false">
    <TabPane label="Upcoming Broadcasts" name="name1">
      <Button type="primary" @click="modal1 = true" size="large" class="ctr"
        >Create a Broadcast</Button
      >
      <Modal v-model="modal1" footer-hide>
        <label>Broadcast to</label>
        <p>
          <Button>+ Add a destination</Button>
          <Button type="text" to="/CameraPannel">Skip, Record only</Button>
        </p>
      </Modal>
    </TabPane>
    <TabPane label="Past Broadcasts" name="name2">Past Broadcasts</TabPane>
  </Tabs>
</template>

<script>
export default {
  name: "Broadcasts",
  data: function () {
    return { modal1: false };
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ctr {
  float: left;
  margin: 0px 20px;
}
</style>