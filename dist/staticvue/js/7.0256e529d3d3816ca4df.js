webpackJsonp([7],{"4Kyx":function(e,t,a){"use strict";(function(e){var l=a("aA9S"),i=a.n(l),o=a("0tg7"),r=a("L/O1"),s=a("CTqJ"),n=a.n(s),_=a("aozt"),d=(a.n(_),a("P9l9"));t.a={data:function(){return{loading2:!1,fileStatusText:{success:"",error:"",uploading:"",paused:"",waiting:""},show_error:!1,error_list:[],addone:[],search_perm:"",init:!0,perm_sels:[],perm_search:"",perm_id:-1,page_perm:1,page_size_perm:10,total_perm:110,permTableData:[],perm_tree_menu:[],defaultProps:{id:"id",label:"label",children:"children"},permFormVisible:!1,permFormLoading:!1,allFormVisible:!1,allFormLoading:!1,perm:"1",addList:[],allList:[],addFormVisible:!1,addFormLoading:!1,fileloading:!1,percent:0,filters:{search:""},sels:[],total:0,page:1,page_size:20,listLoading:!1,listTables:[],current_name:{},folder_names:[],folder_count:{},file_count:{},folder_capacity:{},current_folder_id:-1,folder_fullpath:[],is_supercompany:!1,is_superuser:!1,permisson_type:0,blobUrl:"",folder_id_error:"",createFolderFormVisible:!1,createFolderFormLoading:!1,createFolderFormRules:{name:[{required:!0,message:"",trigger:"blur"},{min:1,max:20,message:"",trigger:"blur"}],folder_id:[{required:!0,message:"",trigger:"blur"}]},createFolderForm:{name:"",folder_id:""},folder_name_error:"",updateFormVisible:!1,updateFormLoading:!1,updateFormRules:{name:[{required:!0,message:"",trigger:"blur"},{min:1,max:20,message:"",trigger:"blur"}]},updateForm:{name:""},moveFolderFormVisible:!1,moveFolderFormLoading:!1,moveFolderFormRules:{to_folder_id:[{required:!0,message:"",trigger:"blur"}]},moveFolderForm:{to_folder_id:""},uploadFormVisible:!1,uploadFormLoading:!1,uploadFormRules:{folder_id:[{required:!0,message:"",trigger:"blur"}]},uploadForm:{fileList:[],folder_id:-1}}},created:function(){this.getTables(),this.getCapacity(),this.createFolderForm={name:this.plang.FILE_C_RULE1,folder_id:""}},methods:{clearList:function(){this.$refs.cupd.uploader.cancel()},calcMD56:function(e,t){var a=2097152,l=Math.ceil(e.size/a),i=0,o=new n.a.ArrayBuffer,r=new FileReader;function s(){var t=i*a,l=t+a>=e.size?e.size:t+a;r.readAsArrayBuffer(e.slice(t,l))}r.onload=function(e){if(o.append(e.target.result),!(++i<l)){var a=o.end();return t(a),a}s()},s()},fileAdded:function(e){var t=this;if(0==e.size)return e.cancel(),!1;Object(d.r)().then(function(a){if(a.data.rtotal>0&&e.size>a.data.rtotal-a.data.rused){var l=e.name;return t.$message({type:"error",message:l+t.plang.FILE_C_MSG1}),e.cancel(),!1}t.loading2=!0,t.calcMD56(e.file,function(a){t.loading2=!1,e.uniqueIdentifier=a,e.resume()})})},bigUploadSuccess:function(t,a,l){var i=this,o={fileMd5:a,upload_type:"company",file_name:t.name,file_type:t.type||"application/octet-stream",file_size:t.size,folder_id:this.uploadForm.folder_id?this.uploadForm.folder_id:this.current_folder_id},r=e(".bigUpload_cfile .file_"+l.id);Object(d._225)(o).then(function(e){r.attr("status","success"),r.find(".uploader-file-status>span:first-child").text(i.plang.FILE_P_UPSTATUS_SUCCESS),i.tip="",i.getCapacity(),i.getTables()}).catch(function(e){i.tip=i.plang.FILE_P_SERVERERR,r.attr("status","error"),r.find(".uploader-file-status>span:first-child").text(i.plang.FILE_P_UPSTATUS_FAILED),e.non_field_errors&&(i.tip=e.non_field_errors[0])})},fileSuccess:function(t,a,l,i){var o=a.uniqueIdentifier;e(".bigUpload_cfile .file_"+a.id).find(".uploader-file-status>span:first-child").text("99%");this.bigUploadSuccess(a.file,o,a)},sendMail_net:function(e,t){this.$emit("sendMail_net",e,t,"company")},perm_size_change:function(e){this.page_size_perm=e,this.page_perm=1,this.getPermList()},perm_page_change:function(e){this.page_perm=e,this.getPermList()},editPerm:function(e,t){var a=this,l={perm:e};Object(d._221)(t.id,l).then(function(e){a.$message({type:"success",message:a.plang.FILE_C_MSG2})}).catch(function(e){console.log(e)})},deletePermById:function(e){var t=this;this.$confirm(this.plang.FILE_C_MSG4,this.plang.COMMON_BUTTON_SYSTEM_NOTICE,{confirmButtonText:this.plang.COMMON_BUTTON_CONFIRM,cancelButtonText:this.plang.COMMON_BUTTON_CANCELL,dangerouslyUseHTMLString:!0,type:"warning"}).then(function(){Object(d._12)(e.id).then(function(e){t.$message({type:"success",message:t.plang.FILE_C_MSG5}),t.getPermList()}).catch(function(e){t.error_list=e,t.show_error=!0,console.log(e)})}).catch(function(e){})},perm_select:function(e){this.perm_sels=e},deletePerms:function(){var e=this;this.$confirm(this.plang.FILE_C_MSG7,this.plang.COMMON_BUTTON_SYSTEM_NOTICE,{confirmButtonText:this.plang.COMMON_BUTTON_CONFIRM,cancelButtonText:this.plang.COMMON_BUTTON_CANCELL,dangerouslyUseHTMLString:!0,type:"warning"}).then(function(){var t=[];e.perm_sels.forEach(function(e){t.push(e.id)});var a={perm_ids:t};Object(d.e)(a).then(function(t){e.$message({type:"success",message:e.plang.FILE_C_MSG5}),e.getPermList()}).catch(function(t){e.error_list=t,e.show_error=!0,console.log(t)})}).catch(function(){})},perm_searchfn:function(){this.page_perm=1,this.getPermList()},getPermList:function(){var e=this;this.permFormLoading=!0;var t={page:this.page_perm,page_size:this.page_size_perm,folder_id:this.perm_id,search:this.perm_search,perm:this.search_perm};Object(d._102)(t).then(function(t){e.permFormLoading=!1,e.total_perm=t.data.count,e.permTableData=t.data.results}).catch(function(t){console.log(t),e.permFormLoading=!1})},getCompanyTree:function(){var e=this;Object(d.A)().then(function(t){e.perm_tree_menu=[{children:t.data.results,id:-1,label:e.plang.FILE_INDEX_C}],e.$nextTick(function(){e.$refs.treem.setCurrentKey(e.current_folder_id)})}).catch(function(e){console.log("获取文件夹树错误！",e)})},perm_tree_click:function(e){this.perm_id=e.id,this.page_perm=1,this.getPermList()},showPermDialog:function(){this.permFormVisible=!0,this.perm_id=this.current_folder_id,this.getCompanyTree(),this.getPermList()},addSuper:function(){var e=this;this.allFormLoading=!0;var t=[],a=[];this.allList.forEach(function(e){e.is_dept?a.push(e.id):t.push(e.id)});var l={email_ids:t,depart_ids:a};Object(d._211)(l).then(function(t){e.allFormVisible=!1,e.allFormLoading=!1,e.$message({type:"success",message:e.plang.FILE_C_MSG9})}).catch(function(t){console.log(t),t.error_message&&e.$message({type:"error",message:e.plang.FILE_C_MSG10+t.error_message}),e.allFormLoading=!1})},addPerm:function(){var e=this;this.addFormLoading=!0;var t=[],a=[];this.addList.forEach(function(e){e.is_dept?a.push(e.id):t.push(e.id)});var l=[];this.addone.length>0?l.push(this.addone[0].id):this.sels.forEach(function(e){"folder"==e.nettype&&l.push(e.id)});var i={email_ids:t,depart_ids:a,folder_id:this.current_folder_id,folder_ids:l,perm:this.perm};Object(d._103)(i).then(function(t){e.addFormVisible=!1,e.addFormLoading=!1,e.$message({type:"success",message:e.plang.FILE_C_MSG11})}).catch(function(t){console.log(t),e.addFormLoading=!1})},showAllDialog:function(){this.allFormVisible=!0},getData_all:function(e){this.allList=e},getData:function(e){this.addList=e},showAddDialog:function(e){if(this.addone=[],"more"!=e)this.addFormVisible=!0,this.addone.push(e);else{var t=[];if(this.sels.forEach(function(e){"folder"==e.nettype&&t.push(e.id)}),0==t.length)return void this.$message({type:"error",message:this.plang.FILE_C_MSG13});this.addFormVisible=!0}},uploadSuccess:function(){},f_TableSelsChange:function(e){this.sels=e},f_TableSizeChange:function(e){this.page_size=e,this.getTables()},f_TableCurrentChange:function(e){this.page=e,this.getTables()},getTables:function(){var e=this;this.listLoading=!0;var t={page:this.page,page_size:this.page_size,folder_id:this.current_folder_id};Object(d.x)(t).then(function(t){e.is_superuser=t.data.is_superuser,e.is_supercompany=t.data.is_supercompany,e.permisson_type=t.data.permisson_type,e.current_name=t.data.current_name,e.folder_names=t.data.folder_names,e.folder_count=t.data.folder_count,e.file_count=t.data.file_count,e.total=t.data.count,e.listTables=t.data.results;for(var a=0;a<e.listTables.length;a++){var l=e.listTables[a];if("folder"==l.nettype)l.classObject={bfFOLDER:!0};else{var i=l.name.lastIndexOf("."),o="bf"+l.name.slice(i+1).toUpperCase();l.classObject={},l.classObject[o]=!0}}e.listLoading=!1}).catch(function(){e.listLoading=!1})},getCapacity:function(){var e=this;Object(d.r)().then(function(t){"0%"==t.data.capacity&&(t.data.capacity=0),t.data.capacity>100&&(t.data.capacity=100),t.data.capacity<0&&(t.data.capacity=0),e.folder_capacity=t.data})},getPaths:function(){var e=this;Object(d.y)().then(function(t){e.folder_fullpath=t.data})},changeFolderTables:function(e){this.listLoading=!0,this.current_folder_id=e.id,this.getTables()},changeParentFolder:function(){this.listLoading=!0,this.current_folder_id=this.current_name.parent_id,this.getTables()},createFolderFormShow:function(){var e=this;Object(d.y)().then(function(t){e.folder_fullpath=t.data;var a=e.createFolderForm;a.folder_id=e.current_folder_id,e.createFolderForm=i()({},a),e.createFolderFormVisible=!0,e.createFolderFormLoading=!1})},createFolderFormSubmit:function(){var e=this;this.folder_id_error="",this.$refs.createFolderForm.validate(function(t){if(t){e.createFolderFormLoading=!0;var a=i()({},e.createFolderForm);Object(d.v)(a).then(function(t){e.$message({message:e.plang.COMMON_ADD_SUCCESS,type:"success"}),e.$refs.createFolderForm.resetFields(),e.createFolderFormVisible=!1,e.createFolderFormLoading=!1,e.getTables()}).catch(function(t){e.createFolderFormLoading=!1,"limited_error_message"in t&&(e.$message.error(t.limited_error_message),e.$refs.createFolderForm.resetFields(),e.createFolderFormVisible=!1,e.getTables()),"non_field_errors"in t&&(e.folder_id_error=t.non_field_errors[0]),"error_message"in t&&(e.$message({message:t.error_message,type:"error"}),e.getTables(),e.createFolderFormVisible=!1)})}})},resetRowNameShow:function(e){this.updateForm=i()({},e),this.updateFormVisible=!0,this.updateFormLoading=!1},updateFormSubmit:function(){var e=this;this.folder_name_error="",this.$refs.updateForm.validate(function(t){if(t){e.updateFormLoading=!0;var a=i()({},e.updateForm),l=a.nettype;"folder"==l?Object(d.w)(a.id,a).then(function(t){e.$refs.updateForm.resetFields(),e.updateFormLoading=!1,e.updateFormVisible=!1,e.$message({message:e.plang.COMMON_SUBMIT_SUCCESS,type:"success"}),e.getTables()}).catch(function(t){"non_field_errors"in t&&(e.folder_name_error=t.non_field_errors[0]),"error_message"in t&&e.$message({message:t.error_message,type:"error"}),e.updateFormLoading=!1}):"file"==l&&Object(d.t)(a.id,a).then(function(t){e.$refs.updateForm.resetFields(),e.updateFormLoading=!1,e.updateFormVisible=!1,e.$message({message:e.plang.COMMON_SUBMIT_SUCCESS,type:"success"}),e.getTables()}).catch(function(t){"non_field_errors"in t&&(e.folder_name_error=t.non_field_errors[0]),"error_message"in t&&(e.getTables(),e.$message({message:t.error_message,type:"error"})),"detail"in t&&e.getTables(),e.updateFormLoading=!1})}})},moveFolderFormShow:function(){var e=this;this.folder_id_error="",Object(d.y)().then(function(t){e.folder_fullpath=t.data;var a=e.moveFolderForm;a.to_folder_id=e.current_folder_id,e.moveFolderForm=i()({},a),e.moveFolderFormVisible=!0,e.moveFolderFormLoading=!1})},moveFolderFormSubmit:function(){var e=this;this.folder_id_error="",this.$refs.moveFolderForm.validate(function(t){if(t){e.moveFolderFormLoading=!0;for(var a=i()({},e.moveFolderForm),l=[],o=[],r=0;r<e.sels.length;r++){var s=e.sels[r];"file"==s.nettype?l.push(s.id):o.push(s.id)}a.folder_id=e.current_folder_id,a.file_ids=l,a.folder_ids=o,Object(d.q)(a).then(function(t){e.$refs.moveFolderForm.resetFields(),e.moveFolderFormLoading=!1,e.moveFolderFormVisible=!1,e.$message({message:e.plang.FILE_P_MSG3,type:"success"}),e.getTables()}).catch(function(t){e.moveFolderFormLoading=!1,"non_field_errors"in t?e.folder_id_error=t.non_field_errors[0]:(e.getTables(),"error_message"in t?(e.moveFolderFormVisible=!1,e.$message({message:t.error_message,type:"error"})):e.moveFolderFormVisible=!1)})}})},download:function(){this.$refs.download.click()},deleteFolders:function(){for(var e=this,t=this,a=[],l=[],i=0;i<this.sels.length;i++){var o=this.sels[i];"file"==o.nettype?a.push(o.id):l.push(o.id)}this.$confirm(this.plang.FILE_P_MSG4,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){e.deleteCommonFolders(t,e.current_folder_id,a,l)}).catch(function(){})},deleteRowFolders:function(e){var t=this,a=this,l=[],i=[];"file"==e.nettype?l.push(e.id):i.push(e.id),this.$confirm(this.plang.FILE_P_MSG5,this.plang.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){t.deleteCommonFolders(a,t.current_folder_id,l,i)}).catch(function(){})},deleteCommonFolders:function(e,t,a,l){var i=this;e.listLoading=!0;var o={folder_id:t,file_ids:a,folder_ids:l};Object(d.p)(o).then(function(t){e.listLoading=!1,e.$message({message:i.plang.COMMON_DELETE_SUCCESS,type:"success"}),(i.page-1)*i.page_size>=i.total-a.length-l.length&&(i.page=1),e.getTables(),e.getCapacity()}).catch(function(t){"non_field_errors"in t?e.folder_name_error=t.non_field_errors[0]:"error_message"in t&&e.$message({message:t.error_message,type:"error"}),e.listLoading=!1,e.getTables()})},zipRowDownload:function(e){var t=[],a=[];"file"==e.nettype?t.push(e.id):a.push(e.id),"file"==e.nettype?this.zipCommonRowDownload(this,e.id,e.name):this.zipCommonDownload(this,t,a)},zipCommonRowDownload:function(e,t,a){var l=this;this.listLoading=!0,Object(d.s)(t).then(function(t){l.listLoading=!1;var i=new Blob([t.data],{type:t.headers["content-type"]}),o=URL.createObjectURL(i);l.blobUrl=o;var r=a;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,r);else{var s=document.createElement("a");s.setAttribute("href",o),s.setAttribute("download",r),document.body.appendChild(s),s.click()}e.$message({message:l.plang.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){console.log(e),l.listLoading=!1})},zipDownload:function(){for(var e=[],t=[],a=0;a<this.sels.length;a++){var l=this.sels[a];"file"==l.nettype?e.push(l.id):t.push(l.id)}this.zipCommonDownload(this,e,t)},zipCommonDownload:function(e,t,a){var l=this;e.listLoading=!0;var i={files:t,folders:a,folder_id:this.current_folder_id};Object(d.z)(i).then(function(t){e.listLoading=!1;var a=new Blob([t.data],{type:t.headers["content-type"]}),i=URL.createObjectURL(a);e.blobUrl=i;var o=l.current_name.name+".zip";if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,o);else{var r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",o),document.body.appendChild(r),r.click(),r.remove()}e.$message({message:l.plang.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){console.log(e),l.listLoading=!1})},uploadFormShow:function(){var e=this;Object(d.y)().then(function(t){e.folder_fullpath=t.data;var a=e.uploadForm;a.fileList=[],a.folder_id=e.current_folder_id,e.uploadForm=i()({},a),e.uploadFormVisible=!0,e.uploadFormLoading=!1})},uploadFile:function(e){var t=this,a=this.uploadForm.folder_id?this.uploadForm.folder_id:this.current_folder_id,l=e.file,i=new FormData;i.append("file",l),i.append("folder_id",a),this.listLoading=!0,this.fileloading=!0;var o=this;return Object(d.u)(i).then(function(a){o.fileloading=!1,e.file.percent=100,e.onProgress(e.file),t.$message({message:t.plang.FILE_P_SUCCESS,type:"success"}),t.listLoading=!1,t.getCapacity(),t.getTables()}).catch(function(a){e.file.percent=0,e.onProgress(e.file),t.listLoading=!1,t.fileloading=!1,"error_message"in a&&(t.getTables(),t.$message({message:a.error_message,type:"error"}))}),!0}},computed:{plang:function(){var e=o.a.zh;return e="zh-hans"==this.$store.getters.getLanguage?o.a.zh:"zh-tw"==this.$store.getters.getLanguage?o.a.zh_tw:"en"==this.$store.getters.getLanguage?o.a.en:(this.$store.getters.getLanguage,o.a.zh),this.fileStatusText={success:e.FILE_P_UPSTATUS_SUCCESS,error:e.FILE_P_UPSTATUS_FAILED,uploading:e.FILE_P_UPSTATUS_UP,paused:e.FILE_P_UPSTATUS_PAUSE,waiting:e.FILE_P_UPSTATUS_WAIT},this.createFolderFormRules={name:[{required:!0,message:e.FILE_P_RULE1,trigger:"blur"},{min:1,max:20,message:e.FILE_P_RULE2,trigger:"blur"}],folder_id:[{required:!0,message:e.FILE_P_UPPATH_PLACE,trigger:"blur"}]},this.updateFormRules={name:[{required:!0,message:e.FILE_P_RULE4,trigger:"blur"},{min:1,max:20,message:e.FILE_P_RULE2,trigger:"blur"}]},this.moveFolderFormRules={to_folder_id:[{required:!0,message:e.FILE_P_MOVEPATH_PLACE,trigger:"blur"}]},this.uploadFormRules={folder_id:[{required:!0,message:e.FILE_P_RULE5,trigger:"blur"}]},e},options:function(){var e=this;return{target:"/api/netdisk/uploadnew/?t="+(new Date).getTime(),testChunks:!0,headers:{Authorization:"JWT "+r.a.getCookie("token")},query:{fileMd5:""},testMethod:"GET",forceChunkSize:!0,allowDuplicateUploads:!0,fileParameterName:"chunkFile",singleFile:!1,chunkSize:2097152,simultaneousUploads:3,processResponse:function(t,a){var l=JSON.parse(t),i="";l.non_field_errors&&(i=l.non_field_errors[0]),l.detail&&(i=l.detail),i&&e.$message({type:"error",message:i}),a(null,t)},preprocess:function(e){e.preprocessFinished()},processParams:function(e){return e={chunkNumber:e.chunkNumber,fileMd5:e.identifier}},generateUniqueIdentifier:function(e){},parseTimeRemaining:function(t,a){return a.replace(/\syears?/,e.plang.FILE_P_YEAR).replace(/\days?/,e.plang.FILE_P_DAY).replace(/\shours?/,e.plang.FILE_P_HOUR).replace(/\sminutes?/,e.plang.FILE_P_MIN).replace(/\sseconds?/,e.plang.FILE_P_SEC)}}}}}}).call(t,a("L7Pj"))},DLzg:function(e,t){},odpY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("4Kyx"),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"j-module-content j-maillist mllist-list height100 "},[a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"content content-list height100",staticStyle:{"background-color":"#fff",background:"rgba(255,255,255,0.8)"}},[a("div",{staticStyle:{padding:"4px 0 4px 4px"}},[a("el-form",{attrs:{inline:!0,model:e.filters}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px!important"}},[e.current_name.parent_id?a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-d-arrow-left"},on:{click:function(t){e.changeParentFolder()}}},[e._v(e._s(e.plang.FILE_P_PRE))]):e._e(),e._v(" "),"1"==this.permisson_type||"2"==this.permisson_type||"4"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-upload"},on:{click:e.uploadFormShow}},[e._v(e._s(e.plang.FILE_P_UPLOAD))]):e._e(),e._v(" "),this.is_supercompany||"1"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-edit"},on:{click:e.createFolderFormShow}},[e._v(e._s(e.plang.MAILBOX_NEW_FOLDER))]):e._e(),e._v(" "),"1"==this.permisson_type||"3"==this.permisson_type||"4"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-download",disabled:0===this.sels.length},on:{click:e.zipDownload}},[e._v(e._s(e.plang.FILE_P_DOWNLOAD))]):e._e(),e._v(" "),this.is_supercompany||"1"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"danger",icon:"el-icon-delete",disabled:0===this.sels.length},on:{click:e.deleteFolders}},[e._v(e._s(e.plang.COMMON_BUTTON_DELETE))]):e._e(),e._v(" "),this.is_supercompany||"1"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-remove",disabled:0===this.sels.length},on:{click:e.moveFolderFormShow}},[e._v(e._s(e.plang.FILE_P_MOVE))]):e._e(),e._v(" "),a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-message",disabled:0===this.sels.length},on:{click:function(t){e.sendMail_net("more",e.sels)}}},[e._v(e._s(e.plang.FILE_P_SEND))]),e._v(" "),this.is_supercompany||"1"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-setting",disabled:0===this.sels.length},on:{click:function(t){e.showAddDialog("more")}}},[e._v(e._s(e.plang.FILE_C_ADDPERM))]):e._e(),e._v(" "),this.is_supercompany||"1"==this.permisson_type?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-view"},on:{click:e.showPermDialog}},[e._v(e._s(e.plang.FILE_C_MPERM))]):e._e(),e._v(" "),this.is_superuser&&-1==this.current_folder_id?a("el-button",{attrs:{plain:"",size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.showAllDialog}},[e._v(e._s(e.plang.FILE_C_PUTM))]):e._e()],1)],1)],1),e._v(" "),a("el-row",{staticClass:"file-table"},[a("el-col",[a("div",{staticStyle:{padding:"0px 0 10px 14px"}},[a("b",[e._v(e._s(this.current_name.name))]),e._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#bbb",margin:"0 20px"}},[e._v(e._s(e.folder_count)+" "+e._s(e.plang.FILE_P_FOLDERS)+" "+e._s(e.file_count)+" "+e._s(e.plang.FILE_P_FILES)+" ")]),e._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#bbb"}},[e._v(" "+e._s(e.plang.FILE_P_CAP)+" ")]),e._v(" "),a("el-progress",{staticStyle:{width:"200px",display:"inline-block"},attrs:{percentage:e.folder_capacity.capacity}}),e._v(" "),a("span",{staticStyle:{"font-size":"12px",color:"#409eff","margin-left":"-49px"}},[e._v(" "+e._s(e.folder_capacity.used)+" / "+e._s(e.folder_capacity.total))])],1)])],1),e._v(" "),a("el-row",[a("el-col",{staticStyle:{"padding-left":"6px"},attrs:{span:12}},[e._v(" \n        "),a("span",[a("span",[e._v(e._s(e.plang.FILE_P_PATH))]),e._v(" "),e._l(e.folder_names,function(t,l){return a("span",{key:l,class:{clickable:l!=e.folder_names.length-1},attrs:{title:t.name},on:{click:function(a){e.changeFolderTables(t)}}},[e._v(e._s(t.name)+" "),l!=e.folder_names.length-1?a("i",{staticStyle:{color:"#333"}},[e._v(" / ")]):e._e()])})],2)]),e._v(" "),e.total>0?a("el-col",{staticStyle:{"text-align":"right","line-height":"28px"},attrs:{span:12}},[e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{"current-page":e.page,"page-sizes":[10,20,50],"page-size":e.page_size,total:e.total,layout:"total, sizes, prev"},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e(),e._v(" "),a("span",[e._v(e._s(this.page+" / "+Math.ceil(this.total/this.page_size)))]),e._v(" "),e.total>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{"current-page":e.page,"page-sizes":[10,20,50],"page-size":e.page_size,total:e.total,layout:"next,jumper"},on:{"size-change":e.f_TableSizeChange,"current-change":e.f_TableCurrentChange}}):e._e()],1):e._e()],1),e._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%","max-width":"100%",height:"100%"},attrs:{data:e.listTables,"tooltip-effect":"dark","header-cell-style":{background:"#f0f1f3"},size:"mini"},on:{"selection-change":e.f_TableSelsChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.COMMON_NAME},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",[a("el-col",{staticStyle:{width:"42px","padding-top":"8px"},attrs:{span:1}},[a("span",{staticClass:"bico",class:t.row.classObject})]),e._v(" "),a("el-col",{staticStyle:{"font-size":"16px"},attrs:{span:20}},["folder"==t.row.nettype?a("div",{staticClass:"folder_type",on:{click:function(a){e.changeFolderTables(t.row)}}},[e._v(e._s(t.row.name))]):e._e(),e._v(" "),"file"==t.row.nettype?a("div",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"},attrs:{title:t.row.name}},[e._v(e._s(t.row.name))]):e._e(),e._v(" "),a("a",{ref:"download",staticStyle:{display:"none"},attrs:{href:e.blobUrl,download:""}}),e._v(" "),a("div",{staticClass:"actions_a"},[t.row.is_own||"1"==e.permisson_type||"3"==e.permisson_type||"4"==e.permisson_type?a("span",{on:{click:function(a){e.zipRowDownload(t.row)}}},[e._v(e._s(e.plang.FILE_P_DOWNLOAD))]):e._e(),e._v(" "),"file"==t.row.nettype?a("span",{on:{click:function(a){e.sendMail_net(t.row)}}},[e._v(e._s(e.plang.FILE_P_SEND2))]):e._e(),e._v(" "),t.row.is_own||e.is_supercompany||"1"==e.permisson_type?a("span",{on:{click:function(a){e.resetRowNameShow(t.row)}}},[e._v(e._s(e.plang.FILE_P_RENAME))]):e._e(),e._v(" "),"folder"==t.row.nettype&&"1"==e.permisson_type?a("span",{on:{click:function(a){e.showAddDialog(t.row)}}},[e._v(e._s(e.plang.FILE_C_ADDPERM))]):e._e(),e._v(" "),"file"==t.row.nettype&&/.(gif|jpg|jpeg|png|bmp|svg|pdf|html|txt|xls|xlsx|doc|docx|ppt|pptx|xml|csv|md|log)$/.test(t.row.name.toLowerCase())?a("span",{on:{click:function(a){e.$parent.preview(t.row,"company",e.current_folder_id)}}},[e._v(e._s(e.plang.COMMON_BUTTON_PREVIEW))]):e._e(),e._v(" "),e.is_supercompany||"1"==e.permisson_type?a("span",{staticStyle:{color:"#f56c6c"},on:{click:function(a){e.deleteRowFolders(t.row)}}},[e._v(e._s(e.plang.COMMON_BUTTON_DELETE))]):e._e(),e._v(" "),"folder"==t.row.nettype&&"0"==e.permisson_type?a("span",{staticClass:"folder_type",on:{click:function(a){e.changeFolderTables(t.row)}}},[e._v(e._s(e.plang.FILE_C_VISIT))]):e._e()])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.COMMON_SIZE,width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e._f("mailsize")(t.row.file_size)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.FILE_P_TIME,width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.created))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.FILE_C_UPLOADER,width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.create_name))])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.MAILBOX_NEW_FOLDER,visible:e.createFolderFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.createFolderFormVisible=t}}},[a("el-form",{ref:"createFolderForm",attrs:{model:e.createFolderForm,"label-width":"130px",rules:e.createFolderFormRules}},[a("el-form-item",{attrs:{label:e.plang.FILE_P_UPPATH,prop:"folder_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.plang.FILE_P_UPPATH_PLACE},model:{value:e.createFolderForm.folder_id,callback:function(t){e.$set(e.createFolderForm,"folder_id",t)},expression:"createFolderForm.folder_id"}},e._l(e.folder_fullpath,function(e){return a("el-option",{key:e.id,attrs:{label:e.full_path,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:e.plang.MAILBOX_FOLDER_NAME,prop:"name",error:e.folder_id_error}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.createFolderForm.name,callback:function(t){e.$set(e.createFolderForm,"name","string"==typeof t?t.trim():t)},expression:"createFolderForm.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.createFolderFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.createFolderFormLoading},nativeOn:{click:function(t){e.createFolderFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.FILE_P_RENAME,visible:e.updateFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.updateFormVisible=t}}},[a("el-form",{ref:"updateForm",attrs:{model:e.updateForm,"label-width":"120px",rules:e.updateFormRules}},[a("el-form-item",{attrs:{label:e.plang.COMMON_NAME,prop:"name",error:e.folder_name_error}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.updateForm.name,callback:function(t){e.$set(e.updateForm,"name","string"==typeof t?t.trim():t)},expression:"updateForm.name"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.updateFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.updateFormLoading},nativeOn:{click:function(t){e.updateFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.FILE_P_MOVEPATH,visible:e.moveFolderFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.moveFolderFormVisible=t}}},[a("el-form",{ref:"moveFolderForm",attrs:{model:e.moveFolderForm,"label-width":"130px",rules:e.moveFolderFormRules}},[a("el-form-item",{attrs:{label:e.plang.FILE_P_MOVEPATH,prop:"to_folder_id",error:e.folder_id_error}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:e.plang.FILE_P_MOVEPATH_PLACE},model:{value:e.moveFolderForm.to_folder_id,callback:function(t){e.$set(e.moveFolderForm,"to_folder_id",t)},expression:"moveFolderForm.to_folder_id"}},e._l(e.folder_fullpath,function(e){return a("el-option",{key:e.id,attrs:{label:e.full_path,value:e.id}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){e.moveFolderFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.moveFolderFormLoading},nativeOn:{click:function(t){e.moveFolderFormSubmit()}}},[e._v(e._s(e.plang.COMMON_BUTTON_SUBMIT))])],1)],1),e._v(" "),a("el-dialog",{staticClass:"bigUpload_cfile",attrs:{title:e.plang.CONTACT_PAB_ADD_FILE,visible:e.uploadFormVisible,"close-on-click-modal":!1,"append-to-body":!0},on:{"update:visible":function(t){e.uploadFormVisible=t}}},[a("el-form",{ref:"uploadForm",attrs:{model:e.uploadForm,"label-width":"130px",rules:e.uploadFormRules,"element-loading-text":e.plang.FILE_P_FILEUPING,"element-loading-spinner":"el-icon-loading"}},[a("el-form-item",{attrs:{label:e.plang.FILE_P_UPPATH2,prop:"folder_id"}},[a("el-select",{staticStyle:{width:"100%"},model:{value:e.uploadForm.folder_id,callback:function(t){e.$set(e.uploadForm,"folder_id",t)},expression:"uploadForm.folder_id"}},e._l(e.folder_fullpath,function(e){return a("el-option",{key:e.id,attrs:{label:e.full_path,value:e.id}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:" "}},[a("uploader",{ref:"cupd",staticClass:"uploader-example",attrs:{options:e.options,autoStart:!1,fileStatusText:e.fileStatusText},on:{"file-success":e.fileSuccess,"file-added":e.fileAdded}},[a("uploader-unsupport"),e._v(" "),a("uploader-drop",[a("uploader-btn",[e._v("上传文件")])],1),e._v(" "),a("uploader-list",{directives:[{name:"loading",rawName:"v-loading",value:e.loading2,expression:"loading2"}],attrs:{"element-loading-text":e.plang.FILE_P_FILESCAN,"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.6)"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("ul",e._l(t.fileList,function(e){return a("li",{key:e.id},[a("uploader-file",{class:"file_"+e.id,attrs:{file:e,list:!0}})],1)}),0)]}}])})],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){return e.clearList(t)}}},[e._v(e._s(e.plang.CLEAR_UPLOAD_LIST))]),e._v(" "),a("el-button",{nativeOn:{click:function(t){e.uploadFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_CLOSE))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.FILE_C_ADDPERM,"close-on-click-modal":!1,visible:e.addFormVisible,"append-to-body":!0,width:"80%"},on:{"update:visible":function(t){e.addFormVisible=t}}},[a("Contact",{on:{getData:e.getData}}),e._v(" "),a("div",{staticStyle:{"text-align":"right"}},[e._v("\n        "+e._s(e.plang.FILE_C_PERM_DESC)+"\n        "),a("el-select",{attrs:{placeholder:e.plang.FILE_C_PERM_PLACE,size:"small"},model:{value:e.perm,callback:function(t){e.perm=t},expression:"perm"}},[a("el-option",{attrs:{label:e.plang.FILE_C_PERM1,value:"1"}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM2,value:"2"}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM3,value:"3"}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM4,value:"4"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return e.addPerm(t)}}},[e._v(e._s(e.plang.FILE_C_ADDPERM))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.FILE_C_PERM_TITLE,visible:e.allFormVisible,"close-on-click-modal":!1,"append-to-body":!0,width:"80%"},on:{"update:visible":function(t){e.allFormVisible=t}}},[a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[e._v(e._s(e.plang.FILE_C_PUTM))]),e._v(" "),a("span",{staticStyle:{"font-size":"10px","font-weight":"normal","margin-left":"10px"}},[a("i",{staticClass:"el-icon-info"}),e._v(e._s(e.plang.FILE_C_PERM_TITLE2))])]),e._v(" "),a("Contact",{on:{getData:e.getData_all}}),e._v(" "),a("div",[a("span",{staticStyle:{color:"#999"}},[e._v(e._s(e.plang.FILE_C_PERM_DESC))]),a("span",[e._v(e._s(e.plang.FILE_C_PERM1))]),e._v(" "),a("span",{staticStyle:{margin:"0 22px"}},[e._v("|")]),e._v(" "),a("span",{staticStyle:{color:"#999"}},[e._v(e._s(e.plang.FILE_C_PERM_DESC2))]),a("span",[e._v(e._s(e.plang.FILE_INDEX_C))])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.allFormVisible=!1}}},[e._v(e._s(e.plang.COMMON_BUTTON_CANCELL))]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return e.addSuper(t)}}},[e._v(e._s(e.plang.FILE_C_PUTM))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.plang.FILE_C_MPERM,visible:e.permFormVisible,"close-on-click-modal":!1,"append-to-body":!0,width:"80%"},on:{"update:visible":function(t){e.permFormVisible=t}}},[a("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{gutter:10}},[a("el-col",{staticStyle:{"text-align":"right"},attrs:{offset:6,span:18}},[a("el-button",{attrs:{size:"small",type:"danger",plain:""},on:{click:e.deletePerms}},[e._v(e._s(e.plang.FILE_C_PERMDELETE))]),e._v(" "),a("span",{staticStyle:{"margin-left":"18px"}},[e._v(e._s(e.plang.FILE_C_SEARCH))]),e._v(" "),a("el-select",{attrs:{placeholder:e.plang.FILE_C_PERM_PLACE,size:"small"},model:{value:e.search_perm,callback:function(t){e.search_perm=t},expression:"search_perm"}},[a("el-option",{attrs:{label:e.plang.FILE_C_PERM,value:""}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM1,value:"1"}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM2,value:"2"}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM3,value:"3"}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM4,value:"4"}})],1),e._v(" "),a("el-input",{staticClass:"input-with-select",staticStyle:{width:"auto"},attrs:{placeholder:e.plang.FILE_C_SEARCH2,size:"small"},model:{value:e.perm_search,callback:function(t){e.perm_search=t},expression:"perm_search"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.perm_searchfn},slot:"append"})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("div",{staticStyle:{height:"420px",overflow:"auto",width:"100%",border:"1px solid #dcdfe6"}},[a("el-tree",{ref:"treem",attrs:{"default-expanded-keys":[-1],"node-key":"id",data:e.perm_tree_menu,accordion:"","highlight-current":"",props:e.defaultProps},on:{"node-click":e.perm_tree_click},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.node,i=t.data;return a("span",{attrs:{title:l.label}},[i.children&&0==i.children.length?a("i",{staticClass:"iconfont icon-icongroup"}):e._e(),e._v(" "),a("span",[e._v(e._s(l.label))])])}}])})],1)]),e._v(" "),a("el-col",{attrs:{span:18}},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:"420",size:"mini",data:e.permTableData,"tooltip-effect":"dark","header-cell-style":{background:"#f0f1f3"}},on:{"selection-change":e.perm_select}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.FILE_C_OBJNAME},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.object_name)+"\n              ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.FILE_C_FOLDER},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.folder_name)+"\n              ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:e.plang.FILE_C_PERM_DESC1,width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:e.plang.FILE_C_PERM_PLACE,size:"small"},on:{change:function(a){e.editPerm(a,t.row)}},model:{value:t.row.perm,callback:function(a){e.$set(t.row,"perm",a)},expression:"scope.row.perm"}},[a("el-option",{attrs:{label:e.plang.FILE_C_PERM1,value:1}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM2,value:2}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM3,value:3}}),e._v(" "),a("el-option",{attrs:{label:e.plang.FILE_C_PERM4,value:4}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-delete",type:"text",size:"mini"},on:{click:function(a){e.deletePermById(t.row)}}})]}}])})],1)],1)],1),e._v(" "),a("el-row",[e.total_perm>0?a("el-col",{staticStyle:{"text-align":"right","line-height":"28px"}},[e.total_perm>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{"current-page":e.page_perm,"page-sizes":[10,20,50,100],"page-size":e.page_size_perm,layout:"total,prev",total:e.total_perm},on:{"size-change":e.perm_size_change,"current-change":e.perm_page_change}}):e._e(),e._v(" "),a("span",[e._v(e._s(this.page_perm+" / "+Math.ceil(this.total_perm/this.page_size_perm)))]),e._v(" "),e.total_perm>0?a("el-pagination",{staticStyle:{display:"inline-block"},attrs:{"current-page":e.page_perm,"page-sizes":[10,20,50,100],"page-size":e.page_size_perm,layout:"next,sizes,jumper",total:e.total_perm},on:{"size-change":e.perm_size_change,"current-change":e.perm_page_change}}):e._e()],1):e._e()],1)],1),e._v(" "),a("el-dialog",{staticStyle:{padding:"0 50px"},attrs:{title:e.plang.COMMON_BUTTON_SYSTEM_NOTICE,visible:e.show_error,"append-to-body":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.show_error=t}}},[a("el-table",{attrs:{data:e.error_list,border:""}},[a("el-table-column",{attrs:{property:"object_name",label:e.plang.FILE_C_OBJNAME}}),e._v(" "),a("el-table-column",{attrs:{property:"error_message",label:e.plang.CENTER_SEND_DETAIL,width:"200"}})],1)],1)],1)])},staticRenderFns:[]};var o=function(e){a("DLzg")},r=a("C7Lr")(l.a,i,!1,o,null,null);t.default=r.exports}});
//# sourceMappingURL=7.0256e529d3d3816ca4df.js.map