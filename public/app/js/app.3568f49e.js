(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);h&&h(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var h=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("ac1f"),a("5319");var s=a("f2bf"),i=a("7a23"),n={style:{"background-color":"#000000"}},r={class:"header row",style:{"background-color":"#141414","text-align":"right"}},o={class:"col-1"},l=["src"],c=Object(i["f"])('<div class="col-11"><ul class="nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Active</a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li><li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div>',1);function h(t,e,a,s,h,u){var d=Object(i["w"])("router-view");return Object(i["r"])(),Object(i["d"])("div",n,[Object(i["e"])("div",r,[Object(i["e"])("div",o,[Object(i["e"])("img",{src:h.IMG_PATH+"icon_logo.png",onClick:e[0]||(e[0]=function(){return u.pushHome&&u.pushHome.apply(u,arguments)}),style:{width:"100%",margin:"10px 0px 10px 10px"}},null,8,l)]),c]),Object(i["h"])(d)])}var u={data:function(){return{IMG_PATH:"/app/img/",SERVER_PATH:"http://localhost:8001/api/"}},methods:{pushHome:function(){this.$router.push("/")}}},d=(a("934f"),a("6b0d")),p=a.n(d);const b=p()(u,[["render",h]]);var f=b,g=a("6c02"),m=Object(i["e"])("br",null,null,-1),v={class:"top container-fluid",style:{"text-align":"center"}},O=Object(i["e"])("h3",{class:"fontBase"},"ゲームタイトル検索",-1),j=["value"],w=Object(i["e"])("hr",{style:{height:"2px","background-color":"white",border:"none"}},null,-1),D={class:"fontBase"},x={style:{width:"90%",display:"flex","flex-wrap":"wrap",margin:"auto"}};function y(t,e,a,s,n,r){var o=Object(i["w"])("game-title-row");return Object(i["r"])(),Object(i["d"])(i["a"],null,[m,Object(i["e"])("div",v,[O,Object(i["e"])("input",{type:"text",style:{width:"70%",margin:"auto"},value:n.searchWord,onInput:e[0]||(e[0]=function(){return r.updateList&&r.updateList.apply(r,arguments)}),class:"form-control",placeholder:"ゲーム名（英語表記）を入力してください","aria-label":"Game Title","aria-describedby":"search_button"},null,40,j),w,Object(i["e"])("h1",D,Object(i["y"])(n.searchLabel),1),Object(i["e"])("div",x,[(Object(i["r"])(!0),Object(i["d"])(i["a"],null,Object(i["v"])(n.dispDataList,(function(t,e){return Object(i["r"])(),Object(i["c"])(o,{key:e,rowData:t},null,8,["rowData"])})),128))]),Object(i["C"])(Object(i["e"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return r.pushNext&&r.pushNext.apply(r,arguments)})},"もっと見る",512),[[i["A"],1==this.isNext]])])],64)}a("b0c0");var L=a("bc3a"),_=a.n(L),I={name:"Top",components:{},data:function(){return{langIndex:0,btnOn:"btn-primary",btnOff:"btn-secondary",pageIndex:1,searchWord:"",isNext:!1,searchLabel:"Top Games",dispDataList:[],filterDataList:[],allRowDataList:[]}},methods:{updateList:function(t){if(this.searchWord=t.target.value,""==this.searchWord)this.filterDataList=this.allRowDataList,this.searchLabel="Top Games ("+this.filterDataList.length+")";else{this.filterDataList=[];for(var e=0;e<this.allRowDataList.length;e++){var a=this.allRowDataList[e];a["name"].toUpperCase().indexOf(this.searchWord.toUpperCase())>-1&&this.filterDataList.push(a)}this.searchLabel="Search '"+this.searchWord+"' ("+this.filterDataList.length+")"}console.log(this.searchLabel),this.pageIndex=1,this.dispList()},dispList:function(){var t=40*this.pageIndex;t>this.filterDataList.length?(t=this.filterDataList.length,this.isNext=!1):this.isNext=!0,this.dispDataList=[];for(var e=0;e<t;e++)this.dispDataList.push(this.filterDataList[e])},pushNext:function(){this.pageIndex=this.pageIndex+1,this.dispList()},pushLang:function(t){this.langIndex=t,console.log(t)},getGameList:function(){var t=this;_.a.get(this.$root.SERVER_PATH+"getGames").then((function(e){var a=e.data;console.log(a),t.allRowDataList=[],t.allRowDataList=a["retList"],t.filterDataList=t.allRowDataList,t.searchLabel="Top Games ("+t.filterDataList.length+")",t.pageIndex=1,t.dispList()})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.getGameList()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.getGameList()}))}};const k=p()(I,[["render",y]]);var T=k,R=(a("00b4"),Object(i["e"])("br",null,null,-1)),S={class:"schedule container-fluid"},G=Object(i["e"])("br",null,null,-1),H=Object(i["e"])("br",null,null,-1),W=Object(i["e"])("br",null,null,-1),A=Object(i["e"])("br",null,null,-1);function M(t,e,a,s,n,r){return Object(i["r"])(),Object(i["d"])(i["a"],null,[R,Object(i["e"])("div",S,[Object(i["e"])("button",{type:"button",onClick:e[0]||(e[0]=function(){return r.pushTimer&&r.pushTimer.apply(r,arguments)})},Object(i["y"])(n.timerLabel),1),Object(i["e"])("h1",null,Object(i["y"])(n.second),1),G,Object(i["e"])("button",{type:"button",onClick:e[1]||(e[1]=function(){return r.getGames&&r.getGames.apply(r,arguments)})},"ゲーム取得"),H,W,A,Object(i["e"])("button",{type:"button",onClick:e[2]||(e[2]=function(){return r.test&&r.test.apply(r,arguments)})},"テスト")])],64)}a("fb6a");var N={name:"Schedule",components:{},data:function(){return{second:0,isTimer:!1,timerLabel:"スタート",timerID:null}},methods:{test:function(){var t=function(t){var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMonth()).slice(-2),r=e+"-"+a+"-"+s+"-"+i+"-"+n;return r},e=new Date;e.setMinutes(e.getMinutes()-20),e.setHours(e.getHours()+2);var a=t(e);console.log(a)},pushTimer:function(){this.isTimer?(this.timerLabel="スタート",this.isTimer=!1,clearInterval(this.timerID)):(this.timerLabel="ストップ",this.isTimer=!0,this.timerID=setInterval(this.updateTime,1e3))},updateTime:function(){var t=new Date;this.second=t.getSeconds(),0==this.second&&(console.log("取得"+t),_.a.get(this.$root.SERVER_PATH+"updateStreams").then((function(t){var e=t.data;console.log(e)})).catch((function(t){console.log(t.response)})))},getGames:function(){console.log("ゲーム一覧取得"),_.a.get(this.$root.SERVER_PATH+"updateGames").then((function(t){var e=t.data;console.log(e),console.log("ゲーム一覧取得終了")})).catch((function(t){console.log(t.response)}))},updateList:function(t){if(this.searchWord=t.target.value,""==this.searchWord)this.searchLabel="Top Games",this.filterDataList=this.allRowDataList;else{this.searchLabel="Search '"+this.searchWord+"'",this.filterDataList=[];for(var e=0;e<this.allRowDataList.length;e++){var a=this.allRowDataList[e];a["name"].toUpperCase().indexOf(this.searchWord.toUpperCase())>-1&&this.filterDataList.push(a)}}console.log(this.searchLabel),this.pageIndex=1,this.dispList()},dispList:function(){var t=40*this.pageIndex;t>this.filterDataList.length?(t=this.filterDataList.length,this.isNext=!1):this.isNext=!0,this.dispDataList=[];for(var e=0;e<t;e++)this.dispDataList.push(this.filterDataList[e])},pushNext:function(){this.pageIndex=this.pageIndex+1,this.dispList()},pushLang:function(t){this.langIndex=t,console.log(t)},getGameList:function(){var t=this;_.a.get(this.$root.SERVER_PATH+"getGames").then((function(e){var a=e.data;console.log(a),t.allRowDataList=[],t.allRowDataList=a["retList"],t.filterDataList=t.allRowDataList,console.log(t.filterDataList.length),t.pageIndex=1,t.dispList()})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.getGameList()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.getGameList()}))}};const P=p()(N,[["render",M]]);var C=P,U=Object(i["e"])("br",null,null,-1),E={class:"view container-fluid",style:{"text-align":"center"}},V={class:"fontBase"},B={class:"row"},$={class:"col",style:{"text-align":"left"}},J={class:"fontBase"},F={class:"col",style:{"text-align":"right"}},Y={class:"fontBase"},z=["src"],q=["src","height","width"],K=Object(i["e"])("br",null,null,-1),Q={class:"col-9",style:{"text-align":"left",padding:"0"}},X={class:"fontBase",style:{"margin-left":"0"}},Z=Object(i["e"])("span",{style:{"font-size":"medium"}},"次の配信まで",-1),tt={class:"fontBase"},et={class:"col",style:{"text-align":"right",padding:"0"}},at=["src"],st=Object(i["e"])("br",null,null,-1),it=Object(i["e"])("h5",{class:"fontBase"},"前回の配信",-1),nt={class:"row"},rt={class:"col-auto"},ot=["src"],lt={class:"col"},ct={class:"fontBase"},ht={class:"fontBase"},ut={class:"col-auto",style:{"text-align":"right"}},dt=["src"];function pt(t,e,a,s,n,r){return Object(i["r"])(),Object(i["d"])(i["a"],null,[U,Object(i["e"])("div",E,[Object(i["e"])("div",{style:Object(i["n"])("width:"+n.stWidth+"px;text-align:left; margin:auto")},[Object(i["e"])("h4",V,Object(i["y"])(this.stData.title),1),Object(i["e"])("div",B,[Object(i["e"])("div",$,[Object(i["e"])("h6",J,"配信者："+Object(i["y"])(this.stData.user_name),1)]),Object(i["e"])("div",F,[Object(i["e"])("h6",Y,[Object(i["e"])("img",{src:this.$root.IMG_PATH+"icon_view.png",style:{width:"20px"}},null,8,z),Object(i["g"])(Object(i["y"])(this.stData.view_count)+"人が視聴中",1)])])])],4),Object(i["e"])("hr",{style:Object(i["n"])("margin:3px 0px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none; margin:auto")},null,4),Object(i["e"])("iframe",{src:n.stUrl,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:r.stHeight,width:n.stWidth},null,8,q),K,Object(i["e"])("hr",{style:Object(i["n"])("margin:0px auto 10px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none;")},null,4),Object(i["e"])("div",{class:"row",style:Object(i["n"])("width:"+n.stWidth+"px; margin:auto")},[Object(i["e"])("div",Q,[Object(i["e"])("h3",X,[Object(i["e"])("span",null,[Z,Object(i["g"])(Object(i["y"])(this.timerVal)+"秒",1)])]),Object(i["C"])(Object(i["e"])("h5",{class:"fontBase"},"まもなく次の配信「"+Object(i["y"])(this.nextData.title)+"」",513),[[i["A"],n.showNext]]),Object(i["C"])(Object(i["e"])("h5",tt," ",512),[[i["A"],!n.showNext]])]),Object(i["e"])("div",et,[Object(i["e"])("img",{src:this.$root.IMG_PATH+"btn_transition.png",style:{width:"200px"},onClick:e[0]||(e[0]=function(t){return r.pushStream(!0)})},null,8,at)])],4),st,Object(i["C"])(Object(i["e"])("div",{style:Object(i["n"])("width:"+n.stWidth+"px; text-align:left; margin:auto")},[it,Object(i["e"])("hr",{style:Object(i["n"])("margin:0px auto 10px; width:"+n.stWidth+"px; height: 2px; background-color:white; border:none; margin:auto")},null,4),Object(i["e"])("div",nt,[Object(i["e"])("div",rt,[Object(i["e"])("img",{src:r.lastIcon,style:{width:"170px",height:"96px"}},null,8,ot)]),Object(i["e"])("div",lt,[Object(i["e"])("h5",ct,Object(i["y"])(this.lastData.title),1),Object(i["e"])("h5",ht,Object(i["y"])(this.lastData.user_name),1)]),Object(i["e"])("div",ut,[Object(i["e"])("img",{src:this.$root.IMG_PATH+"btn_transition.png",style:{width:"150px"},onClick:e[1]||(e[1]=function(t){return r.pushStream(!1)})},null,8,dt)])])],4),[[i["A"],""!=this.lastData.user_id]])])],64)}a("e9c4"),a("b64b");var bt={name:"View",components:{},data:function(){return{stWidth:900,gameId:"",currentId:"",stUrl:"",stUrl2:"https://player.twitch.tv/?channel=fps_shaka&parent=localhost",showNext:!1,timerVal:99,lastData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},stData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},nextData:{user_id:"",user_name:"",title:"",view_count:"",icon:""},timerID:null}},computed:{stHeight:function(){return this.stWidth/1.6},lastIcon:function(){var t=this.lastData.icon;return t=t.replace("{width}","340"),t=t.replace("{height}","192"),t}},methods:{pushHome:function(){this.$router.push("/")},initAction:function(){this.gameId=this.$route.params.gameId,this.getStream(!0)},pushStream:function(t){t?window.open("https://www.twitch.tv/"+this.stData.user_id,"_blank"):window.open("https://www.twitch.tv/"+this.lastData.user_id,"_blank")},updateTime:function(){var t=new Date;this.timerVal=60-t.getSeconds(),30==this.timerVal?this.getStream(!1):this.timerVal<=15?this.stData.user_id!=this.nextData.user_id&&(this.showNext=!0):60==this.timerVal&&this.changeStream()},changeStream:function(){this.showNext=!1,this.lastData.user_id=this.stData.user_id,this.lastData.user_name=this.stData.user_name,this.lastData.title=this.stData.title,this.lastData.view_count=this.stData.view_count,this.lastData.icon=this.stData.icon,this.stData.user_id=this.nextData.user_id,this.stData.user_name=this.nextData.user_name,this.stData.title=this.nextData.title,this.stData.view_count=this.nextData.view_count,this.stData.icon=this.nextData.icon,this.stUrl="https://player.twitch.tv/?channel="+this.stData.user_id+"&parent=localhost"},getStream:function(t){var e=this;console.log("最新取得"),_.a.get("/storage/"+this.gameId+".txt").then((function(a){var s=JSON.parse(JSON.stringify(a.data));console.log(s);var i=Object.keys(s),n=new Date,r=function(t){var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2),i=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),r=e+"-"+a+"-"+s+"-"+i+"-"+n;return r},o=new Date;o.setMinutes(o.getMinutes()+1);var l=r(n),c=r(o);console.log(l+" "+c);for(var h=0;h<i.length;h++){var u=s[i[h]];t&&l==i[h]&&(e.stData.user_id=u["user_id"],e.stData.user_name=u["user_name"],e.stData.title=u["title"],e.stData.view_count=u["view_count"],e.stData.icon=u["icon"],console.log(e.stData.user_id),e.stUrl="https://player.twitch.tv/?channel="+e.stData.user_id+"&parent=localhost"),c==i[h]&&(e.nextData.user_id=u["user_id"],e.nextData.user_name=u["user_name"],e.nextData.title=u["title"],e.nextData.view_count=u["view_count"],e.nextData.icon=u["icon"])}t&&(e.timerID=setInterval(e.updateTime,1e3))})).catch((function(t){console.log(t.response)}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.initAction()}))},beforeRouteUpdate:function(t,e,a){a((function(t){t.initAction()}))}};const ft=p()(bt,[["render",pt]]);var gt=ft,mt=[{path:"/",name:"Top",component:T},{path:"/view/:gameId",name:"View",component:gt},{path:"/schedule",name:"Schedule",component:C}],vt=Object(g["a"])({history:Object(g["b"])(),routes:mt}),Ot=vt,jt={props:["rowData"],template:'\n        <div class="card" style="width: 200px; margin:10px 10px 10px 10px">\n\t\t\t<router-link to="#" v-on:click.prevent.stop="pushGame(this.rowData.id)">\n\t\t\t\t<img :src="iconUrl" class="card-img-top" alt="...">\n\t\t\t\t<div class="card-body">\n\t\t\t\t\t<h6 class="card-title">{{ this.rowData.name }}</h6>\n\t\t\t\t\t<h6 class="card-subtitle mb-2 text-muted">配信数：{{ this.rowData.order}}</h6>\n\t\t\t\t</div>\n\t\t\t</router-link>\n        </div>',data:function(){return{}},computed:{iconUrl:function(){var t=this.rowData.icon;return t=t.replace("{width}","200"),t=t.replace("{height}","266"),t}},methods:{pushGame:function(t){console.log(t),this.$router.push("/view/"+t)}}};Object(s["a"])(f).component("game-title-row",jt).use(Ot,_.a).mount("#app")},"695f":function(t,e,a){},"934f":function(t,e,a){"use strict";a("695f")}});
//# sourceMappingURL=app.3568f49e.js.map