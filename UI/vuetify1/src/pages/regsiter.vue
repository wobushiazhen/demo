<template>
  <div class="regsiter">
    <div class="fixed-cr">
      <h5>azhen的论坛</h5>
      <v-card class="mx-auto">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="i in 2" :key="i" :value="'tab-' + i">
            <v-card class="tab-card" v-if="i == 1">
              <h5>注册登录</h5>
              <v-img
                aspect-ratio="1/1"
                max-width="150"
                class="mx-auto"
                src="@/assets/regsiter/QRcode.png"
              ></v-img>
              <v-row class="mt-2 tab-row mb-4">
                <v-img
                  max-width="32"
                  src="@/assets/regsiter/WXlogo.png"
                ></v-img>
                <p>微信扫一扫</p>
              </v-row>
            </v-card>

            <v-card class="tab-card" v-if="i == 2">
              <v-form ref="form">
                <v-text-field
                  v-model="formData.username"
                  label="用户名"
                  required
                />
                <v-text-field
                  v-model="formData.password"
                  type="password"
                  label="密码"
                  required
                />
                <v-text-field
                  v-model="formData.email"
                  label="邮箱"
                  type="email"
                  required
                />
              </v-form>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>

        <v-tabs v-model="tab" align-tabs="center">
          <v-tab value="tab-1">
            <!-- <v-icon icon="mdi-phone"></v-icon> -->
            微信扫一扫登录/注册
          </v-tab>

          <v-tab value="tab-2">
            <!-- <v-icon icon="mdi-heart"></v-icon> -->
            账号密码登录/注册
          </v-tab>
        </v-tabs>

        <p class="tab-p">继续即代表同意《服务协议》和《隐私政策》</p>
      </v-card>
    </div>
  </div>
</template>  

<script setup>
import { ref } from "vue";

const formData = ref({ username: "", password: "", email: "" });
const tab = ref("tab-1");
</script>

<style  scoped lang="scss">
.regsiter {
  width: 100%;
  height: 100vh;
  background: url("../assets/regsiter/bg.png") no-repeat center center;
  background-size: cover;
}
.fixed-cr {
  position: fixed;
  top: 50%;
  right: 10%;
  transform: translate(0%, -50%);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 32px;
  h5 {
    text-align: center;
    margin-bottom: 26px;
    font-size: 22px;
  }
  .mx-auto {
    width: 350px;
  }
  v-btn {
    width: 100%;
  }
  .tab-card {
    padding: 20px 10px;
  }
  .tab-row {
    width: 100%;
    margin-top: 16px;
    align-items: center;
    justify-content: center;
  }
  .tab-p {
    margin-top: 25px;
    text-align: center;
  }
  .v-card--variant-elevated {
    box-shadow: none;
  }
}
</style> 