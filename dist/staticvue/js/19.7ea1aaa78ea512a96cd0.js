webpackJsonp([19],{"6PTq":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("7xaE"),s("XH3N"),s("L/O1");var a=s("P9l9"),i={data:function(){var t=this,e=this;return{ckVisible:!1,show_lock_form:!1,ckform:{pass:""},ckRules:{pass:[{required:!0,message:this.$parent.lan.LAYOUT_INDEX_PASSWORD_RULE,trigger:"blur"}]},lockForm:{pass:"",checkPass:"",checkList:["is_lockmailbox","is_lockfile","is_lockcalendar"]},show_lock_form_edit:!1,lockForm_edit:{src_pass:"",pass:"",checkPass:"",checkList:[]},lockRules:{pass:[{validator:function(s,a,i){""===a?i(new Error(e.$parent.lan.LAYOUT_INDEX_PASSWORD_RULE)):(""!==t.lockForm.checkPass&&t.$refs.lockForm.validateField("checkPass"),i())},trigger:["blur","change"]}],checkPass:[{validator:function(s,a,i){""===a?i(new Error(e.$parent.lan.LAYOUT_INDEX_PASSWORD_RULE_AGAIN)):a!==t.lockForm.pass?i(new Error(e.$parent.lan.LAYOUT_INDEX_TWO_INCONSISTENT_PASSWORDS)):i()},trigger:["blur","change"]}]},lockRules_edit:{checkPass:[{validator:function(s,a,i){a!==t.lockForm_edit.pass?i(new Error(e.$parent.lan.LAYOUT_INDEX_TWO_INCONSISTENT_PASSWORDS)):i()},trigger:["blur","change"]}]},wxList:{},show_wx_set:!1,resultFormVisible:!1,client_result:"",show_client_set:!1,client_timer:null,clientForm:{tel:"",code:"",getcodeDisabled:!1,ss:60},clientRules:{tel:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE,trigger:"blur"}],code:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE,trigger:"blur"}]},show_phone_set:!1,show_google_set:!1,timer:"",getcodeDisabled:!1,ss:60,qrsvg:"",showList:{has_totp:!1,phone:null,has_permisson:!1,has_phone:!1,can_open_phone:!1},secret_key:"",activeName:"first",phoneForm:{tel:"",code:""},phoneRules:{tel:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE,trigger:"blur"}],code:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE,trigger:"blur"}]},goggleForm:{code:""},goggleRules:{code:[{required:!0,message:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE_RULE,trigger:"blur"}]}}},mounted:function(){var t=this;this.$route.query.message&&this.$route.query.type&&(this.$message({type:this.$route.query.type,duration:5e3,message:decodeURIComponent(this.$route.query.message)}),this.$router.replace("/setting/twofactor")),setTimeout(function(){void 0===t.$store.getters.getLoginAfter.is_wxlogin?t.getLoginAfter():t.$store.getters.getLoginAfter.is_wxlogin&&(t.$store.getters.getLoginAfter.is_wxqiye?t.wx_login_qy():t.wx_login_gzh())},1e3)},created:function(){this.getTwofactorShow(),this.wechatUser(),this.getFlock()},methods:{forget_lock:function(){this.$message({type:"warning",message:this.$parent.lan.ADMIN_CANCEL_PWD})},relFlock:function(){var t=this;this.$refs.ckform.validate(function(e){if(!e)return!1;var s={lock_password:t.$get_enc_pwd(t.ckform.pass)};Object(a._121)(s).then(function(e){t.ckVisible=!1,t.$refs.ckform.resetFields(),t.getFlock()}).catch(function(t){})})},getFlock:function(){var t=this;Object(a._42)().then(function(e){t.$store.dispatch("setFlockA",e.data),t.lockForm_edit.checkList=[],e.data.is_lockmailbox&&t.lockForm_edit.checkList.push("is_lockmailbox"),e.data.is_lockfile&&t.lockForm_edit.checkList.push("is_lockfile"),e.data.is_lockcalendar&&t.lockForm_edit.checkList.push("is_lockcalendar")}).catch(function(t){})},submitForm:function(t){var e=this;this.$refs[t].validate(function(s){if(!s)return!1;var i={lock_password:e.$get_enc_pwd(e.lockForm.pass),is_lockmailbox:!1,is_lockfile:!1,is_lockcalendar:!1};e.lockForm.checkList.forEach(function(t){i[t]=!0}),Object(a._136)(i).then(function(s){e.getFlock(),e.show_lock_form=!1,e.$refs[t].resetFields(),e.$message({type:"success",message:e.$parent.lan.COMMON_OPRATE_SUCCESS})}).catch(function(t){})})},submitForm_edit:function(t){var e=this;this.$refs[t].validate(function(s){if(!s)return!1;var i={is_lockmailbox:!1,is_lockfile:!1,is_lockcalendar:!1};e.lockForm_edit.src_pass&&!e.lockForm_edit.pass||!e.lockForm_edit.src_pass&&e.lockForm_edit.pass?e.$message({type:"error",message:e.$parent.lan.EDIT_LOCK_DESC}):(e.lockForm_edit.src_pass&&e.lockForm_edit.pass&&(i.lock_password=e.$get_enc_pwd(e.lockForm_edit.pass),i.src_password=e.$get_enc_pwd(e.lockForm_edit.src_pass)),e.lockForm_edit.checkList.forEach(function(t){i[t]=!0}),Object(a.b)(i).then(function(s){e.getFlock(),e.show_lock_form_edit=!1,e.$refs[t].resetFields(),e.$message({type:"success",message:e.$parent.lan.COMMON_OPRATE_SUCCESS})}).catch(function(t){}))})},wechatUnbind:function(){var t=this;this.$confirm(this.$parent.lan.SURE_UNBOUND,{type:"warning"}).then(function(){Object(a._233)().then(function(e){t.wechatUser(),void 0===t.$store.getters.getLoginAfter.is_wxlogin?t.getLoginAfter():t.$store.getters.getLoginAfter.is_wxlogin&&(t.$store.getters.getLoginAfter.is_wxqiye?t.wx_login_qy():t.wx_login_gzh())}).catch(function(t){})}).catch(function(){})},wechatUser:function(){var t=this;Object(a._234)().then(function(e){t.wxList=e.data}).catch(function(t){})},getLoginAfter:function(){var t=this;Object(a._68)().then(function(e){t.$store.dispatch("setLoginAfterA",e.data),e.data.skin_name&&t.$store.dispatch("setSkinOrderA",e.data.skin_name),t.$store.dispatch("setIsFulltextA",e.data.is_fulltext),t.$store.getters.getLoginAfter.is_wxlogin&&(t.$store.getters.getLoginAfter.is_wxqiye?t.wx_login_qy():t.wx_login_gzh())}).catch(function(t){})},guid:function(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+t()+t()},wx_login_qy:function(){window.WwLogin({id:"wx_qrcode",appid:this.$store.getters.getLoginAfter.wx_appid,agentid:this.$store.getters.getLoginAfter.wx_agentid,redirect_uri:location.protocol+"//"+this.$store.getters.getLoginAfter.wx_callback_domain+"/api/wechat/callback/",state:this.guid(),href:"https://www.bestedm.org/static/login/css/login-weixin.css"})},wx_login_gzh:function(){new WxLogin({id:"wx_qrcode",appid:this.$store.getters.getLoginAfter.wx_appid,scope:"snsapi_login",redirect_uri:"https://"+this.$store.getters.getLoginAfter.wx_callback_domain+"/api/wechat/callback/",state:this.guid(),style:"",href:" https://www.bestedm.org/static/login/css/login-weixin.css"})},client_set_change:function(){var t=this;this.showList.is_open_client?this.$confirm(this.$parent.lan.RELEASE_CLIENT,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){t.clientRelease()}).catch(function(){}):this.show_client_set=!this.show_client_set},clientSet:function(){var t=this;if(this.clientForm.tel&&""!=this.clientForm.tel){this.clientForm.getcodeDisabled=!0,this.clientForm.ss=60;var e=this,s={phone:this.clientForm.tel};Object(a.p)(s).then(function(s){s.data.detail&&t.$message({type:"success",message:s.data.detail}),e.client_timer&&clearInterval(e.client_timer),e.client_timer=setInterval(function(){e.clientForm.ss--,e.clientForm.ss<=0&&(e.clientForm.getcodeDisabled=!1,e.clientForm.ss=60,clearInterval(e.client_timer))},1e3)}).catch(function(e){t.clientForm.getcodeDisabled=!1,t.clientForm.ss=60,e.phone&&t.$message({type:"error",message:e.phone[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},clientVerify:function(){var t=this;if(this.clientForm.tel&&""!=this.clientForm.tel)if(this.clientForm.code&&""!=this.clientForm.code){var e={phone:this.clientForm.tel,verification_code:this.clientForm.code};Object(a.q)(e).then(function(e){t.clientForm.tel="",t.clientForm.code="",t.getTwofactorShow(),t.show_client_set=!1,t.clientForm.getcodeDisabled=!1,t.clientForm.ss=60,t.client_result=e.data.sms_password,t.resultFormVisible=!0}).catch(function(e){e.phone&&t.$message({type:"error",message:t.$parent.lan.COMMON_OPRATE_FAILED+e.phone[0]}),e.verification_code&&t.$message({type:"error",message:t.$parent.lan.COMMON_OPRATE_FAILED+e.verification_code[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE});else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},clientRelease:function(){var t=this;Object(a.o)().then(function(e){t.$message({type:"success",message:t.$parent.lan.COMMON_OPRATE_SUCCESS}),t.getTwofactorShow()}).catch(function(t){})},googleReleaseFn:function(){var t=this,e={verification_code:this.goggleForm.code};Object(a._61)(e).then(function(e){t.show_google_set=!1,t.getTwofactorShow();t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_GOOGLE_RELEASE_S}),t.goggleForm.code=""}).catch(function(e){e.verification_code&&t.$message({type:"error",message:e.verification_code[0]})})},releaseSmsFn:function(){var t=this;this.getcodeDisabled=!0;var e=this;Object(a._122)().then(function(t){e.timer&&clearInterval(e.timer),e.timer=setInterval(function(){e.ss--,e.ss<=0&&(e.getcodeDisabled=!1,e.ss=60,clearInterval(e.timer))},1e3)}).catch(function(e){t.getcodeDisabled=!1,t.ss=60,e.phone&&t.$message({type:"error",message:e.phone[0]})})},sentSms:function(){var t=this;if(this.phoneForm.tel&&""!=this.phoneForm.tel){this.getcodeDisabled=!0;var e=this,s={phone:this.phoneForm.tel};Object(a._109)(s).then(function(s){s.data.detail&&t.$message({type:"success",message:s.data.detail}),e.timer&&clearInterval(e.timer),e.timer=setInterval(function(){e.ss--,e.ss<=0&&(e.getcodeDisabled=!1,e.ss=60,clearInterval(e.timer))},1e3)}).catch(function(e){t.getcodeDisabled=!1,t.ss=60,e.phone&&t.$message({type:"error",message:e.phone[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},phoneVerifyFn:function(){var t=this;if(this.phoneForm.tel&&""!=this.phoneForm.tel)if(this.phoneForm.code&&""!=this.phoneForm.code){var e={phone:this.phoneForm.tel,verification_code:this.phoneForm.code};Object(a._110)(e).then(function(e){e.data.detail&&e.data.detail,t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_BOUND_S}),t.phoneForm.tel="",t.phoneForm.code="",t.getTwofactorShow(),t.show_phone_set=!1,t.getcodeDisabled=!1,t.ss=60}).catch(function(e){e.phone&&t.$message({type:"error",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_BOUND_F+e.phone[0]}),e.verification_code&&t.$message({type:"error",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_BOUND_F+e.verification_code[0]})})}else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE_RULE});else this.$message({type:"error",message:this.$parent.lan.SETTING_TWOFACTOR_PHONE_RULE})},phoneReleaseFn:function(){var t=this,e={verification_code:this.phoneForm.code};Object(a._108)(e).then(function(e){e.data.detail&&e.data.detail,t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_RELEASE_S}),t.phoneForm.tel="",t.phoneForm.code="",t.getTwofactorShow(),t.show_phone_set=!1,t.getcodeDisabled=!1,t.ss=60}).catch(function(e){e.verification_code&&t.$message({type:"error",message:t.$parent.lan.SETTING_TWOFACTOR_PHONE_RELEASE_F+e.verification_code[0]})})},changeTab:function(t){this.activeName=t},getSecret:function(){var t=this;Object(a._62)().then(function(e){t.secret_key=e.data.secret_key,t.getQrcode()}).catch(function(t){})},getQrcode:function(){var t=this,e={secret_key:this.secret_key};Object(a._60)(e).then(function(e){t.qrsvg=e.data}).catch(function(t){})},getTwofactorShow:function(){var t=this;Object(a._224)().then(function(e){t.showList=e.data,e.data.phone,e.data.tel_mobile&&(t.phoneForm.tel=e.data.tel_mobile,t.clientForm.tel=e.data.tel_mobile),e.data.has_totp||t.getSecret()}).catch(function(t){})},googleVerifyFn:function(){var t=this,e={secret_key:this.secret_key,verification_code:this.goggleForm.code};Object(a._63)(e).then(function(e){t.show_google_set=!1,t.getTwofactorShow();t.$message({type:"success",message:t.$parent.lan.SETTING_TWOFACTOR_GOOGLE_BOUND_S}),t.goggleForm.code=""}).catch(function(t){})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 ",staticStyle:{"background-color":"rgba(255,255,255,0.3)"}},[a("el-row",{staticStyle:{padding:"0px"}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v(t._s(this.$parent.lan.COMMON_HOME_NAME))]),t._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[t._v(t._s(this.$parent.lan.SETTING_INDEX_NAME))])]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$parent.lan.SETTING_INDEX_TWOFACTOR_MENU))])],1)],1)],1),t._v(" "),a("section",{staticClass:"content content-list",staticStyle:{"padding-bottom":"13px"}},[a("div",{staticStyle:{padding:"20px 10px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{"font-size":"16px","font-weight":"bold"},attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.$parent.lan.SET_LOCK))])]),t._v(" "),a("div",[a("el-form",{directives:[{name:"show",rawName:"v-show",value:t.show_lock_form,expression:"show_lock_form"}],ref:"lockForm",staticClass:"demo-ruleForm",staticStyle:{width:"460px"},attrs:{model:t.lockForm,rules:t.lockRules,size:"small","label-width":"160px"}},[a("el-form-item",{attrs:{label:t.$parent.lan.SET_LOCK_PWD,prop:"pass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.lockForm.pass,callback:function(e){t.$set(t.lockForm,"pass",e)},expression:"lockForm.pass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$parent.lan.PWD_AGAIN,prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.lockForm.checkPass,callback:function(e){t.$set(t.lockForm,"checkPass",e)},expression:"lockForm.checkPass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$parent.lan.LOCK_PRO,prop:"age"}},[a("el-checkbox-group",{model:{value:t.lockForm.checkList,callback:function(e){t.$set(t.lockForm,"checkList",e)},expression:"lockForm.checkList"}},[a("div",[a("el-checkbox",{attrs:{label:"is_lockmailbox"}},[t._v(t._s(t.$parent.lan.MY_FOLDER))])],1),t._v(" "),a("div",[a("el-checkbox",{attrs:{label:"is_lockfile"}},[t._v(t._s(t.$parent.lan.LAYOUT_INDEX_FILE_CENTER))])],1),t._v(" "),a("div",[a("el-checkbox",{attrs:{label:"is_lockcalendar"}},[t._v(t._s(t.$parent.lan.LAYOUT_INDEX_MY_SCHEDULE))])],1)])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("lockForm")}}},[t._v(t._s(t.$parent.lan.SURE_LOCK))]),t._v(" "),a("el-button",{on:{click:function(e){t.show_lock_form=!1}}},[t._v(t._s(t.$parent.lan.COMMON_BUTTON_CANCELL))])],1)],1),t._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:t.show_lock_form_edit&&t.$store.getters.flock.is_lockpassword,expression:"show_lock_form_edit && $store.getters.flock.is_lockpassword"}],ref:"lockForm_edit",staticClass:"demo-ruleForm",staticStyle:{width:"460px"},attrs:{model:t.lockForm_edit,rules:t.lockRules_edit,size:"small","label-width":"160px"}},[a("el-form-item",{attrs:{label:t.$parent.lan.LOCK_PRO,prop:"age"}},[a("el-checkbox-group",{model:{value:t.lockForm_edit.checkList,callback:function(e){t.$set(t.lockForm_edit,"checkList",e)},expression:"lockForm_edit.checkList"}},[a("div",[a("el-checkbox",{attrs:{label:"is_lockmailbox"}},[t._v(t._s(t.$parent.lan.MY_FOLDER))])],1),t._v(" "),a("div",[a("el-checkbox",{attrs:{label:"is_lockfile"}},[t._v(t._s(t.$parent.lan.LAYOUT_INDEX_FILE_CENTER))])],1),t._v(" "),a("div",[a("el-checkbox",{attrs:{label:"is_lockcalendar"}},[t._v(t._s(t.$parent.lan.LAYOUT_INDEX_MY_SCHEDULE))])],1)])],1),t._v(" "),a("div",{staticStyle:{"border-top":"1px solid #eee","margin-top":"20px"}}),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("div",{staticStyle:{color:"#A0A0A0"}},[t._v(t._s(t.$parent.lan.EDIT_LOCK_DESC))])]),t._v(" "),a("el-form-item",{attrs:{label:t.$parent.lan.SRC_PWD,prop:"src_pass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.lockForm_edit.src_pass,callback:function(e){t.$set(t.lockForm_edit,"src_pass",e)},expression:"lockForm_edit.src_pass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$parent.lan.COMMON_NEW_PASSWORD+"：",prop:"pass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.lockForm_edit.pass,callback:function(e){t.$set(t.lockForm_edit,"pass",e)},expression:"lockForm_edit.pass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$parent.lan.PWD_AGAIN,prop:"checkPass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.lockForm_edit.checkPass,callback:function(e){t.$set(t.lockForm_edit,"checkPass",e)},expression:"lockForm_edit.checkPass"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm_edit("lockForm_edit")}}},[t._v(t._s(t.$parent.lan.COMMON_BUTTON_CONFIRM))]),t._v(" "),a("el-button",{on:{click:function(e){t.show_lock_form_edit=!1}}},[t._v(t._s(t.$parent.lan.COMMON_BUTTON_CANCELL))])],1)],1)],1),t._v(" "),a("div",{staticStyle:{"border-top":"1px solid #eee"}},[t.$store.getters.flock.is_lockpassword?t._e():a("p",[t._v(t._s(t.$parent.lan.LOCK_DESC)),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.show_lock_form=!0}}},[t._v(t._s(t.$parent.lan.LOCK_SOON))]),t._v("。")],1),t._v(" "),t.$store.getters.flock.is_lockpassword?a("p",[t._v(t._s(t.$parent.lan.IS_LOCK)+"\n            "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.show_lock_form_edit=!0}}},[t._v(t._s(t.$parent.lan.EDIT_LOCK))]),t._v("。\n            "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.ckVisible=!0}}},[t._v(t._s(t.$parent.lan.CANCEL_LOCK))])],1):t._e()])])],1),t._v(" "),a("div",{staticStyle:{padding:"0 10px"}},[a("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_TITLE))]),t._v(" "),t.showList.has_totp||t.showList.has_phone?t._e():a("el-alert",{staticStyle:{margin:"10px 0"},attrs:{title:this.$parent.lan.SETTING_TWOFACTOR_ALERT,type:"warning",closable:!1}}),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"img_icon img_google"}),t._v(" "),a("b",[t._v(t._s(this.$parent.lan.COMMON_TWOFACTOR_GOOGLE))]),t._v(" "),a("div",[t.showList.has_totp?t._e():a("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_DISABLE_TITLE))]),t._v(" "),t.showList.has_totp?a("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_ENABLE_TITLE))]):t._e()]),t._v(" "),a("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[a("span",{style:{color:t.showList.has_totp?"#54D5B3":"#E71C00"}},[t._v(t._s(t.showList.has_totp?this.$parent.lan.IS_OPENED:this.$parent.lan.IS_CLOSED))]),t._v(" "),a("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),a("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:function(e){t.show_google_set=!t.show_google_set}}},[t._v(t._s(t.showList.has_totp?this.$parent.lan.COMMON_CLOSE:this.$parent.lan.OPEN))])],1)]),t._v(" "),t.show_google_set?a("div",{staticClass:"text item"},[t.showList.has_totp?a("el-form",{attrs:{model:t.goggleForm,rules:t.goggleRules,"label-width":"200px",size:"small"}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE,prop:"code"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE_PLACE},model:{value:t.goggleForm.code,callback:function(e){t.$set(t.goggleForm,"code",e)},expression:"goggleForm.code"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:t.googleReleaseFn}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_DISABLE))])],1)],1):t._e(),t._v(" "),t.showList.has_totp?t._e():a("el-tabs",{staticClass:"safe_box",staticStyle:{"max-width":"900px"},attrs:{type:"card"},on:{"tab-click":function(t){}},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP1,name:"first"}},[a("div",{staticClass:"first"},[a("div",{staticClass:"first-step"},[a("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ①")]),t._v(" "),a("h4",{staticClass:"ng-binding",staticStyle:{"margin-bottom":"5px"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_TITLE))]),t._v(" "),a("div",{staticClass:"item-body downloads "},[a("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD1)),a("a",{attrs:{href:"http://otp.aliyun.com/shenfenbao.html",target:"_blank"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD10))])]),t._v(" "),a("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD2))]),t._v(" "),a("p",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_METHOD3)),a("br"),t._v(" "),a("a",{staticClass:"f-fl",attrs:{href:"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8",target:"_blank"}},[a("i",{staticClass:"icon-googleAuthen icon-googleAuthen-ios",staticStyle:{"margin-bottom":"5px"}})]),t._v(" "),a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2",target:"_blank"}},[a("i",{staticClass:"icon-googleAuthen icon-googleAuthen-play"})])])])]),t._v(" "),a("div",{staticClass:"option1"},[a("a",{staticClass:"f-fr next-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.changeTab("second")}}},[t._v("\n                  "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_NEXT)+" >")]),a("span",{staticClass:"f-fr ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP1_FOOTER))])])])]),t._v(" "),a("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP2,name:"second"}},[a("div",{staticClass:"second"},[a("div",{staticClass:"second-step"},[a("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ②")]),t._v(" "),a("div",{staticClass:"code"},[a("div",{staticClass:"ewm",attrs:{id:"ewm"}},[a("div",{staticClass:"svg_box",domProps:{innerHTML:t._s(t.qrsvg)}})]),t._v(" "),a("p",{staticClass:"ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP2_TITLE))])]),t._v(" "),a("div",{staticClass:"secretkey"},[a("div",{staticClass:"key"},[a("b",[t._v(t._s(t.secret_key))])]),t._v(" "),a("p",{staticClass:"ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP2_MID))])])]),t._v(" "),a("div",{staticClass:"option2"},[a("a",{staticClass:"f-fl prev-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.changeTab("first")}}},[t._v("\n                  < "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_PRE))]),a("a",{staticClass:"f-fr next-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.changeTab("third")}}},[t._v("\n                  "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_NEXT)+" >")]),a("span",{staticClass:"f-fr ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP2_FOOTER))])])])]),t._v(" "),a("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP3,name:"third"}},[a("div",{staticClass:"third"},[a("div",{staticClass:"third-step"},[a("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ③")]),t._v(" "),a("div",{staticClass:"keepkey"},[a("b",{staticStyle:{"padding-left":"12px"}},[t._v(t._s(t.secret_key))])]),t._v(" "),a("div",{staticClass:"backupkey"},[a("p",{staticClass:"ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP3_TITLE))]),t._v(" "),a("p",{staticClass:"ng-binding",staticStyle:{color:"#ff0000","margin-top":"15px"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP3_MID))])])]),t._v(" "),a("div",{staticClass:"option3"},[a("a",{staticClass:"f-fl prev-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.changeTab("second")}}},[t._v("\n                  < "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_PRE))]),a("a",{staticClass:"f-fr next-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.changeTab("fourth")}}},[t._v("\n                  "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_NEXT)+" >")]),a("span",{staticClass:"f-fr ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP3_FOOTER))])])])]),t._v(" "),a("el-tab-pane",{staticClass:"safecontent",attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_STEP4,name:"fourth"}},[a("div",{staticClass:"fourth"},[a("div",{staticClass:"fourth-step"},[a("span",{staticClass:"stepNum ng-binding"},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP)+" ④")]),t._v(" "),a("form",{staticClass:"ng-pristine ng-valid",attrs:{id:"googleAuthen-form",autocomplete:"off"}},[a("input",{attrs:{type:"hidden",name:"secretKey",value:"KF3NDTJAI4PYSZ35"}}),t._v(" "),a("div",{staticClass:"item-body"},[a("div",{staticClass:"faCode"},[a("el-form",{attrs:{model:t.goggleForm,rules:t.goggleRules,"label-width":"200px",size:"small"}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE,prop:"code"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_CODE_PLACE},model:{value:t.goggleForm.code,callback:function(e){t.$set(t.goggleForm,"code",e)},expression:"goggleForm.code"}})],1)],1)],1)]),t._v(" "),a("div",{staticClass:"btns",staticStyle:{display:"none"}},[a("span",{staticClass:"btn btn-orange ng-binding",attrs:{id:"googleAuthen-btn"}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP4_TITLE))])])])]),t._v(" "),a("div",{staticClass:"option4"},[a("a",{staticClass:"f-fl prev-step ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.changeTab("third")}}},[t._v("\n                  < "+t._s(this.$parent.lan.SETTING_TWOFACTOR_STEP_PRE))]),a("a",{staticClass:"f-fr enable ng-binding",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.preventDefault(),t.googleVerifyFn(e)}}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_GOOGLE_ENABLE))])])])])],1)],1):t._e()]),t._v(" "),t.showList.can_open_phone?a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"img_icon img_mobile"}),t._v(" "),a("b",[t._v(t._s(this.$parent.lan.COMMON_TWOFACTOR_PHONE))]),t._v(" "),a("div",[t.showList.has_phone?t._e():a("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_DISABLE_TITLE))]),t._v(" "),t.showList.has_phone?a("span",[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_ENABLE_TITLE))]):t._e()]),t._v(" "),a("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[a("span",{style:{color:t.showList.has_phone?"#54D5B3":"#E71C00"}},[t._v(t._s(t.showList.has_phone?this.$parent.lan.IS_OPENED:this.$parent.lan.IS_CLOSED))]),t._v(" "),a("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),a("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:function(e){t.show_phone_set=!t.show_phone_set}}},[t._v(t._s(t.showList.has_phone?this.$parent.lan.COMMON_CLOSE:this.$parent.lan.OPEN))])],1)]),t._v(" "),t.show_phone_set?a("div",{staticClass:"text item"},[a("el-form",{ref:"phoneForm",staticClass:"demo-ruleForm",staticStyle:{"max-width":"900px"},attrs:{model:t.phoneForm,rules:t.phoneRules,"label-width":"190px",size:"small"}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_MOBILE,prop:"tel"}},[t.showList.has_phone?t._e():a("el-input",{staticStyle:{width:"204px"},model:{value:t.phoneForm.tel,callback:function(e){t.$set(t.phoneForm,"tel",e)},expression:"phoneForm.tel"}}),t._v(" "),t.showList.has_phone?a("el-input",{staticStyle:{width:"204px"},attrs:{disabled:""},model:{value:t.showList.phone,callback:function(e){t.$set(t.showList,"phone",e)},expression:"showList.phone"}}):t._e(),t._v(" "),t.showList.has_phone?t._e():a("el-button",{attrs:{disabled:t.getcodeDisabled},on:{click:t.sentSms}},[t._v(" "+t._s(this.$parent.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),t.getcodeDisabled?a("span",[t._v("("+t._s(t.ss)+" "+t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_SECOND)+")")]):t._e()]),t._v(" "),t.showList.has_phone?a("el-button",{attrs:{disabled:t.getcodeDisabled},on:{click:t.releaseSmsFn}},[t._v(" "+t._s(this.$parent.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),t.getcodeDisabled?a("span",[t._v("("+t._s(t.ss)+" "+t._s(this.$parent.lan.FILE_P_SEC)+")")]):t._e()]):t._e()],1),t._v(" "),a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE,prop:"code"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.phoneForm.code,callback:function(e){t.$set(t.phoneForm,"code",e)},expression:"phoneForm.code"}})],1)],1),t._v(" "),t.showList.has_phone?t._e():a("el-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"warning",size:"small"},on:{click:t.phoneVerifyFn}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_ENABLE))]),t._v(" "),t.showList.has_phone?a("el-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"danger",size:"small"},on:{click:t.phoneReleaseFn}},[t._v(t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_DISABLE))]):t._e()],1):t._e()]):t._e(),t._v(" "),t.showList.is_open_client||t.showList.can_open_client?a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"img_icon img_mobile"}),t._v(" "),a("b",[t._v(t._s(this.$parent.lan.CLIENT_LOGIN))]),t._v(" "),a("div",[t.showList.is_open_client?t._e():a("span",[t._v(t._s(this.$parent.lan.NO_OPEN_CLIENT_LOGIN))]),t._v(" "),t.showList.is_open_client?a("span",[t._v(t._s(this.$parent.lan.IS_OPENED_CLIENT_LOGIN))]):t._e()]),t._v(" "),a("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[a("span",{style:{color:t.showList.is_open_client?"#54D5B3":"#E71C00"}},[t._v(t._s(t.showList.is_open_client?this.$parent.lan.IS_OPENED:this.$parent.lan.IS_CLOSED))]),t._v(" "),a("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),a("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:t.client_set_change}},[t._v(t._s(t.showList.is_open_client?this.$parent.lan.COMMON_CLOSE:this.$parent.lan.OPEN))])],1)]),t._v(" "),t.show_client_set?a("div",{staticClass:"text item"},[a("el-form",{ref:"clientForm",staticClass:"demo-ruleForm",staticStyle:{"max-width":"900px"},attrs:{model:t.clientForm,rules:t.clientRules,"label-width":"190px",size:"small"}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_MOBILE,prop:"tel"}},[t.showList.is_open_client?t._e():a("el-input",{staticStyle:{width:"204px"},model:{value:t.clientForm.tel,callback:function(e){t.$set(t.clientForm,"tel",e)},expression:"clientForm.tel"}}),t._v(" "),t.showList.is_open_client?t._e():a("el-button",{attrs:{disabled:t.clientForm.getcodeDisabled},on:{click:t.clientSet}},[t._v(" "+t._s(this.$parent.lan.COMMON_FETCH_VERIFICATION_CODE)+" "),t.clientForm.getcodeDisabled?a("span",[t._v("("+t._s(t.clientForm.ss)+" "+t._s(this.$parent.lan.SETTING_TWOFACTOR_PHONE_SECOND)+")")]):t._e()])],1),t._v(" "),t.showList.is_open_client?t._e():a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_TWOFACTOR_PHONE_CODE,prop:"code"}},[a("el-input",{staticStyle:{width:"300px"},model:{value:t.clientForm.code,callback:function(e){t.$set(t.clientForm,"code",e)},expression:"clientForm.code"}})],1)],1),t._v(" "),t.showList.is_open_client?t._e():a("el-button",{staticStyle:{"margin-left":"200px"},attrs:{type:"warning",size:"small"},on:{click:t.clientVerify}},[t._v(t._s(this.$parent.lan.OPEN_CLIENT_LOGIN))])],1):t._e()]):t._e(),t._v(" "),t.$store.getters.getLoginAfter.is_wxlogin?a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("img",{staticStyle:{width:"38px","vertical-align":"middle"},attrs:{src:s("z9uP"),alt:"wx"}}),t._v(" "),a("b",[t._v(t._s(this.$parent.lan.WECHART_BIND))]),t._v(" "),a("div",[t.wxList.is_bind?a("span",[t._v(t._s(this.$parent.lan.BINDED_WECHART)+t._s(t.wxList.nickname))]):a("span",[t._v(t._s(this.$parent.lan.WECHART_BIND_DESC))])]),t._v(" "),a("div",{staticStyle:{background:"#FFF7F7",color:"#A1A1A1",display:"inline-block",padding:"0 10px",border:"1px solid #FDE3EB","border-radius":"4px","margin-top":"10px"}},[a("span",{style:{color:t.wxList.is_bind?"#54D5B3":"#E71C00"}},[t._v(t._s(t.wxList.is_bind?t.$parent.lan.BINDED:t.$parent.lan.UNBOUND))]),t._v(" "),a("span",{staticStyle:{padding:"0 6px"}},[t._v("|")]),t._v(" "),t.wxList.is_bind?a("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:t.wechatUnbind}},[t._v(t._s(t.$parent.lan.NO_BOUND))]):a("el-button",{staticStyle:{color:"#3276B2"},attrs:{type:"text"},on:{click:function(e){t.show_wx_set=!t.show_wx_set}}},[t._v(t._s(t.$parent.lan.BOUND_ACTION))])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show_wx_set,expression:"show_wx_set"}],staticClass:"text item"},[a("div",{staticStyle:{width:"400px"}},[a("div",{attrs:{id:"wx_qrcode"}})])])]):t._e(),t._v(" "),a("el-dialog",{attrs:{title:t.$parent.lan.OPEN_IMAP,visible:t.resultFormVisible,"close-on-click-modal":!1,"append-to-body":!0,width:"600px"},on:{"update:visible":function(e){t.resultFormVisible=e}}},[a("div",{staticStyle:{"padding-bottom":"10px","padding-top":"20px"}},[a("h3",[t._v(t._s(t.$parent.lan.CLIENT_DESC))]),t._v(" "),a("span",{staticStyle:{padding:"10px 20px",border:"2px dashed #4EA6D0",display:"inline-block",margin:"40px 10px",background:"#E9F3F9","font-weight":"bold","font-size":"16px"}},[t._v("\n            "+t._s(t.client_result)+"\n          ")]),t._v(" "),a("div",{staticStyle:{color:"#764007",background:"#FFF9E3",border:"1px solid #FBDE83",padding:"6px 10px"}},[t._v("\n            "+t._s(t.$parent.lan.CLIENT_TIPS)+"\n          ")])]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.resultFormVisible=!1}}},[t._v(t._s(this.$parent.lan.COMMON_CLOSE))])],1)])],1),t._v(" "),a("el-dialog",{attrs:{title:t.$parent.lan.CANCEL_LOCK,visible:t.ckVisible,"close-on-click-modal":!1,"append-to-body":!0,width:"500px"},on:{"update:visible":function(e){t.ckVisible=e}}},[a("el-form",{ref:"ckform",attrs:{model:t.ckform,rules:t.ckRules}},[a("el-form-item",{attrs:{label:t.$parent.lan.INPUT_PWD,prop:"pass"}},[a("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.ckform.pass,callback:function(e){t.$set(t.ckform,"pass",e)},expression:"ckform.pass"}})],1),t._v(" "),t._e()],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.ckVisible=!1}}},[t._v(t._s(t.$parent.lan.cancel))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.relFlock}},[t._v(t._s(t.$parent.lan.sure))])],1)],1)],1)],1)},staticRenderFns:[]};var n=s("C7Lr")(i,o,!1,function(t){s("8XAx")},"data-v-4ee40cdf",null);e.default=n.exports},"8XAx":function(t,e){}});