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
              <v-form ref="form" @submit.prevent="submitForm">
                <v-text-field v-model="formData.email" label="邮箱" required />
                <v-btn
                  v-show="formData.email"
                  ref="refSendBtn"
                  class="send-btn"
                  :disabled="isSending"
                  @click="sendCode()"
                  >{{ buttonText }}</v-btn
                >
                <v-text-field v-model="formData.code" label="验证码" required />
                <v-btn class="submit-btn" type="submit" color="primary"
                  >提交</v-btn
                >
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
            邮箱登录/注册
          </v-tab>
        </v-tabs>

        <p class="tab-p">继续即代表同意《服务协议》和《隐私政策》</p>
      </v-card>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { baseurl, getCookie, setCookie } from "@/utils/common";
import { showTips } from "@/components/tips/tips.js";

const tab = ref("tab-2");
const refSendBtn = ref(null);
const isSending = ref(false); // 是否正在发送
const buttonText = ref("发送验证码"); // 按钮文字
const formData = reactive({
  email: "",
  code: "",
});

// Methods
const submitForm = async () => {
  await axios
    .post(baseurl + "/verify-code", formData, {
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNzM2MzA5ODkyLCJleHAiOjE3MzcxNzM4OTJ9.xRJDCm5_aN8v0C11eilip8qcGdU4-Nm12tTn-FPXWVU",
      },
    })
    .then((res) => {
      if (res.data.status == 200) {
        showTips(res.data.message, 2000);

        fetch(baseurl + "/auth/getToken")
          .then((response) => response.json())
          .then((data) => {
            if (getCookie("uToken")) return;
            setCookie("uToken", data.token, {
              expires: 1,
              path: "/",
              domain: location.hostname,
            }); 
            setTimeout(() => {
              window.location.href = "/";
            }, 1500);
          })
          .catch((error) => console.error("Error:", error));
      } else {
        showTips(res.data.message, 2000);
        console.log(res.data.status);
      }
    });
};

const sendCode = async () => {
  if (isSending.value) {
    return;
  }
  isSending.value = true;
  buttonText.value = "已发送请查收";

  setTimeout(() => {
    isSending.value = false;
    buttonText.value = "发送验证码";
  }, 60000);

  await axios
    .post(
      baseurl + "/send-code",
      { email: formData.email },
      {
        headers: {
          "Content-Type": "application/json",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyMTIzIiwiaWF0IjoxNzM2MzA5ODkyLCJleHAiOjE3MzcxNzM4OTJ9.xRJDCm5_aN8v0C11eilip8qcGdU4-Nm12tTn-FPXWVU",
        },
      }
    )
    .then((res) => {
      if (res.data.status == 200) {
        showTips(res.data.message, 2000);
      } else {
        showTips(res.data.message, 2000);
      }
    });
};

onMounted(() => {});
</script>

<style scoped lang="scss">
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
  .send-btn {
    position: absolute;
    right: 15px;
    top: 30px;
  }
  .submit-btn {
    height: 42px;
    width: 100%;
    margin: 0 auto;
  }
}
</style> 