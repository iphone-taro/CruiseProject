(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],h=0,p=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1332:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("5319");var s=a("f2bf"),i=a("7a23"),n={style:{"background-color":"#000000"}},o={class:"header row",style:{"background-color":"#141414","text-align":"right"}},r={class:"col-2"},l=["src"],c=Object(i["e"])("div",{class:"col-10"},null,-1);function u(t,e,a,s,u,h){var p=Object(i["v"])("router-view");return Object(i["q"])(),Object(i["d"])("div",n,[Object(i["e"])("div",o,[Object(i["e"])("div",r,[Object(i["e"])("img",{src:u.IMG_PATH+"icon_logo.png",onClick:e[0]||(e[0]=function(){return h.pushHome&&h.pushHome.apply(h,arguments)}),style:{width:"100%",margin:"10px 0px 10px 10px"}},null,8,l)]),c]),Object(i["g"])(p)])}var h={data:function(){return{IMG_PATH:"./app/img/",SERVER_PATH:"https://iphone-taro.sakura.ne.jp/CruiseProject/public/api/",DOMAIN_PATH:"iphone-taro.sakura.ne.jp"}},methods:{pushHome:function(){this.$router.push("/")}}},p=(a("7d1a"),a("6b0d")),d=a.n(p);const b=d()(h,[["render",u]]);var f=b,g=a("6c02"),m=Object(i["e"])("br",null,null,-1),O={class:"top container-fluid",style:{"text-align":"center"}},j=Object(i["e"])("h3",{class:"fontBase"},"ゲームタイトル検索",-1),v=["value"],D=Object(i["e"])("hr",{style:{height:"2px","background-color":"white",border:"none"}},null,-1),w={class:"fontBase"},x={style:{width:"90%",display:"flex","flex-wrap":"wrap",margin:"auto"}};function L(t,e,a,s,n,o){var r=Object(i["v"])("game-title-row");return Object(i["q"])(),Object(i["d"])(i["a"],null,[m,Object(i["e"])("div",O,[j,Object(i["e"])("input",{type:"text",style:{width:"70%",margin:"auto"},value:n.searchWord,onInput:e[0]||(e[0]=function(){return o.updateList&&o.updateList.apply(o,arguments)}),class:"form-control",placeholder:"ゲーム名（英語表記）を入力してください","aria-label":"Game Title","aria-describedby":"search_button"},null,40,v),D,Object(i["e"])("h1",w,Object(i["x"])(n.searchLabel),1),Object(i["e"])("div",x,[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["u"])(n.dispDataList,(function(t,e){return Object(i["q"])(),Object(i["c"])(r,{key:e,rowData:t},null,8,["rowData"])})),128))]),Object(i["B"])(Object(i["e"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return o.pushNext&&o.pushNext.apply(o,arguments)})},"もっと見る",512),[[i["z"],1==this.isNext]])])],64)}a("b0c0");var _=a("bc3a"),y=a.n(_),I={name:"Top",components:{},data:function(){return{langIndex:0,btnOn:"btn-primary",btnOff:"btn-secondary",pageIndex:1,searchWord:"",isNext:!1,searchLabel:"Top Games",dispDataList:[],filterDataList:[],allRowDataList:[]}},methods:{updateList:function(t){if(this.searchWord=t.target.value,""==this.searchWord)this.filterDataList=this.allRowDataList,this.searchLabel="Top Games ("+this.filterDataList.length+")";else{this.filterDataList=[];for(var e=0;e<this.allRowDataList.length;e++){var a=this.allRowDataList[e];a["name"].toUpperCase().indexOf(this.searchWord.toUpperCase())>-1&&this.filterDataList.push(a)}this.searchLabel="Search '"+this.searchWord+"' ("+this.filterDataList.length+")"}console.log(this.searchLabel),this.pageIndex=1,this.dispList()},dispList:function(){var t=40*this.pageIndex;t>this.filterDataList.length?(t=this.filterDataList.length,this.isNext=!1):this.isNext=!0,this.dispDataList=[];for(var e=0;e<t;e++)this.dispDataList.push(this.filterDataList[e])},pushNext:function(){this.pageIndex=this.pageIndex+1,this.dispList()},pushLang:function(t){this.langIndex=t,console.log(t)},getGameList:function(){var t=this;y.a.get(this.$root.SERVER_PATH+"getGames").then((function(e){var a=e.data;console.log(a),t.allRowDataList=[],t.allRowDataList=a["retList"],t.filterDataList=t.allRowDataList,t.searchLabel="Top Games ("+t.filterDataList.length+")",t.pageIndex=1,t.dispList()})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.getGameList()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.getGameList()}))}};const T=d()(I,[["render",L]]);var R=T,k=(a("00b4"),Object(i["e"])("br",null,null,-1)),S={class:"schedule container-fluid"},G=Object(i["e"])("br",null,null,-1),H=Object(i["e"])("br",null,null,-1),P=Object(i["e"])("br",null,null,-1),W=Object(i["e"])("br",null,null,-1);function M(t,e,a,s,n,o){return Object(i["q"])(),Object(i["d"])(i["a"],null,[k,Object(i["e"])("div",S,[Object(i["e"])("button",{type:"button",onClick:e[0]||(e[0]=function(){return o.pushTimer&&o.pushTimer.apply(o,arguments)})},Object(i["x"])(n.timerLabel),1),Object(i["e"])("h1",null,Object(i["x"])(n.second),1),G,Object(i["e"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return o.getGames&&o.getGames.apply(o,arguments)})},"ゲーム取得"),H,P,W,Object(i["e"])("button",{type:"button",onClick:e[2]||(e[2]=function(){return o.test&&o.test.apply(o,arguments)})},"テスト")])],64)}a("fb6a");var N={name:"Schedule",components:{},data:function(){return{second:0,isTimer:!1,timerLabel:"スタート",timerID:null}},methods:{test:function(){var t=function(t){var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMonth()).slice(-2),o=e+"-"+a+"-"+s+"-"+i+"-"+n;return o},e=new Date;e.setMinutes(e.getMinutes()-20),e.setHours(e.getHours()+2);var a=t(e);console.log(a)},pushTimer:function(){this.isTimer?(this.timerLabel="スタート",this.isTimer=!1,clearInterval(this.timerID)):(this.timerLabel="ストップ",this.isTimer=!0,this.timerID=setInterval(this.updateTime,1e3))},updateTime:function(){var t=new Date;this.second=t.getSeconds(),0==this.second&&(console.log("取得"+t),y.a.get(this.$root.SERVER_PATH+"updateStreams").then((function(t){var e=t.data;console.log(e)})).catch((function(t){console.log(t.response)})))},getGames:function(){console.log("ゲーム一覧取得"),y.a.get(this.$root.SERVER_PATH+"updateGames").then((function(t){var e=t.data;console.log(e),console.log("ゲーム一覧取得終了")})).catch((function(t){console.log(t.response)}))},updateList:function(t){if(this.searchWord=t.target.value,""==this.searchWord)this.searchLabel="Top Games",this.filterDataList=this.allRowDataList;else{this.searchLabel="Search '"+this.searchWord+"'",this.filterDataList=[];for(var e=0;e<this.allRowDataList.length;e++){var a=this.allRowDataList[e];a["name"].toUpperCase().indexOf(this.searchWord.toUpperCase())>-1&&this.filterDataList.push(a)}}console.log(this.searchLabel),this.pageIndex=1,this.dispList()},dispList:function(){var t=40*this.pageIndex;t>this.filterDataList.length?(t=this.filterDataList.length,this.isNext=!1):this.isNext=!0,this.dispDataList=[];for(var e=0;e<t;e++)this.dispDataList.push(this.filterDataList[e])},pushNext:function(){this.pageIndex=this.pageIndex+1,this.dispList()},pushLang:function(t){this.langIndex=t,console.log(t)},getGameList:function(){var t=this;y.a.get(this.$root.SERVER_PATH+"getGames").then((function(e){var a=e.data;console.log(a),t.allRowDataList=[],t.allRowDataList=a["retList"],t.filterDataList=t.allRowDataList,console.log(t.filterDataList.length),t.pageIndex=1,t.dispList()})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.getGameList()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.getGameList()}))}};const A=d()(N,[["render",M]]);var B=A,U=Object(i["e"])("br",null,null,-1),E={class:"view container-fluid",style:{"text-align":"center"}},V={class:"fontBase"},C={class:"row"},$={class:"col",style:{"text-align":"left"}},q={class:"fontBase"},z={class:"col",style:{"text-align":"right"}},J={class:"fontBase"},F=["src"],Y=["src","height","width"],K=Object(i["e"])("br",null,null,-1),Q={class:"col-9",style:{"text-align":"left",padding:"0"}},X={class:"fontBase",style:{"margin-left":"0"}},Z=Object(i["e"])("span",{style:{"font-size":"medium"}},"次の配信まで",-1),tt={class:"fontBase"},et={class:"col",style:{"text-align":"right",padding:"0"}},at=["src"],st=Object(i["e"])("br",null,null,-1),it=Object(i["e"])("h5",{class:"fontBase"},"前回の配信",-1),nt={class:"row"},ot={class:"col-auto"},rt=["src"],lt={class:"col"},ct={class:"fontBase"},ut={class:"fontBase"},ht={class:"col-auto",style:{"text-align":"right"}},pt=["src"];function dt(t,e,a,s,n,o){return Object(i["q"])(),Object(i["d"])(i["a"],null,[U,Object(i["e"])("div",E,[Object(i["e"])("div",{style:Object(i["m"])("width:"+n.stWidth+"px;text-align:left; margin:auto")},[Object(i["e"])("h4",V,Object(i["x"])(this.stData.title),1),Object(i["e"])("div",C,[Object(i["e"])("div",$,[Object(i["e"])("h6",q,"配信者："+Object(i["x"])(this.stData.user_name),1)]),Object(i["e"])("div",z,[Object(i["e"])("h6",J,[Object(i["e"])("img",{src:this.$root.IMG_PATH+"icon_view.png",style:{width:"20px"}},null,8,F),Object(i["f"])(Object(i["x"])(this.stData.view_count)+"人が視聴中",1)])])])],4),Object(i["e"])("hr",{style:Object(i["m"])("margin:3px 0px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none; margin:auto")},null,4),Object(i["e"])("iframe",{src:n.stUrl,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:o.stHeight,width:n.stWidth},null,8,Y),K,Object(i["e"])("hr",{style:Object(i["m"])("margin:0px auto 10px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none;")},null,4),Object(i["e"])("div",{class:"row",style:Object(i["m"])("width:"+n.stWidth+"px; margin:auto")},[Object(i["e"])("div",Q,[Object(i["e"])("h3",X,[Object(i["e"])("span",null,[Z,Object(i["f"])(Object(i["x"])(this.timerVal)+"秒",1)])]),Object(i["B"])(Object(i["e"])("h5",{class:"fontBase"},"まもなく次の配信「"+Object(i["x"])(this.nextData.title)+"」",513),[[i["z"],n.showNext]]),Object(i["B"])(Object(i["e"])("h5",tt," ",512),[[i["z"],!n.showNext]])]),Object(i["e"])("div",et,[Object(i["e"])("img",{src:this.$root.IMG_PATH+"btn_transition.png",style:{width:"200px"},onClick:e[0]||(e[0]=function(t){return o.pushStream(!0)})},null,8,at)])],4),st,Object(i["B"])(Object(i["e"])("div",{style:Object(i["m"])("width:"+n.stWidth+"px; text-align:left; margin:auto")},[it,Object(i["e"])("hr",{style:Object(i["m"])("margin:0px auto 10px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none; margin:auto")},null,4),Object(i["e"])("div",nt,[Object(i["e"])("div",ot,[Object(i["e"])("img",{src:o.lastIcon,style:{width:"170px",height:"96px"}},null,8,rt)]),Object(i["e"])("div",lt,[Object(i["e"])("h5",ct,Object(i["x"])(this.lastData.title),1),Object(i["e"])("h5",ut,Object(i["x"])(this.lastData.user_name),1)]),Object(i["e"])("div",ht,[Object(i["e"])("img",{src:this.$root.IMG_PATH+"btn_transition.png",style:{width:"150px"},onClick:e[1]||(e[1]=function(t){return o.pushStream(!1)})},null,8,pt)])])],4),[[i["z"],""!=this.lastData.user_id]])])],64)}a("e9c4"),a("b64b");var bt={name:"View",components:{},data:function(){return{stWidth:900,gameId:"",currentId:"",stUrl:"",stUrl2:"https://player.twitch.tv/?channel=fps_shaka&parent=localhost",showNext:!1,timerVal:99,lastData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},stData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},nextData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},timerID:null}},computed:{stHeight:function(){return this.stWidth/1.6},lastIcon:function(){var t=this.lastData.icon;return t=t.replace("{width}","340"),t=t.replace("{height}","192"),t}},methods:{pushHome:function(){this.$router.push("/")},initAction:function(){this.gameId=this.$route.params.gameId,this.getStream(!0)},pushStream:function(t){t?window.open("https://www.twitch.tv/"+this.stData.user_id,"_blank"):window.open("https://www.twitch.tv/"+this.lastData.user_id,"_blank")},updateTime:function(){var t=new Date;this.timerVal=60-t.getSeconds(),30==this.timerVal?this.getStream(!1):this.timerVal<=15?this.stData.user_id!=this.nextData.user_id&&(this.showNext=!0):60==this.timerVal&&this.changeStream()},changeStream:function(){this.showNext=!1,this.lastData.user_id=this.stData.user_id,this.lastData.user_name=this.stData.user_name,this.lastData.title=this.stData.title,this.lastData.view_count=this.stData.view_count,this.lastData.icon=this.stData.icon,this.stData.user_id=this.nextData.user_id,this.stData.user_name=this.nextData.user_name,this.stData.title=this.nextData.title,this.stData.view_count=this.nextData.view_count,this.stData.icon=this.nextData.icon,this.stUrl="https://player.twitch.tv/?channel="+this.stData.user_id+"&parent=iphone-taro.sakura.ne.jp"},getStream:function(t){var e=this;console.log("最新取得"),y.a.get("./storage/"+this.gameId+".txt").then((function(a){var s=JSON.parse(JSON.stringify(a.data));console.log(s);var i=Object.keys(s),n=new Date,o=function(t){var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=e+"-"+a+"-"+s+"-"+i+"-"+n;return o},r=new Date;r.setMinutes(r.getMinutes()+1);var l=o(n),c=o(r);console.log(l+" "+c);for(var u=0;u<i.length;u++){var h=s[i[u]];t&&l==i[u]&&(e.stData.user_id=h["user_id"],e.stData.user_name=h["user_name"],e.stData.title=h["title"],e.stData.view_count=h["view_count"],e.stData.icon=h["icon"],console.log(e.stData.user_id),e.stUrl="https://player.twitch.tv/?channel="+e.stData.user_id+"&parent=localhost"),c==i[u]&&(e.nextData.user_id=h["user_id"],e.nextData.user_name=h["user_name"],e.nextData.title=h["title"],e.nextData.view_count=h["view_count"],e.nextData.icon=h["icon"])}t&&(e.timerID=setInterval(e.updateTime,1e3))})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.initAction()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.initAction()}))}};const ft=d()(bt,[["render",dt]]);var gt=ft,mt=[{path:"/",name:"Top",component:R},{path:"/view/:gameId",name:"View",component:gt},{path:"/schedule",name:"Schedule",component:B}],Ot=Object(g["a"])({history:Object(g["b"])(),routes:mt}),jt=Ot,vt={props:["rowData"],template:'\n        <div class="card" style="width: 200px; margin:10px 10px 10px 10px">\n\t\t\t<router-link to="#" v-on:click.prevent.stop="pushGame(this.rowData.id)">\n\t\t\t\t<img :src="iconUrl" class="card-img-top" alt="...">\n\t\t\t\t<div class="card-body">\n\t\t\t\t\t<h6 class="card-title">{{ this.rowData.name }}</h6>\n\t\t\t\t\t<h6 class="card-subtitle mb-2 text-muted">配信数：{{ this.rowData.order}}</h6>\n\t\t\t\t</div>\n\t\t\t</router-link>\n        </div>',data:function(){return{}},computed:{iconUrl:function(){var t=this.rowData.icon;return t=t.replace("{width}","200"),t=t.replace("{height}","266"),t}},methods:{pushGame:function(t){console.log(t),this.$router.push("/view/"+t)}}};Object(s["a"])(f).component("game-title-row",vt).use(jt,y.a).mount("#app")},"7d1a":function(t,e,a){"use strict";a("1332")}});
//# sourceMappingURL=app.005410c8.js.map