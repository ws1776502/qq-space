<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <h1 style="text-align: center">用户登录</h1>
        <el-divider />
        <el-row>
          <el-col :xs="6" :sm="8" :md="9">
            <div class="grid-content ep-bg-purple"></div>
          </el-col>
          <el-col
            :xs="12"
            :sm="8"
            :md="6"
            style="margin-left: 50%; transform: translate(-50%)"
          >
            <el-card>
              <el-form label-width="120px" label-position="top">
                <el-form-item style="text-align: left" label="用户名">
                  <el-input
                    type="text"
                    v-model="username"
                    placeholder="输入用户名"
                  />
                </el-form-item>
                <el-form-item style="text-align: left" label="密码">
                  <el-input
                    type="password"
                    v-model="password"
                    placeholder="输入密码"
                  />
                </el-form-item>
                <p style="color: red" class="error-message">
                  {{ error_message }}
                </p>
                <el-form-item>
                  <el-col :xs="24" :sm="12">
                    <el-button
                      class="button"
                      type="primary"
                      @click="login"
                      style="width: 100%"
                      >登录
                    </el-button>
                  </el-col>
                  <el-col :xs="24" :sm="12">
                    <el-button
                      class="button"
                      @click="cancel"
                      style="width: 100%"
                      >取消</el-button
                    >
                  </el-col>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
          <el-col :xs="6" :sm="8" :md="9">
            <div class="grid-content ep-bg-purple"></div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      error_message: "",
    };
  },
  methods: {
    login() {
      this.error_message = "";
      let that = this;
      this.$store.dispatch("login", {
        username: that.username,
        password: that.password,
        success() {
          that.$router.push("/");
        },
        error() {
          that.error_message = "用户名或密码错误";
        },
      });
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  margin-bottom: 10px;
}

.el-container {
  height: 100%;
}

.el-main {
  height: 100%;
  background: linear-gradient(215deg, blue, purple, yellow, red);
}

.common-layout {
  height: 100%;
}

/* .el-card{
    background-image: url('https://img.zimei.xyz/202207101321009.jpg');
    background-size:100%;
} */
</style>
