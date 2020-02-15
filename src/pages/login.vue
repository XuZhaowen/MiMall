<template>
  <div class="login">
    <div class="container">
      <a href="javascript:;">
        <img src="imgs/login-logo.png" alt />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="zh-login">账号登录</span>
            <span class="sx-login">|</span>
            <span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机登录/注册</div>
            <div class="reg">
              立即注册
              <span>|</span>
              忘记密码？
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href>简体</a>
        <span>|</span>
        <a href>繁体</a>
        <span>|</span>
        <a href>English</a>
        <span>|</span>
        <a href>常见问题</a>
        <span>|</span>
        <a href>隐私政策</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  // data:{}这个是全局声明，会串用
  data() {
    return {
      username: "",
      password: "",
      // userId传给服务端，知道用户id
      userId: ""
      // 打印res查看
      //   res: {}
    };
  },
  methods: {
    login() {
      // es6语法,解构语法(对象解码)
      let { username, password } = this;
      this.axios
        .post("/user/login", {
          // 名字相同，用简写
          username,
          password
        })
        .then(res => {
          //   this.res = res;
          this.$cookie.set("userId", res.id, { expires: "1M" });
          // to-do 保存用户名
          this.$router.push("/index");
        });
    },
    register() {
      this.axios
        .post("/user/register", {
          // 名字相同，用简写
          username: "admin1",
          password: "admin1",
          email: "admin1@163.com"
        })
        .then(() => {
          alert("注册成功!");
        });
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.login {
  .container {
    height: 112px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/imgs/login-bg.jpg") no-repeat center;
    .container {
      position: relative;
      height: 576px;
      .login-form {
        box-sizing: border-box;
        position: absolute;
        width: 410px;
        height: 510px;
        margin-top: 37px;
        margin-left: 793px;
        background-color: $colorG;
        padding-left: 31px;
        padding-right: 31px;
        h3 {
          font-size: 24px;
          line-height: 24px;
          margin: 40px auto 49px;
          text-align: center;
          color: $colorC;
          .zh-login {
            color: #ff6600;
          }
          .sx-login {
            margin: 0 32px;
            color: $colorF;
          }
        }
        .input {
          width: 348px;
          height: 50px;
          border: 1px solid $colorH;
          margin-bottom: 20px;
          input {
            border: 0px;
            outline: none;
            font-size: 14px;
            margin: 18px 188px 18px 18px;
          }
        }
        .btn-box {
          width: 348px;
          height: 50px;
          background-color: #ff6600;
          margin-top: 30px;
          text-align: center;
          a {
            color: $colorG;
            line-height: 50px;
            font-size: 16px;
          }
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: $colorD;
          .sms {
            color: #ff6600;
            cursor: pointer;
          }
          span {
            color: $colorF;
          }
        }
      }
    }
  }

  .footer {
    text-align: center;
    padding-top: 149px;
    font-size: 16px;
    height: 100px;
    .footer-link {
      margin-bottom: 19px;
    }
    a {
      color: $colorB;
      display: inline-block;
    }
    span {
      padding-left: 2px;
      padding-right: 2px;
    }
    .bq {
      color: $colorB;
    }
  }
}
</style>
