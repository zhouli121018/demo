<template>
  <div >
    <div class="container" id="home_page">
      <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <div class="fixed_title">
          <van-nav-bar
            title="鸿运四码"
            :left-text="left_text"
            right-text="关于"
            @click-left="onClickLeft"
            @click-right="onClickRight"
          >
            <span slot="title" @click="gethome">鸿运四码
              <!-- <van-icon name="replay" /> -->
            </span>
          </van-nav-bar>
        </div>
        <van-swipe :autoplay="3000" indicator-color="#007BC2">
          <van-swipe-item  v-for="(image, index) in advs" :key="index">
            <div class="swipe_img_box" @click="jumpTo(image.url)">
              <img :src="$https+image.pic" />
            </div>
          </van-swipe-item>
        </van-swipe>
        <a :href="banner_url" v-show="false" id="banner_a">1</a>
        

        <div class="gonggao_box" v-if="notice && notice.length>0">
            <van-button plain type="danger" @click="jumpTo('/home/announcement/index')" size="mini" class="no_radius_btn">公告</van-button>
            <img src="~@/assets/gonggao.png" alt="" class="gonggao_img">
            <div class="grow_1">
              <van-notice-bar>
                <span v-for="(n,index) in notice" :key="index" style="margin-right:50px;color:#000;" @click="goDetail(n)">
                  {{n.title}}
                </span>
              </van-notice-bar>
            </div>
        </div>

        <van-row :gutter="30" class="list_box text_center">
          <van-col span="6" style="width:25%;padding-left:0;padding-right:0" v-for="(l,index) in list" :key="index">
            <div class="item_box"  @click="jumpTo(l.link,l.islink)">
              <img :src="l.src" alt="" class="max_width_100">
              <span>{{l.title}}</span>
            </div>
          </van-col>
        </van-row>

        <div style="background:#eeeeee;height:0.3rem;"></div>

        <div class="exp_box">
          <div class="flex type_box" v-if="lottype.length>0">
            <div v-for="(item,k) in lottype" :key="k">
              <van-button :class="{mian_bgcolor:active_lt==k}" type="default" size="large" @click="change_active_ly(k)">{{item.lotname}}</van-button>
            </div>
          </div>

          <div style="background:#eeeeee;height:0.3rem;"></div>

          <div class="flex fangan_box" v-if="lottype.length>0 && lottype[active_lt].experts.length>0">
            <div v-for="(item,k) in lottype[active_lt].experts" :key="k" @click="change_active_ep(k)">
              <van-button :class="{mian_bgcolor:active_ep==k}" type="default" size="large">{{item.expname}}</van-button>
            </div>
          </div>

          <div style="background:#eeeeee;height:0.3rem;"></div>

          <div class=" explist_box" v-if="explist.length>0">
            <div v-for="(item,k) in explist" :key="k">
              <div class="exp_top"><span class="issue">{{item.issue}}</span><span  v-html="item.kjnum"></span></div>
              <div class="flex exp_bottom" >
                <div class="kong" v-if="item.contents.length == 0">
                  <van-button class="orange_btn" @click="jumpTo('/home/openingMember')">开通会员查看</van-button>
                </div>
                <div v-for="(d,i) in item.contents" :key="i" v-html="d"></div>
              </div>
              <div style="background:#eeeeee;height:0.3rem;"></div>
            </div>
          </div>

          <div class="for_more">
              <van-button size="small" class="no_border_btn" @click="getexppred">获取更多</van-button>
          </div>

           <div style="background:#eeeeee;height:0.5rem;"></div>

        </div>

      <!-- </van-pull-refresh> -->

    </div>

    <div class="container" v-if="is_ios" style="background:#F5F5F5;padding-top:0.4rem !important;position:absolute;top:0;z-index:1001;padding-bottom:2rem;">
        <!-- <title-bar title_name="添加到主屏幕" /> -->
        <div style="background:#EFEFEF;padding:0.2rem 0.15rem;margin:0 0.3rem 0.2rem;">
            <div style="text-align:center;font-size:0.5rem;color:#DB3030;font-weight:bold;padding:0.2rem 0;">温馨提示</div>
            <div style="line-height:1.6;padding-left:0.2rem;font-size:0.4rem;">
              请务必添加本页面到主屏幕，以便下次访问。
            </div>
            <div style="text-align:center;padding:0.4rem 0;">
              <van-button style="width:3rem;background-color:#D4D4D4;color:#1A1A1A;font-size:0.45rem;" @click="addfn">已添加</van-button>
              <van-button style="width:3rem;margin-left:1rem;background-color:#87ac55;color:#fff;font-size:0.45rem;" @click="ignore">关闭</van-button>
            </div>
        </div>
        <img src="../../assets/down_iphone.png" alt="" style="width:100%">
    </div>
    
  </div>
</template>

