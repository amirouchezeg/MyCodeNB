var jQueryCrayon=jQuery;(function(a){CrayonUtil=new function(){var c=this;var b=null;c.init=function(){b=CrayonSyntaxSettings;c.initGET()};c.addPrefixToID=function(d){return d.replace(/^([#.])?(.*)$/,"$1"+b.prefix+"$2")};c.removePrefixFromID=function(e){var d=new RegExp("^[#.]?"+b.prefix,"i");return e.replace(d,"")};c.cssElem=function(d){return a(c.addPrefixToID(d))};c.setDefault=function(e,f){return(typeof e=="undefined")?f:e};c.setMax=function(e,d){return e<=d?e:d};c.setMin=function(d,e){return d>=e?d:e};c.setRange=function(e,f,d){return c.setMax(c.setMin(e,f),d)};c.getExt=function(e){if(e.indexOf(".")==-1){return undefined}var d=e.split(".");if(d.length){d=d[d.length-1]}else{d=""}return d};c.initGET=function(){window.currentURL=window.location.protocol+"//"+window.location.host+window.location.pathname;window.currentDir=window.currentURL.substring(0,window.currentURL.lastIndexOf("/"));function d(e){e=e.split("+").join(" ");var h={},g,f=/[?&]?([^=]+)=([^&]*)/g;while(g=f.exec(e)){h[decodeURIComponent(g[1])]=decodeURIComponent(g[2])}return h}window.GET=d(document.location.search)};c.getAJAX=function(d,e){d.version=b.version;a.get(b.ajaxurl,d,e)};c.postAJAX=function(d,e){d.version=b.version;a.post(b.ajaxurl,d,e)};c.reload=function(){var d="?";for(var e in window.GET){d+=e+"="+window.GET[e]+"&"}window.location=window.currentURL+d};c.escape=function(d){if(typeof encodeURIComponent=="function"){return encodeURIComponent(d)}else{if(typeof escape!="function"){return escape(d)}else{return d}}};c.log=function(d){if(typeof console!="undefined"&&b.debug){console.log(d)}};c.decode_html=function(d){return String(d).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")};c.encode_html=function(d){return String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};c.getReadableColor=function(g,f){f=a.extend({amount:0.5,xMulti:1,yMulti:1.5,normalizeHue:[20,180],normalizeHueXMulti:1/2.5,normalizeHueYMulti:1},f);var d=tinycolor(g);var e=d.toHsv();var i={x:e.s,y:1-e.v};i.x*=f.xMulti;i.y*=f.yMulti;if(f.normalizeHue&&e.h>f.normalizeHue[0]&&e.h<f.normalizeHue[1]){i.x*=f.normalizeHueXMulti;i.y*=f.normalizeHueYMulti}var h=Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2));if(h<f.amount){e.v=0}else{e.v=1}e.s=0;return tinycolor(e).toHexString()};c.removeChars=function(e,f){var d=new RegExp("["+e+"]","gmi");return f.replace(d,"")}};a(document).ready(function(){CrayonUtil.init()});a.fn.bindFirst=function(c,e){this.bind(c,e);var b=this.data("events")[c.split(".")[0]];var d=b.pop();b.splice(0,0,d)};a.keys=function(d){var c=[];for(var b in d){c.push(b)}return c};RegExp.prototype.execAll=function(c){var f=[];var b=null;while((b=this.exec(c))!=null){var e=[];for(var d in b){if(parseInt(d)==d){e.push(b[d])}}f.push(e)}return f};RegExp.prototype.escape=function(b){return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};String.prototype.sliceReplace=function(d,b,c){return this.substring(0,d)+c+this.substring(b)};String.prototype.escape=function(){var b={"&":"&amp;","<":"&lt;",">":"&gt;"};return this.replace(/[&<>]/g,function(c){return b[c]||c})};String.prototype.linkify=function(b){b=typeof b!="undefined"?b:"";return this.replace(/(http(s)?:\/\/(\S)+)/gmi,'<a href="$1" target="'+b+'">$1</a>')};String.prototype.toTitleCase=function(){var b=this.split(/\s+/);var c="";a.each(b,function(e,d){if(d!=""){c+=d.slice(0,1).toUpperCase()+d.slice(1,d.length);if(e!=b.length-1&&b[e+1]!=""){c+=" "}}});return c}})(jQueryCrayon);jqueryPopup=Object();jqueryPopup.defaultSettings={centerBrowser:0,centerScreen:0,height:500,left:0,location:0,menubar:0,resizable:0,scrollbars:0,status:0,width:500,windowName:null,windowURL:null,top:0,toolbar:0,data:null,event:"click"};(function(a){popupWindow=function(d,c,f,b){f=typeof f!=="undefined"?f:null;b=typeof b!=="undefined"?b:null;if(typeof d=="string"){d=jQuery(d)}if(!(d instanceof jQuery)){return false}var e=jQuery.extend({},jqueryPopup.defaultSettings,c||{});d.handler=jQuery(d).bind(e.event,function(){if(f){f()}var g="height="+e.height+",width="+e.width+",toolbar="+e.toolbar+",scrollbars="+e.scrollbars+",status="+e.status+",resizable="+e.resizable+",location="+e.location+",menuBar="+e.menubar;e.windowName=e.windowName||jQuery(this).attr("name");var h=jQuery(this).attr("href");if(!e.windowURL&&!(h=="#")&&!(h=="")){e.windowURL=jQuery(this).attr("href")}var i,j;var k=null;if(e.centerBrowser){if(typeof window.screenY=="undefined"){i=(window.screenTop-120)+((((document.documentElement.clientHeight+120)/2)-(e.height/2)));j=window.screenLeft+((((document.body.offsetWidth+20)/2)-(e.width/2)))}else{i=window.screenY+(((window.outerHeight/2)-(e.height/2)));j=window.screenX+(((window.outerWidth/2)-(e.width/2)))}k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{if(e.centerScreen){i=(screen.height-e.height)/2;j=(screen.width-e.width)/2;k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{k=window.open(e.windowURL,e.windowName,g+",left="+e.left+",top="+e.top)}}if(k!=null){k.focus();if(e.data){k.document.write(e.data)}}if(b){b()}});return e};popdownWindow=function(b,c){if(typeof c=="undefined"){c="click"}b=jQuery(b);if(!(b instanceof jQuery)){return false}b.unbind(c,b.handler)}})(jQueryCrayon);(function(f){f.fn.exists=function(){return this.length!==0};f.fn.style=function(B,E,A){var D=this.get(0);if(typeof D=="undefined"){return}var C=D.style;if(typeof B!="undefined"){if(typeof E!="undefined"){A=typeof A!="undefined"?A:"";if(typeof C.setProperty!="undefined"){C.setProperty(B,E,A)}else{C[B]=E}}else{return C[B]}}else{return C}};var d="crayon-pressed";var a="";var n="div.crayon-syntax";var e=".crayon-toolbar";var c=".crayon-info";var w=".crayon-plain";var o=".crayon-main";var m=".crayon-table";var v=".crayon-loading";var h=".crayon-code";var p=".crayon-title";var l=".crayon-tools";var b=".crayon-nums";var j=".crayon-num";var q=".crayon-line";var g="crayon-wrapped";var s=".crayon-nums-content";var u=".crayon-nums-button";var k=".crayon-wrap-button";var i=".crayon-expand-button";var t="crayon-expanded crayon-toolbar-visible";var y="crayon-placeholder";var x=".crayon-popup-button";var r=".crayon-copy-button";var z=".crayon-plain-button";CrayonSyntax=new function(){var I=this;var N=new Object();var ag;var H;var G=0;var Z;I.init=function(){if(typeof N=="undefined"){N=new Object()}ag=CrayonSyntaxSettings;H=CrayonSyntaxStrings;f(n).each(function(){I.process(this)})};I.process=function(aD,aE){aD=f(aD);var ar=aD.attr("id");if(ar=="crayon-"){ar+=X()}aD.attr("id",ar);CrayonUtil.log(ar);if(typeof aE=="undefined"){aE=false}if(!aE&&!aa(ar)){return}var au=aD.find(e);var aC=aD.find(c);var ap=aD.find(w);var aq=aD.find(o);var aB=aD.find(m);var aj=aD.find(h);var aG=aD.find(p);var aA=aD.find(l);var ay=aD.find(b);var av=aD.find(s);var az=aD.find(u);var am=aD.find(k);var ao=aD.find(i);var aF=aD.find(x);var at=aD.find(r);var al=aD.find(z);N[ar]=aD;N[ar].toolbar=au;N[ar].plain=ap;N[ar].info=aC;N[ar].main=aq;N[ar].table=aB;N[ar].code=aj;N[ar].title=aG;N[ar].tools=aA;N[ar].nums=ay;N[ar].nums_content=av;N[ar].numsButton=az;N[ar].wrapButton=am;N[ar].expandButton=ao;N[ar].popup_button=aF;N[ar].copy_button=at;N[ar].plainButton=al;N[ar].numsVisible=true;N[ar].wrapped=false;N[ar].plainVisible=false;N[ar].toolbar_delay=0;N[ar].time=1;f(w).css("z-index",0);var aw=aq.style();N[ar].mainStyle={height:aw&&aw.height||"","max-height":aw&&aw.maxHeight||"","min-height":aw&&aw.minHeight||"",width:aw&&aw.width||"","max-width":aw&&aw.maxWidth||"","min-width":aw&&aw.minWidth||""};N[ar].mainHeightAuto=N[ar].mainStyle.height==""&&N[ar].mainStyle["max-height"]=="";var ak;var ax=0;N[ar].loading=true;N[ar].scrollBlockFix=false;az.click(function(){CrayonSyntax.toggleNums(ar)});am.click(function(){CrayonSyntax.toggleWrap(ar)});ao.click(function(){CrayonSyntax.toggleExpand(ar)});al.click(function(){CrayonSyntax.togglePlain(ar)});at.click(function(){CrayonSyntax.copyPlain(ar)});B(ar);var an=function(){if(ay.filter('[data-settings~="hide"]').length!=0){av.ready(function(){CrayonUtil.log("function"+ar);CrayonSyntax.toggleNums(ar,true,true)})}else{ac(ar)}if(typeof N[ar].expanded=="undefined"){if(Math.abs(N[ar].main.outerWidth()-N[ar].table.outerWidth())<10){N[ar].expandButton.hide()}else{N[ar].expandButton.show()}}if(ax==5){clearInterval(ak);N[ar].loading=false}ax++};ak=setInterval(an,300);C(ar);f(j,N[ar]).each(function(){var aJ=f(this).attr("data-line");var aI=f("#"+aJ);var aH=aI.style("height");if(aH){aI.attr("data-height",aH)}});aq.css("position","relative");aq.css("z-index",1);Z=(aD.filter('[data-settings~="touchscreen"]').length!=0);if(!Z){aq.click(function(){A(ar,"",false)});ap.click(function(){A(ar,"",false)});aC.click(function(){A(ar,"",false)})}if(aD.filter('[data-settings~="no-popup"]').length==0){N[ar].popup_settings=popupWindow(aF,{height:screen.height-200,width:screen.width-100,top:75,left:50,scrollbars:1,windowURL:"",data:""},function(){F(ar)},function(){})}ap.css("opacity",0);N[ar].toolbarVisible=true;N[ar].hasOneLine=aB.outerHeight()<au.outerHeight()*2;N[ar].toolbarMouseover=false;if(au.filter('[data-settings~="mouseover"]').length!=0&&!Z){N[ar].toolbarMouseover=true;N[ar].toolbarVisible=false;au.css("margin-top","-"+au.outerHeight()+"px");au.hide();if(au.filter('[data-settings~="overlay"]').length!=0&&!N[ar].hasOneLine){au.css("position","absolute");au.css("z-index",2);if(au.filter('[data-settings~="hide"]').length!=0){aq.click(function(){T(ar,undefined,undefined,0)});ap.click(function(){T(ar,false,undefined,0)})}}else{au.css("z-index",4)}if(au.filter('[data-settings~="delay"]').length!=0){N[ar].toolbar_delay=500}aD.mouseenter(function(){T(ar,true)}).mouseleave(function(){T(ar,false)})}else{if(Z){au.show()}}if(aD.filter('[data-settings~="minimize"]').length==0){I.minimize(ar)}if(ap.length!=0&&!Z){if(ap.filter('[data-settings~="dblclick"]').length!=0){aq.dblclick(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="click"]').length!=0){aq.click(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="mouseover"]').length!=0){aD.mouseenter(function(){CrayonSyntax.togglePlain(ar,true)}).mouseleave(function(){CrayonSyntax.togglePlain(ar,false)});az.hide()}}}if(ap.filter('[data-settings~="show-plain-default"]').length!=0){CrayonSyntax.togglePlain(ar,true)}}var ai=aD.filter('[data-settings~="expand"]').length!=0;if(!Z&&aD.filter('[data-settings~="scroll-mouseover"]').length!=0){aq.css("overflow","hidden");ap.css("overflow","hidden");aD.mouseenter(function(){M(ar,true,ai)}).mouseleave(function(){M(ar,false,ai)})}if(ai){aD.mouseenter(function(){D(ar,true)}).mouseleave(function(){D(ar,false)})}if(aD.filter('[data-settings~="disable-anim"]').length!=0){N[ar].time=0}if(aD.filter('[data-settings~="wrap"]').length!=0){N[ar].wrapped=true}N[ar].mac=aD.hasClass("crayon-os-mac");ac(ar);ab(ar);Y(ar)};var aa=function(ai){CrayonUtil.log(N);if(typeof N[ai]=="undefined"){N[ai]=f("#"+ai);CrayonUtil.log("make "+ai);return true}CrayonUtil.log("no make "+ai);return false};var X=function(){return G++};var F=function(ai){if(typeof N[ai]=="undefined"){return aa(ai)}var aj=N[ai].popup_settings;if(aj&&aj.data){return}var al=N[ai].clone(true);al.removeClass("crayon-wrapped");if(N[ai].wrapped){f(j,al).each(function(){var ao=f(this).attr("data-line");var an=f("#"+ao);var am=an.attr("data-height");am=am?am:"";if(typeof am!="undefined"){an.css("height",am);f(this).css("height",am)}})}al.find(o).css("height","");var ak="";if(N[ai].plainVisible){ak=al.find(w)}else{ak=al.find(o)}aj.data=I.getAllCSS()+'<body class="crayon-popup-window" style="padding:0; margin:0;"><div class="'+al.attr("class")+' crayon-popup">'+I.removeCssInline(I.getHtmlString(ak))+"</div></body>"};I.minimize=function(al){var ak=f('<div class="crayon-minimize crayon-button"><div>');N[al].tools.append(ak);N[al].origTitle=N[al].title.html();if(!N[al].origTitle){N[al].title.html(H.minimize)}var aj="crayon-minimized";var ai=function(){N[al].toolbarPreventHide=false;ak.remove();N[al].removeClass(aj);N[al].title.html(N[al].origTitle);var am=N[al].toolbar;if(am.filter('[data-settings~="never-show"]').length!=0){am.remove()}};N[al].toolbar.click(ai);ak.click(ai);N[al].addClass(aj);N[al].toolbarPreventHide=true;T(al,undefined,undefined,0)};I.getHtmlString=function(ai){return f("<div>").append(ai.clone()).remove().html()};I.removeCssInline=function(ak){var aj=/style\s*=\s*"([^"]+)"/gmi;var ai=null;while((ai=aj.exec(ak))!=null){var al=ai[1];al=al.replace(/\b(?:width|height)\s*:[^;]+;/gmi,"");ak=ak.sliceReplace(ai.index,ai.index+ai[0].length,'style="'+al+'"')}return ak};I.getAllCSS=function(){var ak="";var aj=f('link[rel="stylesheet"]');var ai=[];if(aj.length==1){ai=aj}else{ai=aj.filter('[href*="crayon-syntax-highlighter"], [href*="min/"]')}ai.each(function(){var al=I.getHtmlString(f(this));ak+=al});return ak};I.copyPlain=function(ak,al){if(typeof N[ak]=="undefined"){return aa(ak)}var aj=N[ak].plain;I.togglePlain(ak,true,true);T(ak,true);var ai=N[ak].mac?"\u2318":"CTRL";var am=H.copy;am=am.replace(/%s/,ai+"+C");am=am.replace(/%s/,ai+"+V");A(ak,am);return false};var A=function(aj,al,ai){if(typeof N[aj]=="undefined"){return aa(aj)}var ak=N[aj].info;if(typeof al=="undefined"){al=""}if(typeof ai=="undefined"){ai=true}if(L(ak)&&ai){ak.html("<div>"+al+"</div>");ak.css("margin-top",-ak.outerHeight());ak.show();Q(aj,ak,true);setTimeout(function(){Q(aj,ak,false)},5000)}if(!ai){Q(aj,ak,false)}};var B=function(ai){if(window.devicePixelRatio>1){var aj=f(".crayon-button-icon",N[ai].toolbar);aj.each(function(){var al=f(this).css("background-image");var ak=al.replace(/\.(?=[^\.]+$)/g,"@2x.");f(this).css("background-size","48px 128px");f(this).css("background-image",ak)})}};var L=function(ai){var aj="-"+ai.outerHeight()+"px";if(ai.css("margin-top")==aj||ai.css("display")=="none"){return true}else{return false}};var Q=function(al,ak,aj,an,am,ap){var ai=function(){if(ap){ap(al,ak)}};var ao="-"+ak.outerHeight()+"px";if(typeof aj=="undefined"){if(L(ak)){aj=true}else{aj=false}}if(typeof an=="undefined"){an=100}if(an==false){an=false}if(typeof am=="undefined"){am=0}ak.stop(true);if(aj==true){ak.show();ak.animate({marginTop:0},ah(an,al),ai)}else{if(aj==false){if(ak.css("margin-top")=="0px"&&am){ak.delay(am)}ak.animate({marginTop:ao},ah(an,al),function(){ak.hide();ai()})}}};I.togglePlain=function(al,am,aj){if(typeof N[al]=="undefined"){return aa(al)}var ai=N[al].main;var ak=N[al].plain;if((ai.is(":animated")||ak.is(":animated"))&&typeof am=="undefined"){return}ae(al);var ao,an;if(typeof am!="undefined"){if(am){ao=ai;an=ak}else{ao=ak;an=ai}}else{if(ai.css("z-index")==1){ao=ai;an=ak}else{ao=ak;an=ai}}N[al].plainVisible=(an==ak);N[al].top=ao.scrollTop();N[al].left=ao.scrollLeft();N[al].scrollChanged=false;C(al);ao.stop(true);ao.fadeTo(ah(500,al),0,function(){ao.css("z-index",0)});an.stop(true);an.fadeTo(ah(500,al),1,function(){an.css("z-index",1);if(an==ak){if(aj){ak.select()}else{}}an.scrollTop(N[al].top+1);an.scrollTop(N[al].top);an.scrollLeft(N[al].left+1);an.scrollLeft(N[al].left)});an.scrollTop(N[al].top);an.scrollLeft(N[al].left);ab(al);T(al,false);return false};I.toggleNums=function(am,al,ai){if(typeof N[am]=="undefined"){aa(am);return false}if(N[am].table.is(":animated")){return false}var ao=Math.round(N[am].nums_content.outerWidth()+1);var an="-"+ao+"px";var ak;if(typeof al!="undefined"){ak=false}else{ak=(N[am].table.css("margin-left")==an)}var aj;if(ak){aj="0px";N[am].numsVisible=true}else{N[am].table.css("margin-left","0px");N[am].numsVisible=false;aj=an}if(typeof ai!="undefined"){N[am].table.css("margin-left",aj);ac(am);return false}var ap=(N[am].table.outerWidth()+J(N[am].table.css("margin-left"))>N[am].main.outerWidth());var aq=(N[am].table.outerHeight()>N[am].main.outerHeight());if(!ap&&!aq){N[am].main.css("overflow","hidden")}N[am].table.animate({marginLeft:aj},ah(200,am),function(){if(typeof N[am]!="undefined"){ac(am);if(!ap&&!aq){N[am].main.css("overflow","auto")}}});return false};I.toggleWrap=function(ai){N[ai].wrapped=!N[ai].wrapped;Y(ai)};I.toggleExpand=function(ai){var aj=!CrayonUtil.setDefault(N[ai].expanded,false);D(ai,aj)};var Y=function(ai,aj){aj=CrayonUtil.setDefault(aj,true);if(N[ai].wrapped){N[ai].addClass(g)}else{N[ai].removeClass(g)}E(ai);if(!N[ai].expanded&&aj){V(ai)}N[ai].wrapTimes=0;clearInterval(N[ai].wrapTimer);N[ai].wrapTimer=setInterval(function(){if(N[ai].is(":visible")){O(ai);N[ai].wrapTimes++;if(N[ai].wrapTimes==5){clearInterval(N[ai].wrapTimer)}}},200)};var ad=function(ai){if(typeof N[ai]=="undefined"){aa(ai);return false}};var J=function(aj){if(typeof aj!="string"){return 0}var ai=aj.replace(/[^-0-9]/g,"");if(ai.length==0){return 0}else{return parseInt(ai)}};var ac=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].numsVisible=="undefined"){return}if(N[ai].numsVisible){N[ai].numsButton.removeClass(a);N[ai].numsButton.addClass(d)}else{N[ai].numsButton.removeClass(d);N[ai].numsButton.addClass(a)}};var E=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].wrapped=="undefined"){return}if(N[ai].wrapped){N[ai].wrapButton.removeClass(a);N[ai].wrapButton.addClass(d)}else{N[ai].wrapButton.removeClass(d);N[ai].wrapButton.addClass(a)}};var W=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].expanded=="undefined"){return}if(N[ai].expanded){N[ai].expandButton.removeClass(a);N[ai].expandButton.addClass(d)}else{N[ai].expandButton.removeClass(d);N[ai].expandButton.addClass(a)}};var ab=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].plainVisible=="undefined"){return}if(N[ai].plainVisible){N[ai].plainButton.removeClass(a);N[ai].plainButton.addClass(d)}else{N[ai].plainButton.removeClass(d);N[ai].plainButton.addClass(a)}};var T=function(aj,ai,al,ak){if(typeof N[aj]=="undefined"){return aa(aj)}else{if(!N[aj].toolbarMouseover){return}else{if(ai==false&&N[aj].toolbarPreventHide){return}else{if(Z){return}}}}var am=N[aj].toolbar;if(typeof ak=="undefined"){ak=N[aj].toolbar_delay}Q(aj,am,ai,al,ak,function(){N[aj].toolbarVisible=ai})};var R=function(ak,ai){var aj=f.extend({},ak);aj.width+=ai.width;aj.height+=ai.height;return aj};var P=function(ak,ai){var aj=f.extend({},ak);aj.width-=ai.width;aj.height-=ai.height;return aj};var U=function(ai){if(typeof N[ai].initialSize=="undefined"){N[ai].toolbarHeight=N[ai].toolbar.outerHeight();N[ai].innerSize={width:N[ai].width(),height:N[ai].height()};N[ai].outerSize={width:N[ai].outerWidth(),height:N[ai].outerHeight()};N[ai].borderSize=P(N[ai].outerSize,N[ai].innerSize);N[ai].initialSize={width:N[ai].main.outerWidth(),height:N[ai].main.outerHeight()};N[ai].initialSize.height+=N[ai].toolbarHeight;N[ai].initialOuterSize=R(N[ai].initialSize,N[ai].borderSize);N[ai].finalSize={width:N[ai].table.outerWidth(),height:N[ai].table.outerHeight()};N[ai].finalSize.height+=N[ai].toolbarHeight;N[ai].finalSize.width=CrayonUtil.setMin(N[ai].finalSize.width,N[ai].initialSize.width);N[ai].finalSize.height=CrayonUtil.setMin(N[ai].finalSize.height,N[ai].initialSize.height);N[ai].diffSize=P(N[ai].finalSize,N[ai].initialSize);N[ai].finalOuterSize=R(N[ai].finalSize,N[ai].borderSize);N[ai].initialSize.height+=N[ai].toolbar.outerHeight()}};var D=function(al,ao){if(typeof N[al]=="undefined"){return aa(al)}if(typeof ao=="undefined"){return}var aj=N[al].main;var aq=N[al].plain;if(ao){if(typeof N[al].expanded=="undefined"){U(al);N[al].expandTime=CrayonUtil.setRange(N[al].diffSize.width/3,300,800);N[al].expanded=false;var ap=N[al].finalOuterSize;N[al].placeholder=f("<div></div>");N[al].placeholder.addClass(y);N[al].placeholder.css(ap);N[al].before(N[al].placeholder);N[al].placeholder.css("margin",N[al].css("margin"));f(window).bind("resize",K)}var am={height:"auto","min-height":"none","max-height":"none"};var ai={width:"auto","min-width":"none","max-width":"none"};N[al].outerWidth(N[al].outerWidth());N[al].css({"min-width":"none","max-width":"none"});var an={width:N[al].finalOuterSize.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=N[al].finalOuterSize.height;N[al].outerHeight(N[al].outerHeight())}aj.css(am);aj.css(ai);N[al].stop(true);N[al].animate(an,ah(N[al].expandTime,al),function(){N[al].expanded=true;W(al)});N[al].placeholder.show();f("body").prepend(N[al]);N[al].addClass(t);K()}else{var ar=N[al].initialOuterSize;var ak=N[al].toolbar_delay;if(ar){N[al].stop(true);if(!N[al].expanded){N[al].delay(ak)}var an={width:ar.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=ar.height}N[al].animate(an,ah(N[al].expandTime,al),function(){af(al)})}else{setTimeout(function(){af(al)},ak)}N[al].placeholder.hide();N[al].placeholder.before(N[al]);N[al].css({left:"auto",top:"auto"});N[al].removeClass(t)}ae(al);if(ao){Y(al,false)}};var K=function(){for(uid in N){if(N[uid].hasClass(t)){N[uid].css(N[uid].placeholder.offset())}}};var af=function(ai){N[ai].expanded=false;V(ai);W(ai);if(N[ai].wrapped){Y(ai)}};var M=function(al,aj,am){if(typeof N[al]=="undefined"){return aa(al)}if(typeof aj=="undefined"||am||N[al].expanded){return}var ai=N[al].main;var ak=N[al].plain;if(aj){ai.css("overflow","auto");ak.css("overflow","auto");if(typeof N[al].top!="undefined"){visible=(ai.css("z-index")==1?ai:ak);visible.scrollTop(N[al].top-1);visible.scrollTop(N[al].top);visible.scrollLeft(N[al].left-1);visible.scrollLeft(N[al].left)}}else{visible=(ai.css("z-index")==1?ai:ak);N[al].top=visible.scrollTop();N[al].left=visible.scrollLeft();ai.css("overflow","hidden");ak.css("overflow","hidden")}N[al].scrollChanged=true;C(al)};var C=function(ai){N[ai].table.style("width","100%","important");var aj=setTimeout(function(){N[ai].table.style("width","");clearInterval(aj)},10)};var V=function(ak){var aj=N[ak].main;var ai=N[ak].mainStyle;aj.css(ai);N[ak].css("height","auto");N[ak].css("width",ai.width);N[ak].css("max-width",ai["max-width"]);N[ak].css("min-width",ai["min-width"])};var ae=function(ai){N[ai].plain.outerHeight(N[ai].main.outerHeight())};var O=function(ai){f(j,N[ai]).each(function(){var al=f(this).attr("data-line");var ak=f("#"+al);var aj=null;if(N[ai].wrapped){ak.css("height","");aj=ak.outerHeight();aj=aj?aj:""}else{aj=ak.attr("data-height");aj=aj?aj:"";ak.css("height",aj)}f(this).css("height",aj)})};var ah=function(ai,aj){if(ai=="fast"){ai=200}else{if(ai=="slow"){ai=600}else{if(!S(ai)){ai=parseInt(ai);if(isNaN(ai)){return 0}}}}return ai*N[aj].time};var S=function(ai){return typeof ai=="number"}};f(document).ready(function(){CrayonSyntax.init()})})(jQueryCrayon);
;(function(factory){var registeredInModuleLoader=false;if(typeof define==='function'&&define.amd){define(factory);registeredInModuleLoader=true}if(typeof exports==='object'){module.exports=factory();registeredInModuleLoader=true}if(!registeredInModuleLoader){var OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=OldCookies;return api}}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key]}}return result}function init(converter){function api(key,value,attributes){var result;if(typeof document==='undefined'){return}if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires}attributes.expires=attributes.expires?attributes.expires.toUTCString():'';try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result}}catch(e){}if(!converter.write){value=encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{value=converter.write(value,key)}key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);var stringifiedAttributes='';for(var attributeName in attributes){if(!attributes[attributeName]){continue}stringifiedAttributes+='; '+attributeName;if(attributes[attributeName]===true){continue}stringifiedAttributes+='='+attributes[attributeName]}return(document.cookie=key+'='+value+stringifiedAttributes)}if(!key){result={}}var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1)}try{var name=parts[0].replace(rdecode,decodeURIComponent);cookie=converter.read?converter.read(cookie,name):converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie)}catch(e){}}if(key===name){result=cookie;break}if(!key){result[name]=cookie}}catch(e){}}return result}api.set=api;api.get=function(key){return api.call(api,key)};api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments))};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}))};api.withConverter=init;return api}return init(function(){})}));
;/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jevin9@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. Jevin O. Sewaruth
 * ----------------------------------------------------------------------------
 *
 * Autogrow Textarea Plugin Version v3.0
 * http://www.technoreply.com/autogrow-textarea-plugin-3-0
 * 
 * THIS PLUGIN IS DELIVERD ON A PAY WHAT YOU WHANT BASIS. IF THE PLUGIN WAS USEFUL TO YOU, PLEASE CONSIDER BUYING THE PLUGIN HERE :
 * https://sites.fastspring.com/technoreply/instant/autogrowtextareaplugin
 *
 * Date: October 15, 2012
 */

jQuery.fn.autoGrow=function(){return this.each(function(){var createMirror=function(textarea){jQuery(textarea).after('<div class="autogrow-textarea-mirror"></div>');return jQuery(textarea).next(".autogrow-textarea-mirror")[0]};var sendContentToMirror=function(textarea){mirror.innerHTML=String(textarea.value).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br />")+".<br/>.";if(jQuery(textarea).height()!=jQuery(mirror).height())jQuery(textarea).height(jQuery(mirror).height())};
var growTextarea=function(){sendContentToMirror(this)};var mirror=createMirror(this);mirror.style.display="none";mirror.style.wordWrap="break-word";mirror.style.padding=jQuery(this).css("padding");mirror.style.width=jQuery(this).css("width");mirror.style.fontFamily=jQuery(this).css("font-family");mirror.style.fontSize=jQuery(this).css("font-size");mirror.style.lineHeight=jQuery(this).css("line-height");this.style.overflow="hidden";this.style.minHeight=this.rows+"em";this.onkeydown=growTextarea;sendContentToMirror(this)})};