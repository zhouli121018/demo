webpackJsonp([38],{"8gDG":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("P9l9"),a={name:"message-info",data:function(){return{message:"",loding:!1}},methods:{getReadMail:function(){var e=this,t=this.$route.params.uid,n=this.$route.query;Object(s._105)(t,n).then(function(t){var n=t.data;new RegExp("\r\n","g");e.message=n}).catch(function(e){console.log(e)})}},created:function(){this.getReadMail()}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"100%",overflow:"auto"}},[t("pre",{staticStyle:{padding:"10px"},domProps:{textContent:this._s(this.message)}})])},staticRenderFns:[]},r=n("C7Lr")(a,i,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=38.c13b1b97ddc4f57f83f4.js.map