webpackJsonp([5],{TKok:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("ULhz"),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview_box",staticStyle:{height:"100%",overflow:"hidden",position:"relative"}},[n("div",{staticClass:"header",staticStyle:{padding:"10px 10px","border-bottom":"1px solid #e5e5e5","font-size":"12px"}},[n("div",[e._e(),e._v(" "),e._e()]),e._v(" "),n("span",{staticStyle:{"font-size":"22px","font-weight":"bold"}},[e._v(e._s(e.name))]),e._v(" "),n("span",{staticStyle:{"font-size":"12px",color:"#aaa","margin-left":"10px"}},[e._v("("+e._s(e._f("mailsize")(e.$route.query.size))+")")]),e._v(" "),n("el-button",{staticStyle:{margin:"0 10px","text-decoration":"underline",color:"#074977"},attrs:{type:"text",size:"small"},on:{click:e.download}},[e._v(e._s("attach"==e.$route.query.type?"["+e.lan.PREVIEW_DOWNLOAD_ATTACH+"]":"["+e.lan.FILE_P_DOWNLOAD+"]"))]),e._v(" "),e.$route.query.subject?n("p",{staticStyle:{color:"#999","font-size":"14px"}},[e._v(e._s(e.lan.PREVIEW_MAIL_SUBJECT)),n("span",{staticStyle:{color:"#000"}},[e._v(e._s(e.$route.query.subject))])]):e._e(),e._v(" "),n("p",{staticStyle:{"margin-top":"6px",color:"#999","white-space":"nowrap","font-size":"12px"}},[e._v(e._s(e.lan.PREVIEW_VIEW_DESC))])],1),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],class:{attachpre:"attach"==e.$route.query.type||"review"==e.$route.query.type,noread:"attach"!=e.$route.query.type&&"review"!=e.$route.query.type},staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0"},attrs:{"element-loading-text":e.lan.PREVIEW_LOADING_TEXT,"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.3)"}},[n("iframe",{attrs:{id:"previewIframe",frameborder:"0",scrolling:"100%",height:"200",width:"100%",src:e.preUrl}})]),e._v(" "),n("el-dialog",{attrs:{title:e.lan.COMMON_BUTTON_CONFIRM_NOTICE,visible:e.infoView,"close-on-click-modal":!1,"append-to-body":!0,width:"400px"},on:{"update:visible":function(t){e.infoView=t}}},[n("span",[e._v(e._s(e.lan.PREVIEW_ERROR))]),e._v(" "),n("span",{staticStyle:{color:"#f56c6c"}},[e._v(e._s(e.errMsg))]),e._v(" "),e.canRetry?n("p",{staticStyle:{padding:"10px 0 0"}},[n("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"#074977"},on:{click:e.preview}},[e._v(e._s(e.lan.PREVIEW_RETRY))]),e._v(" "+e._s(e.lan.PREVIEW_OR)+" "),n("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"#074977"},on:{click:e.download}},[e._v(e._s(e.lan.FILE_P_DOWNLOAD))]),e._v(" "+e._s(e.lan.FILE_P_VIEW)+"\n      ")]):e._e(),e._v(" "),e.canRetry?e._e():n("p",{staticStyle:{padding:"10px 0 0"}},[e._v(e._s(e.lan.PREVIEW_OR)+" "),n("span",{staticStyle:{cursor:"pointer","text-decoration":"underline",color:"#074977"},on:{click:e.download}},[e._v(e._s(e.lan.FILE_P_DOWNLOAD))]),e._v(" "+e._s(e.lan.FILE_P_VIEW)+"\n      ")]),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){e.infoView=!1}}},[e._v(e._s(e.lan.COMMON_BUTTON_CANCELL))])],1)])],1)},staticRenderFns:[]};var a=function(e){n("ghr9")},r=n("C7Lr")(o.a,i,!1,a,null,null);t.default=r.exports},ULhz:function(e,t,n){"use strict";(function(e){var o=n("0tg7"),i=n("P9l9");t.a={data:function(){return{preUrl:"",name:"",loading:!1,infoView:!1,canRetry:!1,errMsg:""}},methods:{closeWindow:function(){window.opener=null,window.open("","_self"),window.close()},zipRowDownload:function(e){var t=this,n=this,o=[],i=[];o.push(e.id),this.$confirm(this.lan.PREVIEW_SURE_DOWNLOAD,this.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){t.folders(n,o,i,e.name)})},zipRowDownloadmail:function(e){var t=this,n=this;this.$confirm(this.lan.PREVIEW_SURE_DOWNLOAD,this.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){Object(i._15)(e.id,{download:!0}).then(function(o){var i=new Blob([o.data],{type:o.headers["content-type"]}),a=URL.createObjectURL(i),r=e.name;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(i,r);else{var s=document.createElement("a");s.setAttribute("href",a),s.setAttribute("download",r),document.body.appendChild(s),s.click()}n.$message({message:t.lan.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){})})},zipRowDownloadfile:function(e){var t=this,n=this;this.$confirm(this.lan.PREVIEW_SURE_DOWNLOAD,this.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){var o=e.id,a=e.name;Object(i._90)(o).then(function(e){var o=new Blob([e.data],{type:e.headers["content-type"]}),i=URL.createObjectURL(o),r=a;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(o,r);else{var s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",r),document.body.appendChild(s),s.click()}n.$message({message:t.lan.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){console.log(e)})})},folders:function(e,t,n,o){var a=this,r={files:t,folders:n,folder_id:this.$route.query.cfid};Object(i.z)(r).then(function(t){var n=new Blob([t.data],{type:t.headers["content-type"]}),i=URL.createObjectURL(n),r=o+".zip";if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(n,r);else{var s=document.createElement("a");s.setAttribute("href",i),s.setAttribute("download",r),document.body.appendChild(s),s.click(),s.remove()}e.$message({message:a.lan.COMMON_EXPORT_SUCCESS,type:"success"})}).catch(function(e){})},download:function(){var e=this.$route.query,t={type:e.type,id:e.id,size:e.size,name:e.name};"attach"==this.$route.query.type?this.downloadAttach(this.$route.query.sid,this.$route.query.name):"company"==this.$route.query.type?this.zipRowDownload(t):"mail"==this.$route.query.type?this.zipRowDownloadmail(t):"file"==this.$route.query.type?this.zipRowDownloadfile(t):"review"==this.$route.query.type&&this.downloadAttachReview(this.$route.query.sid,this.$route.query.name)},downloadAttachReview:function(e,t){var n=this,o={mail_id:this.$route.query.id,sid:e};(this.$route.query.did||0==this.$route.query.did)&&(o.did=this.$route.query.did),Object(i._121)(o).then(function(e){var o=new Blob([e.data],{type:e.headers["content-type"]}),i=URL.createObjectURL(o),a=t;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(o,a);else{var r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",a),document.body.appendChild(r),r.click()}n.$message({message:n.lan.COMMON_DOWNLOAD_SUCCESS,type:"success"})},function(e){console.log(e)})},downloadAttach:function(e,t){var n=this;this.$confirm(this.lan.PREVIEW_SURE_DOWNLOAD,this.lan.COMMON_BUTTON_CONFIRM_NOTICE,{type:"warning"}).then(function(){n.infoView=!1;var o={uid:n.$route.query.id,folder:n.$route.query.fid,sid:e,download:!0};n.password&&(o.password=1),(n.$route.query.did||0==n.$route.query.did)&&(o.did=n.$route.query.did),Object(i._14)(o).then(function(e){var o=new Blob([e.data],{type:e.headers["content-type"]}),i=URL.createObjectURL(o),a=t;if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(o,a);else{var r=document.createElement("a");r.setAttribute("href",i),r.setAttribute("download",a),document.body.appendChild(r),r.click()}n.$message({message:n.lan.COMMON_DOWNLOAD_SUCCESS,type:"success"})},function(e){console.log(e)})}).catch(function(e){console.log(e)})},refresh:function(){this.preview()},goTop:function(){e("#previewIframe").contentWindow.body.animate({scrollTop:0},600)},get:function(e){var t=this;Object(i._47)(e).then(function(n){if(console.log(n),2==n.data.state)return t.loading=!1,void(t.preUrl=window.location.origin+n.data.url);1==n.data.state?setTimeout(function(){t.get(e)},1e3):(t.loading=!1,t.errMsg=n.data.message,102==n.data.code?t.canRetry=!0:t.canRetry=!1,t.infoView=!0)}).catch(function(e){t.loading=!1,console.log(e)})},preview:function(){var e=this;this.loading=!0;var t=this.$route.query,n={type:t.type,id:t.id,folder:t.fid,sid:t.sid,suffix:t.suffix.toLowerCase(),retry:1};(t.did||0==t.did)&&(n.did=t.did),Object(i._47)(n).then(function(t){if(2==t.data.state)return e.loading=!1,void(e.preUrl=window.location.origin+t.data.url);1==t.data.state?(n.retry=1,e.get(n)):(e.loading=!1,e.errMsg=t.data.message,102==t.data.code?e.canRetry=!0:e.canRetry=!1,e.infoView=!0)}).catch(function(t){e.loading=!1})}},created:function(){this.name=this.$route.query.name,this.preview()},mounted:function(){setTimeout(function(){document.getElementById("previewIframe");e("#previewIframe").css({height:"100%",minHeight:"300px"})},100)},computed:{lan:function(){var e=o.a.zh;return e="zh-hans"==this.$store.getters.getLanguage?o.a.zh:"zh-tw"==this.$store.getters.getLanguage?o.a.zh_tw:"en"==this.$store.getters.getLanguage?o.a.en:(this.$store.getters.getLanguage,o.a.zh),this.buttonText={today:e.MAILBOX_COM_INNERBOX_TODAY,month:e.CALENDAR_PAGE_CAL_MONTH,agendaWeek:e.CALENDAR_PAGE_CAL_WEEK,agendaDay:e.SETTING_RE_ADD_DAY,listMonth:e.CALENDAR_PAGE_CAL_EVENT},e}}}}).call(t,n("L7Pj"))},ghr9:function(e,t){}});
//# sourceMappingURL=5.c94dcb58ef2216c8cad2.js.map