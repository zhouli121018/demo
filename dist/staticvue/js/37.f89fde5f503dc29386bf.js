webpackJsonp([37],{V5f5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("aA9S"),s=a.n(r),n=a("P9l9"),l={data:function(){return{plang:this.$parent.lan,sFormLoading:!1,sForm:{remark:"",status:""},sFormRules:{remark:[{required:!0,message:this.$parent.lan.SETTING_ACCCANCEL_REMARK_RULE,trigger:"blur"}]}}},mounted:function(){this.getSetting()},methods:{getSetting:function(){var t=this;Object(n._185)().then(function(e){null!=e.data.results&&(t.sForm=e.data.results)})},sFormSubmit:function(){var t=this;this.$refs.sForm.validate(function(e){if(e){t.sFormLoading=!0;var a=s()({},t.sForm);Object(n._189)(a).then(function(e){t.getSetting(),t.sFormLoading=!1,t.$message({message:t.plang.SETTING_ACCCANCEL_MSG,type:"success"})}).catch(function(e){t.sFormLoading=!1,console.log(e)})}})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("el-row",{staticStyle:{padding:"0px"}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v(t._s(t.plang.COMMON_HOME_NAME))]),t._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[t._v(t._s(t.plang.SETTING_INDEX_NAME))])]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(t.plang.SETTING_INDEX_ACCCANCEL_MENU))])],1)],1)],1),t._v(" "),"wait"==t.sForm.status?a("el-alert",{attrs:{title:t.plang.SETTING_ACCCANCEL_ALERT,type:"warning",closable:!1}}):t._e(),t._v(" "),a("section",{staticClass:"content content-list height100",staticStyle:{"background-color":"#fff",background:"rgba(255,255,255,0.9)","padding-bottom":"13px"}},[a("el-form",{ref:"sForm",staticStyle:{"margin-left":"13px","margin-right":"13px","margin-top":"13px"},attrs:{model:t.sForm,"label-width":"120px",rules:t.sFormRules,size:"mini"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"demo-block-control"},[a("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[t._v(t._s(t.plang.SETTING_ACCCANCEL_TITLE))])])])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:t.plang.SETTING_ACCCANCEL_REMARK,prop:"remark"}},[a("el-input",{attrs:{type:"textarea",disabled:"wait"==t.sForm.status},model:{value:t.sForm.remark,callback:function(e){t.$set(t.sForm,"remark","string"==typeof e?e.trim():e)},expression:"sForm.remark"}})],1)],1)],1),t._v(" "),"wait"!=t.sForm.status?a("el-row",[a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary",loading:t.sFormLoading},nativeOn:{click:function(e){t.sFormSubmit()}}},[t._v(t._s(t.plang.COMMON_BUTTON_SUBMIT))])],1)],1):t._e()],1)],1)],1)},staticRenderFns:[]},i=a("C7Lr")(l,o,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=37.f89fde5f503dc29386bf.js.map