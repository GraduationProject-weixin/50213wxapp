(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinCommentback/add-or-update"],{"27e9":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"bfbc"))}},a=function(){var e=this,n=e.$createElement;e._self._c},o=[]},"438b":function(e,n,t){"use strict";t.r(n);var r=t("f02c"),a=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=a.a},"507c":function(e,n,t){},6990:function(e,n,t){"use strict";var r=t("507c"),a=t.n(r);a.a},"83aa":function(e,n,t){"use strict";(function(e){t("a94c");r(t("66fd"));var n=r(t("9575"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},9575:function(e,n,t){"use strict";t.r(n);var r=t("27e9"),a=t("438b");for(var o in a)"default"!==o&&function(e){t.d(n,e,(function(){return a[e]}))}(o);t("6990");var i,u=t("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"577fc1b7",null,!1,r["a"],i);n["default"]=c.exports},f02c:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e,n,t,r,a,o,i){try{var u=e[o](i),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function u(e){o(i,r,a,u,c,"next",e)}function c(e){o(i,r,a,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("bfbc"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ro:{shangpinId:!1,yonghuId:!1,shangpinCommentbackText:!1,replyText:!1,insertTime:!1,updateTime:!1,createTime:!1},ruleForm:{shangpinId:"",yonghuId:"",shangpinCommentbackText:"",replyText:"",insertTime:"",updateTime:"",createTime:""},user:{}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return i(r.default.mark((function t(){var a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=6;break}return n.ruleForm.id=e.id,t.next=4,n.$api.info("shangpinCommentback",n.ruleForm.id);case 4:a=t.sent,n.ruleForm=a.data;case 6:e.shangpinId&&(n.ruleForm.shangpinId=e.shangpinId);case 7:case"end":return t.stop()}}),t)})))()},methods:{insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},updateTimeConfirm:function(e){console.log(e),this.ruleForm.updateTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.shangpinCommentbackText){t.next=3;break}return n.$utils.msg("留言内容不能为空"),t.abrupt("return");case 3:if(!n.ruleForm.id){t.next=8;break}return t.next=6,n.$api.update("shangpinCommentback",n.ruleForm);case 6:t.next=10;break;case 8:return t.next=10,n.$api.save("shangpinCommentback",n.ruleForm);case 10:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 12:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])}},[["83aa","common/runtime","common/vendor"]]]);