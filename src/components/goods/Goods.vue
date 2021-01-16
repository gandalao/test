<template>
  <div>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <!-- 搜索与添加区域 -->

      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容">
            <el-button
              slot="append"
              icon="el-icon-search"
            ></el-button> </el-input
        ></el-col>
        <el-col :span="4">
          <el-button type="primary" @click="showAdd"
            >添加商品</el-button
          ></el-col
        >
      </el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="goods" label="商品名称"> </el-table-column>
        <el-table-column prop="price" label="商品价格" width="80">
        </el-table-column>
        <el-table-column prop="amount" label="数量" width="80">
        </el-table-column>
        <el-table-column prop="date" label="时间" width="160">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
            ></el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[1, 2, 5, 8]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="2"
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      tableData: [
        {
          goods:
            "MIJIC/民洁MJ801 拖把池陶瓷拖布池阳台拖把池拖布盆洗衣池墩布池 覆盖区域内送货上门（不包安装）",
          price: "￥285.00",
          amount: "100",
          date: "1970-01-18 20:37:38",
        },
        {
          goods: "凯鹰(KAIYING) 马桶盖板防臭抗压缓降静音坐便器板马桶盖TF3 01款",
         price: "￥285.00",
          amount: "100",
          date: "1970-01-18 20:37:38",
        },
        {
          goods: "潜水艇通用管道地漏套装",
          price: "￥285.00",
          amount: "100",
          date: "1970-01-18 20:37:38",
        },
        {
          goods:
            "JOMOO九牧 水龙头 面盆龙头 单孔龙头 卫生间浴室柜洗脸盆水龙头32150系列",
          price: "￥285.00",
          amount: "100",
          date: "1970-01-18 20:37:38",
        },
      ],
      form: {
        name: "",
        data: "",
        address: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        data: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {},
    showAdd() {
      this.$router.push("/addGoods");
    },
  },
};
</script>>
<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
  font-size: 12px;
}
</style>
