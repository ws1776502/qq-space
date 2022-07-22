import axios from "axios";
import jwt_decode from "jwt-decode";

const ModuleUser = {
  state: {
    id: "",
    username: "",
    photo: "",
    followerCount: 0,
    access: "",
    refresh: "",
    is_login: false,
  },
  getters: {},
  mutations: {
    updateUser(state, user) {
      state.id = user.id;
      state.username = user.username;
      state.photo = user.photo;
      state.followerCount = user.followerCount;
      state.access = user.access;
      state.refresh = user.refresh;
      state.is_login = user.is_login;
    },
    updateAccess(state, access) {
      state.access = access;
    },
    logout(state) {
      state.id = "";
      state.username = "";
      state.photo = "";
      state.followerCount = 0;
      state.access = "";
      state.refresh = "";
      state.is_login = false;
    },
  },
  actions: {
    login(context, data) {
      axios({
        url: "https://app165.acapp.acwing.com.cn/api/token/",
        method: "post",
        data: {
          username: data.username,
          password: data.password,
        },
      })
        .then((resp) => {
          const { access, refresh } = resp.data;
          const access_obj = jwt_decode(access);
          console.log(access_obj, "111111111");
          setInterval(() => {
            axios({
              url: "https://app165.acapp.acwing.com.cn/api/token/refresh/",
              method: "post",
              data: {
                refresh,
              },
            }).then((resp) => {
              context.commit("updateAccess", resp.data.access);
            });
          }, 4.5 * 60 * 1000);
          axios({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            method: "get",
            params: {
              user_id: access_obj.user_id,
            },
            headers: {
              Authorization: "Bearer " + access,
            },
          }).then((resp) => {
            console.log(resp.data, "2222222");
            context.commit("updateUser", {
              ...resp.data,
              access: access,
              refresh: refresh,
              is_login: true,
            });
            data.success();
          });
        })
        .catch(() => {
          data.error();
        });
    },
  },
  modules: {},
};

export default ModuleUser;
