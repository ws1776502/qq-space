<template>
  <div>
    <el-card
      class="box-card"
      shadow="hover"
      v-for="post in list"
      :key="post.id"
    >
      {{ post.content }}

      <el-button
        class="button"
        size="small"
        type="danger"
        v-if="isme"
        @click="delete_a_post(post.id)"
        >删除
      </el-button>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isme: "",
      list: [],
    };
  },
  name: "UserPost",
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
    user: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.list = this.$props.posts.posts;
    if (this.$route.query.userId === this.$store.state.user.id) {
      return (this.isme = true);
    } else {
      return (this.isme = false);
    }
  },
  watch: {
    posts(val) {
      this.list = val;
    },
    deep: true,
  },
  methods: {
    delete_a_post(post_id) {
      const a = new FormData();
      a.append("post_id", post_id);
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        method: "delete",
        data: a,
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      }).then((resp) => {
        if (resp.data.result === "success") {
          this.$emit("delete_a_post", post_id);
        }
      });
    },
  },
};
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.button {
  float: right;
}
</style>
