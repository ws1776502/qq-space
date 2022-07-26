<template>
  <ContTon>
    <el-alert title="404" type="error" description="页面丢失" center />
  </ContTon>
</template>

<script>
import ContTon from "@/components/ContTon.vue";
export default {
  components: {
    ContTon,
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
