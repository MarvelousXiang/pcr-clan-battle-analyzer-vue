(function(e){function t(t){for(var n,s,i=t[0],l=t[1],c=t[2],v=0,f=[];v<i.length;v++)s=i[v],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/pcr-clan-battle-analyzer-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[e._v(" Application ")]),a("v-list-item-subtitle",[e._v(" subtext ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Home")])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-action",[a("v-icon",[e._v("mdi-email")])],1),a("v-list-item-content",[a("v-list-item-title",[e._v("Contact")])],1)],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-toolbar-title",[e._v("Application")])],1),a("v-main",[a("router-view")],1),a("v-footer",{attrs:{color:"indigo",app:""}},[a("span",{staticClass:"white--text"},[e._v("© "+e._s((new Date).getFullYear()))])])],1)},o=[],s=a("bc3a"),i=a.n(s),l=a("a7fe"),c=a.n(l);n["a"].use(c.a,i.a);var u=n["a"].extend({name:"App",props:{source:String},components:{},data:function(){return{drawer:null}}}),v=u,f=a("2877"),p=a("6544"),d=a.n(p),m=a("7496"),g=a("40dc"),h=a("5bc1"),b=a("ce7e"),_=a("553a"),y=a("132d"),S=a("8860"),x=a("da13"),B=a("1800"),w=a("5d23"),D=a("f6c4"),V=a("f774"),j=a("2a7f"),O=Object(f["a"])(v,r,o,!1,null,null,null),k=O.exports;d()(O,{VApp:m["a"],VAppBar:g["a"],VAppBarNavIcon:h["a"],VDivider:b["a"],VFooter:_["a"],VIcon:y["a"],VList:S["a"],VListItem:x["a"],VListItemAction:B["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMain:D["a"],VNavigationDrawer:V["a"],VToolbarTitle:j["a"]});var C=a("9483");Object(C["a"])("".concat("/pcr-clan-battle-analyzer-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var M=a("8c4f"),T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[[a("v-text-field",{attrs:{hint:"API地址","append-icon":"mdi-cloud-download","prepend-icon":"mdi-link","persistent-hint":""},on:{"click:append":e.getDataFromAPI},model:{value:e.apiURL,callback:function(t){e.apiURL=t},expression:"apiURL"}})]],2)],1),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",[e._v("公会名")]),a("th",[e._v("一王平均伤害")]),a("th",[e._v("标准差")]),a("th",[e._v("二王平均伤害")]),a("th",[e._v("标准差")]),a("th",[e._v("三王平均伤害")]),a("th",[e._v("标准差")]),a("th",[e._v("四王平均伤害")]),a("th",[e._v("标准差")]),a("th",[e._v("五王平均伤害")]),a("th",[e._v("标准差")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupInfo[0].group_name)+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsMeanDamageByBoss[0])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsDamageSTDVByBoss[0])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsMeanDamageByBoss[1])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsDamageSTDVByBoss[1])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsMeanDamageByBoss[2])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsDamageSTDVByBoss[2])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsMeanDamageByBoss[3])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsDamageSTDVByBoss[3])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsMeanDamageByBoss[4])+" ")]),a("td",{staticClass:"text-left"},[e._v(" "+e._s(e.groupStatsDamageSTDVByBoss[4])+" ")])])])]},proxy:!0}])}),a("v-spacer"),a("v-card-title",[a("v-text-field",{attrs:{label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.challenges,search:e.search,"multi-sort":"","disable-pagination":"",dense:"","hide-default-footer":""},scopedSlots:e._u([{key:"item.zScore",fn:function(t){var n=t.item;return[a("v-chip",{attrs:{color:e.getColorByzScore(n.zScore),dark:""}},[e._v(e._s(n.zScore))])]}}],null,!0)})],1)],1)],1)},I=[],z=(a("4de4"),a("4160"),a("a9e3"),a("b680"),a("ac1f"),a("841c"),a("159b"),a("d4ec")),A=a("bee2"),L=a("262e"),P=a("2caf"),E=a("9ab4"),F=a("60a3"),N=a("5a0c"),q=a.n(N),Q=a("d09f"),R=function(e){Object(L["a"])(a,e);var t=Object(P["a"])(a);function a(){var e;return Object(z["a"])(this,a),e=t.apply(this,arguments),e.apiURL="",e.search="",e.groupStatsMeanDamageByBoss=[0,0,0,0,0],e.groupStatsDamageSTDVByBoss=[0,0,0,0,0],e.headers=[{text:"出刀时间",value:"challenge_time"},{text:"QQ号",align:"start",sortable:!1,value:"qqid"},{text:"昵称",align:"start",sortable:!1,value:"nickname"},{text:"周目",value:"cycle",filterable:!1},{text:"BOSS序号",value:"boss_num",filterable:!1},{text:"伤害",value:"damage",filterable:!1},{text:"剩余HP",value:"health_ramain",filterable:!1},{text:"偏差值(z-score)",value:"zScore",filterable:!1}],e.challenges=[],e.memberList=[],e.groupInfo=[],e}return Object(A["a"])(a,[{key:"getColorByzScore",value:function(e){return e>0?"green":e<0?"red":void 0}},{key:"getNicknameByQQID",value:function(e){var t="";return this.memberList.forEach((function(a){if(a.qqid==e)return t=a.nickname,t})),t}},{key:"getDataFromAPI",value:function(){var e=this;this.axios.get(this.apiURL).then((function(t){var a=t.data,n=a.members,r=a.groupinfo,o=t.data.challenges,s=[[],[],[],[],[]];e.memberList=n,o.forEach((function(e,t,a){1!=e.is_continue&&0!=e.health_ramain&&1!=e.cycle||(console.log("to del",t,e),delete a[t])})),o=o.filter(Object).reverse(),o.forEach((function(t){t.challenge_time=q.a.unix(t.challenge_time).format("YYYY-MM-DD HH:mm"),t.nickname=e.getNicknameByQQID(t.qqid),s[t.boss_num-1].push(t.damage)}));for(var i=function(e){s[e].forEach((function(t,a,n){var r=Object(Q["zScore"])(t,Object(Q["mean"])(s[e]),Object(Q["standardDeviation"])(s[e]));Math.abs(r)>6&&delete n[a]})),s[e]=s[e].filter(Number)},l=0;l<5;l++)i(l);for(var c=0;c<5;c++)e.groupStatsMeanDamageByBoss[c]=Math.round(Object(Q["mean"])(s[c])),e.groupStatsDamageSTDVByBoss[c]=Math.round(Object(Q["standardDeviation"])(s[c]));o.forEach((function(t){var a=Object(Q["zScore"])(t.damage,e.groupStatsMeanDamageByBoss[t.boss_num-1],e.groupStatsDamageSTDVByBoss[t.boss_num-1]);t.zScore=a.toFixed(5),Math.abs(a)>6&&(t.zScore+="(无效数据)")})),e.challenges=o,e.groupInfo=r}))}}]),a}(F["b"]);R=Object(E["a"])([Object(F["a"])({components:{}})],R);var H=R,U=H,Y=a("99d9"),$=a("cc20"),J=a("62ad"),G=a("a523"),K=a("8fea"),W=a("0fd9"),X=a("1f4f"),Z=a("2fa4"),ee=a("8654"),te=Object(f["a"])(U,T,I,!1,null,null,null),ae=te.exports;d()(te,{VCardTitle:Y["a"],VChip:$["a"],VCol:J["a"],VContainer:G["a"],VDataTable:K["a"],VRow:W["a"],VSimpleTable:X["a"],VSpacer:Z["a"],VTextField:ee["a"]});var ne=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("h1",[e._v("This is an about page")])])}],oe={},se=Object(f["a"])(oe,ne,re,!1,null,null,null),ie=se.exports;n["a"].use(M["a"]);var le=[{path:"/",name:"Home",component:ae,children:[{path:"about",name:"About",component:ie}]}],ce=new M["a"]({mode:"history",base:"/pcr-clan-battle-analyzer-vue/",routes:le}),ue=ce,ve=a("2f62");n["a"].use(ve["a"]);var fe=new ve["a"].Store({state:{},mutations:{},actions:{},modules:{}}),pe=a("f309");n["a"].use(pe["a"]);var de=new pe["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ue,store:fe,vuetify:de,render:function(e){return e(k)}}).$mount("#app")}});
//# sourceMappingURL=app.bbfbdfcc.js.map