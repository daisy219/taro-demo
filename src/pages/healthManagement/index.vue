<script lang="ts">
/* COMPONENT DOCUMENT
 * author: zhaoyang
 * date: 2020/09/27
 * desc: 健康管理
 */

import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import { AtGrid } from 'taro-ui-vue';
import { LOGO } from '../../const/common';

import HealthConstMixin from './const';
import bgImg from '../../assets/image/home/bg.jpg';


@Component({
  name: 'health-management',
  components: { AtGrid },
  mixins: [HealthConstMixin],
})
export default class HealthManagement extends Vue {
  /* ------------------------ INPUT & OUTPUT ------------------------ */
  // @Prop() private parentData!: any;
  // @Emit('event_name') private handler() {}

  /* ------------------------ VUEX (vuex getter & vuex action) ------------------------ */
  // @Getter private some_getter!: any;
  // @Action private some_action!: () => void;

  /* ------------------------ LIFECYCLE HOOKS (created & mounted & ...) ------------------------ */
  // private created() {}
  // private mounted() {}

  /* ------------------------ COMPONENT STATE (data & computed & model) ------------------------ */
  private logo: string = LOGO;
  private bgImg: any = bgImg;
  private images: string[] = [
    'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
    'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
  ];

  /* ------------------------ WATCH ------------------------ */
  // @Watch('some_thing') private some_thing_changed(val: any, oldVal: any) {}

  /* ------------------------ METHODS ------------------------ */
  private jumpTo(): void {}

}

</script>

<template>
<view class="health-management-page">
  <view>
    <text class="logo-text">{{ logo }}</text>
  </view>
  <swiper
    :current="1"
    :autoplay="true"
    :duration="500"
    :interval="5000">
    <swiper-item v-for="(image, index) in images" :key="index">
      <image class="swipe-image" :src="image"/>
    </swiper-item>
  </swiper>

  <view class="my-health-card">
    <view class="card-title">我的健康</view>
    <view class="card-module at-row">
      <view v-for="(item, index) in moduleArr" :key="index" class="module-item at-col">
        <view>
          <img :src="item.image"/>
        </view>
        <text class="item-value" :style="`color: ${item.color}`">{{ item.value }}</text>
      </view>
    </view>
  </view>

  <view class="bg-wrap">
    <image class="bg-img" :src="bgImg" />
  </view>

  <view class="my-health-card">
    <view class="card-title">我的理赔</view>
    <view class="at-row">
      <view class="at-col module-item">
        <view>医疗理赔</view>
      </view>
      <view class="at-col module-item">
        <view>冠状理赔</view>
      </view>
    </view>
  </view>
</view>
</template>

<style lang="less">
@import '../../assets/const.less';

.health-management-page {
  padding: 50px;
  .swipe-image {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .my-health-card {
    margin: 30px 0;
    color: @gray-font-color;
    background-color: @light-background-color;
    padding: 16px;
    border-radius: 10px;
    .card-title {
      font-size: 36px;
      font-weight: bold;
      line-height: 50px;
      margin-bottom: 20px;
    }
    .card-module {
      .module-item {
        margin: 0 16px;
        text-align: center;
        img {
          width: 100%;
        }
        .item-value {
          font-size: 28px;
        }
      }
    }
  }
  .bg-wrap {
    margin-bottom: 20px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    height: 120px;
    .bg-img {
      width: 100%;
    }
  }
}
</style>
