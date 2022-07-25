<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">注册</div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const handleLogin = () => {
      axios
        .post(
          "https://www.fastmock.site/#/project/8ee236b9be977eee65b73b9cd481d691/api/user/login",
          {
            username: data.username,
            password: data.password,
          }
        )
        .then( ())
        .catch();
    };
    const handleRegisterClick = () => {
      router.push({ name: "Register" });
    };

    const data = reactive({
      username: "",
      password: "",
    });
    return { handleLogin, handleRegisterClick, data };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/variables.scss";
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    &__content {
      width: 100%;
      line-height: 0.4rem;
      background: none;
      border: none;
      outline: none; //保证点击输入时也不会有奇怪的边框出现
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: 0.14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
