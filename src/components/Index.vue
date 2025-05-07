<template>
  <n-space vertical size="large" style="gap: unset">
  <n-layout>
    <n-layout-header></n-layout-header>
    <n-layout-content id="layout-content" :native-scrollbar="false">
      <n-grid cols="1 300:1 600:2">
        <n-grid-item span="0 600:1">
          <n-flex justify="center" align="center">
            <div class="margin-top logo-icon">
              <img class="logo-icon" src="/statics/logo.jpg">
            </div>
            <div class="margin-top"><span class="logo-title">贝壳小盒子</span></div>
          </n-flex>
        </n-grid-item>
        <n-grid-item span="1 600:0">
          <n-flex justify="center" align="center">
            <div class="margin-left margin-top">
              <img class="logo-icon-lg" src="/statics/logo.jpg">
            </div>
          </n-flex>
          <n-flex justify="center" align="center">
            <div class="margin-left margin-top name-title">贝壳小盒子</div>
          </n-flex>
        </n-grid-item>
        <n-grid-item>
          <n-flex  justify="center" align="center" class="margin-top">
            <div style="margin-top: 6px;">
              <a href="https://afdian.com/a/Airmole"><img height="35" src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.png"></a>
            </div>
            <n-button @click="recharge" type="info" ghost><NIcon><LogoYen/></NIcon>充值&会员</n-button>
            <n-button @click="copyShare" type="info" ghost><NIcon><MdShare/></NIcon>分享应用</n-button>
          </n-flex>
        </n-grid-item>
      </n-grid>

      <n-grid cols="3 400:3 800:5" class="margin">
        <n-grid-item span="3">

          <n-grid cols="1 600:0">
            <n-grid-item span="1 600:0" class="start-use">
              <n-flex justify="center" align="center">
                <n-button @click="startUse" type="primary" size="large" round>开始使用</n-button>
              </n-flex>
            </n-grid-item>
          </n-grid>

          <n-flex justify="center" align="center" style="margin-top: 60px;" vertical>
            <div v-if="pageWidth > 400" class="margin-top"><span class="name-title">贝壳小盒子</span></div>
            <div class="margin-top"><span class="sub-title">轻松玩转贝壳田园校园生活</span></div>
            <div class="margin-top"><span class="sub-title">课程表、成绩、校历、图书应有尽有...</span></div>
            <n-grid cols="0 600:3" class="margin-top" style="margin-top: 50px;max-width: 600px;">
              <n-grid-item span="0 600:1">
                <a :href="webUrl" class="link-text">
                  <n-card hoverable content-style="padding: 0 0 2px 0; text-align: center;">
                    <template #cover>
                      <n-qr-code :value="webUrl" :size="160" icon-src="/statics/logo_round.png" :padding="4" :icon-border-radius="20"/>
                    </template>
                    <div class="link-text">立即体验网页版</div>
                  </n-card>
                </a>
              </n-grid-item>
              <n-grid-item span="0 600:1">
                <a class="link-text">
                  <n-card hoverable content-style="padding: 0 0 2px 0; text-align: center;">
                    <template #cover>
                      <n-qr-code :value="weappUrl" :size="160" icon-src="/statics/logo_round.png" :padding="4" :icon-border-radius="20"/>
                    </template>
                    <div class="">微信小程序</div>
                  </n-card>
                </a>
              </n-grid-item>
              <n-grid-item span="0 600:1">
                <a :href="qqappUrl" class="link-text">
                  <n-card hoverable content-style="padding: 0 0 2px 0; text-align: center;">
                    <template #cover>
                      <n-qr-code :value="qqappUrl" :size="160" icon-src="/statics/logo_round.png" :padding="4" :icon-border-radius="20"/>
                    </template>
                    <div class="link-text">QQ小程序</div>
                  </n-card>
                </a>
              </n-grid-item>
            </n-grid>
          </n-flex>
        </n-grid-item>
        <n-grid-item span="3 800:0">
          <n-flex justify="center" align="center">
            <div style="width: 380px;height: 640px">
              <n-carousel autoplay draggable :interval="3000" :show-dots="true">
                <img class="carousel-img" src="/statics/shot1.webp" alt="截图1">
                <img class="carousel-img" src="/statics/shot2.webp" alt="截图2">
                <img class="carousel-img" src="/statics/shot3.webp" alt="截图3">
                <img class="carousel-img" src="/statics/shot4.webp" alt="截图4">
              </n-carousel>
            </div>
          </n-flex>
        </n-grid-item>
        <n-grid-item span="0 800:2">
          <n-flex justify="center" align="center">
            <div class="phone">
              <iframe src="https://shellbox.ustb.tj.cn" frameborder="0" scrolling="auto"></iframe>
            </div>
          </n-flex>
        </n-grid-item>
      </n-grid>


      <n-flex justify="center" align="center" class="opensource" vertical>
        <div>贝壳小盒子 丨 Airmole.</div>
        <n-flex justify="center" align="center">
          <a href="https://github.com/Airmole/shellbox-uniapp"><n-button quaternary>前端项目(uni-app)</n-button></a>
          <a href="https://doc.shellbox.ustb.tj.cn"><n-button quaternary>API数据接口文档</n-button></a>
          <a href="https://github.com/Airmole/tjysb-edusys"><n-button quaternary>后端依赖(教务)</n-button></a>
          <a href="https://github.com/Airmole/tjysb-opacsys"><n-button quaternary>后端依赖(图书馆)</n-button></a>
        </n-flex>
        <div>网站ICP备案号：<a href="https://beian.miit.gov.cn" style="text-decoration: none;">陇ICP备17001242号-2</a></div>
      </n-flex>

    </n-layout-content>
  </n-layout>

  <n-modal v-model:show="showWeappQrcodeModal">
    <n-card
        style="min-width: 260px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <img style="width: 170px;" :src="weappQrcodeCanvasData" alt="微信小程序二维码">
      <div style="text-align: center;">长按识别二维码打开小程序</div>
      <template #footer>
        <n-flex justify="center" align="center">
          <n-button @click="showWeappQrcodeModal=false" type="primary">关闭</n-button>
        </n-flex>
      </template>
    </n-card>
  </n-modal>
  <n-qr-code id="weapp-qrcode" class="hidden-qrcode" :value="weappUrl" :size="170" icon-src="/statics/logo_round.png" :padding="4" :icon-border-radius="20"/>

  </n-space>
