webpackJsonp([4],{"/MBr":function(t,e){},MJyj:function(t,e){},NtCe:function(t,e){t.exports=window.MTOOL},Qi62:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("TVmP"),i=n("NtCe"),s=n.n(i),c=(n("MJyj"),{name:"App",components:{MFooter:o.a},data:function(){return{showFooter:!s.a.isPlus}},mounted:function(){}}),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("MFooter",{directives:[{name:"show",rawName:"v-show",value:this.showFooter,expression:"showFooter"}]})],1)},staticRenderFns:[]};var l=n("VU/8")(c,r,!1,function(t){n("/MBr")},null,null).exports,u=n("/ocq"),v=(n("yIEv"),n("OIh9")),h=(n("jAcA"),n("86U2"));a.a.use(v.a).use(h.a);var m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.list,function(e,a){return n("van-tab",{key:a,attrs:{title:e.title}},[t._v("\n      test "+t._s(a)+"\n    ")])}))],1)},staticRenderFns:[]};var f=n("VU/8")({name:"Index",data:function(){return{active:0,list:[{title:"学知识"},{title:"看路演"}],msg:"Welcome to Your Vue.js App"}}},m,!1,function(t){n("gKGe")},null,null).exports;a.a.use(u.a);var p=new u.a({routes:[{path:"/",name:"Index",component:f}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:l},template:"<App/>"})},R13Z:function(t,e){},TVmP:function(t,e,n){"use strict";n("3Lne");var a=n("SSsa"),o=(n("k3b4"),n("+2ln")),i=n("7+uW"),s=n("NtCe"),c=n.n(s);i.a.use(o.a),i.a.use(a.a);var r={name:"Nav",props:["selected"],data:function(){return{activePath:"home.html",msg:"Welcome to Your Vue.js App"}},mounted:function(){this.$nextTick(function(){});var t=window.location.pathname||"";t=t.substr(t.lastIndexOf("/")+1),this.activePath="index.html"===t?"home.html":t},methods:{handleNavTap:function(t,e){if(this.activePath!==t||!c.a.isPlus){c.a.needLogin(t),0,c.a.switchNav({from:this.activePath,to:t}),this.activePath=t}}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-link",class:{active:"home.html"===t.activePath},on:{click:function(e){t.handleNavTap("home.html",e)}}},[n("van-icon",{staticClass:"footer-icon",attrs:{name:"wap-home"}}),t._v(" "),n("span",[t._v("Home")])],1),t._v(" "),n("div",{staticClass:"footer-link",class:{active:"vigour.html"===t.activePath},on:{click:function(e){t.handleNavTap("vigour.html",e)}}},[n("van-icon",{staticClass:"footer-icon",attrs:{name:"wap-home"}}),t._v(" "),n("span",[t._v("Vigour")])],1),t._v(" "),n("div",{staticClass:"footer-link",class:{active:"my.html"===t.activePath},on:{click:function(e){t.handleNavTap("my.html",e)}}},[n("van-icon",{staticClass:"footer-icon",attrs:{name:"contact"}}),t._v(" "),n("span",[t._v("My")])],1)])},staticRenderFns:[]};var u=n("VU/8")(r,l,!1,function(t){n("R13Z")},"data-v-6d12ea8b",null);e.a=u.exports},f4F5:function(t,e){},gKGe:function(t,e){},mx3f:function(t,e){}},["Qi62"]);
//# sourceMappingURL=home.js.map