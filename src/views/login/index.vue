<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="w-100 bg-white p2">
      <h1 class="text-center pb-3">登录</h1>
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store';
  import { reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  interface FormState {
    username: string;
    password: string;
    remember: boolean;
  }

  const appStore = useAppStore();
  const route = useRoute();
  const router = useRouter();
  const formState = reactive<FormState>({
    username: '',
    password: '',
    remember: true
  });
  const onFinish = (values: any) => {
    console.log('Success:', values);
    appStore.setToken('123456');
    if (route.query.redirect) {
      router.push(route.query.redirect as string);
      return;
    }
    router.push('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
</script>
