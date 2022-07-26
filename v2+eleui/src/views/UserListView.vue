<template>
  <ContTon>
    <el-alert
      title="用户列表"
      type="success"
      description="你可以查看用户列表"
      center
    />
    <el-card
      class="box-card"
      shadow="hover"
      v-for="user in users"
      :key="user.id"
    >
      <div class="text item" @click="open_user_profile(user.id)">
        <el-row :gutter="10">
          <el-col :span="3">
            <img class="img-fluid" :src="user.photo" alt="用户头像" />
          </el-col>
          <el-col :span="21">
            <div class="username">{{ user.username }}</div>
            <div class="follower-count">{{ user.followerCount }}</div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </ContTon>
</template>

<script>
import axios from "axios";
import ContTon from "@/components/ContTon.vue";
export default {
  components: {
    ContTon,
  },
  data() {
    return {
      users: "",
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let res = await axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
        method: "get",
      });
      if (res.data) {
        this.users = res.data;
      }
    },
    open_user_profile(userId) {
      if (this.$store.state.user.is_login) {
        this.$router.push({
          name: "userprofile",
          query: {
            userId,
          },
        });
      } else {
        this.$router.push({
          name: "userlogin",
        });
      }
    },
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}

.username {
  font-weight: bold;
  height: 50%;
}

.follower-count {
  font-size: 12px;
  color: gray;
  height: 50%;
}

.el-card {
  margin-bottom: 20px;
  cursor: pointer;
}

.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
