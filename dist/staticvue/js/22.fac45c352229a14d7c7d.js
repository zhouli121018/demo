webpackJsonp([22],{"B/kP":function(e,t){},vo6F:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("0tg7"),a=(i("P9l9"),{data:function(){return{pfileImage:"./img/pfile.jpg",activeT:"pfile"}},components:{},created:function(){},computed:{plang:function(){return"zh-hans"==this.$store.getters.getLanguage?s.a.zh:"zh-tw"==this.$store.getters.getLanguage?s.a.zh_tw:"en"==this.$store.getters.getLanguage?s.a.en:(this.$store.getters.getLanguage,s.a.zh)}},mounted:function(){"/file/afile"==this.$route.path?this.activeT="afile":"/file/cfile"==this.$route.path?this.activeT="cfile":"/file/pfile"==this.$route.path&&(this.activeT="pfile")},methods:{jumpTo:function(e){this.activeT=e,this.$router.push("/file/"+e)},preview:function(e,t,i){if(e.file_size&&e.file_size>10485760||e.size&&e.size>10485760)this.$message({type:"error",duration:6e3,showClose:!0,message:this.plang.FILE_INDEX_MSG1});else{var s=e.size||e.file_size,a=void 0,n=void 0;e.name?(a=e.name.slice(e.name.lastIndexOf(".")+1),n=e.name):(a=e.filename.slice(e.filename.lastIndexOf(".")+1),n=e.filename);var r=window.location.origin+"/#/preview/?id="+e.id+"&type="+t+"&size="+s+"&suffix="+a+"&name="+encodeURIComponent(n)+"&cfid="+i;window.open(r)}},sendMail_net:function(e,t,i){var s=this;if(this.$store.getters.getSharedStatus.shareuser_all||this.$store.getters.getSharedStatus.shareuser_post||this.$store.getters.getSharedStatus.shareuser_send){if("more"==e){var a=!0,n=[];if(t.forEach(function(e){if("folder"==e.nettype)return s.$message({type:"error",message:s.plang.FILE_INDEX_MSG2}),void(a=!1);var t={};t.id=e.id,e.name?(t.name=e.name,t.file_size=e.file_size):(t.filename=e.filename,t.size=e.size),"company"==i&&(t.is_company=!0),n.push(t)}),!a)return;this.$store.dispatch("setPfileNet",n),this.$store.dispatch("setFileJ",!0),this.$router.push("/mailbox/innerbox/INBOX")}else{var r={id:e.id};e.name?(r.name=e.name,r.file_size=e.file_size):(r.filename=e.filename,r.size=e.size),"company"==i&&(r.is_company=!0);var l=[];l.push(r),this.$store.dispatch("setPfileNet",l),this.$store.dispatch("setFileJ",!0),this.$router.push("/mailbox/innerbox/INBOX")}}else this.$message({type:"error",message:this.plang.MAILBOX_SHARE_POWER})}}}),n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("section",{staticClass:"m-mail"},[i("aside",{staticClass:"fl-g-sidebar"},[i("div",{staticClass:"fl-m-nav-bg"}),e._v(" "),i("ul",{staticClass:"fl-m-nav j-file-nav"},[i("li",[i("a",{staticClass:"fl-m-nav-trigger",class:{"fl-nav-current":"pfile"==e.activeT},attrs:{href:"#",title:e.plang.FILE_INDEX_P},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.jumpTo("pfile")}}},[i("span",[i("i",{staticClass:"menu_icon_box iconfont icon-iconmyfile"}),e._v(" "),i("div",[e._v(e._s(e.plang.FILE_INDEX_P))])])])]),e._v(" "),e.$store.getters.getLoginAfter&&!e.$store.getters.getLoginAfter.hide_company_netdisk?i("li",[i("a",{staticClass:"fl-m-nav-trigger",class:{"fl-nav-current":"cfile"==e.activeT},attrs:{href:"#",title:e.plang.FILE_INDEX_C},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.jumpTo("cfile")}}},[i("span",[i("i",{staticClass:"iconfont icon-iconcompanyfile menu_icon_box"}),e._v(" "),i("div",[e._v(e._s(e.plang.FILE_INDEX_C))])])])]):e._e(),e._v(" "),i("li",[i("a",{staticClass:"fl-m-nav-trigger",class:{"fl-nav-current":"afile"==e.activeT},attrs:{href:"#",title:e.plang.FILE_INDEX_A},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.jumpTo("afile")}}},[i("span",[i("i",{staticClass:"iconfont icon-iconaccfile menu_icon_box"}),e._v(" "),i("div",[e._v(e._s(e.plang.FILE_INDEX_A))])])])])])]),e._v(" "),i("article",{staticClass:"fl-g-content"},[i("router-view",{on:{sendMail_net:e.sendMail_net}})],1)])])},staticRenderFns:[]};var r=i("C7Lr")(a,n,!1,function(e){i("B/kP")},null,null);t.default=r.exports}});
//# sourceMappingURL=22.fac45c352229a14d7c7d.js.map