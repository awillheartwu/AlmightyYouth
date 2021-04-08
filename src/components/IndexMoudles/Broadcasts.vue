<template>
  <Tabs value="name1" :animated="false" @on-click="select">
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
          <Button type="primary" size="large" @click="ClickBut"
            >Create Broadcast</Button
          >
        </section>
      </Modal>
    </TabPane>
    <TabPane label="Past Broadcasts" name="name2">
      <router-view></router-view>
    </TabPane>
  </Tabs>
</template>

<script>
export default {
  name: "Broadcasts",
  data: function () {
    return {
      modal1: false,
      modal2: true,
      value: "",
    };
  },
  methods: {
    ClickBut() {
      this.$store.commit("changeCameraName", this.value);
      this.$router.push({ name: "camerapannel" });
    },
    select(name) {
      name == "name2"
        ? this.$router.push({ name: "past" })
        : this.$router.push({ name: "broadcasts" });
    },
  },
  components: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ctr {
  float: left;
  margin: 0px 20px;
}
</style>