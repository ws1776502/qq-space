<template>
  <el-card class="box-card">
    <div class="text item">
      <el-row :gutter="10">
        <el-col :span="6">
          <img :src="user.photo" alt="用户头像" />
        </el-col>
        <el-col :span="18">
          <div class="username">
            {{ user.username }}
          </div>
          <div class="fans">
            {{ user.followerCount }}
          </div>
          <el-button
            @click="follow"
            v-if="!user.is_followed && !is_me"
            type="primary"
            size="small"
          >
            +关注
          </el-button>
          <el-button
            @click="unfollow"
            v-if="user.is_followed && !is_me"
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
  name: "UserInfo",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  created() {},
  methods: {
    setup(props, context) {
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        method: "post",
        data: {
          target_id: props.user.id,
        },
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      }).then(function (resp) {
        if (resp.result === "success") {
          context.emit("follow");
        }
      });
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
        method: "post",
        data: {
          target_id: props.user.id,
        },
        headers: {
          Authorization: "Bearer " + this.$store.state.user.access,
        },
      }).then(function (resp) {
        if (resp.result === "success") {
          context.emit("unfollow");
          // console.log(is_me);
        }
      });
    },
  },
  computed: {
    //   this.props.user.id(val){
    //       this.$store.state.user.id === val
    //     }
    // }
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
