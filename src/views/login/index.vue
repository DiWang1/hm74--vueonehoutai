<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png"/>
      <el-form ref="loginForm" :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
            <span>我已同意并阅读</span>
            <el-button type="text">用户协议</el-button><span>和</span>
            <el-button type="text">隐私条款</el-button>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
           <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      loginForm: {
        model: '',
        code: ''
      }
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  // cover 铺面容器 多余的裁剪   contain 在容器内容完全显示图片
  // 背景图定位 / 背景图尺寸
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login-box {
    width: 400px;
    height: 335px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
    span{
        color:  #333
    }
  }
}
</style>
