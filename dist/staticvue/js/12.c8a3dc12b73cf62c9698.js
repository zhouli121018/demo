webpackJsonp([12],{"6NUR":function(e,t){},cggP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("P9l9"),s={data:function(){return{plang:this.$parent.plang,asideWith:199,oab_cid:"",blobUrl:"",oab_departs:[],default_expanded_keys:[0],default_checked_keys:[0],oab_defaultProps:{children:"children",label:"label"},filters:{search:""},total:0,page:1,page_size:10,listLoading:!1,sels:[],listTables:[],department_name:""}},created:function(){this.oab_cid=window.sessionStorage.oab_cid},computed:{webmail_oabdump_show:function(){return"true"==window.sessionStorage.webmail_oabdump_show}},mounted:function(){this.$parent.activeIndex="oab",this.getOabGroups(),this.getOabMembers()},methods:{toggleWidth:function(){199==this.asideWith?this.asideWith=399:399==this.asideWith&&(this.asideWith=199)},setCurrentKey:function(){var e=this;this.$nextTick(function(){e.$refs.treeForm.setCurrentKey(Number(e.oab_cid));var t=e.$refs.treeForm.getCurrentNode();e.department_name=t.label})},f_TreeNodeClick:function(e){this.page=1,this.oab_cid=e.id,this.department_name=e.label,window.sessionStorage.oab_cid=e.id,this.getOabMembers()},f_TableSizeChange:function(e){this.page_size=e,this.getOabMembers()},f_TableCurrentChange:function(e){this.page=e,this.getOabMembers()},f_TableSelsChange:function(e){this.sels=e},getOabGroups:function(){var e=this;Object(i.C)().then(function(t){e.oab_departs=t.data.results,e.setCurrentKey()})},searchOabMembers:function(){var e=this;this.page=1;var t=new Array;t.push(Number(this.oab_cid)),this.default_expanded_keys=t,this.default_checked_keys=t;var a={page:this.page,page_size:this.page_size,search:this.filters.search,dept_id:this.oab_cid};this.listLoading=!0,Object(i.F)(a).then(function(t){e.total=t.data.count,e.listTables=t.data.results,e.listLoading=!1}).catch(function(t){console.log(t),e.listLoading=!1})},getOabMembers:function(){var e=this,t=new Array;t.push(Number(this.oab_cid)),this.default_expanded_keys=t,this.default_checked_keys=t;var a={page:this.page,page_size:this.page_size,search:this.filters.search,dept_id:this.oab_cid};this.listLoading=!0,Object(i.F)(a).then(function(t){e.total=t.data.count,e.listTables=t.data.results,e.listLoading=!1}).catch(function(t){console.log(t),e.listLoading=!1})},download:function(){this.$refs.download.click()},Oab_export_group:function(){var e=this,t=this;this.$confirm(this.plang.CONTACT_OAB_MSG1,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){e.listLoading=!0,Object(i.D)(e.oab_cid).then(function(a){e.listLoading=!1;var i=new Blob([a.data],{type:a.headers["content-type"]}),s=URL.createObjectURL(i);e.blobUrl=s;var n=a.headers["content-disposition"],l=n.slice(n.indexOf("=")+2,n.length-1);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,l);else{var o=document.createElement("a");o.setAttribute("href",s),o.setAttribute("download",l),document.body.appendChild(o),o.click()}t.$message({message:e.plang.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){t.listLoading=!1,console.log(e)})})},Oab_export_foxmail:function(){var e=this,t=this;this.$confirm(this.plang.CONTACT_OAB_MSG1,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){e.listLoading=!0,Object(i.E)(e.oab_cid).then(function(a){e.listLoading=!1;var i=new Blob([a.data],{type:a.headers["content-type"]}),s=URL.createObjectURL(i);e.blobUrl=s;var n=a.headers["content-disposition"],l=n.slice(n.indexOf("=")+2,n.length-1);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,l);else{var o=document.createElement("a");o.setAttribute("href",s),o.setAttribute("download",l),document.body.appendChild(o),o.click()}t.$message({message:e.plang.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){t.listLoading=!1,console.log(e)})})},Oab_export_outlook:function(){var e=this,t=this;this.$confirm(this.plang.CONTACT_OAB_MSG1,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){e.listLoading=!0,Object(i.G)(e.oab_cid).then(function(a){e.listLoading=!1;var i=new Blob([a.data],{type:a.headers["content-type"]}),s=URL.createObjectURL(i);e.blobUrl=s;var n=a.headers["content-disposition"],l=n.slice(n.indexOf("=")+2,n.length-1);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,l);else{var o=document.createElement("a");o.setAttribute("href",s),o.setAttribute("download",l),document.body.appendChild(o),o.click()}t.$message({message:e.plang.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){t.listLoading=!1,console.log(e)})})},Oab_export_tutorial:function(){var e=this;Object(i.H)(this.oab_cid).then(function(t){var a=new Blob([t.data],{type:t.headers["content-type"]}),i=URL.createObjectURL(a);e.blobUrl=i;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,"ImportTutorial.docx");else{var s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download","ImportTutorial.docx"),document.body.appendChild(s),s.click()}that.$message({message:e.plang.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(t){e.listLoading=!1,console.log(t)})},Oab_send_to_department:function(){var e=this;this.$confirm(this.plang.CONTACT_OAB_MSG3,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){var t=e.$store.getters.userInfo.name,a=t.lastIndexOf("@"),i=t.slice(a),s=["dept_"+e.oab_cid+i,e.department_name];0==e.oab_cid&&(s=["everyone"+i,"everyone"]),e.$parent.sendMail_net([s])}).catch(function(){})},Oab_to_pab:function(){var e=this,t=this,a=this.sels.map(function(e){return e.id});this.$confirm(this.plang.CONTACT_OAB_MSG4,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){e.listLoading=!0;var s={ids:a};Object(i.U)(s).then(function(a){e.listLoading=!1,t.$message({message:e.plang.CONTACT_OAB_MSG5,type:"success"})}).catch(function(t){console.log(t),e.listLoading=!1})}).catch(function(e){})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"m-mail absolute_height"},[a("aside",{staticClass:"mlsidebar",style:{width:e.$parent.asideWith+"px"}},[a("div",{staticClass:"mlsidebar-bg"}),e._v(" "),a("div",{staticClass:"wrapper u-scroll top0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.oab_cid,expression:"oab_cid"}],attrs:{type:"hidden"},domProps:{value:e.oab_cid},on:{input:function(t){t.target.composing||(e.oab_cid=t.target.value)}}}),e._v(" "),a("el-tree",{ref:"treeForm",staticClass:"filter-tree",attrs:{data:e.oab_departs,props:e.oab_defaultProps,"render-after-expand":!0,"highlight-current":!0,"node-key":"id",indent:13,"default-expanded-keys":e.default_expanded_keys,"default-checked-keys":e.default_checked_keys},on:{"node-click":e.f_TreeNodeClick}})],1),e._v(" "),a("div",{staticClass:"navbar-expand contact_sidebar",on:{click:e.$parent.toggleWidth}},[199==e.$parent.asideWith?a("i",{staticClass:"el-icon-arrow-right"}):e._e(),e._v(" "),399==e.$parent.asideWith?a("i",{staticClass:"el-icon-arrow-left"}):e._e()])]),e._v(" "),a("article",{staticClass:"mlmain mltabview overflow_auto",style:{left:e.$parent.asideWith+1+"px"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"j-module-content j-maillist mllist-list height100 "},[a("el-row",[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v(e._s(e.plang.COMMON_HOME_NAME))]),e._v(" "),a("el-breadcrumb-item",[a("a",{attrs:{href:"#"}},[e._v(e._s(e.plang.CONTANCT_INDEX_OAB))])]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(e.plang.CONTACT_OAB_CUR)+" "+e._s(e.department_name))])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",[a("el-input",{attrs:{placeholder:e.plang.CONTACT_PAB_SEARCH,size:"small"},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.searchOabMembers}},[e._v(e._s(e.plang.COMMON_SEARCH))]),e._v(" "),e.webmail_oabdump_show?a("el-button",{attrs:{type:"success",size:"small"},on:{click:e.Oab_export_group}},[e._v(e._s(e.plang.CONTACT_PAB_EXPC))]):e._e(),e._v(" "),a("a",{ref:"download",staticStyle:{display:"none"},attrs:{href:e.blobUrl,download:""}}),e._v(" "),e.webmail_oabdump_show?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.Oab_export_foxmail}},[e._v(e._s(e.plang.CONTACT_OAB_EXPCF))]):e._e(),e._v(" "),e.webmail_oabdump_show?a("el-button",{attrs:{type:"success",size:"small"},on:{click:e.Oab_export_outlook}},[e._v(e._s(e.plang.CONTACT_OAB_EXPCO))]):e._e(),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.webmail_oabdump_show,expression:"webmail_oabdump_show"}]},[e._v("\n                （"),a("el-button",{staticClass:"el-button control-button el-tooltip el-button--text el-button--small",attrs:{type:"button"},on:{click:e.Oab_export_tutorial}},[e._v(e._s(e.plang.CONTACT_OAB_EXPCT))]),e._v("）\n              ")],1)],1)],1)],1)],1),e._v(" "),a("section",{staticClass:"content content-list height100"},[a("el-row",{staticClass:"toolbar"},[a("el-col",{attrs:{span:12}},[a("el-button",{attrs:{type:"primary",disabled:0===this.sels.length,size:"mini"},on:{click:function(t){e.$parent.sendMail_net("more",e.sels)}}},[e._v(e._s(e.plang.CONTACT_OAB_SEND))]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:e.Oab_send_to_department}},[e._v(e._s(e.plang.CONTACT_OAB_SENDO))]),e._v(" "),a("el-button",{attrs:{type:"info",disabled:0===this.sels.length,size:"mini"},on:{click:e.Oab_to_pab}},[e._v(" "+e._s(e.plang.CONTACT_OAB_TOPAB))])],1),e._v(" "),e.total>0?a("el-col",{staticStyle:{"text-align":"right","line-height":"28px"},attrs:{span:12}},[e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{layout:"total, sizes, prev","page-sizes":[10,20,50,100],"current-page":e.page,"page-size":e.page_size,total:e.total},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e(),e._v(" "),a("span",[e._v(e._s(this.page+" / "+Math.ceil(this.total/this.page_size)))]),e._v(" "),e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{layout:"next, jumper","page-sizes":[10,20,50,100],"current-page":e.page,"page-size":e.page_size,total:e.total},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange,"update:pageSize":function(t){e.page_size=t}}}):e._e()],1):e._e()],1),e._v(" "),a("el-table",{staticStyle:{width:"100%","max-width":"100%"},attrs:{data:e.listTables,"highlight-current-row":"",width:"100%",size:"mini",border:""},on:{"selection-change":e.f_TableSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",label:"No.",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:e.plang.COMMON_XINGMING,width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:e.plang.COMMON_EMAIL,width:"250"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mobile",label:e.plang.COMMON_MOBILE2,width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tel_work",label:e.plang.CONTACT_OAB_WORKTEL,width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department",label:e.plang.COMMON_DEPARTMENT}}),e._v(" "),a("el-table-column",{attrs:{prop:"position",label:e.plang.COMMON_POSITION,width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tel_group",label:e.plang.COMMON_TELGROUP,width:"150"}})],1),e._v(" "),a("el-col",{staticClass:"toolbar",attrs:{span:24}})],1)],1)])])},staticRenderFns:[]};var l=a("C7Lr")(s,n,!1,function(e){a("6NUR")},"data-v-72535a40",null);t.default=l.exports}});
//# sourceMappingURL=12.c8a3dc12b73cf62c9698.js.map