(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-cnode/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05ef":function(t,e,a){t.exports=a.p+"img/conde-logo.86f6a7c2.svg"},"127b":function(t,e,a){"use strict";a("fa17")},"27b8":function(t,e,a){"use strict";a("27b9")},"27b9":function(t,e,a){},"35ee":function(t,e,a){},3816:function(t,e,a){"use strict";a("b831")},"3e89":function(t,e,a){"use strict";a("35ee")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4");var n=a("2b0e"),s=(a("d3b7"),a("bc3a")),i=a.n(s),r={},o=i.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},n["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"main clearfix"},[a("router-view",{attrs:{name:"aside"}}),a("router-view",{attrs:{name:"main"}})],1)],1)},u=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"wrap"},[n("router-link",{attrs:{to:{name:"postlist"}}},[n("img",{attrs:{src:a("05ef"),alt:"logo"}})]),n("ul",[n("router-link",{attrs:{to:{name:"postlist"}}},[n("li",[t._v("首页")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)],1)],1)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("新手入门")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("API")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"https://github.com/zhangxin"}},[t._v("关于作者")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("注册")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#"}},[t._v("登录")])])}],f={name:"Header",components:{}},d=f,g=(a("3816"),a("2877")),h=Object(g["a"])(d,l,p,!1,null,"140e7035",null),_=h.exports,m={name:"App",components:{Header:_}},v=m,b=(a("ed2d"),Object(g["a"])(v,c,u,!1,null,"01014e74",null)),y=b.exports,C=a("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topiclist-wrapper"},[t.isLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("cf1c"),alt:"loading"}})]):n("div",{staticClass:"topiclist"},[n("ul",[n("li",{staticClass:"toobar",on:{click:function(e){return t.changeTab(e)}}},[n("span",{attrs:{name:"all"}},[t._v("全部")]),n("span",{attrs:{name:"good"}},[t._v("精华")]),n("span",{attrs:{name:"share"}},[t._v("分享")]),n("span",{attrs:{name:"ask"}},[t._v("问答")]),n("span",{attrs:{name:"job"}},[t._v("招聘")]),n("span",{attrs:{name:"dev"}},[t._v("测试")])]),t._l(t.topicList,(function(e){return n("li",{key:e.id,staticClass:"topic-wrapper"},[n("router-link",{attrs:{to:{name:"userinfo",params:{username:e.author.loginname}}}},[n("img",{attrs:{src:e.author.avatar_url,alt:"头像"}})]),n("span",{staticClass:"reply-and-visit"},[n("span",{staticClass:"reply-count"},[t._v(t._s(e.reply_count))]),t._v("/"),n("span",{staticClass:"visit-count"},[t._v(t._s(e.visit_count))])]),n("span",{class:[t.topicTabClass,{"put-top":!0===e.top,"put-good":!0===e.good}]},[t._v(" "+t._s(t.topicType(e))+" ")]),n("router-link",{attrs:{to:{name:"article",params:{id:e.id,username:e.author.loginname}}}},[n("span",{staticClass:"topic-title"},[t._v(" "+t._s(e.title)+" ")])]),n("span",{staticClass:"last-replay"},[t._v(t._s(t._f("formatDate")(e.last_reply_at)))])],1)}))],2),n("Pagination",{ref:"Pagination",on:{handleList:t.renderList}})],1)])},k=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("button",{staticClass:"pagebtn",on:{click:function(e){return t.changePage(1)}}},[t._v("首页")]),a("button",{staticClass:"pagebtn",attrs:{disabled:t.disabled},on:{click:function(e){return t.changePage(t.currentPage-1)}}},[t._v(" 上一页 ")]),t.currentPage>4?a("button",{staticClass:"pagebtn"},[t._v("...")]):t._e(),t._l(t.pageArray,(function(e){return a("button",{key:e,class:[{active:t.currentPage===e},"pagebtn"],on:{click:function(a){return t.changePage(e)}}},[t._v(" "+t._s(e)+" ")])})),a("button",{staticClass:"pagebtn"},[t._v("...")]),a("button",{staticClass:"pagebtn",on:{click:function(e){return t.changePage(t.currentPage+1)}}},[t._v("下一页")])],2)},w=[],$=(a("a434"),{name:"Pagination",props:["resetPage"],data:function(){return{currentPage:1,pageArray:[1,2,3,4,5],disabled:!1}},methods:{changePage:function(t){this.currentPage=t,this.currentPage<1||(1===this.currentPage?this.disabled=!0:this.disabled=!1,1===t&&(this.pageArray=[1,2,3,4,5]),t==this.pageArray[4]?(this.pageArray.shift(),this.pageArray.splice(4,0,this.pageArray[3]+1)):t==this.pageArray[0]&&1!=t&&(this.pageArray.unshift(this.pageArray[0]-1),this.pageArray.pop()),this.$emit("handleList",this.currentPage))}}}),x=$,L=(a("27b8"),Object(g["a"])(x,j,w,!1,null,"605da00c",null)),I=L.exports,O={name:"PostList",components:{Pagination:I},data:function(){return{isLoading:!0,topicList:[],topicTabClass:"topiclist-tab",tagName:"all",resetPage:1}},methods:{gteData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";this.$http.get("https://cnodejs.org/api/v1/topics",{params:{limit:20,page:e,tab:a}}).then((function(e){e.data.success&&(t.isLoading=!1,t.topicList=e.data.data)})).catch((function(e){t.isLoading=!0,console.log(e)}))},topicType:function(t){return t.top?"置顶":t.good?"精华":"ask"===t.tab?"问答":"job"===t.tab?"招聘":"share"===t.tab?"分享":"dev"===t.tab?"测试":void 0},changeTab:function(t){var e=t.target.getAttribute("name");this.tagName=e,this.gteData(1,this.tagName),this.$refs.Pagination.currentPage=1},renderList:function(t){this.gteData(t,this.tagName)}},beforeMount:function(){this.gteData(1,"all")}},D=O,T=(a("127b"),Object(g["a"])(D,P,k,!1,null,"54f65327",null)),A=T.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-wrapper"},[t.isLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("cf1c")}})]):n("div",{staticClass:"article"},[n("div",{staticClass:"topic"},[n("header",{staticClass:"topic-header"},[n("h3",[t._v(t._s(t.posts.title))]),n("ul",[n("li",[t._v("•发布于: "+t._s(t._f("formatDate")(t.posts.create_at)))]),n("li",[t._v("•作者 "+t._s(t.posts.author.loginname))]),n("li",[t._v("•"+t._s(t.posts.visit_count)+" 次浏览")]),n("li",[t._v("•最后一次编辑是 "+t._s(t._f("formatDate")(t.posts.last_reply_at)))]),n("li",[t._v("•来自 "+t._s(t.topicType(t.posts)))])])]),n("main",{staticClass:"topic-content",domProps:{innerHTML:t._s(t.posts.content)}})]),n("div",{staticClass:"reply"},[n("div",{staticClass:"reply-header"},[t._v("回复")]),n("ul",t._l(t.posts.replies,(function(e,a){return n("li",{key:e.id,staticClass:"reply-section"},[n("router-link",{attrs:{to:{name:"userinfo",params:{username:e.author.loginname}}}},[n("img",{attrs:{src:e.author.avatar_url,alt:"头像"}})]),n("span",{staticClass:"username"},[t._v(t._s(e.author.loginname))]),n("span",[t._v(" "+t._s(a+1)+"楼 ")]),n("span",[t._v("☝ "+t._s(e.ups.length))]),n("p",{staticClass:"reply-content",domProps:{innerHTML:t._s(e.content)}})],1)})),0)])])])},M=[],S={name:"Article",data:function(){return{isLoading:!0,posts:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then((function(e){e.data.success&&(t.posts=e.data.data,t.isLoading=!1)})).catch((function(e){t.isLoading=!0,console.log(e)}))},topicType:function(t){return t.top?"置顶":t.good?"精华":"ask"===t.tab?"问答":"job"===t.tab?"招聘":"share"===t.tab?"分享":void 0}},watch:{$route:function(t,e){this.getData()}},beforeMount:function(){this.posts=this.getData()}},H=S,N=(a("720e"),Object(g["a"])(H,E,M,!1,null,null,null)),J=N.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-infomation-wrapper"},[t.isLoading?n("div",{staticClass:"loading"},[n("img",{attrs:{src:a("cf1c")}})]):n("div",{attrs:{id:"user"}},[n("div",{staticClass:"user-infomation"},[n("section",{staticClass:"header"},[n("img",{attrs:{src:t.userinfo.avatar_url,alt:"头像"}}),n("span",[t._v(t._s(t.userinfo.loginname))]),n("p",[t._v("积分: "+t._s(t.userinfo.score))]),n("p",[t._v("注册时间:"+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),n("section",{staticClass:"replies"},[n("p",[t._v("回复的主题")]),n("ul",t._l(t.userinfo.recent_replies,(function(e){return n("li",{key:e.length},[n("router-link",{attrs:{to:{name:"article",params:{id:e.id,username:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),n("section",{staticClass:"topics"},[n("p",[t._v("创建的主题")]),n("ul",t._l(t.userinfo.recent_topics,(function(e){return n("li",{key:e.length},[n("router-link",{attrs:{to:{name:"article",params:{id:e.id,username:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])])])},q=[],z={name:"UserInfo",data:function(){return{isLoading:!0,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.username)).then((function(e){e.data.success&&(t.isLoading=!1,t.userinfo=e.data.data)})).catch((function(e){t.isLoading=!0,console.log(123),console.log(e)}))}},beforeMount:function(){this.getData()}},B=z,U=(a("958b"),Object(g["a"])(B,R,q,!1,null,"e1cfb674",null)),F=U.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("header",{staticClass:"header"},[a("p",[t._v("作者")]),a("router-link",{attrs:{to:{name:"userinfo",params:{username:t.asideInfo.loginname}}}},[a("img",{attrs:{src:t.asideInfo.avatar_url,alt:"头像"}})]),a("span",[t._v(t._s(t.asideInfo.loginname))]),a("p",[t._v("积分: "+t._s(t.asideInfo.score))])],1),a("section",{staticClass:"recent-topics"},[a("p",[t._v("作者其它话题")]),a("ul",t._l(t.otherTopic,(function(e){return a("li",{key:e.length},[a("router-link",{attrs:{to:{name:"article",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),a("section",{staticClass:"recent-reply"},[a("p",[t._v("作者最近回复")]),a("ul",t._l(t.otherReplies,(function(e){return a("li",{key:e.length},[a("router-link",{attrs:{to:{name:"article",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},K=[],Q={name:"SideBar",data:function(){return{asideInfo:{}}},computed:{otherTopic:function(){if(this.asideInfo.recent_topics){var t=this.asideInfo.recent_topics;return t.splice(0,5)}return this.asideInfo.recent_topics},otherReplies:function(){if(this.asideInfo.recent_replies){var t=this.asideInfo.recent_replies;return t.splice(0,5)}return this.asideInfo.recent_replies}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.username)).then((function(e){e.data.success&&(t.asideInfo=e.data.data)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.getData()}},V=Q,W=(a("3e89"),Object(g["a"])(V,G,K,!1,null,"17ef3ad9",null)),X=W.exports;n["a"].use(C["a"]);var Y=[{name:"postlist",path:"/",components:{main:A}},{name:"article",path:"/topic/:id",components:{main:J,aside:X}},{name:"userinfo",path:"/user/:username",components:{main:F}}],Z=new C["a"]({mode:"history",base:"/vue-cnode/",routes:Y}),tt=Z,et=a("2f62");n["a"].use(et["a"]);var at=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].prototype.$http=i.a,n["a"].config.productionTip=!1,new n["a"]({router:tt,store:at,Axios:i.a,render:function(t){return t(y)}}).$mount("#app"),n["a"].filter("formatDate",(function(t){if(!t)return"";var e=new Date(t),a=(new Date).getTime()-e.getTime();return a<0?"":a/1e3<30?"刚刚":a/1e3<60?parseInt(a/1e3)+"秒前":a/6e4<60?parseInt(a/6e4)+"分钟前":a/36e5<24?parseInt(a/36e5)+"小时前":a/864e5<31?parseInt(a/864e5)+"天前":a/2592e6<12?parseInt(a/2592e6)+"月前":parseInt(a/31536e6)+"年前"}))},"720e":function(t,e,a){"use strict";a("a60b")},"958b":function(t,e,a){"use strict";a("caee")},a60b:function(t,e,a){},b594:function(t,e,a){},b831:function(t,e,a){},caee:function(t,e,a){},cf1c:function(t,e,a){t.exports=a.p+"img/loading.078fcd09.gif"},ed2d:function(t,e,a){"use strict";a("b594")},fa17:function(t,e,a){}});
//# sourceMappingURL=app.5fa5f941.js.map