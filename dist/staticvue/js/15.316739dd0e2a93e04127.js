webpackJsonp([15],{"6Mot":function(t,e){},"6PTq":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("L/O1");var a=s("P9l9"),n={data:function(){return{resultFormVisible:!1,client_result:"",show_client_set:!1,client_timer:null,clientForm:{tel:"",code:"",getcodeDisabled:!1,ss:60},clientRules:{tel:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE,trigger:"blur"}],code:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE,trigger:"blur"}]},show_phone_set:!1,show_google_set:!1,timer:"",getcodeDisabled:!1,ss:60,qrsvg:"",showList:{has_totp:!1,phone:null,has_permisson:!1,has_phone:!1,can_open_phone:!1},secret_key:"",activeName:"first",phoneForm:{tel:"",code:""},phoneRules:{tel:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE,trigger:"blur"}],code:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE,trigger:"blur"}]},goggleForm:{code:""},goggleRules:{code:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE_RULE,trigger:"blur"}]}}},mounted:function(){},created:function(){this.getTwofactorShow()},methods:{client_set_change:function(){var t=this;this.showList.is_open_client?this.$confirm(this.$parent.lan.RELEASE_CLIENT,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){t.clientRelease()}).catch(function(){}):this.show_client_set=!this.show_client_set},clientSet:function(){var t=this;if(this.clientForm.tel&&""!=this.clientForm.tel){this.clientForm.getcodeDisabled=!0,this.clientForm.ss=60;var e=this,s={phone:this.clientForm.tel};Object(a.m)(s).then(function(s){s.data.detail&&t.$message({type:"success",message:s.data.detail}),e.client_timer&&clearInterval(e.client_timer),e.client_timer=setInterval(function(){e.clientForm.ss--,e.clientForm.ss<=0&&(e.clientForm.getcodeDisabled=!1,e.clientForm.ss=60,clearInterval(e.client_timer))},1e3)}).catch(function(e){t.clientForm.getcodeDisabled=!1,t.clientForm.ss=60,e.phone&&t.$message({type:"error",message:e.phone[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},clientVerify:function(){var t=this;if(this.clientForm.tel&&""!=this.clientForm.tel)if(this.clientForm.code&&""!=this.clientForm.code){var e={phone:this.clientForm.tel,verification_code:this.clientForm.code};Object(a.n)(e).then(function(e){t.clientForm.tel="",t.clientForm.code="",t.getTwofactorShow(),t.show_client_set=!1,t.clientForm.getcodeDisabled=!1,t.clientForm.ss=60,t.client_result=e.data.sms_password,t.resultFormVisible=!0}).catch(function(e){e.phone&&t.$message({type:"error",message:t.$parent.lan.COMMON_OPRATE_FAILED+e.phone[0]}),e.verification_code&&t.$message({type:"error",message:t.$parent.lan.COMMON_OPRATE_FAILED+e.verification_code[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE});else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},clientRelease:function(){var t=this;Object(a.l)().then(function(e){t.$message({type:"success",message:t.$parent.lan.COMMON_OPRATE_SUCCESS}),t.getTwofactorShow()}).catch(function(t){})},googleReleaseFn:function(){var t=this,e={verification_code:this.goggleForm.code};Object(a._57)(e).then(function(e){t.show_google_set=!1,t.getTwofactorShow();t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_GOOGLE_RELEASE_S}),t.goggleForm.code=""}).catch(function(e){e.verification_code&&t.$message({type:"error",message:e.verification_code[0]})})},releaseSmsFn:function(){var t=this;this.getcodeDisabled=!0;var e=this;Object(a._113)().then(function(t){e.timer&&clearInterval(e.timer),e.timer=setInterval(function(){e.ss--,e.ss<=0&&(e.getcodeDisabled=!1,e.ss=60,clearInterval(e.timer))},1e3)}).catch(function(e){t.getcodeDisabled=!1,t.ss=60,e.phone&&t.$message({type:"error",message:e.phone[0]})})},sentSms:function(){var t=this;if(this.phoneForm.tel&&""!=this.phoneForm.tel){this.getcodeDisabled=!0;var e=this,s={phone:this.phoneForm.tel};Object(a._102)(s).then(function(s){s.data.detail&&t.$message({type:"success",message:s.data.detail}),e.timer&&clearInterval(e.timer),e.timer=setInterval(function(){e.ss--,e.ss<=0&&(e.getcodeDisabled=!1,e.ss=60,clearInterval(e.timer))},1e3)}).catch(function(e){t.getcodeDisabled=!1,t.ss=60,e.phone&&t.$message({type:"error",message:e.phone[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},phoneVerifyFn:function(){var t=this;if(this.phoneForm.tel&&""!=this.phoneForm.tel)if(this.phoneForm.code&&""!=this.phoneForm.code){var e={phone:this.phoneForm.tel,verification_code:this.phoneForm.code};Object(a._103)(e).then(function(e){e.data.detail&&e.data.detail,t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_BOUND_S}),t.phoneForm.tel="",t.phoneForm.code="",t.getTwofactorShow(),t.show_phone_set=!1,t.getcodeDisabled=!1,t.ss=60}).catch(function(e){e.phone&&t.$message({type:"error",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_BOUND_F+e.phone[0]}),e.verification_code&&t.$message({type:"error",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_BOUND_F+e.verification_code[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE});else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},phoneReleaseFn:function(){var t=this,e={verification_code:this.phoneForm.code};Object(a._101)(e).then(function(e){e.data.detail&&e.data.detail,t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_RELEASE_S}),t.phoneForm.tel="",t.phoneForm.code="",t.getTwofactorShow(),t.show_phone_set=!1,t.getcodeDisabled=!1,t.ss=60}).catch(function(e){console.log(e),e.verification_code&&t.$message({type:"error",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_RELEASE_F+e.verification_code[0]})})},changeTab:function(t){this.activeName=t},getSecret:function(){var t=this;Object(a._58)().then(function(e){t.secret_key=e.data.secret_key,t.getQrcode()}).catch(function(t){console.log(t)})},getQrcode:function(){var t=this,e={secret_key:this.secret_key};Object(a._56)(e).then(function(e){t.qrsvg=e.data}).catch(function(t){console.log(t)})},getTwofactorShow:function(){var t=this;Object(a._210)().then(function(e){t.showList=e.data,e.data.phone,e.data.tel_mobile&&(t.phoneForm.tel=e.data.tel_mobile,t.clientForm.tel=e.data.tel_mobile),e.data.has_totp||t.getSecret()}).catch(function(t){console.log(t)})},googleVerifyFn:function(){var t=this,e={secret_key:this.secret_key,verification_code:this.goggleForm.code};Object(a._59)(e).then(function(e){t.show_google_set=!1,t.getTwofactorShow();t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_GOOGLE_BOUND_S}),t.goggleForm.code=""}).catch(function(t){console.log(t)})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"j-module-content j-maillist mllist-list height100 ",staticStyle:{"background-color":"rgba(255,255,255,0.3)"}},[s("el-row",{staticStyle:{padding:"0px"}},[s("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v(t._s(this.$parent.lan.COMMON_HOME_NAME))]),t._v(" "),s("el-breadcrumb-item",[s("a",{attrs:{href:"#"}},[t._v(t._s(this.$parent.lan.SETTING_INDEX_NAME))])]),t._v(" "),s("el-breadcrumb-item",[t._v(t._s(this.$parent.lan.SETTING_INDEX_TWOFACTOR_MENU))])],1)],1)],1),t._v(" "),s("section",{staticClass:"content content-list",staticStyle:{"padding-bottom":"13px"}},[s("div",{staticStyle:{padding:"0 10px"}},[s("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_TITLE))]),t._v(" "),t.showList.has_totp||t.showList.has_phone?t._e():s("el-alert",{staticStyle:{margin:"10px 0"},attrs:{title:this.$parent.lan.SETTING_TWOFACTOR_ALERT,type:"warning",closable:!1}}),t._v(" "),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"img_icon img_google"}),t._v(" "),s("b",[t._v(t._s(this.$parent.lan.COMMON_TWOFACTOR_GOOGLE))]),t._v(" "),s("div",[t.showList.has_totp?t._e():s("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_DISABLE_TITLE))]),t._v(" "),t.showList.has_totp?s("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_ENABLE_TITLE))]):t._e()]),t._v(" "),s("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[s("span",{style:{color:t.showList.has_totp?"#54D5B3":"#E71C00"}},[t._v(t._s(t.showList.has_totp?this.$parent.lan.IS_OPENED:this.$parent.lan.IS_CLOSED))]),t._v(" "),s("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),s("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:function(e){t.show_google_set=!t.show_google_set}}},[t._v(t._s(t.showList.has_totp?this.$parent.lan.COMMON_CLOSE:this.$parent.lan.OPEN))])],1)]),t._v(" "),t.show_google_set?s("div",{staticClass:"text item"},[t.showList.has_totp?s("el-form",{attrs:{model:t.goggleForm,rules:t.goggleRules,"label-width":"200px",size:"small"}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE,prop:"code"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE_PLACE},model:{value:t.goggleForm.code,callback:function(e){t.$set(t.goggleForm,"code",e)},expression:"goggleForm.code"}})],1),t._v(" "),s("el-form-item",[s("el-button",{on:{click:t.googleReleaseFn}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_DISABLE))])],1)],1):t._e(),t._v(" "),t.showList.has_totp?t._e():s("el-tabs",{staticClass:"safe_box",staticStyle:{"max-width":"900px"},attrs:{type:"card"},on:{"tab-click":function(t){}},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP1,name:"first"}},[s("div",{staticClass:"first"},[s("div",{staticClass:"first-step"},[s("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ①")]),t._v(" "),s("h4",{staticClass:"ng-binding",staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_TITLE))]),t._v(" "),s("div",{staticClass:"item-body downloads "},[s("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD1)),s("a",{attrs:{href:"http://otp.aliyun.com/shenfenbao.html",target:"_blank"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD10))])]),t._v(" "),s("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD2))]),t._v(" "),s("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD3)),s("br"),t._v(" "),s("a",{staticClass:"f-fl",attrs:{href:"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8",target:"_blank"}},[s("i",{staticClass:"icon-googleAuthen icon-googleAuthen-ios",staticStyle:{"margin-bottom":"5px"}})]),t._v(" "),s("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",target:"_blank"}},[s("i",{staticClass:"icon-googleAuthen icon-googleAuthen-play"})])])])]),t._v(" "),s("div",{staticClass:"option1"},[s("a",{staticClass:"f-fr next-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){e.preventDefault(),t.changeTab("second")}}},[t._v("\n                  "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_NEXT)+" >")]),s("span",{staticClass:"f-fr ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_FOOTER))])])])]),t._v(" "),s("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP2,name:"second"}},[s("div",{staticClass:"second"},[s("div",{staticClass:"second-step"},[s("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ②")]),t._v(" "),s("div",{staticClass:"code"},[s("div",{staticClass:"ewm",attrs:{id:"ewm"}},[s("div",{staticClass:"svg_box",domProps:{innerHTML:t._s(t.qrsvg)}})]),t._v(" "),s("p",{staticClass:"ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP2_TITLE))])]),t._v(" "),s("div",{staticClass:"secretkey"},[s("div",{staticClass:"key"},[s("b",[t._v(t._s(t.secret_key))])]),t._v(" "),s("p",{staticClass:"ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP2_MID))])])]),t._v(" "),s("div",{staticClass:"option2"},[s("a",{staticClass:"f-fl prev-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){e.preventDefault(),t.changeTab("first")}}},[t._v("\n                  < "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_PRE))]),s("a",{staticClass:"f-fr next-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){e.preventDefault(),t.changeTab("third")}}},[t._v("\n                  "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_NEXT)+" >")]),s("span",{staticClass:"f-fr ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP2_FOOTER))])])])]),t._v(" "),s("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP3,name:"third"}},[s("div",{staticClass:"third"},[s("div",{staticClass:"third-step"},[s("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ③")]),t._v(" "),s("div",{staticClass:"keepkey"},[s("b",{staticStyle:{"padding-left":"12px"}},[t._v(t._s(t.secret_key))])]),t._v(" "),s("div",{staticClass:"backupkey"},[s("p",{staticClass:"ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP3_TITLE))]),t._v(" "),s("p",{staticClass:"ng-binding",staticStyle:{color:"#ff0000","margin-top":"15px"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP3_MID))])])]),t._v(" "),s("div",{staticClass:"option3"},[s("a",{staticClass:"f-fl prev-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){e.preventDefault(),t.changeTab("second")}}},[t._v("\n                  < "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_PRE))]),s("a",{staticClass:"f-fr next-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){e.preventDefault(),t.changeTab("fourth")}}},[t._v("\n                  "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_NEXT)+" >")]),s("span",{staticClass:"f-fr ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP3_FOOTER))])])])]),t._v(" "),s("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP4,name:"fourth"}},[s("div",{staticClass:"fourth"},[s("div",{staticClass:"fourth-step"},[s("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ④")]),t._v(" "),s("form",{staticClass:"ng-pristine ng-valid",attrs:{id:"googleAuthen-form",autocomplete:"off"}},[s("input",{attrs:{type:"hidden",name:"secretKey",value:"KF3NDTJAI4PYSZ35"}}),t._v(" "),s("div",{staticClass:"item-body"},[s("div",{staticClass:"faCode"},[s("el-form",{attrs:{model:t.goggleForm,rules:t.goggleRules,"label-width":"200px",size:"small"}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE,prop:"code"}},[s("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE_PLACE},model:{value:t.goggleForm.code,callback:function(e){t.$set(t.goggleForm,"code",e)},expression:"goggleForm.code"}})],1)],1)],1)]),t._v(" "),s("div",{staticClass:"btns",staticStyle:{display:"none"}},[s("span",{staticClass:"btn btn-orange ng-binding",attrs:{id:"googleAuthen-btn"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP4_TITLE))])])])]),t._v(" "),s("div",{staticClass:"option4"},[s("a",{staticClass:"f-fl prev-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){e.preventDefault(),t.changeTab("third")}}},[t._v("\n                  < "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_PRE))]),s("a",{staticClass:"f-fr enable ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.googleVerifyFn(e)}}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_ENABLE))])])])])],1)],1):t._e()]),t._v(" "),t.showList.can_open_phone?s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"img_icon img_mobile"}),t._v(" "),s("b",[t._v(t._s(this.$parent.lan.COMMON_TWOFACTOR_PHONE))]),t._v(" "),s("div",[t.showList.has_phone?t._e():s("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_DISABLE_TITLE))]),t._v(" "),t.showList.has_phone?s("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_ENABLE_TITLE))]):t._e()]),t._v(" "),s("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[s("span",{style:{color:t.showList.has_phone?"#54D5B3":"#E71C00"}},[t._v(t._s(t.showList.has_phone?this.$parent.lan.IS_OPENED:this.$parent.lan.IS_CLOSED))]),t._v(" "),s("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),s("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:function(e){t.show_phone_set=!t.show_phone_set}}},[t._v(t._s(t.showList.has_phone?this.$parent.lan.COMMON_CLOSE:this.$parent.lan.OPEN))])],1)]),t._v(" "),t.show_phone_set?s("div",{staticClass:"text item"},[s("el-form",{ref:"phoneForm",staticClass:"demo-ruleForm",staticStyle:{"max-width":"900px"},attrs:{model:t.phoneForm,rules:t.phoneRules,"label-width":"190px",size:"small"}},[s("el-form-item",{attrs:{label:this.$parent.lan.COMMON_MOBILE,prop:"tel"}},[t.showList.has_phone?t._e():s("el-input",{staticStyle:{width:"204px"},model:{value:t.phoneForm.tel,callback:function(e){t.$set(t.phoneForm,"tel",e)},expression:"phoneForm.tel"}}),t._v(" "),t.showList.has_phone?s("el-input",{staticStyle:{width:"204px"},attrs:{disabled:""},model:{value:t.showList.phone,callback:function(e){t.$set(t.showList,"phone",e)},expression:"showList.phone"}}):t._e(),t._v(" "),t.showList.has_phone?t._e():s("el-button",{attrs:{disabled:t.getcodeDisabled},on:{click:t.sentSms}},[t._v(" "+t._s(this.$parent.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),t.getcodeDisabled?s("span",[t._v("("+t._s(t.ss)+" "+t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_SECOND)+")")]):t._e()]),t._v(" "),t.showList.has_phone?s("el-button",{attrs:{disabled:t.getcodeDisabled},on:{click:t.releaseSmsFn}},[t._v(" "+t._s(this.$parent.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),t.getcodeDisabled?s("span",[t._v("("+t._s(t.ss)+" "+t._s(this.$parent.lan.FILE_P_SEC)+")")]):t._e()]):t._e()],1),t._v(" "),s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE,prop:"code"}},[s("el-input",{staticStyle:{width:"300px"},model:{value:t.phoneForm.code,callback:function(e){t.$set(t.phoneForm,"code",e)},expression:"phoneForm.code"}})],1)],1),t._v(" "),t.showList.has_phone?t._e():s("el-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"warning",size:"small"},on:{click:t.phoneVerifyFn}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_ENABLE))]),t._v(" "),t.showList.has_phone?s("el-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"danger",size:"small"},on:{click:t.phoneReleaseFn}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_DISABLE))]):t._e()],1):t._e()]):t._e(),t._v(" "),t.showList.is_open_client||t.showList.can_open_client?s("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"img_icon img_mobile"}),t._v(" "),s("b",[t._v(t._s(this.$parent.lan.CLIENT_LOGIN))]),t._v(" "),s("div",[t.showList.is_open_client?t._e():s("span",[t._v(t._s(this.$parent.lan.NO_OPEN_CLIENT_LOGIN))]),t._v(" "),t.showList.is_open_client?s("span",[t._v(t._s(this.$parent.lan.IS_OPENED_CLIENT_LOGIN))]):t._e()]),t._v(" "),s("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[s("span",{style:{color:t.showList.is_open_client?"#54D5B3":"#E71C00"}},[t._v(t._s(t.showList.is_open_client?this.$parent.lan.IS_OPENED:this.$parent.lan.IS_CLOSED))]),t._v(" "),s("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),s("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:t.client_set_change}},[t._v(t._s(t.showList.is_open_client?this.$parent.lan.COMMON_CLOSE:this.$parent.lan.OPEN))])],1)]),t._v(" "),t.show_client_set?s("div",{staticClass:"text item"},[s("el-form",{ref:"clientForm",staticClass:"demo-ruleForm",staticStyle:{"max-width":"900px"},attrs:{model:t.clientForm,rules:t.clientRules,"label-width":"190px",size:"small"}},[s("el-form-item",{attrs:{label:this.$parent.lan.COMMON_MOBILE,prop:"tel"}},[t.showList.is_open_client?t._e():s("el-input",{staticStyle:{width:"204px"},model:{value:t.clientForm.tel,callback:function(e){t.$set(t.clientForm,"tel",e)},expression:"clientForm.tel"}}),t._v(" "),t.showList.is_open_client?t._e():s("el-button",{attrs:{disabled:t.clientForm.getcodeDisabled},on:{click:t.clientSet}},[t._v(" "+t._s(this.$parent.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),t.clientForm.getcodeDisabled?s("span",[t._v("("+t._s(t.clientForm.ss)+" "+t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_SECOND)+")")]):t._e()])],1),t._v(" "),t.showList.is_open_client?t._e():s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE,prop:"code"}},[s("el-input",{staticStyle:{width:"300px"},model:{value:t.clientForm.code,callback:function(e){t.$set(t.clientForm,"code",e)},expression:"clientForm.code"}})],1)],1),t._v(" "),t.showList.is_open_client?t._e():s("el-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"warning",size:"small"},on:{click:t.clientVerify}},[t._v(t._s(this.$parent.lan.OPEN_CLIENT_LOGIN))])],1):t._e()]):t._e(),t._v(" "),s("el-dialog",{attrs:{title:t.$parent.lan.OPEN_IMAP,visible:t.resultFormVisible,"close-on-click-modal":!1,"append-to-body":!0,width:"600px"},on:{"update:visible":function(e){t.resultFormVisible=e}}},[s("div",{staticStyle:{"padding-bottom":"10px","padding-top":"20px"}},[s("h3",[t._v(t._s(t.$parent.lan.CLIENT_DESC))]),t._v(" "),s("span",{staticStyle:{padding:"10px 20px",border:"2px dashed #4EA6D0",display:"inline-block",margin:"40px 10px",background:"#E9F3F9","font-weight":"bold","font-size":"16px"}},[t._v("\n            "+t._s(t.client_result)+"\n          ")]),t._v(" "),s("div",{staticStyle:{color:"#764007",background:"#FFF9E3",border:"1px solid #FBDE83",padding:"6px 10px"}},[t._v("\n            "+t._s(t.$parent.lan.CLIENT_TIPS)+"\n          ")])]),t._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{nativeOn:{click:function(e){t.resultFormVisible=!1}}},[t._v(t._s(this.$parent.lan.COMMON_CLOSE))])],1)])],1)])],1)},staticRenderFns:[]};var o=s("C7Lr")(n,i,!1,function(t){s("6Mot")},"data-v-644d5fcb",null);e.default=o.exports}});
//# sourceMappingURL=15.316739dd0e2a93e04127.js.map