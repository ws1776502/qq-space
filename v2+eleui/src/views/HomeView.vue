<template>
  <ContTon>
    <el-row :gutter="12">
      <el-col :xs="24" :sm="18">
        <el-alert
          title="欢迎来到 Bots"
          type="success"
          description="你可以创建游戏桌来进行对局，开始咯。"
          center
        />
        <el-card shadow="always">
          <h3>陋室铭</h3>
          <p>山不在高，有仙则名。</p>
          <p>水不在深，有龙则灵。</p>
          <p>斯是陋室，惟吾德馨。</p>
          <p>苔痕上阶绿，草色入帘青。</p>
          <p>谈笑有鸿儒，往来无白丁。</p>
          <p>可以调素琴，阅金经。</p>
          <p>无丝竹之乱耳，无案牍之劳形。</p>
          <p>南阳诸葛庐，西蜀子云亭。</p>
          <p>孔子云：何陋之有？</p>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="6">
        <el-card shadow="always">
          <p>
            欲查规则？点击
            <el-link type="primary" href="#" class="card-link"
              >游戏规则</el-link
            >
            进入游戏一览。
          </p>
          <p>
            参加比赛？点击
            <el-link type="primary" href="#" class="card-link">比赛</el-link>
            进入小组一览。
          </p>
          <p>
            提交程序？点击
            <el-link type="primary" href="#" class="card-link">程序</el-link>
            或顶栏按钮管理你的 Bot。
          </p>
        </el-card>
      </el-col>
    </el-row>
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

<style scoped></style>
