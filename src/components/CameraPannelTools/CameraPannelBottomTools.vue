<template>
  <div class="bottomtools">
    <div class="boxs">
      <ButtonGroup>
        <Button icon="md-mic" size="large">Mic</Button>
        <Button icon="md-videocam" size="large">Cam</Button>
        <Button icon="md-settings" size="large">Settings</Button>
        <Button icon="md-share" size="large">Share</Button>
        <Button icon="md-add" size="large">Invite</Button>
        <Button icon="md-close" size="large">Close</Button>
      </ButtonGroup>
    </div>
    <div class="issues">
      <span>
        <a href="/issues" style="text-decoration: underline">Having issues?</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CameraPannelBottomTools",
  data: function () {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bottomtools {
  justify-content: center;
  align-items: flex-end;
  display: flex;
  flex: 1;
  .boxs {
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    border: 1px solid rgb(211, 211, 211);
    box-shadow: #cccccc 0px 1px 3px 0px, #dbdbdb 0px 1px 1px 0px,
      #e0e0e0 0px 2px 1px -1px;
  }
  .issues {
    margin-left: 10px;
  }
}
</style>
