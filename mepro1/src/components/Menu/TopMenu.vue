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
      <el-menu-item index="/userprofile/">用户动态 </el-menu-item>

      <div class="flex-grow"></div>

      <el-menu-item index="/userlogin/">登录</el-menu-item>
      <el-menu-item index="/userregist/">注册</el-menu-item>
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
