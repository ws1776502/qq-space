<template>
  <ContTon>
    <el-alert
      title="用户动态"
      type="success"
      description="你可以查看用户动态"
      center />
    <el-col>
      <el-row :gutter="10">
        <el-col :sm="8" :md="6">
          <UserInfoVue :user="user" @follow="follow" @unfollow="unfollow" />
          <UserWriteVue v-if="is_me" @post_a_post="post_a_post" />
        </el-col>
        <el-col :sm="16" :md="18">
          <UserPostVue
            :posts="posts"
            :user="user"
            @delete_a_post="delete_a_post"
          />
        </el-col>
      </el-row> </el-col
  ></ContTon>
</template>

<script>
import ContTon from "@/components/ContTon.vue";
import UserInfoVue from "@/components/userprofile/UserInfo";
import UserPostVue from "@/components/userprofile/UserPost";
import UserWriteVue from "@/components/userprofile/UserWrite";

export default {
  components: {
    ContTon,
    UserInfoVue,
    UserPostVue,
    UserWriteVue,
  },
};
</script>

<style scoped></style>