<script>
import { Dialog } from 'vant'
import { gethome ,getexppred} from '@/api/home'
export default {
  data () {
    return {
      list:[
        {src:require('../../assets/zjzm.png'),title:'专家抓码',link:'/home/exppred',islink: false},
        {src:require('../../assets/dlzq.png'),title:'推荐赚钱',link:'/home/earnMoney',islink: true},
        {src:require('../../assets/gg.png'),title:'公告',link:'/home/announcement/index',islink:true},
        {src:require('../../assets/mfsy.png'),title:'免费使用',link:'/personal/freeUse',islink: false},
        {src:require('../../assets/wdtj.png'),title:'我的推荐页',link:'/personal/recommend',islink: true},
        {src:require('../../assets/hyzx.png'),title:'会员中心',link:'/personal/index',islink: false},
        
        
      ],
      notice:[],
      advs:[],
      left_text:'登录',
      left_path:'/login/index',
      banner_url:'#',
      is_ios:false,
      isFirstEnter:false,
      fangans:[],
      notices:[],
      isLoading:false,
      active_lt:0,
      lottype:[],
      active_ep:0,
      lastid:0,
      explist:[]
    }
  },
  methods: {
    change_active_ly(k){
      this.active_ep = 0;
      this.active_lt = k;
      this.lastid = 0;
      this.getexppred();
    },
    change_active_ep(k){
      this.active_ep = k;
      this.lastid = 0;
      this.getexppred();
    },
    onRefresh() {
      this.pull_refresh();
    },
    goDetail(data){
        this.$router.push({
            path: '/home/announcement/detail', 
            query: {
                // title: data.title, 
                noticeid: data.noticeid
            }
        })
    },
    addfn(){
      // localStorage['hisadd'] = true;
      this.is_ios = false;
    },
    ignore(){
      this.is_ios = false;
    },
    onClickLeft() {
      this.$router.push(this.left_path)
    },
    onClickRight(){
      this.$router.push('/personal/about')
    },
    jumpTo( path, islink ){
      if(path.indexOf('/')==0){
        if(path == '/home/aPlan' && localStorage.getItem('_lottype')){
          this.$router.push({
            path:path,
            query:{
              lottype:localStorage.getItem('_lottype')
            }
          })
          return;
        }
        this.$router.push(path)
      }else{
        this.banner_url = path;
        this.$nextTick(()=>{
          document.getElementById('banner_a').click();
        })
      }
    },
    goSinglePlan(p){
      this.$router.push({
        path:'/home/singlePlan',
        query:{
          fanganid:p.fanganid
        }
      })
    },
    async gethome() {
      let obj = {};
      const { data } = await gethome(obj)
      this.isLoading = false;
      this.fangans = data.fangans//方案
      this.advs = data.advs 
      this.$store.dispatch('set_homedata',data)
      // localStorage.setItem('aPlan_home',JSON.stringify(data))
      this.$store.dispatch('set_kfwecha',data.kfwecha)
      this.$store.dispatch('set_issetkjtx',data.issetkjtx)
      this.$store.dispatch('set_apkurl',data.apkurl)
      this.lottype = data.lottype;
      // this.lottypeList = data.lottype//标题选择
      this.notice = data.notices
      // this.chooseName = this.lottypeList[0].lotname
      if(data.lottype.length>0 && this.lottype[this.active_lt].experts.length>0){
        this.getexppred();
      }
      
      
    },
    async getexppred() {
        const { data } = await getexppred({
            lottype:this.lottype[this.active_lt].lottype,
            expid:this.lottype[this.active_lt].experts[this.active_ep].expid,
            lastid:this.lastid
        });
        if(data.errorcode == 0){
          this.kjdate = data.kjdate;
          if(this.lastid == 0){
              this.explist = data.list;
          }else{
              data.list = data.list.map(item => {
                  this.explist.push(item)
              })
          } 
          this.lastid = data.lastid;
        }
    },
    pull_refresh(){
      this.$router.go(0)
        // this.gethome();
    },
  },
  created(){
    this.isFirstEnter=true;

    //判断 浏览器类型
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      if(window.navigator.standalone){
        this.is_ios = false;
      }else{
        this.is_ios = true;
      }
    }

    if(this.$route.query.cid){
      localStorage['hcid'] = this.$route.query.cid;
    }else{
      localStorage['hcid'] = ''
    }
    if(this.$route.query.pid){
      localStorage['hpid'] = this.$route.query.pid;
    }else{
      localStorage['hpid'] = ''
    }
    
    // document.addEventListener("visibilitychange", () => {
    //     if (document.hidden) {
          
    //     } else {
    //       this.gethome();
    //     }
    // })
  },
  activated(){  
    this.lastid = 0;
    if(!this.$store.getters.isback || this.isFirstEnter){
      this.gethome();
    }
    this.isFirstEnter=false;
    this.$store.dispatch('set_isback',false)
    
    if(localStorage['huid'] && localStorage['huid']!=''){
      this.left_text = '会员中心';
      this.left_path = '/personal/index'
    }else{
      this.left_text = '登录';
      this.left_path = '/login/index'
    }
  },
}
</script>

