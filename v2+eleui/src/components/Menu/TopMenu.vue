<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#ffdd"
      router
    >
      <el-menu-item index="1" route="/" class="hidden-sm-and-down"
        >WANMEI</el-menu-item
      >
      <el-menu-item index="/" class="hidden-sm-and-down">首页</el-menu-item>
      <el-menu-item index="/userlist/" class="hidden-sm-and-down"
        >用户列表</el-menu-item
      >
      <el-menu-item
        index="/userprofile"
        class="hidden-sm-and-down"
        v-if="$store.state.user.is_login"
        :route="{
          name: 'userprofile',
          query: { userId: $store.state.user.id },
        }"
        >用户动态
      </el-menu-item>

      <div class="flex-grow"></div>

      <el-menu-item index="/userlogin/" v-if="!$store.state.user.is_login"
        >登录</el-menu-item
      >
      <el-menu-item index="/userregist/" v-if="!$store.state.user.is_login"
        >注册</el-menu-item
      >
      <el-menu-item
        index="3"
        :route="{
          name: 'userprofile',
          query: { userId: $store.state.user.id },
        }"
        v-if="$store.state.user.is_login"
        >{{ $store.state.user.username }}
      </el-menu-item>
      <el-menu-item
        index="4"
        route="/"
        @click="logout"
        v-if="$store.state.user.is_login"
        >退出</el-menu-item
      >
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.$store.commit("logout");
    },
  },
};
</script>
<style scoped>
.el-menu-demo {
  display: flex;
}
.flex-grow {
  flex: 1;
}
</style>
