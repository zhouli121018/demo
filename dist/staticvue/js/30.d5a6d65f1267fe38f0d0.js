webpackJsonp([30],{oxgJ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("aA9S"),l=r.n(a),o=(r("R2wu"),r("P9l9")),n={data:function(){return{delFolderVisible:!1,delFolderForm:{src_folder:"",name:"",dst_folder:"INBOX",is_delete:!1},sels:[],renameFormVisible:!1,renameForm:{dest_name:"",src_raw_name:""},renameRules:{dest_name:[{required:!0,message:this.$parent.lan.FILE_P_RULE1,trigger:"blur"},{min:1,max:20,message:this.$parent.lan.FILE_P_RULE2,trigger:"blur"}]},dialogFormVisible:!1,form:{name:""},rules:{name:[{required:!0,message:this.$parent.lan.FILE_P_RULE1,trigger:"blur"},{min:1,max:20,message:this.$parent.lan.FILE_P_RULE2,trigger:"blur"}]},listLoading_folder:!1,listTables_folder:[],update_show_color:!1,create_show_color:!1,predefineColors:[{color:"#D50000",title:this.$parent.lan.CALENDAR_PAGE_CAL_TOMATO_RED},{color:"#E67C73",title:this.$parent.lan.CALENDAR_PAGE_CAL_RED_CRANE_COLOR},{color:"#F4511E",title:this.$parent.lan.CALENDAR_PAGE_CAL_TANGERINE},{color:"#F6BF26",title:this.$parent.lan.CALENDAR_PAGE_CAL_BANANA_YELLOW},{color:"#33B679",title:this.$parent.lan.CALENDAR_PAGE_CAL_SALVIA_GREEN},{color:"#0B8043",title:this.$parent.lan.CALENDAR_PAGE_CAL_BASIL_GREEN},{color:"#039BE5",title:this.$parent.lan.CALENDAR_PAGE_CAL_PEACOCK_BLUE},{color:"#3F51B5",title:this.$parent.lan.CALENDAR_PAGE_CAL_BLUEBERRY_COLOR},{color:"#7986CB",title:this.$parent.lan.CALENDAR_PAGE_CAL_LAVENDER},{color:"#8E24AA",title:this.$parent.lan.CALENDAR_PAGE_CAL_GRAPE_PURPLE},{color:"#616161",title:this.$parent.lan.CALENDAR_PAGE_CAL_GRAPHITE_BLACK},{color:"#458138",title:this.$parent.lan.SETTING_SKIN_QINGXINLU},{color:"#4680BF",title:this.$parent.lan.SETTING_SKIN_TIANKONGLAN},{color:"#FFE2E6",title:this.$parent.lan.SETTING_SKIN_TAOHUAHONG},{color:"#74CAE5",title:this.$parent.lan.SETTING_SKIN_HAISHUILAN},{color:"#818181",title:this.$parent.lan.DARK_GRAY}],listLoading:!1,listTables:[],createFormVisible:!1,createFormLoading:!1,createForm:{name:"",color:"#33B679"},createFormRules:{name:[{required:!0,message:this.$parent.lan.TAG_NAME_RULE,trigger:"blur"},{min:1,max:20,message:this.$parent.lan.FILE_P_RULE2,trigger:"blur"}]},updateFormVisible:!1,updateFormLoading:!1,updateForm:{name:"",color:""},updateFormRules:{name:[{required:!0,message:this.$parent.lan.TAG_NAME_RULE,trigger:"blur"},{min:1,max:20,message:this.$parent.lan.FILE_P_RULE2,trigger:"blur"}]}}},mounted:function(){this.getTables(),this.getTables_folder()},methods:{folderDel:function(){var e=this,t={src_folder:this.delFolderForm.src_folder,is_delete:this.delFolderForm.is_delete};this.delFolderForm.is_delete||(t.dst_folder=this.delFolderForm.dst_folder),Object(o._24)(t).then(function(t){e.delFolderVisible=!1,e.getTables_folder(),sessionStorage.mailbox_url.indexOf("/mailbox/innerbox/"+e.delFolderForm.src_folder)>=0&&(sessionStorage.mailbox_url="/mailbox/innerbox/INBOX"),e.$root.$children[0].$children[0].$refs.mailbox_ele.getFloderfn(),e.$message({type:"success",message:e.$parent.lan.COMMON_OPRATE_SUCCESS})}).catch(function(e){console.log(e)})},cancel_rename:function(){this.renameFormVisible=!1,this.$refs.renameForm.clearValidate()},show_rename_dialog:function(e,t){this.renameForm.dest_name=t.name,this.renameForm.src_raw_name=t.raw_name,this.renameFormVisible=!0},renameSubmit:function(){var e=this;this.$refs.renameForm.validate(function(t){if(!t)return!1;Object(o._27)({dest_name:e.renameForm.dest_name,src_raw_name:e.renameForm.src_raw_name}).then(function(t){e.getTables_folder(),sessionStorage.mailbox_url.indexOf("/mailbox/innerbox/"+e.renameForm.src_raw_name)>=0&&(sessionStorage.mailbox_url="/mailbox/innerbox/"+t.data.raw_name),e.$root.$children[0].$children[0].$refs.mailbox_ele.getFloderfn(),e.$message({type:"success",message:e.$parent.lan.COMMON_ALTER_SUCCESS}),e.renameFormVisible=!1}).catch(function(t){var r="";t&&(r=t),t.detail||t.non_field_errors||(t.dest_name?(r=t.dest_name[0],e.$message({type:"error",message:r})):r&&r.length>0&&e.$message({type:"error",message:r})),console.log(t)})})},empty_folder:function(e,t){var r=this,a={folder:t.raw_name};this.$confirm(this.$parent.lan.MAILBOX_COM_INNERBOX_DELETE_DESC,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{confirmButtonText:this.$parent.lan.COMMON_BUTTON_CONFIRM,cancelButtonText:this.$parent.lan.COMMON_BUTTON_CANCELL,type:"warning"}).then(function(){Object(o._73)(a).then(function(e){r.$message({type:"success",message:r.$parent.lan.COMMON_OPRATE_SUCCESS}),r.getTables_folder(),r.$root.$children[0].$children[0].$refs.mailbox_ele.getFloderfn()}).catch(function(e){console.log(e)})}).catch(function(){})},append:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;Object(o._1)({name:e.form.name}).then(function(t){e.getTables_folder(),e.$root.$children[0].$children[0].$refs.mailbox_ele.getFloderfn(),e.form.name="",e.$message({type:"success",message:e.$parent.lan.COMMON_ADD_SUCCESS}),e.dialogFormVisible=!1}).catch(function(t){var r="";t&&(r=t),t.non_field_errors||t.detail||(t.error_message?(r=t.error_message,e.$message({type:"error",message:r})):t.name?(r=t.name[0],e.$message({type:"error",message:r})):r&&r.length>0&&e.$message({type:"error",message:r})),console.log(t)})})},createFormShow_folder:function(){this.dialogFormVisible=!0},pickColor_update:function(e){this.updateForm.color=e.color,this.update_show_color=!1},pickColor:function(e){this.createForm.color=e.color,this.create_show_color=!1},getTables:function(){var e=this;this.listLoading=!0,Object(o._44)().then(function(t){e.listTables=t.data,e.listLoading=!1}).catch(function(t){console.log(t);var r="";t&&(r=t),t.non_field_errors||t.detail||(t.error_message?(r=t.error_message,e.$message({message:r,type:"error"})):r&&r.length>0&&e.$message({message:r,type:"error"})),e.listLoading=!1})},getTables_folder:function(){var e=this;this.listLoading_folder=!0,Object(o._25)().then(function(t){e.listTables_folder=t.data,e.listLoading_folder=!1}).catch(function(t){var r="";t&&(r=t),t.non_field_errors||t.detail||(t.error_message?(r=t.error_message,e.$message({message:r,type:"error"})):r&&r.length>0&&e.$message({message:r,type:"error"})),e.listLoading_folder=!1})},createFormShow:function(){this.createForm=l()({},this.createForm),this.create_show_color=!1,this.createFormLoading=!1,this.createFormVisible=!0},createFormSubmit:function(){var e=this;this.$refs.createForm.validate(function(t){if(t){e.createFormLoading=!0;var r=l()({},e.createForm);Object(o._2)(r).then(function(t){e.$message({message:e.$parent.lan.COMMON_ADD_SUCCESS,type:"success"}),e.$refs.createForm.resetFields(),e.createFormVisible=!1,e.createFormLoading=!1,e.getTables(),e.$root.$children[0].$children[0].$refs.mailbox_ele.$refs.innerbox[0].getMailTag()}).catch(function(t){console.log(t.name);var r="";r=t,t.name&&(r=t.name[0]),r&&r.length>0&&e.$message({message:r,type:"error"}),e.createFormLoading=!1})}})},updateFormShow:function(e,t){var r=this;this.update_show_color=!1,Object(o._52)(t.id).then(function(e){var t=l()({},e.data);r.updateForm=t,r.updateFormVisible=!0,r.updateFormLoading=!1})},updateFormSubmit:function(){var e=this;this.$refs.updateForm.validate(function(t){if(t){e.updateFormLoading=!0;var r=l()({},e.updateForm);Object(o._221)(r.id,r).then(function(t){e.$refs.updateForm.resetFields(),e.updateFormLoading=!1,e.updateFormVisible=!1,e.$message({message:e.$parent.lan.COMMON_ALTER_SUCCESS,type:"success"}),e.getTables(),e.$root.$children[0].$children[0].$refs.mailbox_ele.$refs.innerbox[0].getMailTag()}).catch(function(t){e.updateFormLoading=!1;var r="";r=t,t.name&&(r=t.name[0]),r&&r.length>0&&e.$message({message:r,type:"error"})})}})},deleteRow:function(e,t){var r=this,a=this;this.$confirm(this.$parent.lan.COMMON_BUTTON_DELETE_SUBMIT,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){Object(o._11)(t.id).then(function(e){a.$message({message:r.$parent.lan.COMMON_DELETE_SUCCESS,type:"success"}),r.getTables(),r.$root.$children[0].$children[0].$refs.mailbox_ele.$refs.innerbox[0].getMailTag()}).catch(function(e){var t;t=e,e.detail||e.non_field_errors||t&&t.length>0&&a.$message({message:t,type:"error"})})})},deleteRow_folder:function(e,t){this.delFolderForm.name=t.name,this.delFolderForm.src_folder=t.raw_name,this.delFolderForm.dst_folder="INBOX",this.delFolderForm.is_delete=!1,this.delFolderVisible=!0}},computed:{moveItems:function(){for(var e=this.listTables_folder,t=[],r=0;r<e.length;r++)if("Drafts"!=e[r].raw_name&&e[r].raw_name!=this.boxId){var a={};a.text=e[r].name,a.id=e[r].raw_name,t.push(a)}return t}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[r("el-row",{staticStyle:{padding:"0px"}},[r("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(this.$parent.lan.COMMON_HOME_NAME))]),e._v(" "),r("el-breadcrumb-item",[r("a",{attrs:{href:"#"}},[e._v(e._s(this.$parent.lan.SETTING_INDEX_NAME))])]),e._v(" "),r("el-breadcrumb-item",[e._v(e._s(this.$parent.lan.FOLDER_AND_TAG))])],1)],1)],1),e._v(" "),r("section",{staticClass:"content content-list height100",staticStyle:{"background-color":"#fff",background:"rgba(255,255,255,0.9)","padding-bottom":"13px"}},[r("el-row",{staticClass:"toolbar"},[r("el-col",{attrs:{span:12}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.createFormShow_folder}},[e._v(e._s(this.$parent.lan.MAILBOX_ADD_FOLDERS))])],1),e._v(" "),r("el-col",{attrs:{span:12}})],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading_folder,expression:"listLoading_folder"}],staticStyle:{width:"100%","max-width":"100%"},attrs:{data:e.listTables_folder,"highlight-current-row":"",width:"100%",size:"mini",border:""}},[r("el-table-column",{attrs:{type:"index",label:" ",width:"60"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",label:e.$parent.lan.FOLDER}}),e._v(" "),r("el-table-column",{attrs:{prop:"unseen_count",label:e.$parent.lan.MAILBOX_COM_INNERBOX_UNREAD_MAIL}}),e._v(" "),r("el-table-column",{attrs:{prop:"count",label:e.$parent.lan.ALL_MAILS}}),e._v(" "),r("el-table-column",{attrs:{prop:"is_default",label:e.$parent.lan.DEFAULT_FOLDER},scopedSlots:e._u([{key:"default",fn:function(e){return[e.row.is_default?r("i",{staticClass:"el-alert__icon el-icon-success",staticStyle:{color:"#67C23A"}}):r("i",{staticClass:"el-alert__icon el-icon-error",staticStyle:{color:"#F56C6C"}})]}}])}),e._v(" "),r("el-table-column",{attrs:{label:this.$parent.lan.COMMON_OPRATE,width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.is_can_empty?r("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(r){e.empty_folder(t.$index,t.row)}}},[e._v(e._s(e.$parent.lan.CLEAR_FOLDERS))]):e._e(),e._v(" "),t.row.is_default?e._e():r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){e.deleteRow_folder(t.$index,t.row)}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_DELETE))]),e._v(" "),t.row.is_default?e._e():r("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(r){e.show_rename_dialog(t.$index,t.row)}}},[e._v(e._s(e.$parent.lan.FILE_P_RENAME))])]}}])})],1),e._v(" "),r("el-col",{staticClass:"toolbar",attrs:{span:24}}),e._v(" "),r("div",{staticStyle:{height:"50px"}}),e._v(" "),r("el-row",{staticClass:"toolbar"},[r("el-col",{attrs:{span:12}},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.createFormShow}},[e._v(e._s(this.$parent.lan.ADD_TAG))])],1),e._v(" "),r("el-col",{attrs:{span:12}})],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%","max-width":"100%"},attrs:{data:e.listTables,"highlight-current-row":"",width:"100%",size:"mini",border:""}},[r("el-table-column",{attrs:{type:"index",label:" ",width:"60"}}),e._v(" "),r("el-table-column",{attrs:{prop:"caption",label:e.$parent.lan.MAIL_TAG},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",[r("i",{staticStyle:{display:"inline-block",width:"10px",height:"10px"},style:{background:t.row.color}}),e._v("\n            "+e._s(t.row.name)+"\n          ")])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"unseen_count",label:e.$parent.lan.MAILBOX_COM_INNERBOX_UNREAD_MAIL}}),e._v(" "),r("el-table-column",{attrs:{prop:"count",label:e.$parent.lan.ALL_MAILS}}),e._v(" "),r("el-table-column",{attrs:{label:e.$parent.lan.COMMON_OPRATE,width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(r){e.updateFormShow(t.$index,t.row)}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_ALTER))]),e._v(" "),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){e.deleteRow(t.$index,t.row)}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_DELETE))])]}}])})],1),e._v(" "),r("el-col",{staticClass:"toolbar",attrs:{span:24}}),e._v(" "),r("el-dialog",{attrs:{title:e.$parent.lan.ADD_TAG,visible:e.createFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.createFormVisible=t}}},[r("el-form",{ref:"createForm",attrs:{model:e.createForm,"label-width":"100px",rules:e.createFormRules}},[r("el-form-item",{attrs:{label:e.$parent.lan.TAG_NAME,prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createForm.name,callback:function(t){e.$set(e.createForm,"name","string"==typeof t?t.trim():t)},expression:"createForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$parent.lan.TAG_COLOR,prop:"color"}},[r("el-button",{on:{click:function(t){e.create_show_color=!e.create_show_color}}},[r("i",{staticStyle:{display:"inline-block",width:"12px",height:"12px"},style:{background:e.createForm.color}}),e._v("\n            "+e._s(e.$parent.lan.PICK_COLOR)+"\n            "),r("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.create_show_color,expression:"create_show_color"}],staticClass:"clear",staticStyle:{width:"200px",border:"1px solid #ccc","box-shadow":"0 0 5px #ccc","padding-left":"10px","padding-top":"10px"}},e._l(e.predefineColors,function(t,a){return r("li",{key:a,staticStyle:{float:"left","margin-right":"10px"},on:{click:function(r){e.pickColor(t)}}},[r("i",{staticStyle:{display:"inline-block",width:"20px",height:"20px",cursor:"pointer"},style:{background:t.color},attrs:{title:t.title}})])}),0)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(t){e.createFormVisible=!1}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_CANCELL))]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.createFormLoading},nativeOn:{click:function(t){e.createFormSubmit()}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_SUBMIT))])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.$parent.lan.EDIT_TAG,visible:e.updateFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.updateFormVisible=t}}},[r("el-form",{ref:"updateForm",attrs:{model:e.updateForm,"label-width":"100px",rules:e.updateFormRules}},[r("el-form-item",{attrs:{label:e.$parent.lan.TAG_NAME,prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateForm.name,callback:function(t){e.$set(e.updateForm,"name","string"==typeof t?t.trim():t)},expression:"updateForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:e.$parent.lan.TAG_COLOR,prop:"content"}},[r("el-button",{on:{click:function(t){e.update_show_color=!e.update_show_color}}},[r("i",{staticStyle:{display:"inline-block",width:"12px",height:"12px"},style:{background:e.updateForm.color}}),e._v("\n            "+e._s(e.$parent.lan.PICK_COLOR)+"\n            "),r("i",{staticClass:"el-icon-caret-bottom"})]),e._v(" "),r("ul",{directives:[{name:"show",rawName:"v-show",value:e.update_show_color,expression:"update_show_color"}],staticClass:"clear",staticStyle:{width:"200px",border:"1px solid #ccc","box-shadow":"0 0 5px #ccc","padding-left":"10px","padding-top":"10px"}},e._l(e.predefineColors,function(t,a){return r("li",{key:a,staticStyle:{float:"left","margin-right":"10px"},on:{click:function(r){e.pickColor_update(t)}}},[r("i",{staticStyle:{display:"inline-block",width:"20px",height:"20px",cursor:"pointer"},style:{background:t.color},attrs:{title:t.title}})])}),0)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(t){e.updateFormVisible=!1}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_CANCELL))]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.updateFormLoading},nativeOn:{click:function(t){e.updateFormSubmit()}}},[e._v(e._s(e.$parent.lan.COMMON_BUTTON_SUBMIT))])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.$parent.lan.MAILBOX_NEW_FOLDER,visible:e.dialogFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:this.$parent.lan.MAILBOX_FOLDER_NAME,"label-width":"120px",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(this.$parent.lan.cancel))]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.append}},[e._v(e._s(this.$parent.lan.sure))])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.$parent.lan.FILE_P_RENAME,"close-on-click-modal":!1,visible:e.renameFormVisible,"append-to-body":!0},on:{"update:visible":function(t){e.renameFormVisible=t}}},[r("el-form",{ref:"renameForm",attrs:{model:e.renameForm,rules:e.renameRules}},[r("el-form-item",{attrs:{label:e.$parent.lan.MAILBOX_FOLDER_NAME,"label-width":"120px",prop:"dest_name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.renameForm.dest_name,callback:function(t){e.$set(e.renameForm,"dest_name",t)},expression:"renameForm.dest_name"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.cancel_rename}},[e._v(e._s(this.$parent.lan.cancel))]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.renameSubmit}},[e._v(e._s(this.$parent.lan.sure))])],1)],1),e._v(" "),r("el-dialog",{attrs:{title:e.$parent.lan.DELETE_FOLDER,"close-on-click-modal":!1,visible:e.delFolderVisible,"append-to-body":!0,width:"500px"},on:{"update:visible":function(t){e.delFolderVisible=t}}},[r("el-form",{ref:"delFolderForm",attrs:{model:e.delFolderForm,size:"small"}},[r("el-form-item",{attrs:{label:""}},[r("b",{staticStyle:{"font-size":"16px"}},[e._v(e._s(e.$parent.lan.IS_DELETE_FOLDER)+" “"+e._s(e.delFolderForm.name)+"”？")])]),e._v(" "),e.delFolderForm.is_delete?e._e():r("el-form-item",{attrs:{label:"",prop:"dst_folder"}},[r("span",[e._v(e._s(e.$parent.lan.MAIL_MOVE_TO)+":")]),e._v(" "),r("el-select",{attrs:{placeholder:e.$parent.lan.CHOOSE_FOLDER},model:{value:e.delFolderForm.dst_folder,callback:function(t){e.$set(e.delFolderForm,"dst_folder",t)},expression:"delFolderForm.dst_folder"}},e._l(e.moveItems,function(e){return r("el-option",{key:e.id,attrs:{label:e.text,value:e.id}})}),1)],1),e._v(" "),e.delFolderForm.is_delete?r("el-form-item",{attrs:{label:""}},[r("span",{staticStyle:{color:"red"}},[e._v(e._s(e.$parent.lan.CLEAR_FOLDER_DESC))])]):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"",prop:"is_delete"}},[r("el-checkbox",{model:{value:e.delFolderForm.is_delete,callback:function(t){e.$set(e.delFolderForm,"is_delete",t)},expression:"delFolderForm.is_delete"}},[e._v(e._s(e.$parent.lan.ALSO_DEL_MAIL))])],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.delFolderVisible=!1}}},[e._v(e._s(this.$parent.lan.cancel))]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.folderDel}},[e._v(e._s(this.$parent.lan.sure))])],1)],1)],1)],1)},staticRenderFns:[]},s=r("C7Lr")(n,i,!1,null,null,null);t.default=s.exports}});
//# sourceMappingURL=30.d5a6d65f1267fe38f0d0.js.map