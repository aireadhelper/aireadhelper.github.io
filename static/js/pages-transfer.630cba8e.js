(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-transfer"],{"10d6":function(t,e,n){"use strict";n.r(e);var a=n("b482"),i=n("33dd");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("f82f");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"4d42c78e",null,!1,a["a"],o);e["default"]=c.exports},2909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=c;var a=u(n("6005")),i=u(n("db90")),r=u(n("06c5")),o=u(n("3427"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()}},"33dd":function(t,e,n){"use strict";n.r(e);var a=n("58a8e"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},3427:function(t,e,n){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},5504:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".page[data-v-4d42c78e]{min-height:100vh}.cu-list.menu>.cu-item .content[data-v-4d42c78e]{font-size:inherit}.cu-list.menu>.cu-item[data-v-4d42c78e]{background-color:inherit;color:inherit;font-size:inherit}",""]),t.exports=e},"58a8e":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909"));n("96cf");var r=a(n("1da1")),o=a(n("c086")),u=a(n("e143")),c={name:"list",data:function(){return{backgroundcolor:this.backgroundcolor,fontsize:this.fontsize,textcolor:this.textcolor,adshow:!0,title:"",url:"",source_url:"",drive:"",list:[],load_url:"",hash:"",next:[],state:0,isIpx:this.isIpx}},computed:{banner_adid:function(){return u.default.prototype.appconfig?u.default.prototype.appconfig.list_banner:null},custom_adid:function(){return u.default.prototype.appconfig?u.default.prototype.appconfig.list_custom:null},video_adid:function(){return u.default.prototype.appconfig?u.default.prototype.appconfig.list_video:null},viewAdBgColor:function(){return"bg-black"==this.backgroundcolor||"bg-dark"==this.backgroundcolor||"bg-grey"==this.backgroundcolor||"bg-brown"==this.backgroundcolor?"black":"white"},bgColor:function(){return this.backgroundcolor+" "+this.textcolor+" "+this.fontsize}},methods:{adClose:function(){this.adshow=!1},fetch:function(t,e,n){var a=this;return(0,r.default)(regeneratorRuntime.mark((function r(){var u,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=a,u.load_url=e,u.state=1,r.prev=3,r.next=6,o.default.transfer(t,e,n);case 6:s=r.sent,uni.setNavigationBarTitle({title:s.title}),u.title=s.title,(c=u.list).push.apply(c,(0,i.default)(s.Cards)),u.next=s.next,u.next&&""!=u.next.wxto?u.state=0:u.state=4,r.next=17;break;case 14:r.prev=14,r.t0=r["catch"](3),u.state=3;case 17:case"end":return r.stop()}}),r,null,[[3,14]])})))()},click:function(t){var e=t.currentTarget.dataset.wxto,n=t.currentTarget.dataset.type,a=t.currentTarget.dataset.image;if(""!=e&&"link"==n)uni.navigateTo({url:e});else if(""!=a&&"image"==n)uni.previewImage({current:a,urls:[a]});else if("jumpapp"==n){var i=t.currentTarget.dataset.appid;i&&e&&uni.navigateToMiniProgram({appId:i,path:e,extraData:{from:"reader"},success:function(t){}})}},goto:function(t){var e=t.currentTarget.dataset.url;e&&uni.navigateTo({url:e})},loadmore:function(){var t=this;t.state=1,t.next&&""!=t.next.url?(t.fetch(t.action,t.next.url,t.drive),t.next=[]):t.state=2},reloaddata:function(){this.load_url?(this.state=1,this.fetch(this.action,this.url,this.drive)):this.state=2}},onLoad:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a,i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.action,i=t.url,r=t.drive,o.default.setNavigationBarColor(),n.next=4,o.default.ConnectApi();case 4:e.url=i,e.drive=r,e.action=a,e.state=1,e.fetch(e.action,e.url,e.drive);case 9:case"end":return n.stop()}}),n)})))()},onReachBottom:function(){var t=this;if(4==t.state)return!1;t.state=1,t.next&&""!=t.next.url?(t.fetch(t.action,t.next.url,t.drive),t.next=[]):t.state=2},onShareAppMessage:function(t){return{title:this.title,path:"/pages/transfer?action="+this.action+"&url="+this.url+"&drive="+this.drive+"&uid="+u.default.prototype.uid}},onPullDownRefresh:function(){this.state=1,this.list=[],this.fetch(this.action,this.url,this.drive),uni.stopPullDownRefresh()}};e.default=c},6005:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=i(n("6b75"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t){if(Array.isArray(t))return(0,a.default)(t)}},"81c3":function(t,e,n){var a=n("5504");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("22dafc56",a,!0,{sourceMap:!1,shadowMode:!1})},b482:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:[t.backgroundcolor,t.textcolor,t.fontsize]},[n("cu-custom",{attrs:{bgColor:t.bgColor,isBack:!0}},[n("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("template",{attrs:{slot:"content"},slot:"content"},[n("v-uni-text",{class:[t.fontsize]},[t._v(t._s(t.title))])],1)],2),n("v-uni-view",{staticClass:"page",class:[t.backgroundcolor,t.textcolor,t.fontsize],attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore()}}},[n("v-uni-view",{staticClass:"cu-list menu card-menu margin-top"},[t._l(t.list,(function(e,a){return[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content",attrs:{"data-wxto":e.wxto,"data-type":e.type,"data-appid":e.appid,"data-image":e.image},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(e.title))])],1)],1),a%50==9?void 0:t._e()]})),1==t.state?n("v-uni-view",{staticClass:"cu-load loading"}):t._e(),2==t.state?n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"content text-center"},[n("v-uni-text",[t._v("到底了")])],1)],1):t._e(),3==t.state?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reloaddata()}}},[n("v-uni-view",{staticClass:"content text-center"},[n("v-uni-text",[t._v("重新加载")])],1)],1):t._e(),0==t.state?n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadmore()}}},[n("v-uni-view",{staticClass:"content text-center"},[n("v-uni-text",[t._v("加载更多")])],1)],1):t._e(),t.isIpx?n("v-uni-view",{staticClass:"cu-tabbar-height"}):t._e()],2)],1)],1)},r=[]},db90:function(t,e,n){"use strict";function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},f82f:function(t,e,n){"use strict";var a=n("81c3"),i=n.n(a);i.a}}]);