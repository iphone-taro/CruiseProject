(function(t){function e(e){for(var s,o,c=e[0],r=e[1],l=e[2],h=0,d=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==i[r]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="app/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("5319");var s=a("f2bf"),i=a("7a23"),n={class:"header row",style:{"background-color":"#141414","text-align":"right"}},o={class:"col-2"},c=["src"],r=Object(i["g"])("div",{class:"col-10"},[Object(i["g"])("ul",{class:"nav justify-content-end",style:{"margin-top":"auto"}},[Object(i["g"])("li",{class:"nav-item"},[Object(i["g"])("a",{class:"nav-link","aria-current":"page","data-bs-toggle":"collapse",href:"#collapse1",role:"button","aria-expanded":"false","aria-controls":"collapse1"}," ワンツイとは？")]),Object(i["g"])("li",{class:"nav-item"},[Object(i["g"])("a",{class:"nav-link","aria-current":"page","data-bs-toggle":"collapse",href:"#collapse2",role:"button","aria-expanded":"false","aria-controls":"collapse2"}," 製作者 / お問い合わせ")])])],-1),l={class:"accordion",id:"accordion",style:{"text-align":"left"}},u=Object(i["g"])("div",{class:"accordion-item",style:{"background-color":"black"}},[Object(i["g"])("div",{id:"collapse1",class:"accordion-collapse collapse","data-bs-parent":"#accordion"},[Object(i["g"])("div",{class:"accordion-body"},[Object(i["g"])("h2",null,"ワンツイとは？"),Object(i["h"])(" ワンツイ（One Minute Twitch）とは、ゲームごとに日本人のTwitchストリーマーの中から1分間ランダムで配信を流すサイトです。"),Object(i["g"])("br"),Object(i["h"])(" サムネイルだけではわからない、ストリーマーの声やライブの雰囲気などを見て、感じることができます。"),Object(i["g"])("br"),Object(i["h"])(" 1分間で切り替わってしまうため、続きが気になった配信があったら本配信へ遊びに行きましょう。"),Object(i["g"])("br"),Object(i["h"])(" 視聴者が少ない配信にも面白い配信はたくさんあるので、ぜひ新しい配信を探してみてください。"),Object(i["g"])("br")])])],-1),h={class:"accordion-item"},d={id:"collapse2",class:"accordion-collapse collapse","data-bs-parent":"#accordion"},p={class:"accordion-body"},g=Object(i["g"])("h2",null,"製作者",-1),b={class:"row"},f={class:"col"},m=["src"],O=Object(i["g"])("div",{class:"col"}," テスト ",-1);function j(t,e,a,s,j,v){var w=Object(i["x"])("router-view");return Object(i["s"])(),Object(i["f"])("div",null,[Object(i["g"])("div",n,[Object(i["g"])("div",o,[Object(i["g"])("img",{src:j.IMG_PATH+"icon_logo.png",onClick:e[0]||(e[0]=function(){return v.pushHome&&v.pushHome.apply(v,arguments)}),style:{width:"200px",margin:"10px 0px 10px 10px"}},null,8,c)]),r]),Object(i["g"])("div",l,[u,Object(i["g"])("div",h,[Object(i["g"])("div",d,[Object(i["g"])("div",p,[g,Object(i["g"])("div",b,[Object(i["g"])("div",f,[Object(i["g"])("img",{src:this.$root.IMG_PATH+"icon_taro.png",style:{width:"200px"}},null,8,m)]),O])])])])]),Object(i["i"])(w)])}var v={data:function(){return{IMG_PATH:"./app/img/",SERVER_PATH:"https://iphone-taro.sakura.ne.jp/CruiseProject/public/api/",DOMAIN_PATH:"iphone-taro.sakura.ne.jp"}},methods:{pushHome:function(){this.$router.push("/")}}},w=(a("83ed"),a("6b0d")),D=a.n(w);const x=D()(v,[["render",j]]);var y=x,L=a("6c02"),_=Object(i["g"])("br",null,null,-1),I={class:"top container-fluid",style:{"text-align":"center"}},T=Object(i["g"])("h3",{class:"fontBase"},"ゲームタイトル検索",-1),k=["value"],R=Object(i["g"])("hr",{style:{height:"2px","background-color":"white",border:"none"}},null,-1),S={class:"fontBase"},G={style:{width:"90%",display:"flex","flex-wrap":"wrap","justify-content":"center",margin:"auto"}};function H(t,e,a,s,n,o){var c=Object(i["x"])("game-title-row");return Object(i["s"])(),Object(i["f"])(i["a"],null,[_,Object(i["g"])("div",I,[T,Object(i["g"])("input",{type:"text",style:{width:"70%",margin:"auto"},value:n.searchWord,onInput:e[0]||(e[0]=function(){return o.updateList&&o.updateList.apply(o,arguments)}),class:"form-control",placeholder:"ゲーム名（英語表記）を入力してください","aria-label":"Game Title","aria-describedby":"search_button"},null,40,k),R,Object(i["g"])("h1",S,Object(i["z"])(n.searchLabel),1),Object(i["g"])("div",G,[(Object(i["s"])(!0),Object(i["f"])(i["a"],null,Object(i["w"])(n.dispDataList,(function(t,e){return Object(i["s"])(),Object(i["d"])(c,{key:e,rowData:t},null,8,["rowData"])})),128))]),Object(i["E"])(Object(i["g"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return o.pushNext&&o.pushNext.apply(o,arguments)})},"もっと見る",512),[[i["B"],1==this.isNext]]),Object(i["i"])(i["b"],{name:"fade"},{default:Object(i["D"])((function(){return[n.show?(Object(i["s"])(),Object(i["f"])("button",{key:0,type:"button",style:{position:"fixed",bottom:"15px",right:"15px"},onClick:e[2]||(e[2]=function(){return o.moveTop&&o.moveTop.apply(o,arguments)})},"上へ")):Object(i["e"])("",!0)]})),_:1})])],64)}a("b0c0");var M=a("bc3a"),P=a.n(M),A={name:"Top",components:{},data:function(){return{langIndex:0,btnOn:"btn-primary",btnOff:"btn-secondary",pageIndex:1,searchWord:"",isNext:!1,searchLabel:"Top Games",dispDataList:[],filterDataList:[],allRowDataList:[],show:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){console.log(window.scrollY),t.show=window.scrollY>150}))},methods:{updateList:function(t){if(this.searchWord=t.target.value,""==this.searchWord)this.filterDataList=this.allRowDataList,this.searchLabel="Top Games ("+this.filterDataList.length+")";else{this.filterDataList=[];for(var e=0;e<this.allRowDataList.length;e++){var a=this.allRowDataList[e];a["name"].toUpperCase().indexOf(this.searchWord.toUpperCase())>-1&&this.filterDataList.push(a)}this.searchLabel="Search '"+this.searchWord+"' ("+this.filterDataList.length+")"}console.log(this.searchLabel),this.pageIndex=1,this.dispList()},dispList:function(){var t=40*this.pageIndex;t>this.filterDataList.length?(t=this.filterDataList.length,this.isNext=!1):this.isNext=!0,this.dispDataList=[];for(var e=0;e<t;e++)this.dispDataList.push(this.filterDataList[e])},pushNext:function(){this.pageIndex=this.pageIndex+1,this.dispList()},moveTop:function(){window.scrollTo(0,-100)},pushLang:function(t){this.langIndex=t,console.log(t)},getGameList:function(){var t=this;P.a.get(this.$root.SERVER_PATH+"getGames").then((function(e){var a=e.data;console.log(a),t.allRowDataList=[],t.allRowDataList=a["retList"],t.filterDataList=t.allRowDataList,t.searchLabel="Top Games ("+t.filterDataList.length+")",t.pageIndex=1,t.dispList()})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.getGameList()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.getGameList()}))}};const N=D()(A,[["render",H]]);var W=N,E=(a("00b4"),Object(i["g"])("br",null,null,-1)),B={class:"schedule container-fluid"},U=Object(i["g"])("br",null,null,-1),$=Object(i["g"])("br",null,null,-1),C=Object(i["g"])("br",null,null,-1),V=Object(i["g"])("br",null,null,-1);function z(t,e,a,s,n,o){return Object(i["s"])(),Object(i["f"])(i["a"],null,[E,Object(i["g"])("div",B,[Object(i["g"])("button",{type:"button",onClick:e[0]||(e[0]=function(){return o.pushTimer&&o.pushTimer.apply(o,arguments)})},Object(i["z"])(n.timerLabel),1),Object(i["g"])("h1",null,Object(i["z"])(n.second),1),U,Object(i["g"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return o.getGames&&o.getGames.apply(o,arguments)})},"ゲーム取得"),$,C,V,Object(i["g"])("button",{type:"button",onClick:e[2]||(e[2]=function(){return o.test&&o.test.apply(o,arguments)})},"テスト")])],64)}a("fb6a");var J={name:"Schedule",components:{},data:function(){return{second:0,isTimer:!1,timerLabel:"スタート",timerID:null}},methods:{test:function(){var t=function(t){var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMonth()).slice(-2),o=e+"-"+a+"-"+s+"-"+i+"-"+n;return o},e=new Date;e.setMinutes(e.getMinutes()-20),e.setHours(e.getHours()+2);var a=t(e);console.log(a)},pushTimer:function(){this.isTimer?(this.timerLabel="スタート",this.isTimer=!1,clearInterval(this.timerID)):(this.timerLabel="ストップ",this.isTimer=!0,this.timerID=setInterval(this.updateTime,1e3))},updateTime:function(){var t=new Date;this.second=t.getSeconds(),0==this.second&&(console.log("取得"+t),P.a.get(this.$root.SERVER_PATH+"updateStreams").then((function(t){var e=t.data;console.log(e)})).catch((function(t){console.log(t.response)})))},getGames:function(){console.log("ゲーム一覧取得"),P.a.get(this.$root.SERVER_PATH+"updateGames").then((function(t){var e=t.data;console.log(e),console.log("ゲーム一覧取得終了")})).catch((function(t){console.log(t.response)}))},updateList:function(t){if(this.searchWord=t.target.value,""==this.searchWord)this.searchLabel="Top Games",this.filterDataList=this.allRowDataList;else{this.searchLabel="Search '"+this.searchWord+"'",this.filterDataList=[];for(var e=0;e<this.allRowDataList.length;e++){var a=this.allRowDataList[e];a["name"].toUpperCase().indexOf(this.searchWord.toUpperCase())>-1&&this.filterDataList.push(a)}}console.log(this.searchLabel),this.pageIndex=1,this.dispList()},dispList:function(){var t=40*this.pageIndex;t>this.filterDataList.length?(t=this.filterDataList.length,this.isNext=!1):this.isNext=!0,this.dispDataList=[];for(var e=0;e<t;e++)this.dispDataList.push(this.filterDataList[e])},pushNext:function(){this.pageIndex=this.pageIndex+1,this.dispList()},pushLang:function(t){this.langIndex=t,console.log(t)},getGameList:function(){var t=this;P.a.get(this.$root.SERVER_PATH+"getGames").then((function(e){var a=e.data;console.log(a),t.allRowDataList=[],t.allRowDataList=a["retList"],t.filterDataList=t.allRowDataList,console.log(t.filterDataList.length),t.pageIndex=1,t.dispList()})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.getGameList()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.getGameList()}))}};const Y=D()(J,[["render",z]]);var F=Y,q=Object(i["g"])("br",null,null,-1),K={class:"view container-fluid",style:{"text-align":"center"}},Q={class:"fontBase"},X={class:"row"},Z={class:"col",style:{"text-align":"left"}},tt={class:"fontBase"},et={class:"col",style:{"text-align":"right"}},at={class:"fontBase"},st=["src"],it=["src","height","width"],nt=Object(i["g"])("br",null,null,-1),ot={class:"col-9",style:{"text-align":"left",padding:"0"}},ct={class:"fontBase",style:{"margin-left":"0"}},rt=Object(i["g"])("span",{style:{"font-size":"medium"}},"次の配信まで",-1),lt={class:"fontBase"},ut={class:"col",style:{"text-align":"right",padding:"0"}},ht=["src"],dt=Object(i["g"])("br",null,null,-1),pt=Object(i["g"])("h5",{class:"fontBase"},"前回の配信",-1),gt={class:"row"},bt={class:"col-auto"},ft=["src"],mt={class:"col"},Ot={class:"fontBase"},jt={class:"fontBase"},vt={class:"col-auto",style:{"text-align":"right"}},wt=["src"];function Dt(t,e,a,s,n,o){return Object(i["s"])(),Object(i["f"])(i["a"],null,[q,Object(i["g"])("div",K,[Object(i["g"])("div",{style:Object(i["o"])("width:"+n.stWidth+"px;text-align:left; margin:auto")},[Object(i["g"])("h4",Q,Object(i["z"])(this.stData.title),1),Object(i["g"])("div",X,[Object(i["g"])("div",Z,[Object(i["g"])("h6",tt,"配信者："+Object(i["z"])(this.stData.user_name),1)]),Object(i["g"])("div",et,[Object(i["g"])("h6",at,[Object(i["g"])("img",{src:this.$root.IMG_PATH+"icon_view.png",style:{width:"20px"}},null,8,st),Object(i["h"])(Object(i["z"])(this.stData.view_count)+"人が視聴中",1)])])])],4),Object(i["g"])("hr",{style:Object(i["o"])("margin:3px 0px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none; margin:auto")},null,4),Object(i["g"])("iframe",{src:n.stUrl,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:o.stHeight,width:n.stWidth},null,8,it),nt,Object(i["g"])("hr",{style:Object(i["o"])("margin:0px auto 10px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none;")},null,4),Object(i["g"])("div",{class:"row",style:Object(i["o"])("width:"+n.stWidth+"px; margin:auto")},[Object(i["g"])("div",ot,[Object(i["g"])("h3",ct,[Object(i["g"])("span",null,[rt,Object(i["h"])(Object(i["z"])(this.timerVal)+"秒",1)])]),Object(i["E"])(Object(i["g"])("h5",{class:"fontBase"},"まもなく次の配信「"+Object(i["z"])(this.nextData.title)+"」",513),[[i["B"],n.showNext]]),Object(i["E"])(Object(i["g"])("h5",lt," ",512),[[i["B"],!n.showNext]])]),Object(i["g"])("div",ut,[Object(i["g"])("img",{src:this.$root.IMG_PATH+"btn_transition.png",style:{width:"200px"},onClick:e[0]||(e[0]=function(t){return o.pushStream(!0)})},null,8,ht)])],4),dt,Object(i["E"])(Object(i["g"])("div",{style:Object(i["o"])("width:"+n.stWidth+"px; text-align:left; margin:auto")},[pt,Object(i["g"])("hr",{style:Object(i["o"])("margin:0px auto 10px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none; margin:auto")},null,4),Object(i["g"])("div",gt,[Object(i["g"])("div",bt,[Object(i["g"])("img",{src:o.lastIcon,style:{width:"170px",height:"96px"}},null,8,ft)]),Object(i["g"])("div",mt,[Object(i["g"])("h5",Ot,Object(i["z"])(this.lastData.title),1),Object(i["g"])("h5",jt,Object(i["z"])(this.lastData.user_name),1)]),Object(i["g"])("div",vt,[Object(i["g"])("img",{src:this.$root.IMG_PATH+"btn_transition.png",style:{width:"150px"},onClick:e[1]||(e[1]=function(t){return o.pushStream(!1)})},null,8,wt)])])],4),[[i["B"],""!=this.lastData.user_id]])])],64)}a("e9c4"),a("b64b");var xt={name:"View",components:{},data:function(){return{stWidth:900,gameId:"",currentId:"",stUrl:"",stUrl2:"https://player.twitch.tv/?channel=fps_shaka&parent=localhost",showNext:!1,timerVal:99,lastData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},stData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},nextData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},timerID:null}},computed:{stHeight:function(){return this.stWidth/1.6},lastIcon:function(){var t=this.lastData.icon;return t=t.replace("{width}","340"),t=t.replace("{height}","192"),t}},methods:{pushHome:function(){this.$router.push("/")},initAction:function(){this.gameId=this.$route.params.gameId,this.getStream(!0)},pushStream:function(t){t?window.open("https://www.twitch.tv/"+this.stData.user_id,"_blank"):window.open("https://www.twitch.tv/"+this.lastData.user_id,"_blank")},updateTime:function(){var t=new Date;this.timerVal=60-t.getSeconds(),30==this.timerVal?this.getStream(!1):this.timerVal<=15?this.stData.user_id!=this.nextData.user_id&&(this.showNext=!0):60==this.timerVal&&this.changeStream()},changeStream:function(){this.showNext=!1,this.lastData.user_id=this.stData.user_id,this.lastData.user_name=this.stData.user_name,this.lastData.title=this.stData.title,this.lastData.view_count=this.stData.view_count,this.lastData.icon=this.stData.icon,this.stData.user_id=this.nextData.user_id,this.stData.user_name=this.nextData.user_name,this.stData.title=this.nextData.title,this.stData.view_count=this.nextData.view_count,this.stData.icon=this.nextData.icon,this.stUrl="https://player.twitch.tv/?channel="+this.stData.user_id+"&parent="+this.$root.DOMAIN_PATH},getStream:function(t){var e=this;console.log("最新取得"),P.a.get("./storage/"+this.gameId+".txt").then((function(a){var s=JSON.parse(JSON.stringify(a.data));console.log(s);var i=Object.keys(s),n=new Date,o=function(t){var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=e+"-"+a+"-"+s+"-"+i+"-"+n;return o},c=new Date;c.setMinutes(c.getMinutes()+1);var r=o(n),l=o(c);console.log(r+" "+l);for(var u=0;u<i.length;u++){var h=s[i[u]];t&&r==i[u]&&(e.stData.user_id=h["user_id"],e.stData.user_name=h["user_name"],e.stData.title=h["title"],e.stData.view_count=h["view_count"],e.stData.icon=h["icon"],console.log(e.stData.user_id),e.stUrl="https://player.twitch.tv/?channel="+e.stData.user_id+"&parent="+e.$root.DOMAIN_PATH),l==i[u]&&(e.nextData.user_id=h["user_id"],e.nextData.user_name=h["user_name"],e.nextData.title=h["title"],e.nextData.view_count=h["view_count"],e.nextData.icon=h["icon"])}t&&(e.timerID=setInterval(e.updateTime,1e3))})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.initAction()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.initAction()}))}};const yt=D()(xt,[["render",Dt]]);var Lt=yt,_t=[{path:"/",name:"Top",component:W},{path:"/view/:gameId",name:"View",component:Lt},{path:"/schedule",name:"Schedule",component:F}],It=Object(L["a"])({history:Object(L["b"])(),routes:_t}),Tt=It,kt={props:["rowData"],template:'\n        <div class="card" style="width: 200px; margin:10px 10px 10px 10px">\n\t\t\t<router-link to="#" v-on:click.prevent.stop="pushGame(this.rowData.id)">\n\t\t\t\t<img :src="iconUrl" class="card-img-top" alt="...">\n\t\t\t\t<div class="card-body">\n\t\t\t\t\t<h6 class="card-title">{{ this.rowData.name }}</h6>\n\t\t\t\t\t<h6 class="card-subtitle mb-2 text-muted">配信数：{{ this.rowData.order}}</h6>\n\t\t\t\t</div>\n\t\t\t</router-link>\n        </div>',data:function(){return{}},computed:{iconUrl:function(){var t=this.rowData.icon;return t=t.replace("{width}","200"),t=t.replace("{height}","266"),t}},methods:{pushGame:function(t){console.log(t),this.$router.push("/view/"+t)}}};Object(s["a"])(y).component("game-title-row",kt).use(Tt,P.a).mount("#app")},"68cf":function(t,e,a){},"83ed":function(t,e,a){"use strict";a("68cf")}});
//# sourceMappingURL=app.b1aa7621.js.map