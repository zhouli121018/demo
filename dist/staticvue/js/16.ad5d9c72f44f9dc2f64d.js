webpackJsonp([16],{bOly:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("0tg7"),i=t("P9l9"),n={data:function(){return{loading:!1,is_share:!0,is_cancel:!1,share_code:"",className:"",shareData:{filename:"",filetype:"",username:"",company:""}}},methods:{getShare:function(){var e=this;Object(i._53)({ucode:this.$route.query.ucode}).then(function(a){if(e.shareData=a.data,"folder"==a.data.filetype)e.className="folder_type";else{var t=a.data.filename,s=t.lastIndexOf("."),i=t.slice(s+1);e.className="icon-big-"+i}e.is_share=!0,e.is_cancel=!1}).catch(function(a){e.is_share=!1,e.is_cancel=!0})},downloadShare:function(){var e=this;if(this.share_code||0!=this.share_code.length){var a={ucode:this.$route.query.ucode,code:this.share_code};this.loading=!0,Object(i._18)(a).then(function(a){e.loading=!1;var t=new Blob([a.data],{type:a.headers["content-type"]}),s=URL.createObjectURL(t),i=e.shareData.filename;if("folder"==e.shareData.filetype&&(i+=".zip"),window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(t,i);else{var n=document.createElement("a");n.setAttribute("href",s),n.setAttribute("download",i),document.body.appendChild(n),n.click()}e.$message({message:e.lan.COMMON_DOWNLOAD_SUCCESS,type:"success"})}).catch(function(a){var t=new FileReader;t.onload=function(a){var t=JSON.parse(a.target.result),s="";t&&t.detail&&(s=t.detail),t&&t.non_field_errors&&(s=t.non_field_errors),e.$message({message:e.lan.COMMON_DOWNLOAD_FAILED+"! "+s,type:"error"})},t.readAsText(a,["utf-8"]),e.loading=!1})}else this.$message({message:this.lan.SHARE_INPUT_CODE,type:"error"})}},created:function(){this.$route.query.ucode&&this.getShare()},beforeRouteUpdate:function(e,a,t){t(),this.$route.query.ucode&&this.getShare()},computed:{lan:function(){var e=s.a.zh;return e="zh-hans"==this.$store.getters.getLanguage?s.a.zh:"zh-tw"==this.$store.getters.getLanguage?s.a.zh_tw:"en"==this.$store.getters.getLanguage?s.a.en:(this.$store.getters.getLanguage,s.a.zh),this.buttonText={today:e.MAILBOX_COM_INNERBOX_TODAY,month:e.CALENDAR_PAGE_CAL_MONTH,agendaWeek:e.CALENDAR_PAGE_CAL_WEEK,agendaDay:e.SETTING_RE_ADD_DAY,listMonth:e.CALENDAR_PAGE_CAL_EVENT},e}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"preview_box",staticStyle:{height:"100%",overflow:"hidden",position:"relative"}},[t("div",{staticClass:"header",staticStyle:{padding:"12px  0 12px 50px","border-bottom":"1px solid #e5e5e5","font-size":"12px",background:"#49B4E3",color:"#fff"}},[t("span",{staticStyle:{"font-size":"32px","font-weight":"bold"}},[e._v(e._s(e.shareData.company||"U-Mail"))])]),e._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0",top:"80px",overflow:"auto"}},[t("div",{staticClass:"content"},[e.is_share?t("div",{staticClass:"share-info"},[t("span",{staticClass:"share-user"},[e._v(e._s(e.shareData.username))]),e._v(" "),t("span",[e._v(e._s(e.lan.SHARE_FROM))])]):e._e(),e._v(" "),t("div",{staticClass:"share-box"},[e.is_share?t("div",{staticClass:"file-info"},[t("span",{staticClass:"file-big-icon",class:e.className}),e._v(" "),t("h4",{staticClass:"filename",attrs:{title:e.shareData.filename}},[e._v(e._s(e.shareData.filename))])]):e._e(),e._v(" "),e.is_cancel?t("div",{staticClass:"file-invalid"},[t("span",{staticClass:"round"},[e._v("X")]),e._v(" "),t("h4",{staticClass:"filename"},[e._v(e._s(e.lan.SHARE_CANCEL))])]):e._e(),e._v(" "),e.is_share?t("div",{staticClass:"file-pwd"},[t("div",{staticClass:"form-item"},[t("p",{staticClass:"error"},[e._v(e._s(e.lan.SHARE_CODE_ERR))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.share_code,expression:"share_code",modifiers:{trim:!0}}],staticClass:"u-input j-pwd",attrs:{type:"text",placeholder:e.lan.SHARE_INPUT_CODE},domProps:{value:e.share_code},on:{input:function(a){a.target.composing||(e.share_code=a.target.value.trim())},blur:function(a){return e.$forceUpdate()}}}),e._v(" "),t("button",{staticClass:"u-btn j-check-pwd",on:{click:e.downloadShare}},[e._v(e._s(e.lan.SHARE_DOWNLOAD))])])]):e._e()])])])])},staticRenderFns:[]};var o=t("C7Lr")(n,r,!1,function(e){t("e8Uy")},"data-v-68538a3a",null);a.default=o.exports},e8Uy:function(e,a){}});
//# sourceMappingURL=16.ad5d9c72f44f9dc2f64d.js.map