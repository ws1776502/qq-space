<template>
  <ContTon>
    <el-alert
      title="用户动态"
      type="success"
      description="你可以查看用户动态"
      center
    />
    <el-col>
      <el-row :gutter="10">
        <el-col :sm="8" :md="6">
          <UserInfoVue :user="user" @follow="follow" @unfollow="unfollow" />
          <UserWriteVue v-if="isme" @post_a_post="post_a_post" />
        </el-col>
        <el-col :sm="16" :md="18">
          <UserPostVue
            :posts="postcon"
            :user="user"
            @delete_a_post="delete_a_post"
          />
        </el-col>
      </el-row>
    </el-col>
  </ContTon>
</template>

<script>
import ContTon from "@/components/ContTon.vue";
import UserInfoVue from "@/components/userprofile/UserInfo";
import UserPostVue from "@/components/userprofile/UserPost";
import UserWriteVue from "@/components/userprofile/UserWrite";
import axios from "axios";
export default {
  data() {
    return {
      user: {},
      posts: {},
      postcon: [],
      is_me: "",
    };
  },
  components: {
    ContTon,
    UserInfoVue,
    UserPostVue,
    UserWriteVue,
  },
  created() {
    this.init1();
    this.init2();
    if (this.$route.query.userId === this.$store.state.user.id) {
      return (this.isme = true);
    } else {
      return (this.isme = false);
    }
  },
  watch: {},
  methods: {
    async init1() {
      let resp = await axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
        method: "get",
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
        params: {
          user_id: this.$route.query.userId,
        },
      });
      if (resp) {
        this.user = resp.data;
      }
    },
    async init2() {
      let resp = await axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/post/",
        method: "get",
        params: {
          user_id: this.$route.query.userId,
        },
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      });
      if (resp) {
        this.posts.count = resp.data.length;
        this.posts.posts = resp.data;
        this.postcon = resp.data;
      }
    },
    follow() {
      if (this.user.is_followed) return;
      this.user.is_followed = true;
      this.user.followerCount++;
    },
    unfollow() {
      if (!this.user.is_followed) return;
      this.user.is_followed = false;
      this.user.followerCount--;
    },
    post_a_post(content) {
      this.posts.count++;
      this.postcon.unshift({
        id: this.posts.count,
        userId: this.$route.query.userId,
        content: content,
      });
    },
    delete_a_post(post_id) {
      for (let index = 0; index < this.postcon.length; index++) {
        if (this.postcon[index].id === post_id) {
          this.postcon.splice(index, 1);
        }
      }
      // this.postcon = this.postcon.filter((post) => post.id !== post.id);
      // this.posts.count = this.postcon.length;
    },
  },
};
</script>
