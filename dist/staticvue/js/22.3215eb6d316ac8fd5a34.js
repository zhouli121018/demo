webpackJsonp([22],{PybM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("0tg7"),s=t("P9l9"),i={data:function(){return{listLoading:!1,selectedIndex:"1",calendar_id:"",calendars:[],share_calendars:[]}},components:{},created:function(){},mounted:function(){this.getCalendars(),this.$route.path.indexOf("/calendar/set")},methods:{jumpTo:function(e,a){this.$router.push(e),this.selectedIndex=a.calender_id||a.id,a.id&&0!=a.id&&(this.calendar_id=a.calender_id||a.id)},getCalendars:function(){var e=this;this.listLoading=!0,Object(s._33)().then(function(a){e.calendars=a.data.results;for(var t=0;t<a.data.results.length;t++){var n=a.data.results[t];n.is_default&&(e.calendar_id=n.id,e.$route.path.indexOf("/calendar/index")>=0?e.selectedIndex=n.id:e.selectedIndex=0)}e.share_calendars=[];for(var s=0;s<a.data.share_results.length;s++){var i=a.data.share_results[s];i.is_show&&e.share_calendars.push(i)}e.listLoading=!1}).catch(function(a){e.listLoading=!1})}},computed:{lan:function(){n.a.zh;return"zh-hans"==this.$store.getters.getLanguage?n.a.zh:"zh-tw"==this.$store.getters.getLanguage?n.a.zh_tw:"en"==this.$store.getters.getLanguage?n.a.en:(this.$store.getters.getLanguage,n.a.zh)}}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"calendar",attrs:{id:"calendar_id"}},[t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"m-mail"},[t("aside",{staticClass:"fl-g-sidebar"},[t("div",{staticClass:"fl-m-nav-bg"}),e._v(" "),t("ul",{staticClass:"fl-m-nav j-file-nav"},[t("li",[t("a",{staticClass:"fl-m-nav-trigger",class:{"fl-nav-current":0==e.selectedIndex},attrs:{href:"#",title:e.lan.CALENDAR_INDEX_CAL_MANAGER},on:{click:function(a){a.preventDefault(),a.stopPropagation(),e.jumpTo("/calendar/set",{id:0})}}},[t("span",[t("i",{staticClass:"menu_icon_box iconfont icon-iconsetschedule"}),e._v(" "),t("div",[e._v(e._s(e.lan.CALENDAR_INDEX_CAL_MANAGER))])])])]),e._v(" "),e._l(e.calendars,function(a,n){return t("li",{key:a.id},[t("a",{staticClass:"fl-m-nav-trigger",class:{"fl-nav-current":e.selectedIndex==a.id},attrs:{href:"#",title:a.name},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.jumpTo("/calendar/index",a)}}},[t("span",[t("i",{staticClass:"iconfont icon-iconmyschedule menu_icon_box"}),e._v(" "),t("div",[e._v(e._s(a.name))])])])])}),e._v(" "),e._l(e.share_calendars,function(a,n){return t("li",{key:a.calender_id},[t("a",{staticClass:"fl-m-nav-trigger",class:{"fl-nav-current":e.selectedIndex==a.calender_id},attrs:{href:"#",title:a.name},on:{click:function(t){t.preventDefault(),t.stopPropagation(),e.jumpTo("/calendar/index",a)}}},[t("span",[t("i",{staticClass:"iconfont icon-iconmyschedule menu_icon_box"}),e._v(" "),t("div",[e._v(e._s(a.name))])])])])})],2)]),e._v(" "),t("article",{staticClass:"fl-g-content"},[t("div",{staticClass:"cal-content-wrap"},[t("router-view",{attrs:{calendar_id:e.calendar_id}})],1)])])])},staticRenderFns:[]};var l=t("C7Lr")(i,r,!1,function(e){t("TVx+")},null,null);a.default=l.exports},"TVx+":function(e,a){}});
//# sourceMappingURL=22.3215eb6d316ac8fd5a34.js.map