</template>

<script lang="ts">
import useClipboard from 'vue-clipboard3'
import {
  NButton,
  NFlex,
  NIcon,
  NGrid,
  NGridItem,
  NCard,
  NCarousel,
  useMessage,
  NSpace,
  NLayoutContent,
  NLayoutFooter,
  NLayout,
  NLayoutHeader,
  NModal,
  NQrCode
} from 'naive-ui'
import { MdShare, LogoYen } from '@vicons/ionicons4'

export default {
  components: {
    NButton,
    NFlex,
    NIcon,
    NGrid,
    NGridItem,
    NCard,
    NCarousel,
    MdShare,
    LogoYen,
    NSpace,
    NLayoutContent,
    NLayoutFooter,
    NLayout,
    NLayoutHeader,
    NModal,
    NQrCode
  },
  setup() {
    const message = useMessage()
    return {
      message
    }
  },
  data() {
    return {
      pageWidth: document.body.clientWidth,
      showWeappQrcodeModal: false,
      webUrl: 'https://shellbox.ustb.tj.cn',
      weappUrl: 'https://mp.weixin.qq.com/a/~O_zRPqghO9tODOTG18awNg~~',
      qqappUrl: 'https://m.q.qq.com/a/s/ecb79401e20eaed769a98ec652e75c1f',
      weappQrcodeCanvasData: '',
    }
  },
  mounted() {
    const element = document.getElementById('layout-content') as HTMLElement
    const bgColorValue = getComputedStyle(element).getPropertyValue('--n-color').trim()
    document.documentElement.style.setProperty('--body-bg-color', bgColorValue)
    const that = this
    window.onresize = () => {
      that.pageWidth = document.body.clientWidth
    }

    const canvas = document.querySelector('#weapp-qrcode')?.querySelector<HTMLCanvasElement>('canvas')
    if (canvas) this.weappQrcodeCanvasData = canvas.toDataURL()
  },
  methods: {
    copyShare () {
      const { toClipboard } = useClipboard()
      toClipboard('贝壳小盒子-贝壳田园校园生活小助手 https://shellbox.airmole.cn').then(() =>{
        this.message.success('已复制到粘贴吧，去分享给朋友吧~')
      })
    },
    startUse () {
      const ua = navigator.userAgent
      // 微信浏览器
      const isWechat = /micromessenger/i.test(ua)
      if (isWechat) {
        this.showWeappQrcodeModal = true
        return
      }

      window.open('https://m.q.qq.com/a/s/ecb79401e20eaed769a98ec652e75c1f')

    },
    recharge () {
      window.open('https://ifdian.net/a/Airmole?tab=shop')
    }
  }
}
</script>

<style scoped>
.margin {
  margin: 20px;
}
.padding {
  padding: 10px;
}
.margin-top {
  margin-top: 10px;
}
.margin-left {
  margin-left: 20px;
}
.logo-icon {
  width: 50px;
  height: 50px;
  border-radius: 16px;
}
.logo-icon-lg {
  width: 120px;
  height: 120px;
  border-radius: 24px;
}
.logo-title {
  font-size: 24px;
}
.name-title {
  font-size: 42px;
}
.sub-title {
  font-size: 22px;
}
.n-card {
  max-width: 170px;
}
.link-text {
  text-decoration: none;
  color: cornflowerblue;
}

.carousel-img {
  width: 380px;
  height: 640px;
  object-fit: cover;
}
.phone {
  position: relative;
  top: 60px;
  right: 6.87vw;
  width: 17.5vw;
  height: 34.4vw;
  background-image: url(/statics/phone.png);
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 48px 13px 25px;
}
iframe {
  display: block;
  width: 100%;
  height: 33.9vw;
  border-radius: 10px 10px 20px 20px;
  overflow-clip-margin: content-box !important;
  overflow: clip !important;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
.start-use {
  margin-top: 30px;
}
.opensource {
  margin-top: 60px;
}
.hidden-qrcode {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
