//	HYPE.documents["juhid3b"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="juhid3b.hyperesources",c="juhid3b",e="juhid3b_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/juhid3b_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"moneyGraph",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById('moneyText').style.color='#323232';\n\thypeDocument.getElementById('moneyText').style.fontSize='1.1em';\n\t\n\thypeDocument.getElementById('workerText').style.color='#9f9a95';\n\thypeDocument.getElementById('workerText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('sectorText').style.color='#9f9a95';\n\thypeDocument.getElementById('sectorText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('ageText').style.color='#9f9a95';\n\thypeDocument.getElementById('ageText').style.fontSize='1em';\t\n\tvar info = tulu;\n\t\n\tvar ctx = document.getElementById(\"chartjs\");\n\n\tChart.defaults.global.defaultFontFamily = 'Roboto';\n\tChart.defaults.global.maintainAspectRatio = false;\n\tChart.defaults.global.animation.duration = 500;\n\tChart.defaults.global.legend.position = 'bottom';\n\t\n\tvar myChart = new Chart(ctx, {\n    \ttype: 'bar',\n    \tdata: {\n        \tlabels: info.dates,\n        \tdatasets: [{\n        \t\t\n\t\t\t\tlabel: info.label,\n            \tdata: info.numbers,\n            \tborderColor: info.color ,\n            \tbackgroundColor: info.color,\t\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10            \n        \t},{        \t\n        \t\t\n\t\t\t\tlabel: info.label2 ,\n            \tdata: info.numbers2,\n            \tborderColor:info.color2 ,\n            \tbackgroundColor: info.color2,\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10\n        \t}]\n   \t\t},\n   \t\toptions: {\n   \t\t\tplugins: {\n\t\t\t\t\tdatalabels: {\n\t\t\t\t\t\t\n\t\t\t\t\t\tborderColor: '#57897c',\n\t\t\t\t\t\tborderWidth: 0,\n\t\t\t\t\t\tborderRadius: 4,\n\t\t\t\t\t\talign:'end',\n\t\t\t\t\t\toffset: -20,\n\t\t\t\t\t\tanchor: 'end',\n\t\t\t\t\t\tformatter: \n\t\t\t\t\t\t\tfunction(value, context){\n\t\t\t\t\t\t\t\treturn info.kokku[context.dataIndex];\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\tcolor: '#FFFFFF',\n\t\t\t\t\t\tfont: {\n\t\t\t\t\t\t\tweight: 'bold'\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\n\t   \t\tscales: {\n        \t\t\n        \t\txAxes:[{\n        \t\t\tstacked: true,\n        \t\t\tticks:{\n        \t\t\t\t\n        \t\t\t},\n        \t\t\tgridLines:{\n        \t\t\t\ttickMarkLength: 10,\n        \t\t\t\tdrawBorder: false,\n        \t\t\t\tdisplay: false,\n        \t\t\t} \n        \t\t}],\n            \tyAxes:[{\n            \t\tstacked: true,\n            \t\tgridLines:{\n            \t\t\tdrawBorder: false,\n            \t\t\tdisplay: false,\n            \t\t},\n                \tticks: {\n                \t\t \n                \t}\n            \t}]\n       \t \t}\n    \t}\n\t});\n\t\n}",identifier:"7"},{name:"age",source:"function(hypeDocument, element, event) {\t\t\n\tvar age = hypeDocument.getElementById('age')\n\t\n\tage.style.transform= 'scale(1.3)';\n\tage.style.transition= '.6s';\n\t\n}",identifier:"31"},{name:"ageOut",source:"function(hypeDocument, element, event) {\t\n\tvar age = hypeDocument.getElementById('age')\n\t\n\tage.style.transform= 'scale(1)';\n\tage.style.transition= '.6s';\n}",identifier:"32"},{name:"sector",source:"function(hypeDocument, element, event) {\t\n\tvar sector = hypeDocument.getElementById('sector')\n\t\n\tsector.style.transform= 'scale(1.3)';\n\tsector.style.transition= '.6s';\n}",identifier:"51"},{name:"sectorOut",source:"function(hypeDocument, element, event) {\tvar sector = hypeDocument.getElementById('sector')\n\t\n\tsector.style.transform= 'scale(1)';\n\tsector.style.transition= '.6s';\n\n\t\n}",identifier:"52"},{name:"worker",source:"function(hypeDocument, element, event) {\tvar worker = hypeDocument.getElementById('worker')\n\t\n\tworker.style.transform= 'scale(1.3)';\n\tworker.style.transition= '.6s';\n\n\t\n}",identifier:"53"},{name:"workerOut",source:"function(hypeDocument, element, event) {\tvar worker = hypeDocument.getElementById('worker')\n\t\n\tworker.style.transform= 'scale(1)';\n\tworker.style.transition= '.6s';\n\t\n}",identifier:"54"},{name:"money",source:"function(hypeDocument, element, event) {\tvar money = hypeDocument.getElementById('money')\n\t\n\tmoney.style.transform= 'scale(1.3)';\n\tmoney.style.transition= '.6s';\t\n\t\n}",identifier:"55"},{name:"moneyOut",source:"function(hypeDocument, element, event) {\tvar money = hypeDocument.getElementById('money')\n\t\n\tmoney.style.transform= 'scale(1)';\n\tmoney.style.transition= '.6s';\t\n\t\n}",identifier:"56"},{name:"workerGraph",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById('workerText').style.color='#323232';\n\thypeDocument.getElementById('workerText').style.fontSize='1.1em';\n\t\n\thypeDocument.getElementById('ageText').style.color='#9f9a95';\n\thypeDocument.getElementById('ageText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('sectorText').style.color='#9f9a95';\n\thypeDocument.getElementById('sectorText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('moneyText').style.color='#9f9a95';\n\thypeDocument.getElementById('moneyText').style.fontSize='1em';\t\n\tvar info = tootaja;\n\t\n\tvar ctx = document.getElementById(\"chartjs\");\n\n\tChart.defaults.global.defaultFontFamily = 'Roboto';\n\tChart.defaults.global.maintainAspectRatio = false;\n\tChart.defaults.global.animation.duration = 500;\n\tChart.defaults.global.legend.position = 'bottom';\n\t\n\tvar myChart = new Chart(ctx, {\n    \ttype: 'bar',\n    \tdata: {\n        \tlabels: info.dates,\n        \tdatasets: [{\n        \t\t\n\t\t\t\tlabel: info.label,\n            \tdata: info.numbers,\n            \tborderColor: info.color ,\n            \tbackgroundColor: info.color,\t\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10            \n        \t},{        \t\n        \t\t\n\t\t\t\tlabel: info.label2,\n            \tdata: info.numbers2,\n            \tborderColor:info.color2 ,\n            \tbackgroundColor: info.color2,\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10\n        \t}]\n   \t\t},\n   \t\toptions: {\n\t   \t\tscales: {\n        \t\t\n        \t\txAxes:[{\n        \t\t\tstacked: true,\n        \t\t\tticks:{\n        \t\t\t\t\n        \t\t\t},\n        \t\t\tgridLines:{\n        \t\t\t\ttickMarkLength: 10,\n        \t\t\t\tdrawBorder: false,\n        \t\t\t\tdisplay: false,\n        \t\t\t} \n        \t\t}],\n            \tyAxes:[{\n            \t\tstacked: true,\n            \t\tgridLines:{\n            \t\t\tdrawBorder: false,\n            \t\t\tdisplay: false,\n            \t\t},\n                \tticks: {\n                \t\t \n                \t}\n            \t}]\n       \t \t}\n    \t}\n\t});\n\t\n\n\t\n}",identifier:"62"},{name:"sectorGraph",source:"function(hypeDocument, element, event) {\n\thypeDocument.getElementById('sectorText').style.color='#323232';\n\thypeDocument.getElementById('sectorText').style.fontSize='1.1em';\n\t\n\thypeDocument.getElementById('workerText').style.color='#9f9a95';\n\thypeDocument.getElementById('workerText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('ageText').style.color='#9f9a95';\n\thypeDocument.getElementById('ageText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('moneyText').style.color='#9f9a95';\n\thypeDocument.getElementById('moneyText').style.fontSize='1em';\n\t\t\n\tvar info = eriala;\n\t\n\tvar ctx = document.getElementById(\"chartjs\");\n\n\tChart.defaults.global.defaultFontFamily = 'Roboto';\n\tChart.defaults.global.maintainAspectRatio = false;\n\tChart.defaults.global.animation.duration = 500;\n\tChart.defaults.global.legend.position = 'bottom';\n\t\n\tvar myChart = new Chart(ctx, {\n    \ttype: 'horizontalBar',\n    \tdata: {\n        \tlabels: info.dates,\n        \tdatasets: [{\n        \t\t\n\t\t\t\tlabel: info.label,\n            \tdata: info.numbers,\n            \tborderColor: info.color ,\n            \tbackgroundColor: info.color,\t\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10            \n        \t},{        \t\n        \t\t\n\t\t\t\tlabel: info.label2 ,\n            \tdata: info.numbers2,\n            \tborderColor:info.color2 ,\n            \tbackgroundColor: info.color2,\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10\n        \t}]\n   \t\t},\n   \t\toptions: {\n\t   \t\tscales: {\n        \t\t\n        \t\txAxes:[{\n        \t\t\tstacked: true,\n        \t\t\tticks:{\n        \t\t\t\t\n        \t\t\t},\n        \t\t\tgridLines:{\n        \t\t\t\ttickMarkLength: 10,\n        \t\t\t\tdrawBorder: false,\n        \t\t\t\tdisplay: false,\n        \t\t\t} \n        \t\t}],\n            \tyAxes:[{\n            \t\tstacked: true,\n            \t\tgridLines:{\n            \t\t\tdrawBorder: false,\n            \t\t\tdisplay: false,\n            \t\t},\n                \tticks: {\n                \t\t \n                \t}\n            \t}]\n       \t \t}\n    \t}\n\t});\n\t\n\n\t\n}",identifier:"63"},{name:"ageGraph",source:"function(hypeDocument, element, event) {\n\thypeDocument.getElementById('ageText').style.color='#323232';\n\thypeDocument.getElementById('ageText').style.fontSize='1.1em';\n\t\n\thypeDocument.getElementById('workerText').style.color='#9f9a95';\n\thypeDocument.getElementById('workerText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('sectorText').style.color='#9f9a95';\n\thypeDocument.getElementById('sectorText').style.fontSize='1em';\n\t\n\thypeDocument.getElementById('moneyText').style.color='#9f9a95';\n\thypeDocument.getElementById('moneyText').style.fontSize='1em';\n\t\n\t\t\n\tvar info = vanus;\n\t\n\tvar ctx = document.getElementById(\"chartjs\");\n\n\tChart.defaults.global.defaultFontFamily = 'Roboto';\n\tChart.defaults.global.maintainAspectRatio = false;\n\tChart.defaults.global.animation.duration = 500;\n\tChart.defaults.global.legend.position = 'bottom';\n\t\n\tvar myChart = new Chart(ctx, {\n    \ttype: 'bar',\n    \tdata: {\n        \tlabels: info.dates,\n        \tdatasets: [{\n        \t\t\n\t\t\t\tlabel: info.label,\n            \tdata: info.numbers,\n            \tborderColor: info.color ,\n            \tbackgroundColor: info.color,\t\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10            \n        \t},{        \t\n        \t\t\n\t\t\t\tlabel: info.label2 ,\n            \tdata: info.numbers2,\n            \tborderColor:info.color2 ,\n            \tbackgroundColor: info.color2,\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\n            \tpointHitRadius: 10\n        \t}]\n   \t\t},\n   \t\toptions: {\n\t   \t\tscales: {\n        \t\t\n        \t\txAxes:[{\n        \t\t\tstacked: true,\n        \t\t\tticks:{\n        \t\t\t\t\n        \t\t\t},\n        \t\t\tgridLines:{\n        \t\t\t\ttickMarkLength: 10,\n        \t\t\t\tdrawBorder: false,\n        \t\t\t\tdisplay: false,\n        \t\t\t} \n        \t\t}],\n            \tyAxes:[{\n            \t\tstacked: true,\n            \t\tgridLines:{\n            \t\t\tdrawBorder: false,\n            \t\t\tdisplay: false,\n            \t\t},\n                \tticks: {\n                \t\t \n                \t}\n            \t}]\n       \t \t}\n    \t}\n\t});\n\t\n\n\t\n}",identifier:"64"},{name:"limpia",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById('paleta').innerHTML ='&nbsp';\n\thypeDocument.getElementById('paleta').innerHTML ='<canvas id=\"chartjs\" style=\"height:100%;width: 100%;\"></canvas>';\n}",identifier:"66"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"3":{p:1,n:"PastedVector-2.svg",g:"44",t:"image/svg+xml"},"-2":{n:"blank.gif"},"4":{p:1,n:"PastedVector-3.svg",g:"46",t:"image/svg+xml"},"0":{p:1,n:"logo.svg",g:"9",t:"image/svg+xml"},"5":{n:"data.js"},"1":{p:1,n:"PastedVector.svg",g:"27",t:"image/svg+xml"},"-1":{n:"PIE.htc"},"2":{p:1,n:"PastedVector-1.svg",g:"33",t:"image/svg+xml"}},h,["<link href='https://fonts.googleapis.com/css?family=Roboto:300&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Roboto:700&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",A:{a:[{p:4,h:"64"}]},p:"600px",cA:false,a:100,Z:700,Y:945,c:"#FFF6F3",L:[],bY:1,d:945,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["84","90","86","70","73","85","88","81","79","82","71","76","75","77","87","80","72","78","89","83","74","69"],n:"Untitled Layout","_":0,v:{"77":{h:"33",p:"no-repeat",x:"visible",a:9,q:"100% 100%",b:0,j:"absolute",bF:"75",z:3,k:"div",dB:"img",d:109,c:83,r:"inline"},"85":{aD:{a:[{p:4,h:"31"}]},x:"visible",a:98,dB:"button",b:24,j:"absolute",bF:"90",aA:{a:[{p:4,h:"66"},{p:4,h:"64"}]},z:5,k:"div",d:116,c:116,aP:"pointer",aC:{a:[{p:4,h:"32"}]}},"78":{G:"#000000",aU:8,aV:8,r:"inline",s:"Roboto",t:16,Z:"break-word",v:"700",i:"moneyText",w:"M\u00fc\u00fcgitulu",bF:"75",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:5,F:"center",b:113},"70":{aD:{a:[{p:4,h:"53"}]},x:"visible",a:544,dB:"button",b:14,j:"absolute",bF:"90",aA:{a:[{p:4,h:"66"},{p:4,h:"62"}]},z:7,k:"div",d:135,c:100,aP:"pointer",aC:{a:[{p:4,h:"54"}]}},"86":{h:"27",p:"no-repeat",x:"visible",a:-8,q:"100% 100%",b:-20,j:"absolute",bF:"85",z:3,k:"div",dB:"img",d:136,c:132,r:"inline"},"79":{aD:{a:[{p:4,h:"51"}]},x:"visible",a:319,dB:"button",b:27,j:"absolute",bF:"90",aA:{a:[{p:4,h:"66"},{p:4,h:"63"}]},z:6,k:"div",d:109,c:111,aP:"pointer",aC:{a:[{p:4,h:"52"}]}},"71":{c:100,d:100,I:"None",e:0.5,J:"None",K:"None",g:"#E4BF1F",L:"None",M:0,i:"worker",N:0,aI:"50%",A:"#D8DDE4",x:"visible",O:0,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"70",P:0,a:0,aL:"50%",b:20},"87":{G:"#000000",aU:8,aV:8,r:"inline",s:"Roboto",t:16,Z:"break-word",v:"700",i:"ageText",w:"Vanus",bF:"85",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:27,F:"center",b:120},"72":{G:"#000000",aU:8,aV:8,r:"inline",s:"Roboto",t:16,Z:"break-word",v:"700",i:"workerText",w:"T\u00f6\u00f6tajad",bF:"70",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:11,F:"center",b:130},"88":{c:100,cP:"circulo",d:100,I:"None",e:0.5,J:"None",K:"None",g:"#285589",L:"None",M:0,i:"age",N:0,aI:"50%",A:"#D8DDE4",O:0,x:"visible",j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"85",P:0,a:8,aL:"50%",b:10},"80":{G:"#000000",aU:8,aV:8,r:"inline",s:"Roboto",t:16,Z:"break-word",v:"700",i:"sectorText",w:"Eriala",bF:"79",j:"absolute",x:"visible",yy:"nowrap",k:"div",y:"preserve",z:2,aS:8,aT:8,a:28,F:"center",b:117},"73":{h:"46",p:"no-repeat",x:"visible",a:26,q:"100% 100%",b:-8,j:"absolute",bF:"70",z:3,k:"div",dB:"img",d:135,c:48,r:"inline"},"89":{c:949,bS:68,d:434,I:"None",J:"None",K:"None",g:"#FFF6F3",L:"None",M:0,i:"paleta",w:"<canvas id=\"chartjs\" style=\"height:100%;width: 100%;\"></canvas>",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,bF:"90",D:"#D8DDE4",P:0,a:-1,b:196},"81":{w:"",h:"44",p:"no-repeat",x:"visible",a:1,q:"100% 100%",b:0,j:"absolute",dB:"img",z:3,k:"div",bF:"79",d:109,c:111,r:"inline"},"74":{h:"9",p:"no-repeat",x:"visible",a:873,q:"100% 100%",b:646,j:"absolute",bS:37,z:4,k:"div",dB:"img",d:26,bF:"90",c:72,r:"inline"},"82":{c:100,d:100,I:"None",e:0.5,J:"None",K:"None",g:"#AC7D42",L:"None",M:0,i:"sector",N:0,aI:"50%",A:"#D8DDE4",x:"visible",O:0,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"79",P:0,a:6,aL:"50%",b:7},"75":{aD:{a:[{p:4,h:"55"}]},x:"visible",a:763,dB:"button",b:31,j:"absolute",bF:"90",aA:{a:[{p:4,h:"66"},{p:4,h:"7"}]},z:8,k:"div",d:109,c:100,aP:"pointer",aC:{a:[{p:4,h:"56"}]}},"90":{k:"div",x:"visible",c:945,d:700,z:1,a:0,j:"absolute",bS:375,b:0},"83":{G:"#9F9A97",aU:8,c:930,bS:39,d:15,aV:8,r:"inline",s:"Roboto",t:13,g:"",Z:"break-word",v:"300",w:"(Vajuta tegevusalale graafiku legendis)",bF:"90",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:-1,F:"center",b:629},"76":{c:100,d:100,I:"None",e:0.5,J:"None",K:"None",g:"#9F9A95",L:"None",M:0,i:"money",N:0,aI:"50%",A:"#D8DDE4",x:"visible",O:0,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",bF:"75",P:0,a:0,aL:"50%",b:3},"69":{G:"#9F9A97",aU:8,c:933,bS:39,d:18,aV:8,r:"inline",s:"Roboto",t:16,u:"italic",Z:"break-word",v:"normal",w:"<b>Allikas:</b> Infopank &nbsp; / &nbsp;<b>Graafik:</b> Miguel \u00c1lvarez<br>",bF:"90",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:-1,F:"right",b:666},"84":{G:"#323232",aU:8,c:933,bS:39,d:31,aV:8,r:"inline",s:"Roboto",t:19,Z:"break-word",v:"700",i:"title",w:"",bF:"90",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:-4,b:0}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
