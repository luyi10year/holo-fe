webpackJsonp([5],{"1tkq":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("mNlw");var s=i("7+uW"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"h-fix"},[i("div",{staticClass:"header-box content-box"},[t._m(0),t._v(" "),i("div",{staticClass:"header-web-menu clear-float"},[i("ul",[t._l(t.menuList,function(e,s){return i("li",{key:s,class:t.onRoutes==e.router?"active":""},[e.isHref?[i("a",{attrs:{href:e.routers[0],target:"_blank"}},[t._v(t._s(e.name))])]:i("router-link",{attrs:{to:e.router,tag:"span"}},[t._v(t._s(e.name))])],2)}),t._v(" "),i("li",{staticClass:"split"},[t._v("|")]),t._v(" "),i("li",[t._v("关于HOLO")]),t._v(" "),t._m(1)],2)]),t._v(" "),i("div",{staticClass:"header-wrap-menu"},[i("div",{on:{click:t.activeMenu}},[i("div",{staticClass:"menu-col"})])])]),t._v(" "),i("transition",{attrs:{name:"slide-fade"}},[t.wrapMenuActive?i("div",{staticClass:"wrap-menu",on:{click:t.activeMenu}},[i("div",{class:["menu-left"]},[i("ul",{on:{click:function(e){e.stopPropagation(),t.preMenu(e)}}},[t._l(t.menuList,function(e,s){return i("li",{key:s,class:t.onRoutes==e.router?"active":""},[e.isHref?[i("a",{attrs:{href:e.routers[1],target:"_blank"}},[t._v(t._s(e.name))])]:i("router-link",{attrs:{to:e.router,tag:"span"}},[t._v(t._s(e.name))])],2)}),t._v(" "),i("li",{staticClass:"split"}),t._v(" "),i("li",[t._v("关于HOLO")]),t._v(" "),i("li",[t._v("联系我们")])],2)])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-icon-item"},[e("img",{attrs:{src:"/static/image/icon/icon.svg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"er-code"},[e("span",[this._v("联系我们")]),this._v(" "),e("div",{staticClass:"header-er"},[e("img",{attrs:{src:"/static/image/ercode/customer-service.jpg",alt:""}}),this._v(" "),e("img",{attrs:{src:"/static/image/ercode/wechat.jpg",alt:""}})])])}]};var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer-layout"},[i("div",{staticClass:"footer-box"},[t._m(0),t._v(" "),i("div",{staticClass:"f-icon"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"f-icon-item"},[i("p",[t._v(t._s(e.item))]),t._v(" "),i("div",[i("img",{attrs:{src:e.src,alt:""}})])])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"f-p-title"},[this._v("联系我们 | HOLO艺术给养空间")]),this._v(" "),e("p",{staticClass:"f-p-msg"},[this._v("客服电话：0571-87382643")]),this._v(" "),e("p",{staticClass:"f-p-msg"},[this._v("商务合作：holo@holoartstudio.com")]),this._v(" "),e("p",{staticClass:"f-p-icp"},[this._v("© 2018 杭州燃巴网络科技有限公司 浙ICP备17057557号-1")])])}]},r={data:function(){return{}},methods:{toTop:function(){window.backToTop(4)}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fix-er"},[e("ul",[this._m(0),this._v(" "),this._m(1),this._v(" "),this._m(2),this._v(" "),e("li",{staticClass:"back-top",on:{click:this.toTop}},[e("img",{attrs:{src:"/static/image/icon/btt.png",alt:""}})])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("微信客服")]),this._v(" "),e("div",{staticClass:"er-code-wrap"},[e("img",{attrs:{src:"/static/image/ercode/customer-service.jpg",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("公众号")]),this._v(" "),e("div",{staticClass:"er-code-wrap"},[e("img",{attrs:{src:"/static/image/ercode/ercode.jpg",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",[this._v("商务合作")]),this._v(" "),e("div",{staticClass:"er-code-wrap"},[e("img",{attrs:{src:"/static/image/ercode/wechat.jpg",alt:""}})])])}]};var o={name:"app",components:{vHeader:i("VU/8")({created:function(){},computed:{onRoutes:function(){return this.$route.path}},data:function(){return{menuList:[{name:"首页",router:"/"},{name:"艺术课程",routers:["https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515","https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515"],isHref:!0},{name:"学员作品",router:"/part/artWork"},{name:"绘画工具",router:"/painting"}],wrapMenuActive:!1}},methods:{activeMenu:function(){this.wrapMenuActive=!this.wrapMenuActive},preMenu:function(){}}},a,!1,function(t){i("1tkq")},null,null).exports,vFooter:i("VU/8")({data:function(){return{list:[{item:"微信公众号",src:"/static/image/ercode/ercode.jpg"},{item:"客服微信",src:"/static/image/ercode/customer-service.jpg"},{item:"商务合作 | 微信",src:"/static/image/ercode/wechat.jpg"}]}}},n,!1,null,null,null).exports,vErcode:i("VU/8")(r,c,!1,function(t){i("zWti")},"data-v-3d6a444b",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"layout-box"},[e("v-header"),this._v(" "),e("router-view"),this._v(" "),e("v-footer")],1),this._v(" "),e("v-ercode")],1)},staticRenderFns:[]};var u=i("VU/8")(o,l,!1,function(t){i("dAkU")},null,null).exports,v=i("/ocq");s.a.use(v.a);var p=new v.a({routes:[{path:"/",name:"Home",component:function(t){return Promise.all([i.e(0),i.e(3)]).then(function(){var e=[i("wqTG")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/part/:name",name:"Part",component:function(t){return Promise.all([i.e(0),i.e(1)]).then(function(){var e=[i("YwAY")];t.apply(null,e)}.bind(this)).catch(i.oe)}},{path:"/painting",name:"Painting",component:function(t){return Promise.all([i.e(0),i.e(2)]).then(function(){var e=[i("zbyf")];t.apply(null,e)}.bind(this)).catch(i.oe)}}]});p.afterEach(function(t,e){console.log(t,e),e.name&&window.backToTop(2)});var m=p,h=i("cTzj"),d=i.n(h);s.a.use(d.a),s.a.use(d.a,{preLoad:1.3,error:"http://asset.ibanquan.com/image/571841535492c129d800105f/s_w330h330.png?v=10",loading:"http://asset.ibanquan.com/image/571841535492c129d800105f/s_w330h330.png?v=11",attempt:1}),s.a.config.productionTip=!1,new s.a({el:"#app",router:m,template:"<App/>",components:{App:u}})},dAkU:function(t,e){},mNlw:function(t,e){window.requestAnimationFrame||(requestAnimationFrame=function(t){setTimeout(t,17)});window.backToTop=function(t){var e=document.body.scrollTop?document.body:document.documentElement,i=e.scrollTop;!function s(){(i+=(0-i)/t)<1?e.scrollTop=0:(e.scrollTop=i,requestAnimationFrame(s))}()}},zWti:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.315132935da8180958ee.js.map