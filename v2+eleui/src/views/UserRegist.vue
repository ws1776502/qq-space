<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <h1 style="text-align: center">用户注册</h1>
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
                <el-form-item style="text-align: left" label="确定密码">
                  <el-input
                    type="password"
                    v-model="password_confirm"
                    placeholder="再次输入密码"
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
                      @click="register"
                      style="width: 100%"
                      >注册
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
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      password_confirm: "",
      error_message: "",
    };
  },
  methods: {
    register() {
      this.error_message = "";
      let that = this;
      const a = new FormData();
      a.append("username", this.username);
      a.append("password_confirm", this.password_confirm);
      a.append("password", this.password);
      axios({
        url: "https://app165.acapp.acwing.com.cn/myspace/user/",
        method: "post",
        data: a,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }).then((resp) => {
        if (resp.data.result === "success") {
          that.$store.dispatch("login", {
            username: that.username,
            password: that.password,
            success() {
              that.$router.push("/");
            },
            error() {
              that.error_message = "系统异常，请稍后重试";
            },
          });
        } else {
          that.error_message = resp.data.result;
        }
      });
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.button {
  margin-bottom: 10px;
}

.el-container {
  height: 100%;
}

.el-main {
  height: 100%;
  background: linear-gradient(135deg, blue, purple, yellow, red);
}

.common-layout {
  height: 100%;
}

/* .el-card{
    background-image: url('https://img.zimei.xyz/202207101321009.jpg');
    background-size:100%;
} */
</style>
