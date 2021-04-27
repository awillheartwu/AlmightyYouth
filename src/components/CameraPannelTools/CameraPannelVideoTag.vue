<template>
  <div class="videotag">
    <Button size="large" icon="ios-contact"></Button>
    <Button size="large" icon="ios-contacts"></Button>
    <Button size="large" icon="ios-people"></Button>
    <Button size="large" icon="ios-color-filter-outline"></Button>
  </div>
</template>

<script>
export default {
  name: "CameraPannelVideoTag",
  data: function () {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.videotag {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>