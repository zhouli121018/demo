webpackJsonp([32],{"N/R4":function(e,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=s("aA9S"),o=s.n(t),a=s("L/O1"),i=s("P9l9"),n={data:function(){var e=this,r=this;r.lan=r.$parent.lan;return{passeordFormLoading:!1,passwordRules:{passwd_type:2,passwd_size2:8,passwd_digital:!1,passwd_name:!1,passwd_name2:!1,passwd_letter:!1,passwd_letter2:!1},password_error:"",new_password_error:"",confirm_password_error:"",passeordForm:{password:"",new_password:"",confirm_password:""},passeordFormRules:{password:[{required:!0,message:this.$parent.lan.COMMON_SRC_PASSWORD_RULE,trigger:["blur","change"]},{min:1,message:this.$parent.lan.COMMON_SRC_PASSWORD_RULE_LEN,trigger:["blur","change"]}],new_password:[{validator:function(e,s,t){if(""!==s){if(s.length>16||s.length<r.passwordRules.passwd_size2)return t(new Error(r.lan.COMMON_PASSWORD_NOTICE_1+r.passwordRules.passwd_size2+r.lan.COMMON_PASSWORD_NOTICE_2));if(2==r.passwordRules.passwd_type){if(!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{1,16}$/.test(s))return t(new Error(r.lan.COMMON_PASSWORD_NOTICE_3))}else if(3==r.passwordRules.passwd_type){if(!/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=.]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=.]+$)(?![0-9\W_!@#$%^&*`~()-+=.]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=.]{1,16}$/.test(s))return t(new Error(r.lan.COMMON_PASSWORD_NOTICE_4))}else if(4==r.passwordRules.passwd_type&&!/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[_!@#$%^&*`~()-+=.])[a-zA-Z\d_!@#$%^&*`~()-+=.]*$/.test(s))return t(new Error(r.lan.COMMON_PASSWORD_NOTICE_5));if(r.passwordRules.passwd_digital){for(var o="0123456789",a=[],i=1;i<o.length-1;i++)a.push(o.slice(i-1,i+2));for(var n=1;n<"9876543210".length-1;n++)a.push("9876543210".slice(n-1,n+2));if(new RegExp(a.join("|")).test(s))return t(new Error(r.lan.COMMON_PASSWORD_NOTICE_6))}if(r.passwordRules.passwd_letter){for(var _="abcdefghijklmnopqrstuvwxyz",c=[],l=1;l<_.length-1;l++)c.push(_.slice(l-1,l+2));for(var u="zyxwvutsrqponmlkjihgfedcba",p=1;p<u.length-1;p++)c.push(u.slice(p-1,p+2));if(new RegExp(c.join("|")).test(s.toLowerCase()))return t(new Error(r.lan.COMMON_PASSWORD_NOTICE_9))}return r.passwordRules.passwd_letter2&&/(\w)*(\w)\2{2}(\w)*/.test(s.toLowerCase())?t(new Error(r.lan.COMMON_PASSWORD_NOTICE_10)):t()}t(new Error(r.lan.LAYOUT_INDEX_PASSWORD_RULE))},trigger:["blur","change"]}],confirm_password:[{validator:function(s,t,o){""===t?o(new Error(r.lan.LAYOUT_INDEX_PASSWORD_RULE)):t!==e.passeordForm.new_password?o(new Error(r.lan.LAYOUT_INDEX_TWO_INCONSISTENT_PASSWORDS)):o()},trigger:["blur","change"]}]},securityFormLoading:!1,security_question1_error:"",security_custom1_error:"",security_answer1_error:"",security_question2_error:"",security_custom2_error:"",security_answer2_error:"",security_question3_error:"",security_custom3_error:"",security_answer3_error:"",securityForm:{security_question1:"",security_custom1:"",security_answer1:"",security_question2:"",security_custom2:"",security_answer2:"",security_question3:"",security_custom3:"",security_answer3:""},securityFormRules:{},security_questions:[{value:"1",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD1},{value:"2",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD2},{value:"3",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD3},{value:"4",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD4},{value:"5",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD5},{value:"6",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD6},{value:"7",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD7},{value:"8",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QD8},{value:"custom",label:this.$parent.lan.CONMON_PASSWORD_SECURITY_QS}]}},mounted:function(){this.getPassword(),this.getSecurity()},methods:{getPassword:function(){var e=this;Object(i._184)().then(function(r){e.passwordRules=r.data})},getSecurity:function(){var e=this;Object(i._183)().then(function(r){e.securityForm=r.data.results})},passeordFormSubmit:function(){var e=this;this.password_error="",this.new_password_error="",this.confirm_password_error="",this.$refs.passeordForm.validate(function(r){if(r){e.passeordFormLoading=!0;var s=o()({},e.passeordForm);s.password=e.$get_enc_pwd(s.password),s.new_password=e.$get_enc_pwd(s.new_password),s.confirm_password=e.$get_enc_pwd(s.confirm_password),Object(i._188)(s).then(function(r){a.a.setCookie("token",r.data.token,7),e.$refs.passeordForm.resetFields(),e.passeordFormLoading=!1,e.$alert(e.$parent.lan.CHANGE_PASSWORD,e.$parent.lan.MAILBOX_COM_READ_SYSTEM_NOTICE,{confirmButtonText:e.$parent.lan.COMMON_BUTTON_CONFIRM,callback:function(r){a.a.delCookie("token"),a.a.delCookie("name"),e.$store.dispatch("setInfo"),e.$router.push("/login")}})}).catch(function(r){console.log(r),e.passeordFormLoading=!1,"password"in r&&(e.password_error=r.password[0]),"new_password"in r&&(e.new_password_error=r.new_password[0]),"confirm_password"in r&&(e.confirm_password_error=r.confirm_password[0])})}})},securityFormSubmit:function(){var e=this;this.security_question1_error="",this.security_custom1_error="",this.security_answer1_error="",this.security_question2_error="",this.security_custom2_error="",this.security_answer2_error="",this.security_question3_error="",this.security_custom3_error="",this.security_answer3_error="",this.$refs.securityForm.validate(function(r){if(r){e.securityFormLoading=!0;var s=o()({},e.securityForm);Object(i._187)(s).then(function(r){e.securityFormLoading=!1,e.$message({message:e.$parent.lan.COMMON_ALTER_SUCCESS,type:"success"})},function(r){e.securityFormLoading=!1,"security_question1"in r&&(e.security_question1_error=r.security_question1[0]),"security_custom1"in r&&(e.security_custom1_error=r.security_custom1[0]),"security_answer1"in r&&(e.security_answer1_error=r.security_answer1[0]),"security_question2"in r&&(e.security_question2_error=r.security_question2[0]),"security_custom2"in r&&(e.security_custom2_error=r.security_custom2[0]),"security_answer2"in r&&(e.security_answer2_error=r.security_answer2[0]),"security_question3"in r&&(e.security_question3_error=r.security_question3[0]),"security_custom3"in r&&(e.security_custom3_error=r.security_custom3[0]),"security_answer3"in r&&(e.security_answer3_error=r.security_answer3[0])}).catch(function(r){console.log(r),e.securityFormLoading=!1})}})}},computed:{check_passwd_size2:function(){var e=this.passeordForm.new_password;return""!==e&&!(e.length>16||e.length<this.passwordRules.passwd_size2)},check_passwd_type_2:function(){var e=this.passeordForm.new_password;if(""===e)return!1;return!!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{1,16}$/.test(e)},check_passwd_type_3:function(){var e=this.passeordForm.new_password;if(""===e)return!1;return!!/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=.]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=.]+$)(?![0-9\W_!@#$%^&*`~()-+=.]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=.]{1,16}$/.test(e)},check_passwd_type_4:function(){var e=this.passeordForm.new_password;if(""===e)return!1;return!!/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[_!@#$%^&*`~()-+=.])[a-zA-Z\d_!@#$%^&*`~()-+=.]*$/.test(e)},check_passwd_digital:function(){var e=this.passeordForm.new_password;if(""===e)return!1;for(var r="0123456789",s=[],t=1;t<r.length-1;t++)s.push(r.slice(t-1,t+2));for(var o=1;o<"9876543210".length-1;o++)s.push("9876543210".slice(o-1,o+2));return!new RegExp(s.join("|")).test(e)},check_passwd_letter:function(){var e=this.passeordForm.new_password;if(""===e)return!1;for(var r="abcdefghijklmnopqrstuvwxyz",s=[],t=1;t<r.length-1;t++)s.push(r.slice(t-1,t+2));for(var o="zyxwvutsrqponmlkjihgfedcba",a=1;a<o.length-1;a++)s.push(o.slice(a-1,a+2));return!new RegExp(s.join("|")).test(e.toLowerCase())},check_passwd_letter2:function(){var e=this.passeordForm.new_password;if(""===e)return!1;return!/(\w)*(\w)\2{2}(\w)*/.test(e.toLowerCase())}}},_={render:function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[s("el-row",{staticStyle:{padding:"0px"}},[s("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(this.$parent.lan.COMMON_HOME_NAME))]),e._v(" "),s("el-breadcrumb-item",[s("a",{attrs:{href:"#"}},[e._v(e._s(this.$parent.lan.SETTING_INDEX_NAME))])]),e._v(" "),s("el-breadcrumb-item",[e._v(e._s(this.$parent.lan.SETTING_INDEX_PASSWORD_MENU))])],1)],1)],1),e._v(" "),s("section",{staticClass:"content content-list height100",staticStyle:{background:"rgba(255,255,255,0.9)","padding-bottom":"13px"}},[s("el-form",{ref:"passeordForm",staticStyle:{"margin-left":"13px","margin-right":"13px","margin-top":"13px"},attrs:{model:e.passeordForm,"label-width":"180px",rules:e.passeordFormRules,size:"mini"}},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"demo-block-control"},[s("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[e._v(e._s(this.$parent.lan.SETTING_INDEX_PASSWORD_MENU))])])]),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.COMMON_SRC_PASSWORD,prop:"password",error:e.password_error}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.passeordForm.password,callback:function(r){e.$set(e.passeordForm,"password","string"==typeof r?r.trim():r)},expression:"passeordForm.password"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.COMMON_NEW_PASSWORD,prop:"new_password",error:e.new_password_error}},[s("el-input",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],attrs:{type:"password","auto-complete":"off"},model:{value:e.passeordForm.new_password,callback:function(r){e.$set(e.passeordForm,"new_password","string"==typeof r?r.trim():r)},expression:"passeordForm.new_password"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.COMMON_CONFIRM_PASSWORD,prop:"confirm_password",error:e.confirm_password_error}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.passeordForm.confirm_password,callback:function(r){e.$set(e.passeordForm,"confirm_password","string"==typeof r?r.trim():r)},expression:"passeordForm.confirm_password"}})],1)],1)],1),e._v(" "),e._e(),e._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",{staticStyle:{"margin-top":"13px"}},[s("el-button",{attrs:{type:"primary",loading:e.passeordFormLoading},nativeOn:{click:function(r){e.passeordFormSubmit()}}},[e._v(e._s(this.$parent.lan.COMMON_BUTTON_ALTER))])],1)],1)],1)],1),e._v(" "),s("el-form",{ref:"securityForm",staticStyle:{"margin-left":"13px","margin-right":"13px","margin-top":"13px"},attrs:{model:e.securityForm,"label-width":"100px",rules:e.securityFormRules,size:"mini"}},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"demo-block-control"},[s("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[e._v(e._s(this.$parent.lan.SETTING_PASSWORD_SECURITY_TITLE))])])])],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_Q1,prop:"security_question1",error:e.security_question1_error}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:this.$parent.lan.SETTING_PASSWORD_SECURITY_QP},model:{value:e.securityForm.security_question1,callback:function(r){e.$set(e.securityForm,"security_question1",r)},expression:"securityForm.security_question1"}},e._l(e.security_questions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),s("br"),e._v(" "),"custom"==e.securityForm.security_question1?s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_QS,prop:"security_custom1",error:e.security_custom1_error}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.securityForm.security_custom1,callback:function(r){e.$set(e.securityForm,"security_custom1","string"==typeof r?r.trim():r)},expression:"securityForm.security_custom1"}})],1)],1):e._e(),s("br"),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_QA,prop:"security_answer1",error:e.security_answer1_error}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.securityForm.security_answer1,callback:function(r){e.$set(e.securityForm,"security_answer1","string"==typeof r?r.trim():r)},expression:"securityForm.security_answer1"}})],1)],1),s("br")],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_Q2,prop:"security_question2",error:e.security_question2_error}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:this.$parent.lan.SETTING_PASSWORD_SECURITY_QP},model:{value:e.securityForm.security_question2,callback:function(r){e.$set(e.securityForm,"security_question2",r)},expression:"securityForm.security_question2"}},e._l(e.security_questions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),s("br"),e._v(" "),"custom"==e.securityForm.security_question2?s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_QS,prop:"security_custom2",error:e.security_custom2_error}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.securityForm.security_custom2,callback:function(r){e.$set(e.securityForm,"security_custom2","string"==typeof r?r.trim():r)},expression:"securityForm.security_custom2"}})],1)],1):e._e(),s("br"),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_QA,prop:"security_answer2",error:e.security_answer2_error}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.securityForm.security_answer2,callback:function(r){e.$set(e.securityForm,"security_answer2","string"==typeof r?r.trim():r)},expression:"securityForm.security_answer2"}})],1)],1),s("br")],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_Q3,prop:"security_question3",error:e.security_question3_error}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:this.$parent.lan.SETTING_PASSWORD_SECURITY_QP},model:{value:e.securityForm.security_question3,callback:function(r){e.$set(e.securityForm,"security_question3",r)},expression:"securityForm.security_question3"}},e._l(e.security_questions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),s("br"),e._v(" "),"custom"==e.securityForm.security_question3?s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_QS,prop:"security_custom3",error:e.security_custom3_error}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.securityForm.security_custom3,callback:function(r){e.$set(e.securityForm,"security_custom3","string"==typeof r?r.trim():r)},expression:"securityForm.security_custom3"}})],1)],1):e._e(),s("br"),e._v(" "),s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PASSWORD_SECURITY_QA,prop:"security_answer3",error:e.security_answer3_error}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.securityForm.security_answer3,callback:function(r){e.$set(e.securityForm,"security_answer3","string"==typeof r?r.trim():r)},expression:"securityForm.security_answer3"}})],1)],1),s("br")],1),e._v(" "),s("el-row",[s("el-col",{attrs:{span:24}},[s("el-form-item",[s("el-button",{attrs:{type:"primary",loading:e.securityFormLoading},nativeOn:{click:function(r){e.securityFormSubmit()}}},[e._v(e._s(this.$parent.lan.COMMON_BUTTON_ALTER))])],1)],1)],1)],1),e._v(" "),s("el-popover",{ref:"popover",attrs:{placement:"right",width:"300",trigger:"focus"}},[s("div",[s("ul",{staticStyle:{"font-size":"12px"}},[s("li",{style:{color:e.check_passwd_size2?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_size2?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_1)+e._s(e.passwordRules.passwd_size2)+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_2)+"\n            ")]),e._v(" "),2==e.passwordRules.passwd_type?s("li",{style:{color:e.check_passwd_type_2?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_type_2?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_3)+"\n            ")]):e._e(),e._v(" "),3==e.passwordRules.passwd_type?s("li",{style:{color:e.check_passwd_type_3?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_type_3?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_4)+"\n            ")]):e._e(),e._v(" "),4==e.passwordRules.passwd_type?s("li",{style:{color:e.check_passwd_type_4?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_type_4?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_5)+"\n            ")]):e._e(),e._v(" "),e.passwordRules.passwd_digital?s("li",{style:{color:e.check_passwd_digital?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_digital?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_6)+"\n            ")]):e._e(),e._v(" "),e.passwordRules.passwd_letter?s("li",{style:{color:e.check_passwd_letter?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_letter?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_9)+"\n            ")]):e._e(),e._v(" "),e.passwordRules.passwd_letter2?s("li",{style:{color:e.check_passwd_letter2?"#67C23A":"#F56C6C"}},[s("i",{class:e.check_passwd_letter2?"el-icon-success":"el-icon-error"}),e._v("\n              "+e._s(this.$parent.lan.COMMON_PASSWORD_NOTICE_10)+"\n            ")]):e._e()])])])],1)],1)},staticRenderFns:[]},c=s("C7Lr")(n,_,!1,null,null,null);r.default=c.exports}});
//# sourceMappingURL=32.32d2a31334bd5202276b.js.map