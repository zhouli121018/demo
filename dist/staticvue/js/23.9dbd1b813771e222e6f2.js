webpackJsonp([23],{"8TpV":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("H5lP"),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("el-row",{staticStyle:{padding:"0px"}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v(t._s(this.$parent.lan.COMMON_HOME_NAME))]),t._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[t._v(t._s(this.$parent.lan.SETTING_INDEX_NAME))])]),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(this.$parent.lan.COMMON_TEMPLATE))])],1)],1)],1),t._v(" "),a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"content content-list height100",staticStyle:{"padding-bottom":"13px"}},[a("el-row",{staticClass:"toolbar"},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.createFormShow}},[t._v(t._s(this.$parent.lan.SETTING_TEMPLATE_ADD))]),t._v(" "),a("el-button",{attrs:{type:"warning",disabled:0===t.sels.length,size:"mini"},on:{click:t.deleteTemplate}},[t._v(t._s(this.$parent.lan.CONTACT_PAB_BDEL))]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.clearTemplate}},[t._v(t._s(t.$parent.lan.CLEAR_TEMPLATE))])],1)],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","max-width":"100%"},attrs:{data:t.listTables,"highlight-current-row":"",width:"100%",size:"mini",border:""},on:{"selection-change":t.f_TableSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",label:"No.",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"caption",label:this.$parent.lan.SETTING_TEMPLATE_SUBJECT}}),t._v(" "),a("el-table-column",{attrs:{label:this.$parent.lan.COMMON_OPRATE,width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.updateFormShow(e.$index,e.row)}}},[t._v(t._s(t.$parent.lan.COMMON_BUTTON_ALTER))]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteRow(e.$index,e.row)}}},[t._v(t._s(t.$parent.lan.COMMON_BUTTON_DELETE))])]}}])})],1),t._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}}),t._v(" "),a("el-dialog",{attrs:{title:this.$parent.lan.SETTING_TEMPLATE_ADD,visible:t.createFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(e){t.createFormVisible=e}}},[a("el-form",{ref:"createForm",attrs:{model:t.createForm,"label-width":"100px",rules:t.createFormRules}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_SUBJECT,prop:"caption",error:t.errormessage}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.createForm.caption,callback:function(e){t.$set(t.createForm,"caption","string"==typeof e?e.trim():e)},expression:"createForm.caption"}})],1),t._v(" "),a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_CONTENT,prop:"content"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.createForm.content,expression:"createForm.content"}],staticStyle:{width:"100%",height:"400px"},attrs:{id:"createEditor"},domProps:{value:t.createForm.content},on:{input:function(e){e.target.composing||t.$set(t.createForm,"content",e.target.value)}}})])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.createFormVisible=!1}}},[t._v(t._s(this.$parent.lan.COMMON_BUTTON_CANCELL))]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.createFormLoading},nativeOn:{click:function(e){return t.createFormSubmit()}}},[t._v(t._s(this.$parent.lan.COMMON_BUTTON_SUBMIT))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:this.$parent.lan.SETTING_TEMPLATE_UPDATE,visible:t.updateFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(e){t.updateFormVisible=e}}},[a("el-form",{ref:"updateForm",attrs:{model:t.updateForm,"label-width":"100px",rules:t.updateFormRules}},[a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_SUBJECT,prop:"caption",error:t.errormessage}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.updateForm.caption,callback:function(e){t.$set(t.updateForm,"caption","string"==typeof e?e.trim():e)},expression:"updateForm.caption"}})],1),t._v(" "),a("el-form-item",{attrs:{label:this.$parent.lan.COMMON_CONTENT,prop:"content"}},[a("textarea",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"updateEditor"}})])],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.updateFormVisible=!1}}},[t._v(t._s(this.$parent.lan.COMMON_BUTTON_CANCELL))]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.updateFormLoading},nativeOn:{click:function(e){return t.updateFormSubmit()}}},[t._v(t._s(this.$parent.lan.COMMON_BUTTON_SUBMIT))])],1)],1)],1)],1)},staticRenderFns:[]},i=a("C7Lr")(r.a,n,!1,null,null,null);e.default=i.exports},H5lP:function(t,e,a){"use strict";(function(t){var r=a("aA9S"),n=a.n(r),i=a("NxjZ"),o=(a.n(i),a("P9l9"));e.a={data:function(){return{createEditor:"",updateEditor:"",toolbarItems:["source","|","formatblock","fontname","fontsize","|","forecolor","hilitecolor","bold","italic","underline","lineheight","|","justifyleft","justifycenter","justifyright","justifyfull","insertorderedlist","insertunorderedlist","indent","outdent","|","subscript","superscript","link","unlink","image","table","hr","|","undo","redo","preview","fullscreen"],total:0,page:1,page_size:20,listLoading:!1,sels:[],listTables:[],errormessage:"",createFormVisible:!1,createFormLoading:!1,createForm:{caption:"",content:""},createFormRules:{caption:[{required:!0,message:this.$parent.lan.SETTING_TEMPLATE_SUBJECT_RULE,trigger:"blur"}],content:[{required:!0,message:this.$parent.lan.SETTING_TEMPLATE_CONTENT_RULE,trigger:"blur"}]},updateFormVisible:!1,updateFormLoading:!1,updateForm:{caption:"",content:""},updateFormRules:{caption:[{required:!0,message:this.$parent.lan.SETTING_TEMPLATE_SUBJECT_RULE,trigger:"blur"}],content:[{required:!0,message:this.$parent.lan.SETTING_TEMPLATE_CONTENT_RULE,trigger:"blur"}]}}},mounted:function(){this.getTables()},methods:{clearTemplate:function(){var t=this;this.$confirm(this.$parent.lan.CLEAR_TEMPLATE_DES,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{confirmButtonText:this.$parent.lan.COMMON_BUTTON_CONFIRM,cancelButtonText:this.$parent.lan.COMMON_BUTTON_CANCELL,dangerouslyUseHTMLString:!0}).then(function(){Object(o._219)().then(function(e){t.$message({type:"success",message:t.$parent.lan.COMMON_OPRATE_SUCCESS}),t.getTables()}).catch(function(t){console.log(t)})}).catch(function(){})},deleteTemplate:function(){var t=this;this.$confirm(this.$parent.lan.BDELETE_TEMPLATE_DES,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{confirmButtonText:this.$parent.lan.COMMON_BUTTON_CONFIRM,cancelButtonText:this.$parent.lan.COMMON_BUTTON_CANCELL,dangerouslyUseHTMLString:!0}).then(function(){Object(o._218)({ids:t.sels.map(function(t){return t.id})}).then(function(e){t.$message({type:"success",message:t.$parent.lan.COMMON_OPRATE_SUCCESS}),t.getTables()}).catch(function(t){console.log(t)})}).catch(function(){})},encodeHtml:function(t){var e=document.createElement("div");null!=e.textContent?e.textContent=t:e.innerText=t;var a=e.innerHTML;return e=null,a},createEditorFn:function(t){var e="zh-CN";"en"==this.$store.getters.getLanguage?e="en":"zh-tw"==this.$store.getters.getLanguage&&(e="zh-TW");var a={items:this.toolbarItems,uploadJson:this.uploadJson,filterMode:!1,resizeType:1,indentChar:"",langType:e,loadStyleMode:!1,autoHeightMode:!1};this.createEditor=KindEditor.create("#createEditor",a),this.createEditor.html(t)},updateEditorFn:function(t){var e="zh-CN";"en"==this.$store.getters.getLanguage?e="en":"zh-tw"==this.$store.getters.getLanguage&&(e="zh-TW");var a={items:this.toolbarItems,uploadJson:this.uploadJson,filterMode:!1,resizeType:1,indentChar:"",langType:e,loadStyleMode:!1,autoHeightMode:!1};this.updateEditor=KindEditor.create("#updateEditor",a),this.updateEditor.html(t)},createContentChange:function(t){this.createForm.content=t},editContentChange:function(t){this.updateForm.content=t},f_TableSizeChange:function(t){this.page_size=t,this.getTables()},f_TableCurrentChange:function(t){this.page=t,this.getTables()},getTables:function(){var t=this;this.listLoading=!0;var e={page:this.page,page_size:this.page_size};Object(o._182)(e).then(function(e){t.total=e.data.total,t.listTables=e.data.results,t.listLoading=!1}).catch(function(){t.listLoading=!1})},createFormShow:function(){var e=this;this.createForm=n()({},this.createForm),this.createFormLoading=!1,this.errormessage="",this.createFormVisible=!0,t("#createEditor").val(this.createForm.content),this.$nextTick(function(){e.createEditor&&(e.createForm.content=e.createEditor.html(),e.createEditor.remove("#createEditor")),e.createEditorFn(e.createForm.content)})},createFormSubmit:function(){var t=this;this.createForm.content=this.createEditor.html(),this.createForm.content=this.encodeHtml(this.createForm.content),this.errormessage="",this.$refs.createForm.validate(function(e){if(e){t.createFormLoading=!0;var a=n()({},t.createForm);Object(o._180)(a).then(function(e){t.$message({message:t.$parent.lan.COMMON_ADD_SUCCESS,type:"success"}),t.$refs.createForm.resetFields(),t.createFormVisible=!1,t.createFormLoading=!1,t.getTables()},function(e){"limited_error_message"in e&&(t.$message.error(e.limited_error_message),t.$refs.createForm.resetFields(),t.createFormVisible=!1),"non_field_errors"in e&&(t.$refs.createForm.resetFields(),t.createFormVisible=!1),e.caption&&(t.errormessage=e.caption[0]),t.createFormLoading=!1}).catch(function(e){console.log(e),t.createFormLoading=!1})}})},updateFormShow:function(t,e){var a=this;Object(o._183)(e.id).then(function(t){var e=n()({},t.data);a.updateForm=e,a.errormessage="",a.updateFormVisible=!0,a.updateFormLoading=!1,a.$nextTick(function(){a.updateEditor&&KindEditor.remove("#updateEditor"),a.updateEditorFn(a.updateForm.content)})})},updateFormSubmit:function(){var t=this;this.updateForm.content=this.updateEditor.html(),this.updateForm.content=this.encodeHtml(this.updateForm.content),this.errormessage="",this.$refs.updateForm.validate(function(e){if(e){t.updateFormLoading=!0;var a=n()({},t.updateForm);Object(o._184)(a.id,a).then(function(e){t.$refs.updateForm.resetFields(),t.updateFormLoading=!1,t.updateFormVisible=!1,t.$message({message:t.$parent.lan.COMMON_ALTER_SUCCESS,type:"success"}),t.getTables()}).catch(function(e){t.updateFormLoading=!1,console.log(e),e.caption&&(t.errormessage=e.caption[0])})}})},deleteRow:function(t,e){var a=this,r=this;this.$confirm(this.$parent.lan.COMMON_BUTTON_DELETE_SUBMIT,this.$parent.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){Object(o._181)(e.id).then(function(t){r.$message({message:a.$parent.lan.COMMON_DELETE_SUCCESS,type:"success"}),a.getTables()}).catch(function(t){console.log(t)})})},f_TableSelsChange:function(t){this.sels=t}},computed:{uploadJson:function(){return this.$store.state.uploadJson}}}}).call(e,a("qqHy"))}});
//# sourceMappingURL=23.9dbd1b813771e222e6f2.js.map