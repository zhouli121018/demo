webpackJsonp([18],{bJky:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("aA9S"),l=a.n(o),r=a("P9l9"),i={data:function(){return{can_modify:!1,need_alert:!1,extendInfoShow:!1,saveFormLoading:!1,need_review:!1,editform:{realname:"test",engname:"test",eenumber:"123",email:"test@test.com",department:"test",position:"test",birthday:"test",gender:"",tel_mobile:"",tel_work:"",tel_work_ext:"",tel_group:"",tel_home:"",im_qq:"",im_msn:"",homepage:"",addr_country:"",addr_state:"",addr_city:"",addr_zip:"",addr_address:"",remark:""},formRules:{realname:[{required:!0,message:this.$parent.lan.SETTING_USER_NAME_RULE,trigger:"blur"},{min:1,max:35,message:this.$parent.lan.SETTING_USER_NAME_RULE_LEN,trigger:"blur"}]}}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var t=this;Object(r._181)().then(function(e){t.need_review=e.data.need_review,t.can_modify=e.data.can_modify,t.editform=e.data.results,t.need_alert=e.data.need_alert})},onSubmit:function(){var t=this;this.$refs.editform.validate(function(e){if(e){t.saveFormLoading=!0;var a=l()({},t.editform);a.birthday=a.birthday&&""!=a.birthday?a.birthday:null,Object(r._190)(a).then(function(e){t.saveFormLoading=!1;var a=e.data.status;1==a?t.$message({message:t.$parent.lan.SETTING_USER_MESSAGE_1,type:"success"}):2==a?t.$message({message:t.$parent.lan.SETTING_USER_MESSAGE_2,type:"warning"}):3==a&&t.$message({message:t.$parent.lan.COMMON_ALTER_SUCCESS,type:"success"}),t.getUserInfo()}).catch(function(e){console.log(e),t.saveFormLoading=!1})}})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("el-row",{staticStyle:{padding:"0px"}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v(t._s(this.$parent.lan.COMMON_HOME_NAME))]),t._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[t._v(t._s(this.$parent.lan.SETTING_INDEX_NAME))])]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$parent.lan.SETTING_INDEX_PERSONAL_MENU))])],1)],1)],1),t._v(" "),t.need_alert?a("el-alert",{attrs:{title:this.$parent.lan.SETTING_USER_NOTICE,type:"warning",closable:!1}}):t._e(),t._v(" "),a("section",{staticClass:"content content-list height100",staticStyle:{background:"rgba(255,255,255,0.9)","padding-bottom":"13px"}},[a("el-form",{ref:"editform",staticStyle:{"margin-left":"13px","margin-right":"13px","margin-top":"13px"},attrs:{model:t.editform,rules:t.formRules,"label-width":"150px",size:"mini"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"demo-block-control"},[a("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[t._v(t._s(this.$parent.lan.SETTING_USER_TITLE_1))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_XINGMING,prop:"realname"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.realname,callback:function(e){t.$set(t.editform,"realname","string"==typeof e?e.trim():e)},expression:"editform.realname"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_ENGNAME}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.engname,callback:function(e){t.$set(t.editform,"engname","string"==typeof e?e.trim():e)},expression:"editform.engname"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_EENUMBER}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.eenumber,callback:function(e){t.$set(t.editform,"eenumber","string"==typeof e?e.trim():e)},expression:"editform.eenumber"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_EMAIL2}},[a("span",[t._v(t._s(t.editform.email))])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_DEPARTMENT}},[a("span",[t._v(t._s(t.editform.department))])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_POSITION}},[a("span",[t._v(t._s(t.editform.position))])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_MOBILE2}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.tel_mobile,callback:function(e){t.$set(t.editform,"tel_mobile","string"==typeof e?e.trim():e)},expression:"editform.tel_mobile"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_BIRTHDAY}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:this.$parent.lan.COMMON_SELECT_DATE,"value-format":"yyyy-MM-dd","auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.birthday,callback:function(e){t.$set(t.editform,"birthday",e)},expression:"editform.birthday"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_GENDER}},[a("el-radio-group",{attrs:{disabled:!t.can_modify},model:{value:t.editform.gender,callback:function(e){t.$set(t.editform,"gender",e)},expression:"editform.gender"}},[a("el-radio",{attrs:{label:"male"}},[t._v(t._s(this.$parent.lan.COMMON_GENDER_M))]),t._v(" "),a("el-radio",{attrs:{label:"female"}},[t._v(t._s(this.$parent.lan.COMMON_GENDER_F))])],1)],1)],1)],1),t._v(" "),t.extendInfoShow?t._e():a("div",{staticClass:"demo-block-control-ext-top",on:{click:function(e){t.extendInfoShow=!t.extendInfoShow}}},[a("i",{class:[t.extendInfoShow?"el-icon-caret-top":"el-icon-caret-bottom"]}),t._v(" "),a("span",[t._v(t._s(t.extendInfoShow?this.$parent.lan.SETTING_USER_BUTTON_HIDE:this.$parent.lan.SETTING_USER_BUTTON_SHOW))]),t._v(" "),a("button",{staticClass:"el-button control-button el-tooltip el-button--text el-button--small",staticStyle:{display:"none"},attrs:{type:"button","aria-describedby":"el-tooltip-7026",tabindex:"0"}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.extendInfoShow,expression:"extendInfoShow"}]},[a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"demo-block-control"},[a("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[t._v(t._s(this.$parent.lan.SETTING_USER_TITLE_2))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_TELWORK}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.tel_work,callback:function(e){t.$set(t.editform,"tel_work","string"==typeof e?e.trim():e)},expression:"editform.tel_work"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_TELWORKEXT}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.tel_work_ext,callback:function(e){t.$set(t.editform,"tel_work_ext","string"==typeof e?e.trim():e)},expression:"editform.tel_work_ext"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_TELGROUP}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.tel_group,callback:function(e){t.$set(t.editform,"tel_group","string"==typeof e?e.trim():e)},expression:"editform.tel_group"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_TELHOME}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.tel_home,callback:function(e){t.$set(t.editform,"tel_home","string"==typeof e?e.trim():e)},expression:"editform.tel_home"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"QQ"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.im_qq,callback:function(e){t.$set(t.editform,"im_qq","string"==typeof e?e.trim():e)},expression:"editform.im_qq"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"MSN"}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.im_msn,callback:function(e){t.$set(t.editform,"im_msn","string"==typeof e?e.trim():e)},expression:"editform.im_msn"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_HOMEPAGE}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.homepage,callback:function(e){t.$set(t.editform,"homepage","string"==typeof e?e.trim():e)},expression:"editform.homepage"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"demo-block-control"},[a("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[t._v(t._s(this.$parent.lan.SETTING_USER_TITLE_3))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_CONTRY}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.addr_country,callback:function(e){t.$set(t.editform,"addr_country","string"==typeof e?e.trim():e)},expression:"editform.addr_country"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_STATE}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.addr_state,callback:function(e){t.$set(t.editform,"addr_state","string"==typeof e?e.trim():e)},expression:"editform.addr_state"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_CITY}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.addr_city,callback:function(e){t.$set(t.editform,"addr_city","string"==typeof e?e.trim():e)},expression:"editform.addr_city"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_ZIP}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.addr_zip,callback:function(e){t.$set(t.editform,"addr_zip","string"==typeof e?e.trim():e)},expression:"editform.addr_zip"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:this.$parent.lan.SETTING_USER_ADDRESS}},[a("el-input",{attrs:{"auto-complete":"off",disabled:!t.can_modify},model:{value:t.editform.addr_address,callback:function(e){t.$set(t.editform,"addr_address","string"==typeof e?e.trim():e)},expression:"editform.addr_address"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"demo-block-control"},[a("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[t._v(t._s(this.$parent.lan.COMMON_REMARK))])])]),t._v(" "),a("el-col",{attrs:{span:16}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_REMARK}},[a("el-input",{attrs:{type:"textarea",disabled:!t.can_modify},model:{value:t.editform.remark,callback:function(e){t.$set(t.editform,"remark","string"==typeof e?e.trim():e)},expression:"editform.remark"}})],1)],1)],1)],1),t._v(" "),t.extendInfoShow?a("div",{staticClass:"demo-block-control-ext-bottom",on:{click:function(e){t.extendInfoShow=!t.extendInfoShow}}},[a("i",{class:[t.extendInfoShow?"el-icon-caret-top":"el-icon-caret-bottom"]}),t._v(" "),a("span",[t._v(t._s(t.extendInfoShow?this.$parent.lan.SETTING_USER_BUTTON_HIDE:this.$parent.lan.SETTING_USER_BUTTON_SHOW))]),t._v(" "),a("button",{staticClass:"el-button control-button el-tooltip el-button--text el-button--small",staticStyle:{display:"none"},attrs:{type:"button","aria-describedby":"el-tooltip-7026",tabindex:"0"}})]):t._e(),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",[t.can_modify?a("el-button",{attrs:{type:"primary",loading:t.saveFormLoading},nativeOn:{click:function(e){t.onSubmit()}}},[t._v(t._s(t.need_review?this.$parent.lan.SETTING_USER_BUTTON_SHENHE:this.$parent.lan.COMMON_BUTTON_SAVE))]):t._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var s=a("C7Lr")(i,n,!1,function(t){a("jX68")},null,null);e.default=s.exports},jX68:function(t,e){}});
//# sourceMappingURL=18.b528104a528c13765dfb.js.map