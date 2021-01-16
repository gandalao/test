<template>
  <div class="home">
    <el-container class="home_container">
      <!-- 头部区域 -->
      <el-header>
        <div>
          <img src="../assets/logo.png" alt="" />
          <span>电商管理系统</span>
        </div>
      </el-header>
      <el-container>
        <!-- 侧边区域 -->
        <el-aside :width="isCollapse ? '64px' : '200px'">
          <div class="aside-button" @click="asideCollapse">|||</div>
          <!-- 侧边栏菜单区域 -->
          <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#007bf3"
            :collapse="isCollapse"
            :collapse-transition="false"
            router
          >
            <!-- 一级菜单 -->
            <el-submenu index="1">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-user-solid"></i>
                <!-- 文本 -->
                <span>用户管理</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item index="users">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>用户列表</span>
                </template></el-menu-item
              >
            </el-submenu>
            <el-submenu index="2">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-s-ticket"></i>
                <!-- 文本 -->
                <span>权限管理</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item index="roles">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>角色列表</span>
                </template></el-menu-item
              >
              <el-menu-item index="rights">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>权限列表</span>
                </template></el-menu-item
              >
            </el-submenu>
            <el-submenu index="3">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-s-goods"></i>
                <!-- 文本 -->
                <span>商品管理</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item index="goods">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>商品列表</span>
                </template></el-menu-item
              >
              <el-menu-item index="params">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>分类参数</span>
                </template></el-menu-item
              >
              <el-menu-item index="categories">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>商品分类</span>
                </template></el-menu-item
              >
            </el-submenu>
            <el-submenu index="4">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-s-order"></i>
                <!-- 文本 -->
                <span>订单管理</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item index="orders">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>订单列表</span>
                </template></el-menu-item
              >
            </el-submenu>
            <el-submenu index="5">
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-s-platform"></i>
                <!-- 文本 -->
                <span>数据统计</span>
              </template>

              <!-- 二级菜单 -->
              <el-menu-item index="reports">
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-menu"></i>
                  <!-- 文本 -->
                  <span>数据报表</span>
                </template></el-menu-item
              >
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 内容区域 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },

  methods: {
    asideCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>
<style lang='scss' scoped>
img {
  width: 50px;
  height: 50px;
  // padding-top: 10px;
}
.home {
  height: 100%;
}

.home_container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
      color: #fff;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: #e9eef3;
}
.aside-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
