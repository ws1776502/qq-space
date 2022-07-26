<template>
  <div>
    <form>
      <p>编辑帖子</p>
      <el-input
        v-model="textareacont"
        maxlength="30"
        :rows="2"
        placeholder="输入内容"
        show-word-limit
        type="textarea"
        class="textarea"
      />
      <el-button class="button" @click="post_a_post" type="primary" size="small"
        >发帖</el-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserWrite",
  data() {
    return {
      textareacont: "",
    };
  },
  methods: {
    post_a_post() {
      const fomsdata = new FormData();
      fomsdata.append("content", this.textareacont);
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        method: "post",
        data: fomsdata,
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      }).then((resp) => {
        if (resp.data.result === "success") {
          this.$emit("post_a_post", this.textareacont);
          this.textareacont = "";
        }
      });
    },
  },
};
</script>

<style scoped>
.textarea {
  margin-bottom: 10px;
}

.button {
  margin-bottom: 10px;
}
</style>
