webpackJsonp([37],{t5Ps:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("aA9S"),l=r.n(a),o=r("P9l9"),n={data:function(){var e=this;return{plang:e.$parent.lan,createFormLoading:!1,createForm:{name:"",email:"",mobile:"",content:""},createFormRules:{email:[{required:!0,message:e.$parent.lan.SETTING_WHITE_EMAIL_RULE1,trigger:"blur"},{validator:function(t,r,a){1==/^(\w|[-+=.])+@\w+([-.]\w+)*\.(\w+)$/.test(r)?a():a(new Error(e.$parent.lan.SETTING_WHITE_EMAIL_RULE2))},trigger:"blur"}],content:[{required:!0,message:e.$parent.lan.SETTING_FEEDBACK_NOTE_RULE,trigger:"blur"}]}}},mounted:function(){this.createForm.email=this.$store.state.userInfo.name},methods:{createFormSubmit:function(){var e=this;this.$refs.createForm.validate(function(t){if(t){e.createFormLoading=!0;var r=l()({},e.createForm);e.$message({message:e.plang.SETTING_FEEDBACK_MSG,type:"success"}),e.$refs.createForm.resetFields(),e.createForm.email=e.$store.state.userInfo.name,Object(o._144)(r).then(function(t){e.createFormLoading=!1}).catch(function(t){e.createFormLoading=!1})}})}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[r("el-row",{staticStyle:{padding:"0px"}},[r("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(e.plang.COMMON_HOME_NAME))]),e._v(" "),r("el-breadcrumb-item",[r("a",{attrs:{href:"#"}},[e._v(e._s(e.plang.SETTING_INDEX_NAME))])]),e._v(" "),r("el-breadcrumb-item",[e._v(e._s(e.plang.SETTING_INDEX_FEEDBACK_MENU))])],1)],1)],1),e._v(" "),r("el-alert",{attrs:{title:e.plang.SETTING_FEEDBACK_DESC,type:"success",closable:!1}}),e._v(" "),r("section",{staticClass:"content content-list height100",staticStyle:{"padding-bottom":"13px"}},[r("el-form",{ref:"createForm",staticStyle:{"margin-left":"13px","margin-right":"13px","margin-top":"13px"},attrs:{model:e.createForm,rules:e.createFormRules,"label-width":"120px",size:"mini"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.plang.SETTING_FEEDBACK_NAME,prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createForm.name,callback:function(t){e.$set(e.createForm,"name","string"==typeof t?t.trim():t)},expression:"createForm.name"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.plang.SETTING_FEEDBACK_EMAIL,prop:"email"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createForm.email,callback:function(t){e.$set(e.createForm,"email","string"==typeof t?t.trim():t)},expression:"createForm.email"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.plang.SETTING_FEEDBACK_PHONE,prop:"mobile"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createForm.mobile,callback:function(t){e.$set(e.createForm,"mobile","string"==typeof t?t.trim():t)},expression:"createForm.mobile"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:e.plang.SETTING_FEEDBACK_NOTE,prop:"content"}},[r("el-input",{attrs:{"auto-complete":"off",type:"textarea"},model:{value:e.createForm.content,callback:function(t){e.$set(e.createForm,"content","string"==typeof t?t.trim():t)},expression:"createForm.content"}})],1)],1)],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary",loading:e.createFormLoading},nativeOn:{click:function(t){return e.createFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))])],1)],1)],1)],1)},staticRenderFns:[]},i=r("C7Lr")(n,s,!1,null,null,null);t.default=i.exports}});