<template>
  <Tabs value="name1" :animated="false">
    <TabPane label="Upcoming Broadcasts" name="name1">
      <Button type="primary" @click="modal1 = true" size="large" class="ctr"
        >Create a Broadcast</Button
      >
      <Modal v-model="modal1" footer-hide>
        <label>Broadcast to</label><br />

        <Button>+ Add a destination</Button>
        <Button type="text" v-if="modal2" @click="modal2 = false"
          >Skip, Record only</Button
        >
        <section v-else>
          <label>Title</label>
          <Input v-model="value"> </Input>
          <Button type="primary" size="large" to="/CameraPannel"
            >Create Broadcast</Button
          >
        </section>
      </Modal>
    </TabPane>
    <TabPane label="Past Broadcasts" name="name2">Past Broadcasts</TabPane>
  </Tabs>
</template>

<script>
export default {
  name: "Broadcasts",
  data: function () {
    return {
      modal1: false,
      modal2: true,
      modal3: true,
      value: "",
    };
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