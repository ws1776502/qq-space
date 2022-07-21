<template>
  <form>
    <p>编辑帖子</p>
    <el-input
      v-model="textarea"
      maxlength="30"
      placeholder="输入内容"
      show-word-limit
      type="textarea"
      class="textarea"
    />
    <el-button class="button" @click="post_a_post" type="primary" size="small"
      >发帖</el-button
    >
  </form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      textarea: "",
    };
  },
  name: "UserWrite",
  emits: ["post_a_post"],
  methods: {
    setup(props, context) {
      const post_a_post = () => {
        axios({
          url: "https://app165.acapp.acwing.com.cn/myspace/post/",
          method: "post",
          data: {
            content: this.textarea.value,
          },
          headers: {
            Authorization: "Bearer " + this.$store.state.user.access,
          },
        }).then(function (resp) {
          if (resp.result === "success") {
            context.emit("post_a_post", this.textarea.value);
            this.textarea.value = "";
          }
        });
      };
      return {
    
        post_a_post,
      };
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
