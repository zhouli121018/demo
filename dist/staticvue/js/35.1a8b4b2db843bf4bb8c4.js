webpackJsonp([35],{R7ZR:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("aA9S"),s=a.n(l),r=a("P9l9"),i={data:function(){return{sFormLoading:!1,sForm:{read_type:"html",send_charset:"utf-8",login_overtime:"3600",save_webmail_sent:"1",save_webmail_sent2:"1",save_client_sent:"-1",save_contact:"1",auto_receipt:"-1",auto_save_draft:"1",webmail_attachment_expired:0},sFormRules:{},read_types:[{value:"html",label:this.$parent.lan.SETTING_PARAM_MAIL_READ_TYPE_H},{value:"text",label:this.$parent.lan.SETTING_PARAM_MAIL_READ_TYPE_T}],send_charsets:[{value:"utf-8",label:"UTF-8"},{value:"gb18030",label:"GB18030"}],login_overtimes:[{value:"600",label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME_M10},{value:"900",label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME_M15},{value:"1800",label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME_M30},{value:"3600",label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME_H1},{value:"7200",label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME_H2},{value:"28800",label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME_H8}],webmail_attachment_expireds:[{value:"30",label:this.$parent.lan.COMMON_ONE_MONTH},{value:"60",label:this.$parent.lan.COMMON_TWO_MONTH},{value:"90",label:this.$parent.lan.COMMON_THREE_MONTH},{value:"180",label:this.$parent.lan.COMMON_HALF_YEAR},{value:"365",label:this.$parent.lan.COMMON_ONE_YEAR},{value:"0",label:this.$parent.lan.FILE_A_NEXP}],disabled_options:[{value:"1",label:this.$parent.lan.COMMON_STATUS_SHI},{value:"-1",label:this.$parent.lan.COMMON_STATUS_FOU}]}},mounted:function(){this.getParam()},methods:{getParam:function(){var e=this;Object(r._192)().then(function(t){e.sForm=t.data.results,e.$store.dispatch("setReadTypeA",t.data.results.read_type)})},sFormSubmit:function(){var e=this;this.$refs.sForm.validate(function(t){if(t){e.sFormLoading=!0;var a=s()({},e.sForm);Object(r._196)(a).then(function(t){e.sFormLoading=!1,e.$store.dispatch("setReadTypeA",e.sForm.read_type);var a=e.$store.getters.getSharedStatus;a.lock_left=e.sForm.login_overtime,e.$store.dispatch("setSharedS",a),e.$message({message:e.$parent.lan.COMMON_ALTER_SUCCESS,type:"success"})}).catch(function(t){e.sFormLoading=!1})}})}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[l("el-row",{staticStyle:{padding:"0px"}},[l("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(this.$parent.lan.COMMON_HOME_NAME))]),e._v(" "),l("el-breadcrumb-item",[l("a",{attrs:{href:"#"}},[e._v(e._s(this.$parent.lan.SETTING_INDEX_NAME))])]),e._v(" "),l("el-breadcrumb-item",[e._v(e._s(this.$parent.lan.SETTING_INDEX_PARAM_MENU))])],1)],1)],1),e._v(" "),l("section",{staticClass:"content content-list height100",staticStyle:{"padding-bottom":"13px"}},[l("el-form",{ref:"sForm",staticStyle:{"margin-left":"13px","margin-right":"13px","margin-top":"13px"},attrs:{model:e.sForm,"label-width":"240px",rules:e.sFormRules,size:"mini",inline:!0}},[l("el-row",[l("el-col",{attrs:{span:24}},[l("div",{staticClass:"demo-block-control"},[l("p",{staticStyle:{"margin-bottom":"3px","margin-left":"13px"}},[e._v(e._s(this.$parent.lan.SETTING_INDEX_PARAM_MENU))])])])],1),e._v(" "),e._e(),e._v(" "),e.$store.getters.getLoginAfter.is_security?e._e():l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME,prop:"login_overtime"}},[l("label",{attrs:{slot:"label"},slot:"label"},[[l("span",[e._v(e._s(e.$parent.lan.SETTING_PARAM_LOGIN_OVERTIME))]),e._v(" "),l("el-popover",{attrs:{placement:"top-start","popper-class":"warning_popover",width:"300",trigger:"hover"}},[l("table",{staticStyle:{width:"100%"}},[l("tr",[l("td",{staticStyle:{width:"36px","vertical-align":"top"}},[l("img",{staticStyle:{width:"36px",height:"36px"},attrs:{alt:"avatar",src:a("rqPU")}})]),e._v(" "),l("td",{staticStyle:{"padding-left":"10px","font-size":"12px",color:"#000","line-height":"22px"}},[l("div",[e._v(e._s(e.$parent.lan.LOGIN_OVERTIME_TIPS))])])])]),e._v(" "),l("a",{staticClass:"j-u-email",staticStyle:{"padding-right":"10px"},attrs:{slot:"reference",href:"javascript:void(0);"},slot:"reference"},[l("i",{staticClass:"el-icon-question",staticStyle:{color:"#ADD28E","font-size":"16px"}})])])]],2),e._v(" "),l("el-select",{staticStyle:{width:"200px"},model:{value:e.sForm.login_overtime,callback:function(t){e.$set(e.sForm,"login_overtime",t)},expression:"sForm.login_overtime"}},e._l(e.login_overtimes,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:e.$parent.lan.WEBMAIL_ATTACHMENT_EXPIRED,prop:"webmail_attachment_expired"}},[l("el-select",{staticStyle:{width:"200px"},model:{value:e.sForm.webmail_attachment_expired,callback:function(t){e.$set(e.sForm,"webmail_attachment_expired",t)},expression:"sForm.webmail_attachment_expired"}},e._l(e.webmail_attachment_expireds,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_MAIL_READ_TYPE,prop:"read_type"}},[l("el-select",{staticStyle:{width:"200px"},model:{value:e.sForm.read_type,callback:function(t){e.$set(e.sForm,"read_type",t)},expression:"sForm.read_type"}},e._l(e.read_types,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_SAVE_WEBMAIL}},[l("el-radio-group",{model:{value:e.sForm.save_webmail_sent,callback:function(t){e.$set(e.sForm,"save_webmail_sent",t)},expression:"sForm.save_webmail_sent"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",{directives:[{name:"show",rawName:"v-show",value:1==e.sForm.save_webmail_sent,expression:"sForm.save_webmail_sent==1"}]},[l("el-form-item",{attrs:{label:e.$parent.lan.NO_SAVE_ATTACH}},[l("label",{attrs:{slot:"label"},slot:"label"},[[l("span",[e._v(e._s(e.$parent.lan.NO_SAVE_ATTACH))]),e._v(" "),l("el-popover",{attrs:{placement:"top-start","popper-class":"warning_popover",width:"300",trigger:"hover"}},[l("table",{staticStyle:{width:"100%"}},[l("tr",[l("td",{staticStyle:{width:"36px","vertical-align":"top"}},[l("img",{staticStyle:{width:"36px",height:"36px"},attrs:{alt:"avatar",src:a("rqPU")}})]),e._v(" "),l("td",{staticStyle:{"padding-left":"10px","font-size":"12px",color:"#000","line-height":"22px"}},[l("div",[e._v(e._s(e.$parent.lan.NO_SAVE_ATTACH_DESC))])])])]),e._v(" "),l("a",{staticClass:"j-u-email",staticStyle:{"padding-right":"10px"},attrs:{slot:"reference",href:"javascript:void(0);"},slot:"reference"},[l("i",{staticClass:"el-icon-question",staticStyle:{color:"#ADD28E","font-size":"16px"}})])])]],2),e._v(" "),l("el-radio-group",{model:{value:e.sForm.save_webmail_sent2,callback:function(t){e.$set(e.sForm,"save_webmail_sent2",t)},expression:"sForm.save_webmail_sent2"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_SAVE_CLIENT}},[l("el-radio-group",{model:{value:e.sForm.save_client_sent,callback:function(t){e.$set(e.sForm,"save_client_sent",t)},expression:"sForm.save_client_sent"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_SAVE_CONTACT}},[l("el-radio-group",{model:{value:e.sForm.save_contact,callback:function(t){e.$set(e.sForm,"save_contact",t)},expression:"sForm.save_contact"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_AUTO_RECAIPT}},[l("el-radio-group",{model:{value:e.sForm.auto_receipt,callback:function(t){e.$set(e.sForm,"auto_receipt",t)},expression:"sForm.auto_receipt"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:this.$parent.lan.SETTING_PARAM_SAVE_DRAFT}},[l("el-radio-group",{model:{value:e.sForm.auto_save_draft,callback:function(t){e.$set(e.sForm,"auto_save_draft",t)},expression:"sForm.auto_save_draft"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:e.$parent.lan.NO_SAVE_ATTACH}},[l("label",{attrs:{slot:"label"},slot:"label"},[[l("span",[e._v(e._s(e.$parent.lan.WEBMAIL_SHOW_SRCMAILNAME))]),e._v(" "),l("el-popover",{attrs:{placement:"top-start","popper-class":"warning_popover",width:"300",trigger:"hover"}},[l("table",{staticStyle:{width:"100%"}},[l("tr",[l("td",{staticStyle:{width:"36px","vertical-align":"top"}},[l("img",{staticStyle:{width:"36px",height:"36px"},attrs:{alt:"avatar",src:a("rqPU")}})]),e._v(" "),l("td",{staticStyle:{"padding-left":"10px","font-size":"12px",color:"#000","line-height":"22px"}},[l("div",[e._v(e._s(e.$parent.lan.WEBMAIL_SHOW_SRCMAILNAME_HELP))])])])]),e._v(" "),l("a",{staticClass:"j-u-email",staticStyle:{"padding-right":"10px"},attrs:{slot:"reference",href:"javascript:void(0);"},slot:"reference"},[l("i",{staticClass:"el-icon-question",staticStyle:{color:"#ADD28E","font-size":"16px"}})])])]],2),e._v(" "),l("el-radio-group",{model:{value:e.sForm.webmail_show_srcmailname,callback:function(t){e.$set(e.sForm,"webmail_show_srcmailname",t)},expression:"sForm.webmail_show_srcmailname"}},e._l(e.disabled_options,function(t){return l("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}),1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{attrs:{label:" "}},[l("el-button",{attrs:{type:"primary",loading:e.sFormLoading},nativeOn:{click:function(t){return e.sFormSubmit()}}},[e._v(e._s(this.$parent.lan.COMMON_BUTTON_ALTER))])],1)],1)],1)],1)],1)},staticRenderFns:[]},n=a("C7Lr")(i,o,!1,null,null,null);t.default=n.exports}});