<style scoped lang="stylus">
.van-notice-bar{
  line-height: 1;
}
/deep/ .van-notice-bar__wrap{
  height: .38rem;
}
.msg_box .van-cell{
  padding:0.12rem 0;
}
.msg_box .msg_item .van-cell__title span{
  color:#363636;
  /* font-size:0.4rem; */
}
.van-cell:not(:last-child)::after{
  content:"";
  border:none;
}
.van-cell__value{
  flex:unset;
  padding-left:0.1rem;
}
.diy_font.van-cell{
  padding-bottom:0.2rem;
}
.diy_font .van-cell__right-icon{
  font-size:0.3rem;
}
.fangan_item_box{
  background:#fff;
  border-radius:0.2rem;
  box-shadow: 0 0 0.2rem #ddd;
  padding:0.4rem .2rem;
  line-height:1.6;
  margin-bottom:0.4rem;
}
.fangan_item_box>span{
  color:#6C6361;
  font-size:0.3rem;
}
.van-cell .van-cell__title span{
  /* font-size:0.4rem; */
  color:#7D7D7D;
}
.van-cell__value span{
  font-size:0.3rem;
}
.van-cell{
  background:none;
  padding:0;
  padding-bottom:0.1rem;
}
.left_border_ori{
  /* border-left:0.1rem solid #FC7953; */
  display:inline-block;
  /* padding:0; */
  /* padding-left:0.2rem; */
  /* font-size:0.4rem; */
  /* color:#7D7D7D; */
  background:#FC7953;
  width:0.08rem;
  height:0.4rem;
  position:relative;
  top:0.08rem;
  margin-right:0.1rem;
}
.max_width_100{
  margin-bottom: .15rem;
  width:1.4rem;
  height: 1.4rem;
}
  .btn_group button{
    margin-top:.1rem;
  }
  .btn_group{
    padding-bottom:.1rem;
  }
  select{
    outline: none;
  }
  .red{
    color:red;
  }
  .no_border{
    border:none;
  }
  .text_box{
    padding:20px 4px;
  }
  .text_center{
    text-align:center;
  }
  /* #home_page .van-nav-bar__title{ */
    /* font-size:0.5rem; */
  /* } */
  #home_page .van-nav-bar__left .van-nav-bar__text{
    color:#FC8463;
    font-size:.35rem
  }
  #home_page .van-nav-bar__title{
    font-size:.46rem;
  }     
  #home_page .van-nav-bar__right .van-nav-bar__text{
    color:#2C2C2C;
    font-size:.35rem;
  }
  .swipe_img_box{
    width:100%;
    padding:0 12px;
    box-sizing: border-box;
  }
  #home_page .van-swipe-item img{
    width:100%;
  }
  .gonggao_box{
    background:#F5F5F5;
    padding:.1rem 0;
    margin-top:.2rem;
    display:flex;
    align-items:center;
    height:30px;
    padding-left:12px;
  }
  .gonggao_box .grow_1{
    flex-grow:1;
  }
  .grow_1 .van-notice-bar{
    padding:0;
    background:none !important;
  }
  .gonggao_img{
    width:20px;
    height:16px;
    vertical-align: middle;
    margin:0 10px;
  }
  .list_box{
    padding:10px 20px;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-wrap: wrap;
  }
  .item_box{
    padding:.2rem 0;
    width:100%;
  }
  .item_box span{
    display: block;
    color: #767676;
    font-size:.38rem
  }
  .rank_item{
    padding:10px 10px;
    border-top:1px solid #F0F0F0;
  }
  .rank_item .desc>h3{
    font-weight:bold;
  }
  .rank_item .desc>div{
    color:#8D8D8D;
    padding:8px 0 0;
  }
  .rank_item_bottom{
    color:#707070;
    padding:10px 0;
    font-size:16px;
  }
  #home_page .tabs_type .van-tab{
    color:#1D1D1D;
    padding:0;
  }
  #home_page .tabs_type .van-tab>span{
    font-weight:bold;
  }
  #home_page .tabs_type .van-tab--active,#home_page .van-tab--active{
    color:#E55546;
  }
  .fixed_title{
    position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    top: 0;
  }
  .no_radius_btn{
    border-radius:0.1rem;
    line-height:1;
    width:1.1rem;
    background:#fff;
  }
  .gonggao_box button{
    height:auto;
    padding-top:.05rem;
    padding-bottom:.05rem;
  }
  .gonggao_box .van-button__text,.van-notice-bar .van-notice-bar__content>span{
    font-size:.32rem
  }
</style>
