webpackJsonp([12],{"1Imb":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("aA9S"),i=a.n(l),o=a("0tg7"),s=a("P9l9"),n={data:function(){return{page_attach:1,pagesize_attach:10,total_attach:0,attachLogVisible:!1,attachlog_list:[],folder_capacity:{},sels:[],total:0,page:1,page_size:10,listLoading:!1,listTables:[],filters:{search:""},blobUrl:"",folder_id_error:"",folder_fullpath:[],moveFormVisible:!1,moveFormLoading:!1,moveFormRules:{to_folder_id:[{required:!0,message:"",trigger:"blur"}]},moveForm:{folder_id:-1,save_list:[]}}},computed:{plang:function(){var t=o.a.zh;return t="zh-hans"==this.$store.getters.getLanguage?o.a.zh:"zh-tw"==this.$store.getters.getLanguage?o.a.zh_tw:"en"==this.$store.getters.getLanguage?o.a.en:(this.$store.getters.getLanguage,o.a.zh),this.moveFormRules={to_folder_id:[{required:!0,message:t.FILE_A_RULE,trigger:"blur"}]},t}},filters:{validateLeft_zh:function(t){var e=1e3*t,a=e/1e3/60/60/24,l=Math.floor(a),i=e/1e3/60/60-24*l,o=Math.floor(i),s=e/1e3/60-1440*l-60*o,n=Math.floor(s),r="";return l&&(r+=l+"天 "),o&&(r+=o+"时 "),n&&(r+=n+"分 "),l||o?l>365||365==l&&(o>0||n>0)?"永久":l>1?l+"天":r:"即将过期"},validateLeft_zh_tw:function(t){var e=1e3*t,a=e/1e3/60/60/24,l=Math.floor(a),i=e/1e3/60/60-24*l,o=Math.floor(i),s=e/1e3/60-1440*l-60*o,n=Math.floor(s),r="";return l&&(r+=l+"天 "),o&&(r+=o+"时 "),n&&(r+=n+"分 "),l||o?l>365||365==l&&(o>0||n>0)?"永久":l>1?l+"天":r:"即将过期"},validateLeft_en:function(t){var e=1e3*t,a=e/1e3/60/60/24,l=Math.floor(a),i=e/1e3/60/60-24*l,o=Math.floor(i),s=e/1e3/60-1440*l-60*o,n=Math.floor(s),r="";return l&&(r+=l+" day(s) "),o&&(r+=o+" hour(s) "),n&&(r+=n+" minute(s) "),l||o?l>365||365==l&&(o>0||n>0)?"forever":l>1?l+" day(s)":r:"will expired"}},created:function(){this.getTables()},methods:{change_page_attach:function(t){this.page_attach=t,this.getAttachLog()},change_size_attach:function(t){this.pagesize_attach=t,this.getAttachLog()},attachlog:function(){this.page_attach=1,this.getAttachLog()},getAttachLog:function(){var t=this,e={page:this.page_attach,page_size:this.pagesize_attach};Object(s.d)(e).then(function(e){console.log(e),t.total_attach=e.data.count,t.attachlog_list=e.data.results,t.attachLogVisible=!0}).catch(function(t){console.log(t)})},getCapacity:function(){var t=this;Object(s._92)().then(function(e){"0%"==e.data.capacity&&(e.data.capacity=0),e.data.capacity>100&&(e.data.capacity=100),e.data.capacity<0&&(e.data.capacity=0),t.folder_capacity=e.data})},f_TableSelsChange:function(t){this.sels=t},f_TableSizeChange:function(t){this.page_size=t,this.getTables()},f_TableCurrentChange:function(t){this.page=t,this.getTables()},getTables:function(){var t=this;this.listLoading=!0;var e={limit:this.page_size,offset:(this.page-1)*this.page_size,search:this.filters.search};Object(s._33)(e).then(function(e){t.total=e.data.count,t.listTables=e.data.results;for(var a=0;a<t.listTables.length;a++){var l=t.listTables[a],i=l.filename.lastIndexOf("."),o="bf"+l.filename.slice(i+1).toUpperCase();l.classObject={},l.classObject[o]=!0}t.listLoading=!1}).catch(function(){t.listLoading=!1}),this.getCapacity()},deleteFiles:function(){var t=this,e=this,a=this.sels.map(function(t){return t.id});this.$confirm(this.plang.FILE_A_MSG1,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){t.listLoading=!0;var l={ids:a};Object(s._71)(l).then(function(l){t.listLoading=!1,e.$message({message:t.plang.COMMON_DELETE_SUCCESS,type:"success"}),(t.page-1)*t.page_size>=t.total-a.length&&(t.page=1),t.getTables()}).catch(function(e){t.listLoading=!1,console.log(e)})}).catch(function(){})},deleteRowFiles:function(t){var e=this,a=this,l=this.plang.FILE_A_MSG2;t.is_online&&(l='<span style="color:red;">包含在线附件，影响发送出去的邮件打开</span>，确定删除该文件？'),this.$confirm(l,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning",dangerouslyUseHTMLString:!0}).then(function(){e.listLoading=!0;var l={ids:[t.id]};Object(s._71)(l).then(function(t){e.listLoading=!1,a.$message({message:e.plang.COMMON_DELETE_SUCCESS,type:"success"}),(e.page-1)*e.page_size>=e.total-1&&(e.page=1),e.getTables()}).catch(function(t){e.listLoading=!1,console.log(t)})}).catch(function(){})},renewalRowFile:function(t){var e=this,a=this;this.listLoading=!0,Object(s.a)(t.id).then(function(t){e.listLoading=!1,a.$message({message:e.plang.FILE_A_MSG3,type:"success"}),e.getTables()}).catch(function(t){e.listLoading=!1,console.log(t),e.getTables()})},download:function(){this.$refs.download.click()},zipRowDownload:function(t){var e=this,a=this;this.listLoading=!0,Object(s._17)(t.id,{download:!0}).then(function(l){e.listLoading=!1;var i=new Blob([l.data],{type:l.headers["content-type"]}),o=URL.createObjectURL(i);e.blobUrl=o;var s=t.filename;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,s);else{var n=document.createElement("a");n.setAttribute("href",o),n.setAttribute("download",s),document.body.appendChild(n),n.click()}a.$message({message:e.plang.COMMON_EXPORT_SUCCESS,type:"success"}),e.getTables()}).catch(function(t){e.listLoading=!1,console.log(t)})},zipDownload:function(){var t=this,e=this;this.listLoading=!0;var a=this.sels.map(function(t){return t.id});Object(s._19)({ids:a}).then(function(a){t.listLoading=!1;var l=new Blob([a.data],{type:a.headers["content-type"]}),i=URL.createObjectURL(l);t.blobUrl=i;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(l,"attachment.zip");else{var o=document.createElement("a");o.setAttribute("href",i),o.setAttribute("download","attachment.zip"),document.body.appendChild(o),o.click()}e.$message({message:t.plang.COMMON_EXPORT_SUCCESS,type:"success"}),t.getTables()}).catch(function(e){t.listLoading=!1,console.log(e)})},moveFormShow:function(){var t=this;this.folder_id_error="",Object(s._100)().then(function(e){t.folder_fullpath=e.data;var a=t.moveForm;a.save_list=t.sels.map(function(t){return t.id}),t.moveForm=i()({},a),t.moveFormVisible=!0,t.moveFormLoading=!1})},moveFormShow2:function(t){var e=this;this.folder_id_error="",Object(s._100)().then(function(a){e.folder_fullpath=a.data;var l=e.moveForm;l.save_list=[t.id],e.moveForm=i()({},l),e.moveFormVisible=!0,e.moveFormLoading=!1})},moveFormSubmit:function(){var t=this;this.folder_id_error="",this.$refs.moveForm.validate(function(e){if(e){t.moveFormLoading=!0;var a=i()({},t.moveForm);Object(s._85)(a).then(function(e){t.$refs.moveForm.resetFields(),t.moveFormLoading=!1,t.moveFormVisible=!1,t.$message({message:t.plang.COMMON_SUBMIT_SUCCESS,type:"success"}),t.getTables()}).catch(function(e){t.moveFormLoading=!1,"non_field_errors"in e&&(t.folder_id_error=e.non_field_errors[0]),console.log(e)})}})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("section",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticClass:"content content-list height100",staticStyle:{"background-color":"#fff",background:"rgba(255,255,255,0.8)"}},[a("el-form",{staticStyle:{padding:"4px 0 4px 4px"},attrs:{inline:!0,model:t.filters}},[a("el-row",[a("el-col",{staticStyle:{"text-align":"left"}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px!important"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.getLoginAfter.is_filedownload,expression:"$store.getters.getLoginAfter.is_filedownload"}],attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-download",disabled:0===this.sels.length},on:{click:t.zipDownload}},[t._v(t._s(t.plang.FILE_P_DOWNLOAD))]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-message",disabled:0===this.sels.length},on:{click:function(e){return t.$parent.sendMail_net("more",t.sels)}}},[t._v(t._s(t.plang.FILE_P_SEND))]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary",disabled:0===this.sels.length},on:{click:t.moveFormShow}},[t._v(t._s(t.plang.FILE_A_TOP))]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-search"},on:{click:t.attachlog}},[t._v(t._s(t.plang.ATTACH_LOG_SEARCH))]),t._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"danger",icon:"el-icon-delete",disabled:0===this.sels.length},on:{click:t.deleteFiles}},[t._v(t._s(t.plang.COMMON_BUTTON_DELETE))])],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"0px!important"}},[a("el-input",{attrs:{placeholder:t.plang.FILE_A_SEARCH,size:"small",tyle:"width:auto;"},model:{value:t.filters.search,callback:function(e){t.$set(t.filters,"search","string"==typeof e?e.trim():e)},expression:"filters.search"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:t.getTables},slot:"suffix"})])],1),t._v(" "),a("a",{ref:"download",staticStyle:{display:"none"},attrs:{href:t.blobUrl,download:""}})],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticStyle:{padding:"10px 0 10px 14px"}},[a("b",[t._v(t._s(t.plang.FILE_INDEX_A))]),t._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#bbb","margin-left":"20px"}},[t._v(" "+t._s(t.plang.FILE_P_CAP))]),t._v(" "),a("el-progress",{staticStyle:{width:"200px",display:"inline-block"},attrs:{percentage:t.folder_capacity.capacity}}),t._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#409eff","margin-left":"-49px"}},[t._v(" "+t._s(t.folder_capacity.used)+" / "+t._s(t.folder_capacity.total))])],1)]),t._v(" "),t.total>0?a("el-col",{staticStyle:{"text-align":"right","margin-top":"6px","line-height":"28px"},attrs:{span:12}},[t.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{"current-page":t.page,"page-sizes":[10,20,50],"page-size":t.page_size,total:t.total,layout:"total, sizes, prev"},on:{"size-change":t.f_TableSizeChange,"current-change":t.f_TableCurrentChange}}):t._e(),t._v(" "),a("span",[t._v(t._s(this.page+" / "+Math.ceil(this.total/this.page_size)))]),t._v(" "),t.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{"current-page":t.page,"page-sizes":[10,20,50],"page-size":t.page_size,total:t.total,layout:" next,jumper"},on:{"size-change":t.f_TableSizeChange,"current-change":t.f_TableCurrentChange}}):t._e()],1):t._e()],1)],1),t._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%","max-width":"100%",height:"100%"},attrs:{data:t.listTables,"tooltip-effect":"dark","header-cell-style":{background:"#f0f1f3"},size:"mini"},on:{"selection-change":t.f_TableSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.COMMON_NAME},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",[a("el-col",{staticStyle:{width:"42px","padding-top":"8px"},attrs:{span:1}},[a("span",{staticClass:"bico",class:e.row.classObject})]),t._v(" "),a("el-col",{staticStyle:{"font-size":"16px"},attrs:{span:20}},[a("div",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"},attrs:{title:e.row.filename}},[t._v(t._s(e.row.filename))]),t._v(" "),a("div",{staticClass:"actions_a"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.getLoginAfter.is_filedownload,expression:"$store.getters.getLoginAfter.is_filedownload"}],on:{click:function(a){return t.zipRowDownload(e.row)}}},[t._v(t._s(t.plang.FILE_P_DOWNLOAD))]),t._v(" "),a("span",{on:{click:function(a){return t.$parent.sendMail_net(e.row)}}},[t._v(t._s(t.plang.FILE_P_SEND2))]),t._v(" "),a("span",{on:{click:function(a){return t.moveFormShow2(e.row)}}},[t._v(t._s(t.plang.FILE_A_TOP))]),t._v(" "),a("span",{on:{click:function(a){return t.renewalRowFile(e.row)}}},[t._v(t._s(t.plang.FILE_A_XUQI))]),t._v(" "),/.(gif|jpg|jpeg|png|bmp|svg|pdf|html|txt|xls|xlsx|doc|docx|ppt|pptx|xml|csv|md|log)$/.test(e.row.filename.toLowerCase())?a("span",{on:{click:function(a){return t.$parent.preview(e.row,"mail")}}},[t._v(t._s(t.plang.COMMON_BUTTON_PREVIEW))]):t._e(),t._v(" "),a("span",{staticStyle:{color:"#f56c6c"},on:{click:function(a){return t.deleteRowFiles(e.row)}}},[t._v(t._s(t.plang.COMMON_BUTTON_DELETE))])])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.COMMON_SIZE,width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("mailsize")(e.row.size)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.FILE_P_TIME,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.created.replace("T"," ")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.ATTACH_LOG_TIMES,width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.times>0?e.row.times:""))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.IS_ONLINE_ATTACH,width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[t.row.is_online?a("i",{staticClass:"el-alert__icon el-icon-success",staticStyle:{color:"#67C23A"}}):a("i",{staticClass:"el-alert__icon el-icon-error",staticStyle:{color:"#F56C6C"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.FILE_A_TIME,width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return["zh-hans"==t.$store.getters.getLanguage?a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t._f("validateLeft_zh")(e.row.left_timestamp)))]):t._e(),t._v(" "),"zh-tw"==t.$store.getters.getLanguage?a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t._f("validateLeft_zh_tw")(e.row.left_timestamp)))]):t._e(),t._v(" "),"en"==t.$store.getters.getLanguage?a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t._f("validateLeft_en")(e.row.left_timestamp)))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.plang.COMMON_MAIL_SUBJECT},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"nowrap",attrs:{title:e.row.subject}},[t._v(t._s(e.row.subject))])]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.plang.FILE_A_TOP,visible:t.moveFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(e){t.moveFormVisible=e}}},[a("el-form",{ref:"moveForm",attrs:{model:t.moveForm,"label-width":"130px",rules:t.moveFormRules}},[a("el-form-item",{attrs:{label:t.plang.FILE_A_PATH,prop:"folder_id",error:t.folder_id_error}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.plang.FILE_A_PATH_PLACE},model:{value:t.moveForm.folder_id,callback:function(e){t.$set(t.moveForm,"folder_id",e)},expression:"moveForm.folder_id"}},t._l(t.folder_fullpath,function(t){return a("el-option",{key:t.id,attrs:{label:t.full_path,value:t.id}})}),1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.moveFormVisible=!1}}},[t._v(t._s(t.plang.COMMON_BUTTON_CANCELL))]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.moveFormLoading},nativeOn:{click:function(e){return t.moveFormSubmit()}}},[t._v(t._s(t.plang.COMMON_BUTTON_SUBMIT))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.plang.ATTACH_LOG,visible:t.attachLogVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(e){t.attachLogVisible=e}}},[a("el-table",{attrs:{data:t.attachlog_list}},[a("el-table-column",{attrs:{property:"created",label:t.plang.ATTACH_LOG_TIME,width:"180"}}),t._v(" "),a("el-table-column",{attrs:{property:"ip",label:"IP",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{property:"recipient",label:t.plang.ATTACH_LOG_REC}}),t._v(" "),a("el-table-column",{attrs:{property:"name",label:t.plang.MAILBOX_COM_COMPOSE_FILENAME}}),t._v(" "),a("el-table-column",{attrs:{property:"size",label:t.plang.MAILBOX_COM_COMPOSE_FILESIZE,width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("mailsize")(e.row.size)))])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.page_attach,"page-sizes":[10,20,50,100],"page-size":t.pagesize_attach,layout:"sizes, prev, pager, next","hide-on-single-page":!0,total:t.total_attach},on:{"size-change":t.change_size_attach,"current-change":t.change_page_attach}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){t.attachLogVisible=!1}}},[t._v(t._s(t.plang.COMMON_CLOSE))])],1)],1)],1)])},staticRenderFns:[]};var c=a("C7Lr")(n,r,!1,function(t){a("v2I8")},null,null);e.default=c.exports},v2I8:function(t,e){}});
//# sourceMappingURL=12.77457e33e0db587eb6a4.js.map