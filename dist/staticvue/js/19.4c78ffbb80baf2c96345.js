webpackJsonp([19],{D6k9:function(e,t){},YcFr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("aA9S"),i=a.n(l),n=(a("aozt"),a("P9l9")),s=/^(\w|[-+=.])+@\w+([-.]\w+)*\.(\w+)$/,o={data:function(){var e=this;return{plang:e.$parent.lan,fileloading:!1,deptOptions:[],totalCount:0,pageSize:10,currentPage:1,searchMailbox:"",oab_cid:0,showChoice:!1,contactList:[],contactData:[],selectedMailbox:[],hashMailbox:[],addmailbox:"",selectedMails:[],addType:0,total:0,page:1,page_size:10,listLoading:!1,sels:[],listTables:[],email_error:"",createFormVisible:!1,createFormLoading:!1,createForm:{emails:"",access:"read"},createFormRules:{emails:[{required:!0,message:e.$parent.lan.SETTING_WHITE_EMAIL_RULE1,trigger:"blur"},{validator:function(t,a,l){1==/^(\w|[-+=.])+@\w+([-.]\w+)*\.(\w+)$/.test(a)?l():l(new Error(e.$parent.lan.SETTING_WHITE_EMAIL_RULE2))},trigger:"blur"}],disabled:[{required:!0,message:e.$parent.lan.SETTING_RE_ADD_PLACEHODER,trigger:"blur"}]}}},mounted:function(){this.getTables(),this.getContactList(),this.searchOabMembers(1)},methods:{changeFile:function(e,t){t.splice(0,t.length-1)},submitFile:function(){this.$refs.uploadFile.submit()},checkModel:function(){var e=this;Object(n._157)().then(function(t){var a=new Blob([t.data],{type:t.headers["content-type"]}),l=URL.createObjectURL(a);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,"excel_share.xls");else{var i=document.createElement("a");i.setAttribute("href",l),i.setAttribute("download","excel_share.xls"),document.body.appendChild(i),i.click()}e.$message({message:e.plang.COMMON_DOWNLOAD_SUCCESS,type:"success"})},function(e){console.log(e)})},deleteAll:function(){this.selectedMailbox=[],this.hashMailbox=[]},addMailbox:function(){this.addmailbox&&(s.test(this.addmailbox)?this.hashMailbox[this.addmailbox]||(this.selectedMailbox.push(this.addmailbox),this.hashMailbox[this.addmailbox]=!0,this.addmailbox=""):this.$alert(this.plang.SETTING_WHITE_EMAIL_RULE2))},deleteMailbox:function(e){this.hashMailbox[this.selectedMailbox[e]]=!1,this.selectedMailbox.splice(e,1)},menu_change:function(e){var t=e[e.length-1];this.oab_cid=t,this.searchOabMembers(1)},getDeptOptions:function(){var e=this;Object(n.C)().then(function(t){e.deptOptions=t.data.results,e.deptOptions=function e(t){for(var a=0;a<t.length;a++)t[a].value=t[a].id,t[a].children&&0==t[a].children.length&&(t[a].children=null),t[a].children&&t[a].children.length>0&&e(t[a].children);return t}(e.deptOptions)},function(e){console.log(e)})},rowClick:function(e,t,a){this.$refs.contactTable.toggleRowSelection(e)},handleSizeChange:function(e){this.pageSize=e,this.searchOabMembers(1)},handleCurrentChange:function(e){this.currentPage=e,this.searchOabMembers(e)},searchOabMembers:function(e){var t=this;this.currentPage=e;var a={page:this.currentPage,page_size:this.pageSize,search:this.searchMailbox,dept_id:this.oab_cid};Object(n.F)(a).then(function(e){t.totalCount=e.data.count,t.contactData=e.data.results})},handleSelectionChange:function(e){for(var t=0;t<e.length;t++)this.hashMailbox[e[t].username]||(this.selectedMailbox.push(e[t].username),this.hashMailbox[e[t].username]=!0)},uploadFile:function(e){var t=this;this.fileloading=!0;var a=this,l=e.file,i=new FormData;i.append("file",l),i.append("access",this.createForm.access),Object(n._155)(i).then(function(e){t.$refs.uploadFile.clearFiles(),a.fileloading=!1,t.createFormVisible=!1,a.$message({message:t.plang.COMMON_IMPORT_SUCCESS,type:"success"})}).catch(function(e){a.fileloading=!1})},getContactList:function(){var e=this;Object(n.S)({group_id:0,page_size:1e4,page:1}).then(function(t){e.contactList=t.data.results},function(e){console.log(e)})},f_TableSelsChange:function(e){this.sels=e},f_TableSizeChange:function(e){this.page_size=e,this.getTables()},f_TableCurrentChange:function(e){this.page=e,this.getTables()},getTables:function(){var e=this;this.listLoading=!0;var t={page:this.page,page_size:this.page_size};Object(n._154)(t).then(function(t){e.total=t.data.count,e.listTables=t.data.results,e.listLoading=!1})},createFormShow:function(){this.createForm=i()({},this.createForm),this.createFormLoading=!1,this.createFormVisible=!0,this.getDeptOptions()},createFormSubmit:function(){var e=this;this.email_error="",this.$refs.createForm.validate(function(t){if(t){e.createFormLoading=!0,e.createForm.emails=e.selectedMailbox;var a=i()({},e.createForm);Object(n._152)(a).then(function(t){e.$message({message:e.plang.COMMON_ADD_SUCCESS,type:"success"}),e.$refs.createForm.resetFields(),e.createFormVisible=!1,e.createFormLoading=!1,e.getTables()},function(t){"non_field_errors"in t&&(e.email_error=t.non_field_errors[0],e.createFormLoading=!1)}).catch(function(t){console.log(t),e.createFormLoading=!1})}})},deleteRow:function(e,t){var a=this,l=this;this.$confirm(this.plang.COMMON_BUTTON_DELETE_SUBMIT,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){Object(n._153)(t.id).then(function(e){l.$message({message:a.plang.COMMON_DELETE_SUCCESS,type:"success"}),(a.page-1)*a.page_size>=a.total-1&&(a.page=1),a.getTables()}).catch(function(e){console.log(e)})})}},computed:{}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("el-row",{staticStyle:{padding:"0px"}},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(e.plang.COMMON_HOME_NAME))]),e._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[e._v(e._s(e.plang.SETTING_INDEX_NAME))])]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(e.plang.SETTING_INDEX_REFER_MENU))])],1)],1)],1),e._v(" "),a("section",{staticClass:"content content-list height100",staticStyle:{"background-color":"#fff",background:"rgba(255,255,255,0.9)","padding-bottom":"13px"}},[a("el-row",{staticClass:"toolbar"},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.createFormShow}},[e._v(e._s(e.plang.COMMON_BUTTON_ADD))])],1),e._v(" "),e.total>0?a("el-col",{staticStyle:{"text-align":"right","line-height":"28px"},attrs:{span:12}},[e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{layout:"total, sizes, prev ","page-sizes":[10,20,50,100],"current-page":e.page,"page-size":e.page_size,total:e.total},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e(),e._v(" "),a("span",[e._v(e._s(this.page+" / "+Math.ceil(this.total/this.page_size)))]),e._v(" "),e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{layout:" next, jumper","page-sizes":[10,20,50,100],"current-page":e.page,"page-size":e.page_size,total:e.total},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e()],1):e._e()],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","max-width":"100%"},attrs:{data:e.listTables,"highlight-current-row":"",width:"100%",size:"mini","empty-text":e.plang.COMMON_NODATA,border:""},on:{"selection-change":e.f_TableSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"realname",label:e.plang.USERNAME}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:e.plang.SETTING_REFER_EMAIL}}),e._v(" "),a("el-table-column",{attrs:{prop:"access_display",label:e.plang.COMMON_PERMISSION}}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.COMMON_OPRATE},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.deleteRow(t.$index,t.row)}}},[e._v(e._s(e.plang.COMMON_BUTTON_DELETE))])]}}])})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}}),e._v(" "),a("el-dialog",{staticClass:"add_share_mail",attrs:{title:e.plang.COMMON_BUTTON_ADD,visible:e.createFormVisible,"close-on-click-modal":!1,"append-to-body":!0,width:"60%"},on:{"update:visible":function(t){e.createFormVisible=t}}},[a("el-form",{ref:"createForm",attrs:{model:e.createForm,"label-width":"100px",rules:e.createFormRules,size:"small","element-loading-text":e.plang.SETTING_REFER_IMPORT_LOADING,"element-loading-spinner":"el-icon-loading"}},[a("el-form-item",{attrs:{label:e.plang.SETTING_REFER_MODE}},[a("el-radio-group",{model:{value:e.addType,callback:function(t){e.addType=t},expression:"addType"}},[a("el-radio",{attrs:{label:0}},[e._v(e._s(e.plang.SETTING_REFER_MODE1))]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v(e._s(e.plang.SETTING_REFER_MODE2))])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.COMMON_PERMISSION}},[a("el-radio-group",{model:{value:e.createForm.access,callback:function(t){e.$set(e.createForm,"access",t)},expression:"createForm.access"}},[a("el-radio",{attrs:{label:"read"}},[e._v(e._s(e.plang.SETTING_REFER_PERM1))]),e._v(" "),a("el-radio",{attrs:{label:"edit"}},[e._v(e._s(e.plang.SETTING_REFER_PERM2))]),e._v(" "),a("el-radio",{attrs:{label:"send"}},[e._v(e._s(e.plang.SETTING_REFER_PERM3))]),e._v(" "),a("el-radio",{attrs:{label:"all"}},[e._v(e._s(e.plang.SETTING_REFER_PERM4))])],1)],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"0"==e.addType,expression:"addType == '0'"}],attrs:{label:e.plang.COMMON_EMAIL}},[a("div",{staticStyle:{"min-height":"80px",border:"1px solid #dcdfe6","max-width":"460px",padding:"4px 10px","margin-bottom":"4px","max-height":"400px",overflow:"auto"}},e._l(e.selectedMailbox,function(t,l){return a("el-row",{key:l},[a("el-col",{attrs:{span:18}},[a("div",[e._v(e._s(t))])]),e._v(" "),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:6}},[a("el-button",{attrs:{icon:"el-icon-delete",size:"mini",type:"warning",plain:""},on:{click:function(t){e.deleteMailbox(l)}}})],1)],1)}),1),e._v(" "),e._e(),e._v(" "),a("el-input",{staticStyle:{width:"auto"},attrs:{placeholder:e.plang.SETTING_REFERE_EMAIL_DESC2,type:"email"},model:{value:e.addmailbox,callback:function(t){e.addmailbox=t},expression:"addmailbox"}}),a("el-button",{on:{click:e.addMailbox}},[e._v(e._s(e.plang.COMMON_BUTTON_ADD))]),e._v(" "),a("el-button",{attrs:{type:"danger",plain:""},on:{click:e.deleteAll}},[e._v(e._s(e.plang.SETTING_REFERE_EMAIL_DESC3))]),e._v(" "),a("el-button",{on:{click:function(t){e.showChoice=!e.showChoice}}},[e._v(e._s(e.showChoice?e.plang.ADDRBOOK_HIDE:e.plang.ADDRBOOK_SHOW))])],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"0"==e.addType&&e.showChoice,expression:"addType == '0'&&showChoice"}],attrs:{label:e.plang.SETTING_REFERE_EMAIL_SELECT}},[a("el-row",{staticStyle:{"margin-bottom":"6px"}},[a("el-col",{attrs:{span:16}},[a("el-cascader",{staticStyle:{width:"100%"},attrs:{"change-on-select":"",options:e.deptOptions,placeholder:e.plang.SETTING_RE_ADD_SELECTDPT_PLACE},on:{change:e.menu_change}})],1),e._v(" "),a("el-col",{attrs:{span:5,offset:1}},[a("el-input",{attrs:{size:"small",placeholder:e.plang.SETTING_RE_ADD_CONTENT_RULE},model:{value:e.searchMailbox,callback:function(t){e.searchMailbox=t},expression:"searchMailbox"}})],1),e._v(" "),a("el-col",{staticStyle:{"text-align":"right"},attrs:{span:2}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.searchOabMembers(1)}}},[e._v(e._s(e.plang.COMMON_SEARCH2))])],1)],1),e._v(" "),a("el-table",{ref:"contactTable",staticStyle:{width:"100%"},attrs:{data:e.contactData,"tooltip-effect":"dark",border:"","header-cell-style":{background:"#f0f1f3"}},on:{"selection-change":e.handleSelectionChange,"row-click":e.rowClick}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:e.plang.SETTING_REFERE_EMAIL_NAME},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name+"<"+t.row.username+">"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.COMMON_DEPARTMENT},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.department))])]}}])})],1),e._v(" "),e.totalCount>0?a("div",{staticStyle:{"line-height":"28px"}},[e.totalCount>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{small:"","current-page":e.currentPage,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":e.pageSize,layout:"total, sizes, prev ",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("span",[e._v(e._s(this.currentPage+" / "+Math.ceil(this.totalCount/this.pageSize)))]),e._v(" "),e.totalCount>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{small:"","current-page":e.currentPage,"page-sizes":[5,10,20,50,100,200,300,400],"page-size":e.pageSize,layout:" next, jumper",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1):e._e()],1),e._v(" "),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"2"==e.addType,expression:"addType == '2'"}],attrs:{label:e.plang.SETTING_RE_ADD_PLACEHODER}},[a("el-col",{attrs:{span:12}},[a("el-upload",{ref:"uploadFile",staticStyle:{display:"inline-block"},attrs:{action:"","http-request":e.uploadFile,"auto-upload":!1,"on-change":e.changeFile,accept:".csv,.xls,.xlsx"}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[a("i",{staticClass:"el-icon-upload"}),e._v(e._s(e.plang.SETTING_REFERE_FILE))]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{plan:"",size:"small"},on:{click:e.checkModel}},[e._v(e._s(e.plang.SETTING_REFERE_TEMPLATE))])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.createFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_CLOSE))]),e._v(" "),"0"==e.addType?a("el-button",{attrs:{type:"primary",loading:e.createFormLoading},nativeOn:{click:function(t){e.createFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))]):e._e(),e._v(" "),"2"==e.addType?a("el-button",{attrs:{type:"primary",loading:e.fileloading},nativeOn:{click:function(t){return e.submitFile(t)}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))]):e._e()],1)],1)],1)],1)},staticRenderFns:[]};var c=a("C7Lr")(o,r,!1,function(e){a("D6k9")},null,null);t.default=c.exports}});
//# sourceMappingURL=19.4c78ffbb80baf2c96345.js.map