<template>
  <el-card class="box-card">
    <div class="text item">
      <el-row :gutter="10">
        <el-col :span="6">
          <img :src="userss.photo" alt="用户头像" />
        </el-col>
        <el-col :span="18">
          <div class="username">
            {{ userss.username }}
          </div>
          <div class="fans">
            {{ userss.followerCount }}
          </div>
          <el-button
            @click="follow"
            v-if="!userss.is_followed && !isme"
            type="primary"
            size="small"
          >
            +关注
          </el-button>
          <el-button
            @click="unfollow"
            v-if="userss.is_followed && !isme"
            type="primary"
            plain
            size="small"
          >
            取消关注
          </el-button>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isme: "",
      userss: "",
    };
  },
  name: "UserInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  created() {
    if (this.$route.query.userId === this.$store.state.user.id) {
      return (this.isme = true);
    } else {
      return (this.isme = false);
    }
  },
  methods: {
    follow() {
      const fomsdata = new FormData();
      fomsdata.append("target_id", this.userss.id);
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        method: "post",
        data: fomsdata,
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      }).then((resp) => {
        if (resp.data.result === "success") {
          this.$emit("follow");
        }
      });
    },
    unfollow() {
      const fomsdata = new FormData();
      fomsdata.append("target_id", this.userss.id);
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        method: "post",
        data: fomsdata,
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      }).then((resp) => {
        if (resp.data.result === "success") {
          this.$emit("unfollow");
        }
      });
    },
  },
  watch: {
    user: {
      handler(val) {
        this.userss = val;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

img {
  border-radius: 50%;
  height: 45px;
  width: 45px;
}

.username {
  font-weight: bold;
}

.fans {
  font-size: 12px;
  color: gray;
}

button {
  padding: 2px 4px;
  font-size: 12px;
}
</style>
