webpackJsonp([34],{QhcU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("aA9S"),r=a.n(o),l=a("P9l9"),s={data:function(){var e=this,t=function(t,a,o){1==/^(\w|[-+=.])+@\w+([-.]\w+)*\.(\w+)$/.test(a)?o():o(new Error(e.$parent.lan.SETTING_WHITE_EMAIL_RULE2))};return{pop_folders:[],createForm_password_input:"",updateForm_password_input:"",plang:e.$parent.lan,total:0,page:1,page_size:10,listLoading:!1,sels:[],listTables:[],account_error:"",createFormVisible:!1,createFormLoading:!1,createForm:{server:"",account:"",password:"",folder:"all",ssl:"-1",pop_keepmail:!0,pop_folder:"INBOX",protocol:"imap"},createFormRules:{server:[{required:!0,message:e.$parent.lan.SETTING_MOVE_ADD_SERVER_RULE,trigger:"blur"}],account:[{required:!0,message:e.$parent.lan.SETTING_MOVE_ADD_EMAIL_RULE,trigger:"blur"},{validator:t,trigger:"blur"}],password:[{required:!0,message:e.$parent.lan.SETTING_MOVE_ADD_PASSWORD_RULE,trigger:"blur"}]},updateFormVisible:!1,updateFormLoading:!1,updateForm:{server:"",account:"",password:"",folder:"all",ssl:"-1",pop_keepmail:!0,pop_folder:"INBOX",protocol:"imap"},updateFormRules:{server:[{required:!0,message:e.$parent.lan.SETTING_MOVE_ADD_SERVER_RULE,trigger:"blur"}],account:[{required:!0,message:e.$parent.lan.SETTING_MOVE_ADD_EMAIL_RULE,trigger:"blur"},{validator:t,trigger:"blur"}],password:[{required:!0,message:e.$parent.lan.SETTING_MOVE_ADD_PASSWORD_RULE,trigger:"blur"}]}}},created:function(){var e=this;this.getTables(),this.movingsDefault(),Object(l._25)().then(function(t){e.pop_folders=t.data}).catch(function(e){})},methods:{movingsDefault:function(){var e=this;Object(l._83)().then(function(t){e.createForm.account=t.data.account,e.createForm.server=t.data.server,e.createForm.ssl=t.data.ssl}).catch(function(e){console.log(e)})},f_TableSelsChange:function(e){this.sels=e},f_TableSizeChange:function(e){this.page_size=e,this.getTables()},f_TableCurrentChange:function(e){this.page=e,this.getTables()},getTables:function(){var e=this;this.listLoading=!0;var t={page:this.page,page_size:this.page_size};Object(l._142)(t).then(function(t){e.total=t.data.count,e.listTables=t.data.results,e.listLoading=!1}).catch(function(){e.listLoading=!1})},createFormShow:function(){this.account_error="",this.createForm=r()({},this.createForm),this.createFormLoading=!1,this.createFormVisible=!0},createFormSubmit:function(){var e=this;this.account_error="",this.$refs.createForm.validate(function(t){if(t){var a=r()({},e.createForm);"imap"==e.createForm.protocol||e.createForm.protocol,e.createFormLoading=!0,Object(l._140)(a).then(function(t){e.$message({message:e.plang.COMMON_ADD_SUCCESS,type:"success"}),e.$refs.createForm.resetFields(),e.createFormVisible=!1,e.createFormLoading=!1,e.getTables()}).catch(function(t){console.log(t),"non_field_errors"in t&&(e.account_error=t.non_field_errors[0]),e.createFormLoading=!1})}})},updateFormShow:function(e,t){var a=this;this.account_error="",Object(l._143)(t.id).then(function(e){for(var t=e.data.pop_folder,o=!1,l=0;l<a.pop_folders.length;l++)a.pop_folders[l].raw_name==t&&(o=!0);o||(e.data.pop_folder="INBOX");for(var s="",i=0;i<e.data.password.length;i++)s+="*";console.log(s.length),a.updateForm_password_input=s;var n=r()({},e.data);n.ssl=String(n.ssl),a.updateForm=n,a.updateFormVisible=!0,a.updateFormLoading=!1})},updateFormSubmit:function(){var e=this;this.account_error="",this.$refs.updateForm.validate(function(t){if(t){e.updateFormLoading=!0;var a=r()({},e.updateForm);Object(l._145)(a.id,a).then(function(t){e.$message({message:e.plang.COMMON_ALTER_SUCCESS,type:"success"}),e.$refs.updateForm.resetFields(),e.updateFormVisible=!1,e.updateFormLoading=!1,e.getTables()},function(t){e.updateFormLoading=!1,"non_field_errors"in t&&(e.account_error=t.non_field_errors[0])}).catch(function(t){console.log(t),e.updateFormLoading=!1})}})},receiveALL:function(){this.receiveMail(0)},receiveRow:function(e,t){this.receiveMail(t.id)},receiveMail:function(e){var t=this,a=this;this.$confirm(this.plang.SETTING_MOVE_RECEIVE_SUBMIT,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){Object(l._144)(e).then(function(e){a.$message({message:t.plang.SETTING_MOVE_RECEIVE_MSG,type:"success"}),t.getTables()}).catch(function(e){console.log(e)})})},deleteRow:function(e,t){var a=this,o=this;this.$confirm(this.plang.COMMON_BUTTON_DELETE_SUBMIT,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){Object(l._141)(t.id).then(function(e){o.$message({message:a.plang.COMMON_DELETE_SUCCESS,type:"success"}),(a.page-1)*a.page_size>=a.total-1&&(a.page=1),a.getTables()}).catch(function(e){console.log(e)})})}},computed:{}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("el-row",{staticStyle:{padding:"0px"}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(e.plang.COMMON_HOME_NAME))]),e._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[e._v(e._s(e.plang.SETTING_INDEX_NAME))])]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(e.plang.SETTING_INDEX_MOVE_MENU))])],1)],1)],1),e._v(" "),a("el-alert",{attrs:{title:e.plang.SETTING_MOVE_DESC,type:"success",closable:!1}}),e._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"content content-list height100",staticStyle:{"background-color":"#fff",background:"rgba(255,255,255,0.9)","padding-bottom":"13px"}},[a("el-row",{staticClass:"toolbar"},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.createFormShow}},[e._v(e._s(e.plang.SETTING_MOVE_ADD))]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.receiveALL}},[e._v(e._s(e.plang.SETTING_MOVE_RECEIVE))])],1),e._v(" "),e.total>0?a("el-col",{staticStyle:{"text-align":"right","line-height":"28px"},attrs:{span:12}},[e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{layout:"total, sizes, prev ","page-sizes":[10,20,50,100],"current-page":e.page,"page-size":e.page_size,total:e.total},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e(),e._v(" "),a("span",[e._v(e._s(this.page+" / "+Math.ceil(this.total/this.page_size)))]),e._v(" "),e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{layout:" next, jumper","page-sizes":[10,20,50,100],"current-page":e.page,"page-size":e.page_size,total:e.total},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e()],1):e._e()],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","max-width":"100%"},attrs:{data:e.listTables,"highlight-current-row":"",width:"100%",size:"mini","empty-text":e.plang.COMMON_NODATA,border:""},on:{"selection-change":e.f_TableSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"No.",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"account",label:e.plang.COMMON_EMAIL2}}),e._v(" "),a("el-table-column",{attrs:{prop:"protocol",label:e.plang.SETTING_MOVE_PROTOCOL,width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"desc",label:e.plang.SETTING_MOVE_TASK}}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.SETTING_MOVE_STATUS,width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return["-1"==t.row.disabled?a("i",{staticClass:"el-alert--success el-alert__icon el-icon-success"}):e._e(),e._v(" "),"1"==t.row.disabled?a("i",{staticClass:"el-alert--error el-alert__icon el-icon-error"}):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:e.plang.SETTING_MOVE_STATUS2,width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updated",label:e.plang.SETTING_MOVE_UPDATED,width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.COMMON_OPRATE},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.receiveRow(t.$index,t.row)}}},[e._v(e._s(e.plang.SETTING_MOVE_RECEIVE2))]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){e.updateFormShow(t.$index,t.row)}}},[e._v(e._s(e.plang.COMMON_BUTTON_ALTER))]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.deleteRow(t.$index,t.row)}}},[e._v(e._s(e.plang.COMMON_BUTTON_DELETE))])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}}),e._v(" "),a("el-dialog",{attrs:{title:e.plang.COMMON_BUTTON_ADD,visible:e.createFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.createFormVisible=t}}},[a("el-form",{ref:"createForm",attrs:{model:e.createForm,"label-width":"170px",rules:e.createFormRules,size:"mini"}},[a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_SERVER+("imap"==e.createForm.protocol?"(IMAP)":"(POP3)"),prop:"server"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createForm.server,callback:function(t){e.$set(e.createForm,"server","string"==typeof t?t.trim():t)},expression:"createForm.server"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_PROTOCOL}},[a("el-select",{model:{value:e.createForm.protocol,callback:function(t){e.$set(e.createForm,"protocol",t)},expression:"createForm.protocol"}},[a("el-option",{attrs:{label:"IMAP",value:"imap"}}),e._v(" "),a("el-option",{attrs:{label:"POP3",value:"pop3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_EMAIL,prop:"account",error:e.account_error}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createForm.account,callback:function(t){e.$set(e.createForm,"account","string"==typeof t?t.trim():t)},expression:"createForm.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_PASSWORD,prop:"password"}},[a("el-input",{attrs:{type:"password",name:"mail_pwd"},model:{value:e.createForm.password,callback:function(t){e.$set(e.createForm,"password","string"==typeof t?t.trim():t)},expression:"createForm.password"}}),e._v(" "),a("small",[e._v(e._s(e.plang.SETTING_MOVE_ADD_PASSWORD_DESC))])],1),e._v(" "),a("el-form-item",{attrs:{label:"ssl"}},[a("el-radio-group",{model:{value:e.createForm.ssl,callback:function(t){e.$set(e.createForm,"ssl",t)},expression:"createForm.ssl"}},[a("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.plang.COMMON_STATUS_SHI))]),e._v(" "),a("el-radio",{attrs:{label:"-1"}},[e._v(e._s(e.plang.COMMON_STATUS_FOU))])],1),e._v(" "),a("br"),a("small",[e._v(e._s(e.plang.SETTING_MOVE_ADD_SSL_DESC))])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"imap"==e.createForm.protocol,expression:"createForm.protocol=='imap'"}],attrs:{label:e.plang.SETTING_MOVE_ADD_FOLDER}},[a("el-radio-group",{model:{value:e.createForm.folder,callback:function(t){e.$set(e.createForm,"folder",t)},expression:"createForm.folder"}},[a("el-radio",{attrs:{label:"all"}},[e._v(e._s(e.plang.SETTING_MOVE_ADD_FOLDER_DESC1))]),e._v(" "),a("el-radio",{attrs:{label:"INBOX"}},[e._v(e._s(e.plang.SETTING_MOVE_ADD_FOLDER_DESC2))])],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"pop3"==e.createForm.protocol,expression:"createForm.protocol=='pop3'"}],attrs:{label:e.plang.POP_FOLDER}},[a("el-select",{model:{value:e.createForm.pop_folder,callback:function(t){e.$set(e.createForm,"pop_folder",t)},expression:"createForm.pop_folder"}},e._l(e.pop_folders,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.raw_name}})}),1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"pop3"==e.createForm.protocol,expression:"createForm.protocol=='pop3'"}],attrs:{label:e.plang.POP_KEEPMAIL}},[a("el-radio-group",{model:{value:e.createForm.pop_keepmail,callback:function(t){e.$set(e.createForm,"pop_keepmail",t)},expression:"createForm.pop_keepmail"}},[a("el-radio",{attrs:{label:!0}},[e._v(e._s(e.plang.COMMON_STATUS_SHI))]),e._v(" "),a("el-radio",{attrs:{label:!1}},[e._v(e._s(e.plang.COMMON_STATUS_FOU))])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.createFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.createFormLoading},nativeOn:{click:function(t){e.createFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.COMMON_BUTTON_ALTER,visible:e.updateFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.updateFormVisible=t}}},[a("el-form",{ref:"updateForm",attrs:{model:e.updateForm,"label-width":"170px",rules:e.updateFormRules,size:"mini"}},[a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_SERVER+("imap"==e.updateForm.protocol?"(IMAP)":"(POP3)"),prop:"server"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateForm.server,callback:function(t){e.$set(e.updateForm,"server","string"==typeof t?t.trim():t)},expression:"updateForm.server"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_PROTOCOL}},[a("el-select",{attrs:{disabled:""},model:{value:e.updateForm.protocol,callback:function(t){e.$set(e.updateForm,"protocol",t)},expression:"updateForm.protocol"}},[a("el-option",{attrs:{label:"IMAP",value:"imap"}}),e._v(" "),a("el-option",{attrs:{label:"POP3",value:"pop3"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_EMAIL,prop:"account",error:e.account_error}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateForm.account,callback:function(t){e.$set(e.updateForm,"account","string"==typeof t?t.trim():t)},expression:"updateForm.account"}}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.updateForm.account,callback:function(t){e.$set(e.updateForm,"account","string"==typeof t?t.trim():t)},expression:"updateForm.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.SETTING_MOVE_ADD_PASSWORD,prop:"password"}},[a("el-input",{attrs:{type:"password"},model:{value:e.updateForm.password,callback:function(t){e.$set(e.updateForm,"password","string"==typeof t?t.trim():t)},expression:"updateForm.password"}}),e._v(" "),a("small",[e._v(e._s(e.plang.SETTING_MOVE_ADD_PASSWORD_DESC))])],1),e._v(" "),a("el-form-item",{attrs:{label:"ssl"}},[a("el-radio-group",{model:{value:e.updateForm.ssl,callback:function(t){e.$set(e.updateForm,"ssl",t)},expression:"updateForm.ssl"}},[a("el-radio",{attrs:{label:"1"}},[e._v(e._s(e.plang.COMMON_STATUS_SHI))]),e._v(" "),a("el-radio",{attrs:{label:"-1"}},[e._v(e._s(e.plang.COMMON_STATUS_FOU))])],1),e._v(" "),a("br"),a("small",[e._v(e._s(e.plang.SETTING_MOVE_ADD_SSL_DESC))])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"imap"==e.updateForm.protocol,expression:"updateForm.protocol=='imap'"}],attrs:{label:e.plang.SETTING_MOVE_ADD_FOLDER}},[a("el-radio-group",{model:{value:e.updateForm.folder,callback:function(t){e.$set(e.updateForm,"folder",t)},expression:"updateForm.folder"}},[a("el-radio",{attrs:{label:"all"}},[e._v(e._s(e.plang.SETTING_MOVE_ADD_FOLDER_DESC1))]),e._v(" "),a("el-radio",{attrs:{label:"INBOX"}},[e._v(e._s(e.plang.SETTING_MOVE_ADD_FOLDER_DESC2))])],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"pop3"==e.updateForm.protocol,expression:"updateForm.protocol=='pop3'"}],attrs:{label:e.plang.POP_FOLDER}},[a("el-select",{model:{value:e.updateForm.pop_folder,callback:function(t){e.$set(e.updateForm,"pop_folder",t)},expression:"updateForm.pop_folder"}},e._l(e.pop_folders,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.raw_name}})}),1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"pop3"==e.updateForm.protocol,expression:"updateForm.protocol=='pop3'"}],attrs:{label:e.plang.POP_KEEPMAIL}},[a("el-radio-group",{model:{value:e.updateForm.pop_keepmail,callback:function(t){e.$set(e.updateForm,"pop_keepmail",t)},expression:"updateForm.pop_keepmail"}},[a("el-radio",{attrs:{label:!0}},[e._v(e._s(e.plang.COMMON_STATUS_SHI))]),e._v(" "),a("el-radio",{attrs:{label:!1}},[e._v(e._s(e.plang.COMMON_STATUS_FOU))])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.updateFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.updateFormLoading},nativeOn:{click:function(t){e.updateFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))])],1)],1)],1)],1)},staticRenderFns:[]},n=a("C7Lr")(s,i,!1,null,null,null);t.default=n.exports}});
//# sourceMappingURL=34.70657ac45638c9cd94a0.js.map