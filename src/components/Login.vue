<template>
  <div class="login_container">
    <diV class="login_box">
      <div class="box_logo"><img src="../assets/logo.png" alt="" /></div>
      <el-form
        ref="loginFrom"
        :model="loginForm"
        :rules="rules"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="输入用户名"
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            placeholder="输入密码"
            v-model="loginForm.password"
            type="password"
            prefix-icon="el-icon-s-cooperation"
          ></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="checkpass">
          <el-input
            placeholder="确认密码"
            v-model="loginForm.checkpass"
            type="password"
            prefix-icon="el-icon-s-cooperation"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </diV>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value !== this.loginForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "999999",
        checkpass: "999999",
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        checkpass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginFrom.validate((valid) => {
        console.log(valid);
        if (valid == true) {
          this.$router.push("/home");
          return this.$message({
            message: "登录成功",
            type: "success",
          });
        } else {
          return this.$message.error("登录失败");
        }
      });
      /*   let { username, password } = this.loginFrom;
      if (username == "admin" && password == "999999") {
        sessionStorage.setItem("username", name);
        this.$router.push("/home");
        return this.$message({
          message: "登录成功",
          type: "success",
        });
      } else {
        return this.$message.error("登录失败");
      } */
    },
    reset() {
      this.$refs.loginFrom.resetFields();
    },
  },
};
</script>>
<style lang="scss" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 500px;
  height: 350px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .box_logo {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btn {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
