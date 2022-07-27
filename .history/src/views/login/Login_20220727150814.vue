<template>
  <div class="wrapper">
    <img
      class="wrapper__img"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
    />
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入用户名"
        v-model="username"
      />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegisterClick">注册</div>
    <!--Toast组件-->
    <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { post } from "@/utils/request";
import { reactive } from "vue";
import Toast, { useToastEffect } from "@/components/Toast.vue";

//处理登录逻辑
const useLoginEffect = (showToast) => {
  //登录模块需要弹窗组件模块（弹出登录失败）
  const router = useRouter();
  const data = reactive({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    //需要加上try catch 否则 请求地址写错了（ex：baseURL的地址写错）用户输入完账号密码却登录失败
    try {
      const result = await post("/api/user/login", {
        username: data.username,
        password: data.password,
      });
      if (result?.errno === 0) {
        //result相当于返回的JSON整体
        // //isLogin状态设置&跳转到Home Page
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        showToast("登陆失败");
        // alert("登录失败");
      }
    } catch (e) {
      showToast("发送请求失败");
      // alert("发送请求失败");
    }
  };

  const { username, password } = toRefs(data); //将data解构 以便template层可直接使用 username password
  return { username, password, handleLogin }; //数据 函数 都导出去
};

//登录页面跳注册页面的逻辑

export default {
  name: "Login",
  components: { Toast },
  setup() {
    const router = useRouter();
    const { show, toastMessage, showToast } = useToastEffect();
    const { username, password, handleLogin } = useLoginEffect();

    const handleRegisterClick = () => {
      router.push({ name: "Register" });
    };
    return {
      show,
      toastMessage,
      showToast,
      username,
      password,
      handleLogin,
    };
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
