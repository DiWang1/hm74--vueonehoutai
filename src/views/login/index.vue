<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" />
      <el-form ref="Formlogin" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:240px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
            <span>我已同意并阅读</span>
            <el-button type="text">用户协议</el-button>
            <span>和</span>
            <el-button type="text">隐私条款</el-button>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="Formlogin('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 因为函数要先声明在使用,所以要在return返回之前去声明
    const checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不正确'))
      }
    }
    return {
      checked: true,
      // 表单数据对象
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      // 表单验证规则
      loginRules: {
        // trigger: ‘blur’ 表示“当失去焦点时（光标不显示的时候），触发此提示”
        mobile: [
          { required: true, message: '请输入您的手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输如您获取的验证码', trigger: 'blur' },
          { len: 6, message: '请输入六位数字', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    Formlogin () {
      // 对整个loginForm表单进行验证
      this.$refs.Formlogin.validate(valid => {
        if (valid) {
          // 提交登录请求,参数一是地址,参数二是你要传回后端的数据也就是loginForm当中包含的字段
          this.$http
            .post(
              'authorizations',
              this.loginForm
            )
            .then(res => {
              // 保存数据,登录保持会话状态,res.data.data用来获取token的
              window.sessionStorage.setItem('hm74--vueonehoutai', JSON.stringify(res.data.data))
              this.$router.push('/')
            })
            .catch(() => {
              this.$message.error('手机号或验证码错误')
            })
        }
      })
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
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
    span {
      color: #333;
    }
  }
}
</style>
