<template>
  <div>
    <div class="bannerheader">
      <Button type="text">Example banners</Button>
    </div>
    <div class="bannerbody">
      <ul id="bannerlist" class="bannerul">
        <li v-for="input in inputs" :key="input.id">
          <div class="card">
            <div v-if="input.editstatus">
              <span>{{ input.message }}</span>
            </div>
            <div v-else>
              <Input
                v-model="value"
                type="textarea"
                :rows="4"
                style="width: 300"
                placeholder="Enter a banner"
              />
              <Button type="text" size="small" @click="saveitem(input.id)"
                >save</Button
              >
            </div>

            <div class="bannerbuttongroup">
              <Button type="text" size="small" @click="showitem(input.id)">
                {{ input.isshow }} </Button
              ><br />
              <Button
                type="text"
                size="small"
                @click="edititem(input.id, input.message)"
                >edit</Button
              ><br />
              <Button type="text" size="small" @click="deleteitem(input.id)"
                >delete</Button
              >
            </div>
          </div>
        </li>
      </ul>
      <div v-if="iscreate == 0">
        <Button type="text" size="large" @click="createitem">create</Button
        ><br />
      </div>
      <div v-else>
        <Input
          v-model="value"
          type="textarea"
          :rows="4"
          style="width: 300"
          placeholder="Enter a banner"
        />
        <Button type="text" size="small" @click="citem">save</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banners",
  data: function () {
    return {
      value: "",
      iscreate: 0,
      inputs: [
        {
          id: 0,
          editstatus: 1,
          isshow: "show",
          message:
            "This is an example of a banner. Click on a banner to show it on screen.",
        },
        {
          id: 1,
          editstatus: 1,
          isshow: "show",
          message:
            "Use banners to summarize your talking points and display calls to action",
        },
      ],
    };
  },
  methods: {
    showitem(id) {
      let index = this.inputs.findIndex((item) => item.id === id);
      let value = this.inputs[index].message;
      this.$emit("AddBanner", value);
      let bs = this.inputs[index].isshow;
      if (bs == "show") {
        this.inputs[index].isshow = "hide";
      } else {
        this.inputs[index].isshow = "show";
      }
      console.log("show");
    },
    edititem(id, message) {
      this.iscreate = 0;
      let index = this.inputs.findIndex((item) => item.id === id);
      if (this.inputs[index].editstatus == 1) {
        for (const x in this.inputs) {
          this.inputs[x].editstatus = 1;
        }
        this.inputs[index].editstatus = 0;
      } else {
        this.inputs[index].editstatus = 1;
      }
      this.value = message;
      console.log("edit");
    },
    saveitem(id) {
      let index = this.inputs.findIndex((item) => item.id === id);
      this.inputs[index].message = this.value;
      this.inputs[index].editstatus = 1;
      console.log("save");
    },
    deleteitem(id) {
      let index = this.inputs.findIndex((item) => item.id === id);
      this.inputs.splice(index, 1);
      for (const x in this.inputs) {
        let indexx = this.inputs.findIndex(
          (item) => item.id === this.inputs[x].id
        );
        if (this.inputs[x].id !== indexx) {
          this.inputs[x].id = indexx;
        }
      }
      console.log("delete");
    },
    createitem() {
      this.value = "";
      this.iscreate = 1;
      for (const x in this.inputs) {
        this.inputs[x].editstatus = 1;
      }
      console.log("create");
    },
    citem() {
      let id1 = this.inputs.length;
      this.inputs.push({
        id: id1,
        editstatus: 1,
        message: this.value,
        isshow: "show",
      });
      //console.log(this.inputs);
      this.value = "";
    },
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
button {
  padding: 6px 0px;
  border-radius: 2px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
}
.bannerheader {
  width: 100%;
  flex: 0 0 50px;
  padding: 0px 16px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  border-bottom: 1px solid rgb(211, 211, 211);
}
.card {
  width: 100%;
  min-height: 66px;
  display: flex;
  position: relative;
  padding: 8px;
  border-radius: 4px;
  background-color: rgb(238, 238, 238);
  color: rgb(32, 38, 52);
  z-index: 0;
  margin-bottom: 8px;
}
ul {
  list-style: none;
}
</style>