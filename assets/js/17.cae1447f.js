(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{366:function(e,a,o){e.exports=o.p+"assets/img/header-img.3f32d0d3.png"},367:function(e,a,o){e.exports=o.p+"assets/img/img-1.916024d0.png"},450:function(e,a,o){"use strict";o.r(a);var t=o(25),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cookie、session、webstorage的区别和作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie、session、webstorage的区别和作用"}},[e._v("#")]),e._v(" Cookie、session、WebStorage的区别和作用")]),e._v(" "),t("p",[t("img",{attrs:{src:o(366),alt:"image.png"}}),t("br"),e._v(" "),t("br"),e._v("Cookie、session、localStorage、sessionStorage是困扰了我很久的几个概念，一直分不清它们之前的区别与联系。这里要解释一下，localStorage和sessionStorage都是WebStorage中的API，也就是HTML5新增的浏览器本地存储API。"),t("br"),e._v("今天我们通过这篇文档来好好梳理一下。首先通过Cookie、session的区别来解读一下它们的用途。\n"),t("a",{attrs:{name:"d41d8cd9"}})]),e._v(" "),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),t("p",[t("a",{attrs:{name:"01ab1b0b"}})]),e._v(" "),t("h3",{attrs:{id:"cookie和session的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie和session的区别"}},[e._v("#")]),e._v(" Cookie和session的区别")]),e._v(" "),t("ul",[t("li",[e._v("Cookie存储于客户端（浏览器），而session存储于服务器端（后台）")]),e._v(" "),t("li",[e._v("Cookie的安全性相比于session较弱，用户可以分析存放在本地的Cookie并进行Cookie欺骗，考虑到安全性应该使用session")]),e._v(" "),t("li",[e._v("session会在一定时间内保存在服务器上， 当访问增多时，会占用服务器资源，所以考虑到服务器性能的话，应该使用Cookie")]),e._v(" "),t("li",[e._v("Cookie存储容量有限制，单个cookie保存数据不能超过4k，且很多浏览器限制一个站点最多保存20个Cookie。而Cookie，一般默认大小是1024k")]),e._v(" "),t("li",[e._v("session是服务端产生的用于校验的身份标识、一般在app中通过Cookie将服务端产生的session_id传输到浏览器，并保存在本地，用于下一次请求发送。而Cookie是用来存储和传输的API，参与server-client通信过程。")])]),e._v(" "),t("p",[e._v("了解完Cookie和session的区别以后，我们再来看下Cookie和WebStorage的区别\n"),t("a",{attrs:{name:"d41d8cd9-1"}})]),e._v(" "),t("h3",{attrs:{id:"-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[e._v("#")])]),e._v(" "),t("p",[t("a",{attrs:{name:"09778bb4"}})]),e._v(" "),t("h3",{attrs:{id:"cookie和webstorage的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie和webstorage的区别"}},[e._v("#")]),e._v(" Cookie和WebStorage的区别")]),e._v(" "),t("p",[t("br"),t("img",{attrs:{src:o(367),alt:"image.png"}}),t("br"),e._v(" "),t("br"),e._v("文档最开始我们就讲过，WebStorage分为localStorage和sessionStorage。而它们与Cookie的区别又在哪里呢。通过分析上图我们可以得知：")]),e._v(" "),t("ul",[t("li",[e._v("Cookie可以参与http的传输过程，而WebStorage只是存储在浏览器中")]),e._v(" "),t("li",[e._v("存储大小区别：Cookie是4k、WebStorage可以达到5M甚至更大")]),e._v(" "),t("li",[e._v("数据的生命周期：Cookie默认是在关闭浏览器后失效，也可以手动设置；localStorage除非手动清除，否则永久保存、sessionStorage只有在会话期间有效，也就是关闭浏览器前有效")]),e._v(" "),t("li",[e._v("作用域区别：sessionStorage不在不同的浏览器窗口间共享，即使是同一个页面；localStorage只在所有同源窗口间共享。")])]),e._v(" "),t("p",[e._v("比较完它们之间的差异以后，我们来看看具体的定义是什么吧！定义这块我引用的MDN的解释：\n"),t("a",{attrs:{name:"d41d8cd9-2"}})]),e._v(" "),t("h3",{attrs:{id:"-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-3"}},[e._v("#")])]),e._v(" "),t("p",[t("a",{attrs:{name:"7139633d"}})]),e._v(" "),t("h3",{attrs:{id:"http-cookie-定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-cookie-定义"}},[e._v("#")]),e._v(" HTTP Cookie 定义")]),e._v(" "),t("p",[e._v("HTTP Cookie（也叫Web Cookie或浏览器Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器发起请求时被携带并发送到服务器上。通常，它用于告知服务器两个请求是否来自同一浏览器，如保持用户的登录状态。Cookie使基于无状态的HTTP协议记录稳定的状态信息成为了可能。"),t("br"),e._v(" "),t("br"),e._v("Cookie主要用于以下三个方面："),t("br"),e._v("1、会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）"),t("br"),e._v("2、个性化设置（如用户自定义设置、主题等）"),t("br"),e._v("3、浏览器行为跟踪（如跟踪分析用户行为等）"),t("br")]),e._v(" "),t("p",[e._v(":::tips\n要查看Cookie存储（或网页上能够使用其他的存储方式），你可以在开发者工具中启用存储查看（Storage Inspector）功能，并在存储树上选中Cookie\n:::")]),e._v(" "),t("p",[t("a",{attrs:{name:"0410bd45"}})]),e._v(" "),t("h4",{attrs:{id:"创建-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-cookie"}},[e._v("#")]),e._v(" 创建 Cookie")]),e._v(" "),t("p",[e._v("当服务器收到HTTP请求时，服务器可以在响应头里面添加一个"),t("code",[e._v("[Set-Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie)")]),e._v("选项。浏览器收到响应后通常会保存下Cookie，之后对服务器每一次请求中都通过Cookie请求头部将Cookie信息发送给服务器。另外，Cookie的过期时间、域、路径、有效期、适用站点都可以根据使用来指定。具体参数说明查看"),t("code",[e._v("[Set-Cookie](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie)")]),t("br")]),e._v(" "),t("p",[t("a",{attrs:{name:"cc040f5e"}})]),e._v(" "),t("h4",{attrs:{id:"会话期cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会话期cookie"}},[e._v("#")]),e._v(" 会话期Cookie")]),e._v(" "),t("p",[e._v("会话期Cookie是最简单的Cookie：浏览器关闭之后它会被自动删除，也就是说它仅在会话期内有效。会话期Cookie不需要指定过期时间(Expires)或者有效期(Max-Age)。需要注意的是， 有些浏览器提供了会话恢复功能，这种情况下即使关闭了浏览器，会话期Cookie也会被保存下来，就好像浏览器从来没有关闭一样。"),t("br")]),e._v(" "),t("p",[t("a",{attrs:{name:"fb81e11f"}})]),e._v(" "),t("h4",{attrs:{id:"持久性cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#持久性cookie"}},[e._v("#")]),e._v(" 持久性Cookie")]),e._v(" "),t("p",[e._v("持久性Cookie一般是指定了一个特定的过期时间（expires）或有效期（Max-Age），即便是关闭浏览器，没有过过期时间，这个Cookie也有效。示例如下："),t("br")]),e._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("Set"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Cookie"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("a3fWa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Expires"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Wed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2015")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("07")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("GMT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("a",{attrs:{name:"80765204"}})]),e._v(" "),t("h4",{attrs:{id:"cookie的secure和httponly标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie的secure和httponly标记"}},[e._v("#")]),e._v(" Cookie的Secure和HttpOnly标记")]),e._v(" "),t("p",[e._v("标记为Secure的Cookie只应通过被HTTPS协议加密过的请求发送给服务端。但即便设置了Secure标记，敏感信息也不应该通过Cookie传输，因为Cookie有其固有的不安全性，Secure标记也无法提供确切的安全保障，从Chrome52和Firefox 52开始，不安去的站点（http：）无法使用Cookie的Secure标记"),t("br"),e._v("为避免跨域脚本（XSS）攻击，通过Javascrpt的Document.cookieAPI无法访问带HttpOnly标记的Cookie，它们只应该发送给服务端。如果包含服务端的session信息的Cookie不想被用户调用，就应该设置HttpOnly"),t("br")]),e._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("Set"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Cookie"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" id"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("a3fWa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Expires"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Wed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("21")]),e._v(" Oct "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2015")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("07")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("28")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("GMT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" Secure"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" HttpOnly\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("a",{attrs:{name:"48efad66"}})]),e._v(" "),t("h4",{attrs:{id:"cookie作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie作用域"}},[e._v("#")]),e._v(" Cookie作用域")]),e._v(" "),t("p",[e._v("Domain和Path标识定义了Cookie的作用域：即Cookie应该发送给哪些URL。"),t("br"),e._v("Domain标识指定了哪些主机可以接受Cookie。如果不指定，默认为当前文档的主机。如果指定了Domain。则一般包括子域名。"),t("br"),e._v("Path标识指定了主机下的哪些路径可以接受Cookie（该URL路径必须存在于请求URL中）。以字符%x2F('/')作为路径分隔符，子路径也会被匹配。"),t("br")]),e._v(" "),t("p",[t("a",{attrs:{name:"e270befc"}})]),e._v(" "),t("h3",{attrs:{id:"web-storage的概念和用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#web-storage的概念和用法"}},[e._v("#")]),e._v(" Web Storage的概念和用法")]),e._v(" "),t("p",[e._v("Web Storage包含如下两种机制：")]),e._v(" "),t("ul",[t("li",[e._v("sessionStorage：为每一个给定的源维持一个独立的存储区域， 该存储区域在页面会话期间可用（即只要浏览器处于打开状态，包括页面重新加载和恢复）。")]),e._v(" "),t("li",[e._v("localStorage：同样的功能，但是在浏览器关闭后，然后重新打开浏览器仍然存在。")])]),e._v(" "),t("p",[e._v("这两种机制是通过Window.sessionStorage和Window.localStorage属性使用，---调用其中任一对象会创建"),t("code",[e._v("[Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)")]),e._v("对象，通过"),t("code",[e._v("[Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)")]),e._v("对象，可以设置、获取和移除数据项。对于每一个源SessionStorage和localStorage使用不用的Storage对象---独立运行和控制"),t("br")]),e._v(" "),t("p",[e._v(":::tips\n注意：")]),e._v(" "),t("ul",[t("li",[e._v("从Firefox45开始，当浏览器崩溃或重启时，每个源的存储大小将限制在10M，以避免因过度使用Web storage引起的内存问题")]),e._v(" "),t("li",[e._v("若用户"),t("a",{attrs:{href:"https://support.mozilla.org/en-US/kb/disable-third-party-cookies",target:"_blank",rel:"noopener noreferrer"}},[e._v("禁用第三方cookie"),t("OutboundLink")],1),e._v("，那么将不允许来自第三方IFrame对Web Storage的访问（FireFox43开始执行）")]),e._v(" "),t("li",[e._v("本地存储不同于mozStorage或"),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Session_store_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Session store API"),t("OutboundLink")],1),e._v("\n:::\n"),t("a",{attrs:{name:"d41d8cd9-3"}})])]),e._v(" "),t("h3",{attrs:{id:"-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-4"}},[e._v("#")])]),e._v(" "),t("p",[t("a",{attrs:{name:"1d3cf112"}})]),e._v(" "),t("h3",{attrs:{id:"sessionstorage的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sessionstorage的概念"}},[e._v("#")]),e._v(" sessionStorage的概念")]),e._v(" "),t("p",[e._v("sessionStorage属性允许你访问一个session Storage对象。它与localStorage相似，不用之处在于localStorage里面存储的数据没有过期时间设置。而存储在sessionStorage里面的数据在页面会话结束时会被清楚。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话，这点和sessionStorage的运行方式不同。\n"),t("a",{attrs:{name:"d41d8cd9-4"}})]),e._v(" "),t("h3",{attrs:{id:"-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#-5"}},[e._v("#")])]),e._v(" "),t("p",[t("a",{attrs:{name:"7f7a909e"}})]),e._v(" "),t("h3",{attrs:{id:"localstorage的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#localstorage的概念"}},[e._v("#")]),e._v(" localStorage的概念")]),e._v(" "),t("p",[e._v("只读的localStorage属性允许你访问一个"),t("code",[e._v("[Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)")]),e._v(" 源的对象"),t("code",[e._v("[Storage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage)")]),e._v("；其存储的数据能在跨浏览器会话保留。localstorage类似seesionStorage，但其区别在于：存储在localStorage的数据可以长期保留；而当页面会话结束--也就是说，当页面被关闭时，存储在sessionStorage的数据会被清除。"),t("br"),e._v("无论数据存储在sessionStorage还是localStorage中，它们都特定于页面的协议"),t("br"),e._v("localStorage中的键值对总是以字符串的形式存储。"),t("br"),e._v("​"),t("br"),e._v(" "),t("a",{attrs:{name:"25f9c7fa"}})]),e._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("看过这些概念以后，其实session不应该和Cookie、WebStorage放在一起比较，因为session主要作用不是存储，而是身份验证。Cookie和WebStorage都是用来存储重要信息的API。我们在日常使用过程中不光光要考虑使用性能问题还应该考虑安全性问题。由于Cookie、localStorage、sessionStorage都有可能被用户提取，所以我们在应该尽量避免使用它们来存储系统的敏感信息。还要注意代码是否存在XSS注入的风险。")])])}),[],!1,null,null,null);a.default=s.exports}}]);