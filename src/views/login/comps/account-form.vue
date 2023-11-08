<template>
  <div>
    <a-form :model="formState" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item name="username" :rules="[{ required: true, message: '必填项' }]">
        <a-input v-model:value="formState.username" placeholder="请输入用户名" allow-clear>
          <template #prefix>
            <img src="~@/assets/images/login/user.png" />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item name="password" :rules="[{ required: true, message: '必填项' }]">
        <a-input-password v-model:value="formState.password" placeholder="请输入密码" allow-clear>
          <template #prefix>
            <img src="~@/assets/images/login/password.png" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item name="code" :rules="[{ required: true, message: '必填项' }]">
        <a-input v-model:value="formState.code" placeholder="请输入验证码" allow-clear>
          <template #prefix>
            <img src="~@/assets/images/login/code.png" />
          </template>
          <template #suffix>
            <a class="cursor-pointer" href="javascript;" @click="handleRefreshCode">获取验证码</a>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <div class="flex justify-between">
          <a-checkbox v-model:checked="formState.autoLogin">5天内自动登录</a-checkbox>
          <div class="cursor-pointer" @click="handleForgetPassword">忘记密码</div>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="w-full" html-type="submit">登录</a-button>
      </a-form-item>
      <div>
        <a-checkbox v-model:checked="formState.autoLogin"> 同意<a>隐私政策</a>和<a>第三方信息共享政策</a> </a-checkbox>
      </div>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAppStore } from '@/store';

  interface FormState {
    username: string;
    password: string;
    code: string;
    autoLogin: boolean;
  }
  const appStore = useAppStore();
  const router = useRouter();
  const formState = reactive<FormState>({
    username: '',
    password: '',
    code: '',
    autoLogin: true
  });

  const onFinish = () => {
    appStore.setToken('dsadsadsada');
    router.replace('/');
  };
  const onFinishFailed = () => {};
  const handleRefreshCode = () => {};
  const handleForgetPassword = () => {};
</script>
