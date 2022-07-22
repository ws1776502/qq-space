<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <TopMenu />
        </el-header>
        <el-main>
          <el-row :gutter="0">
            <el-col :span="24">
              <el-card
                shadow="never"
                style="background-color: var(--el-color-info-light-9)"
              >
                <slot></slot>
              </el-card>
            </el-col>
          </el-row>
        </el-main>
        <el-footer>
          <FootEr />
        </el-footer>
      </el-container>
    </div>
    <!-- 回到顶部 -->
    <el-backtop :right="20" :bottom="100" />
  </div>
</template>

<script>
import FootEr from "./Menu/FootEr.vue";
import TopMenu from "./Menu/TopMenu.vue";
export default {
  components: {
    FootEr,
    TopMenu,
  },
};
</script>

<style scoped></style>
