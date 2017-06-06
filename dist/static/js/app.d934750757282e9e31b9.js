webpackJsonp([0],[,,function(t,e,a){"use strict";var s=a(0),n=a(13),r=a(10),o=a.n(r);s.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:o.a}]})},function(t,e,a){function s(t){a(9)}var n=a(1)(a(6),a(12),s,null,null);t.exports=n.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(0),n=a(3),r=a.n(n),o=a(2),i=a(4),c=a.n(i);s.a.config.productionTip=!1,s.a.use(c.a,window.location.protocol+"//"+window.location.host,{path:"/ws/socket.io"}),new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{assets:null,quotes:null,transactionHistory:null,connected:!1,cashTotal:0,portfolioTotal:0,referralTotal:0,minChangePercent:0,maxChangePercent:0,marketOpen:!0,tradesRemaining:0,totalTrades:78}},methods:{assetChangePercentToColor:function(t){return t.averageCost<=0?"#ffffff":t.change<0?"hsl(1,70%,"+(100-35*t.changePercent/this.minChangePercent)+"%)":"hsl(120,50%,"+(100-50*t.changePercent/this.maxChangePercent)+"%)"},formatChange:function(t){return null==t?"------":t<0?"-$"+Math.abs(t).toFixed(2):"+$"+t.toFixed(2)},formatChangePercent:function(t){return null==t?"------":t<0?"-"+Math.abs(t).toFixed(2)+"%":"+"+t.toFixed(2)+"%"},formatFinanceLink:function(t){return"https://finance.yahoo.com/quote/"+t+"/"},formatPercent:function(t){return null==t?"------":t.toFixed(2)+"%"},formatPrice:function(t){return null==t?"------":"$"+t.toFixed(2)}},socket:{events:{connect:function(){console.log("Connected"),this.connected=!0},disconnect:function(){console.log("Disconnected"),this.connected=!1},assets:function(t){var e=this;this.cashTotal=t.cashTotal,this.portfolioTotal=t.portfolioTotal,this.referralTotal=t.referralTotal,this.assets=t.assets,this.minChangePercent=0,this.maxChangePercent=0,t.assets.forEach(function(t){t.averageCost>0&&t.changePercent<e.minChangePercent&&(e.minChangePercent=t.changePercent),t.averageCost>0&&t.changePercent>e.maxChangePercent&&(e.maxChangePercent=t.changePercent)})},quotes:function(t){this.quotes=t.quotes},transactionHistory:function(t){this.transactionHistory=t.transactionHistory},marketStateUpdate:function(t){this.marketOpen=t.open,this.tradesRemaining=t.tradesRemaining}}}}},function(t,e){},function(t,e){},function(t,e,a){function s(t){a(8)}var n=a(1)(a(7),a(11),s,null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h3",[t._v("StockStream Live (Alpha)")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("hr"),t._v(" "),t.connected?t._e():a("div",[a("h4",[t._v("Connecting...")])]),t._v(" "),a("div",{staticClass:"row full-width"},[a("div",{staticClass:"col text-center"},[t._m(2),t._v(" "),a("p",{staticClass:"trades-remaining"},[t._v(t._s(t.tradesRemaining)+" / "+t._s(t.totalTrades))])]),t._v(" "),t.marketOpen?a("div",{staticClass:"col"},[t._m(3),t._v(" "),t.transactionHistory&&t.transactionHistory.length>0?a("div",{staticClass:"card"},t._l(t.transactionHistory,function(e){return a("p",[a("span",{domProps:{textContent:t._s(e.type.toUpperCase())}}),t._v(" "+t._s(e.symbol)+" @ "+t._s(e.shares)+" x "+t._s(t.formatPrice(e.price))+"\n        ")])})):a("div",{staticClass:"card"},[a("p",[t._v("No data yet")])])]):a("div",{staticClass:"col text-center"},[a("h3",[t._v("Market Closed")])]),t._v(" "),a("div",{staticClass:"col"},[t._m(4),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"compact"},[t._v("Total: "+t._s(t.formatPrice(t.portfolioTotal+t.cashTotal)))]),t._v(" "),a("p",{staticClass:"compact"},[t._v("Cash: "+t._s(t.formatPrice(t.cashTotal)))])]),t._v(" "),a("div",{staticClass:"col"},[a("p",{staticClass:"compact"},[t._v("Portfolio: "+t._s(t.formatPrice(t.portfolioTotal)))]),t._v(" "),a("p",{staticClass:"compact"},[t._v("    • Referrals (estimated): "+t._s(t.formatPrice(t.referralTotal)))])])])])]),t._v(" "),t.assets?a("div",[t._m(5),t._v(" "),a("table",{staticClass:"bordered"},[t._m(6),t._v(" "),a("tbody",t._l(t.assets,function(e){return a("tr",[a("td",{staticClass:"symbol text-left"},[a("a",{attrs:{href:t.formatFinanceLink(e.symbol),target:"_blank"}},[t._v(t._s(e.symbol))])]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(e.shares))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatPrice(e.averageCost)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatPrice(e.currentCost)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatChange(e.change)))]),t._v(" "),a("td",{staticClass:"text-right",style:{backgroundColor:t.assetChangePercentToColor(e)}},[t._v(t._s(t.formatChangePercent(e.changePercent)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatPrice(e.paidTotal)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatPrice(e.currentTotal)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatChange(e.totalChange)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.formatPercent(e.percentPortfolio)))])])}))])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Alpha site for a live-updating view of "),a("a",{attrs:{href:"https://www.twitch.tv/stockstream"}},[t._v("StockStream")]),t._v("'s portfolio")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Historical data @ "),a("a",{attrs:{href:"https://stockstream.abal.moe/data"}},[t._v("https://stockstream.abal.moe/data")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Trades Remaining")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-center"},[t._v("Transaction History")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-center"},[t._v("Portfolio Status")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",{staticClass:"text-center"},[t._v("Portfolio")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"symbol"},[t._v("Symbol")]),t._v(" "),a("th",[t._v("Shares")]),t._v(" "),a("th",[t._v("Paid")]),t._v(" "),a("th",[t._v("Current Price")]),t._v(" "),a("th",[t._v("Change ($)")]),t._v(" "),a("th",[t._v("Change (%)")]),t._v(" "),a("th",[t._v("Paid Total")]),t._v(" "),a("th",[t._v("Current Total")]),t._v(" "),a("th",[t._v("Total Change")]),t._v(" "),a("th",[t._v("% of Portfolio")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.d934750757282e9e31b9.js.map