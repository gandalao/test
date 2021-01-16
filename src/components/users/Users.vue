<template>
  <div>
    <!-- 添加用户列表 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules">
        <el-form-item prop="name" label="用户名" label-width="80px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item prop="name" label="密码" label-width="80px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item prop="name" label="邮箱" label-width="80px">
          <el-input></el-input>
        </el-form-item>
        <el-form-item prop="name" label="手机" label-width="80px">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <!-- 面包屑区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
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
            >添加用户</el-button
          ></el-col
        >
      </el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="name" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="zhuangtai" label="状态">
          <template slot-scope="scope"
            ><el-switch v-model="scope.row.zhuangtai"> </el-switch
          ></template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
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
            <el-tooltip
              effect="dark"
              content="设置"
              :enterable="false"
              placement="top"
            >
              <el-button
                type="warning"
                size="mini"
                icon="el-icon-s-tools"
              ></el-button>
            </el-tooltip>
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
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
      this.dialogFormVisible = true;
    },
  },
};
</script>>
<style lang="scss" scoped>
.el-table {
  margin-top: 20px;
}
</style>
