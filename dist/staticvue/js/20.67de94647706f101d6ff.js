webpackJsonp([20],{"6zkN":function(e,t){},FfWj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("0tg7"),s=o("P9l9"),r=o("L/O1"),i=(o("YaEn"),{data:function(){return{has_phone:!1,has_totp:!1,getcodeDisabled:!1,phoneForm:{code:""},ss:60,timer:"",phoneRules:{code:[{required:!0,message:"",trigger:"blur"}]},backupForm:{code:""},backupRules:{code:[{required:!0,message:"",trigger:"blur"}]},activeTwoType:"google",goggleForm:{code:""},goggleRules:{code:[{required:!0,message:"",trigger:"blur"}]},twofactor_login:!1,twofactorList:{has_totp:!0,uuid_string:"08483291a0f3d11e9881e005056a7d9881411",has_phone:!0}}},methods:{goLogin:function(){this.$router.push("/login")},getLoginCode:function(){var e=this;this.getcodeDisabled=!0;var t={uuid_string:this.$route.query.uuid_string},o=this;Object(s._70)(t).then(function(e){o.timer&&clearInterval(o.timer),o.timer=setInterval(function(){o.ss--,o.ss<=0&&(o.getcodeDisabled=!1,o.ss=60,clearInterval(o.timer))},1e3)}).catch(function(t){e.getcodeDisabled=!1,e.ss=60})},googleLogin:function(e){var t=this,o={uuid_string:this.$route.query.uuid_string,login_mode:this.activeTwoType,verification_code:e};Object(s._223)(o).then(function(e){e.data.token&&(t.$route.query.rememberUserInfo?localStorage.userName=t.$route.query.mail:localStorage.removeItem("userName"),r.a.setCookie("name",t.$route.query.mail,7),r.a.setCookie("token",e.data.token,7),r.a.delCookie("locked"),window.sessionStorage.clear(),t.$store.dispatch("setInfo"),e.data.is_smtp?t.$router.push("/setting/mailboxmove"):that.$router.push("/mailbox"))}).catch(function(e){e.verification_code&&t.$message({type:"error",message:e.verification_code[0]})})}},mounted:function(){},created:function(){"false"==this.$route.query.phone?this.has_phone=!1:this.$route.query.phone&&(this.has_phone=!0),"false"==this.$route.query.totp?this.has_totp=!1:this.$route.query.totp&&(this.has_totp=!0),this.has_totp||(this.activeTwoType="phone")},computed:{loginBeforeData:function(){return this.$store.getters.getLoginBefore},bgIndex:function(){return this.$route.query.bi},lan:function(){var e=a.a.zh;return e="zh-hans"==this.$store.getters.getLanguage?a.a.zh:"zh-tw"==this.$store.getters.getLanguage?a.a.zh_tw:"en"==this.$store.getters.getLanguage?a.a.en:(this.$store.getters.getLanguage,a.a.zh),this.phoneRules={code:[{required:!0,message:e.SETTING_TWOFACTOR_PHONE_CODE_RULE,trigger:"blur"}]},this.goggleRules={code:[{required:!0,message:e.SETTING_TWOFACTOR_GOOGLE_CODE_PLACE,trigger:"blur"}]},e}}}),n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"verifyLayout",class:"bg"+e.bgIndex},[o("div",{staticClass:"two_main"},[o("h3",{staticStyle:{"margin-bottom":"20px"}},[e._v(" "+e._s(e.lan.TWOFACTOR_LOGIN_TITLE))]),e._v(" "),o("el-tabs",{staticClass:"safe_box",staticStyle:{"max-width":"900px","text-align":"left"},attrs:{type:"card"},on:{"tab-click":function(e){}},model:{value:e.activeTwoType,callback:function(t){e.activeTwoType=t},expression:"activeTwoType"}},[e.has_totp?o("el-tab-pane",{staticClass:"two_box",attrs:{label:e.lan.TWOFACTOR_LOGIN_GOOGLE,name:"google"}},[o("el-form",{attrs:{model:e.goggleForm,rules:e.goggleRules,"label-width":"en"==e.$store.getters.getLanguage?"200px":"100px",size:"small"}},[o("el-form-item",{attrs:{label:e.lan.SETTING_TWOFACTOR_GOOGLE_CODE,prop:"code"}},[o("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:e.lan.SETTING_TWOFACTOR_GOOGLE_CODE_PLACE},model:{value:e.goggleForm.code,callback:function(t){e.$set(e.goggleForm,"code",t)},expression:"goggleForm.code"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.googleLogin(e.goggleForm.code)}}},[e._v(e._s(e.lan.login))]),e._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:e.goLogin}},[e._v(e._s(e.lan.TWOFACTOR_LOGIN_RETURN))])],1)],1)],1):e._e(),e._v(" "),e.has_phone?o("el-tab-pane",{staticClass:"two_box",attrs:{label:e.lan.TWOFACTOR_LOGIN_SMS,name:"phone"}},[o("el-form",{staticStyle:{"max-width":"900px"},attrs:{model:e.phoneForm,rules:e.phoneRules,"label-width":"en"==e.$store.getters.getLanguage?"200px":"100px",size:"small"}},[o("el-form-item",{attrs:{label:e.lan.SETTING_TWOFACTOR_PHONE_CODE,prop:"code"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:e.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE},model:{value:e.phoneForm.code,callback:function(t){e.$set(e.phoneForm,"code",t)},expression:"phoneForm.code"}}),e._v(" "),o("el-button",{attrs:{disabled:e.getcodeDisabled},on:{click:e.getLoginCode}},[e._v(" "+e._s(e.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),e.getcodeDisabled?o("span",[e._v("("+e._s(e.ss)+" 秒)")]):e._e()])],1),e._v(" "),o("el-form-item",{attrs:{label:""}},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.googleLogin(e.phoneForm.code)}}},[e._v(" "+e._s(e.lan.login)+" ")]),e._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:e.goLogin}},[e._v(e._s(e.lan.TWOFACTOR_LOGIN_RETURN))])],1)],1)],1):e._e()],1)],1),e._v(" "),o("div",{staticClass:"verifyBottom"},[o("label",{staticStyle:{color:"#fff"}},[e._v("\n      Copyright © "),o("span",[e._v(e._s(e.loginBeforeData.name))]),e._v(" "),e.loginBeforeData.is_icp?o("span",[e.loginBeforeData.icp_link?o("a",{staticStyle:{color:"#fff","text-decoration":"none"},attrs:{href:e.loginBeforeData.icp_link,target:"_blank"}},[e._v(" | "+e._s(e.loginBeforeData.icp_no))]):e._e(),e._v(" "),e.loginBeforeData.icp_link?e._e():o("span",[e._v(" | "+e._s(e.loginBeforeData.icp_no))])]):e._e()])])])},staticRenderFns:[]};var l=o("C7Lr")(i,n,!1,function(e){o("6zkN")},null,null);t.default=l.exports}});