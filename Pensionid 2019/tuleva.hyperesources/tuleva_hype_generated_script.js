//	HYPE.documents["tuleva"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="tuleva.hyperesources",c="tuleva",e="tuleva_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src,d=null!=b?b.indexOf("/tuleva_hype_generated_script.js"):-1;if(-1!=d){h=b.substr(0,d);break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_584","HYPE_dtl_584",!0==(null!=a&&10>a||false==!0)?"HYPE-584.full.min.js":"HYPE-584.thin.min.js"),false==!0&&(a=a||l("HYPE_w_584","HYPE_wdtl_584","HYPE-584.waypoints.min.js")),a))return;f=window.HYPE.documents;
if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);d=document.getElementsByTagName("div");b=!1;for(a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"loadChart",source:"function(hypeDocument, element, event) {\t\n\t//Asumptions\n\tuser.contribution = palk.value*0.06;\n\tuser.age = vanus.value;\n\tuser.salary = palk.value;\n\tuser.years = Math.min(user.age - 23, 15);\n\tuser.startSalary = user.salary/Math.pow((1+(3/100)),user.years);\n\tuser.pillarToday = user.startSalary*12*0.06*((Math.pow(1+3.92/100,user.years)-Math.pow(1+3/100,user.years))/(0.92/100));\n\tuser.yearsLeft = 65-user.age;\n\t\n\t//Savings\n\tuser.futureContributionsNofee = user.contribution*12*((Math.pow(1+5/100,user.yearsLeft)-Math.pow(1+3/100,user.yearsLeft))/(2/100));\n\tuser.futureContributionsTuleva = user.contribution*12*((Math.pow(1+4.66/100,user.yearsLeft)-Math.pow(1+3/100,user.yearsLeft))/(1.66/100));\n\tuser.futureContributionsTypical = user.contribution*12*((Math.pow(1+3.92/100,user.yearsLeft)-Math.pow(1+3/100,user.yearsLeft))/(0.92/100));\n\tuser.futurePillarNofee = user.pillarToday*Math.pow((1+5/100),user.yearsLeft);\n\tuser.futurePillarTuleva = user.pillarToday*Math.pow((1+4.66/100),user.yearsLeft);\n\tuser.futurePillarTypical = user.pillarToday*Math.pow((1+3.92/100),user.yearsLeft);\n\tuser.totalExpectedSavingsNofee =  user.futureContributionsNofee + user.futurePillarNofee;\n\tuser.totalExpectedSavingsTuleva =  user.futureContributionsTuleva + user.futurePillarTuleva;\n\tuser.totalExpectedSavingsTypical =  user.futureContributionsTypical + user.futurePillarTypical;\n\t\n\tuser.costOfFeeTuleva = user.totalExpectedSavingsNofee - user.totalExpectedSavingsTuleva;\n\tuser.costOfFeeTypical = user.totalExpectedSavingsNofee - user.totalExpectedSavingsTypical;\n\t\n\tuser.savings = user.costOfFeeTypical - user.costOfFeeTuleva;\n\t\n\tvar savings = document.getElementById('savings');\n\tsavings.innerHTML = user.savings.toLocaleString('ru-RU', { maximumFractionDigits: 0 }) + ' \u20ac';\n\tdocument.getElementById('savingsText').style.visibility = 'visible';\n\t\n\t//Graph\n\tvar years = [];\n\t/*years = [10,Math.min(15,user.yearsLeft),Math.min(20,user.yearsLeft),Math.min(25,user.yearsLeft),Math.min(30,user.yearsLeft),Math.min(35,user.yearsLeft),Math.min(40,user.yearsLeft)];\n\tvar limpia = false\n\tfor (i=0; i<years.length; i++){\n\t\tif(years[i]===years[i-1]){\n\t\t\tvar cut = i;\n\t\t\tbreak;\n\t\t};\n\t};\n\tyears.splice(cut, years.length-cut);*/\n\tfor(i=0; i<user.yearsLeft; i++){\n\t\tyears[i]= i\n\t}\n\tconsole.log(years)\n\tinfo.dates = years;\n\t\n\tvar numbersAverage = []; \n\tfor(i=0; i<years.length; i++){\n\t\tnumbersAverage[i] = user.contribution*12*(Math.pow((1+3.92/100),years[i])-Math.pow((1+3/100),years[i]))/(0.92/100)+(user.pillarToday)*Math.pow(1+3.92/100, years[i]);\n\t};\n\tvar numbersLow = []; \n\tfor(i=0; i<years.length; i++){\n\t\tnumbersLow[i] = user.contribution*12*(Math.pow((1+4.66/100),years[i])-Math.pow((1+3/100),years[i]))/(1.66/100)+(user.pillarToday)*Math.pow(1+4.66/100, years[i]);\n\t};\n\t\n\tinfo.numbers = numbersAverage;\n\tinfo.numbers2 = numbersLow;\n\t\n\tChart.defaults.global.defaultFontFamily = 'PT Serif';\n\tChart.defaults.global.maintainAspectRatio = false;\n\tChart.defaults.global.animation.duration = 500;\n\tChart.defaults.global.legend.display = false;\n\tChart.defaults.global.legend.position = 'bottom';\n\tChart.defaults.global.legend.labels.usePointStyle = true;\n\t\n\t//clean canvas\n\tdocument.getElementById(\"table\").innerHTML = '&nbsp;';\n\tdocument.getElementById(\"table\").innerHTML = '<canvas id=\"chartjs\" style=\"height:100%;width: 100%; max-width:720px\"></canvas>';\n\t\n\t//draw canvas\n\tvar ctx = document.getElementById(\"chartjs\");\n\tvar myChart = new Chart(ctx, {\n    \ttype: 'line',\n    \tdata: {\n        \tlabels: info.dates,\n        \tdatasets: [{\n\t\t\t\tlabel: info.label,\n            \tdata: info.numbers,\n            \tborderColor:'#b5cac2',\n            \tbackgroundColor:'#b5cac2',\t\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\t\n            \tpointHitRadius: 10            \n        \t},{\n\t\t\t\tlabel: info.label2,\n            \tdata: info.numbers2,\n            \tborderColor:'#57897c',\n            \tbackgroundColor:'#57897c',\t\n            \tborderWidth: 0,\n            \tfill: true,\n            \tpointRadius:0,\t\n            \tpointHitRadius: 10            \n        \t}]\n   \t\t},\n   \t\toptions: {\n   \t\t\tlayout:{\n   \t\t\t\tpadding:{\n   \t\t\t\t\ttop:20\n   \t\t\t\t}\n   \t\t\t},\n   \t\t\ttooltips:{\n   \t\t\t\tcallbacks:{\n   \t\t\t\t\tlabel: \n   \t\t\t\t\tfunction(tooltipItem, data) {\n   \t\t\t\t\t\tvar number = tooltipItem.yLabel;\n                \t\treturn data.datasets[tooltipItem.datasetIndex].label + ': ' + number.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' ' + info.unit;\n                \t}\n   \t\t\t\t}\n   \t\t\t}, \n   \t\t\tplugins: {\n\t\t\t\t\tdatalabels: {\n\t\t\t\t\t\tdisplay:false,\n\t\t\t\t\t\t//\tfunction(context){\n\t\t\t\t\t\t//\t\tvar index = context.dataIndex;\n\t\t\t\t\t\t//\t\tvar value = context.dataset.data[index];\n\t\t\t\t\t\t//\t\treturn index % 4  ? null:\n\t\t\t\t\t\t//\t\tvalue\n\t\t\t\t\t\t//\t},\n\t\t\t\t\t\tborderColor: '#57897c',\n\t\t\t\t\t\tborderWidth: 0,\n\t\t\t\t\t\tborderRadius: 4,\n\t\t\t\t\t\talign: function(context) {\n\t\t\t\t\t\t    var index = context.dataIndex;\n\t\t\t\t\t\t    var value = context.dataset.data[index];\n\t\t\t\t\t\t    return value < 0 ? 'start' :  // put negative values on the left\n\t\t\t\t\t        'end'\n\t\t\t\t\t\t},\n\t\t\t\t\t\toffset: 0,\n\t\t\t\t\t\tanchor: function(context) {\n\t\t\t\t\t\t    var index = context.dataIndex;\n\t\t\t\t\t\t    var value = context.dataset.data[index];\n\t\t\t\t\t\t    return value < 0 ? 'start' :   // put negative values on the left\n\t\t\t\t\t        'end'\n\t\t\t\t\t\t},\n\t\t\t\t\t\tformatter: //changin decimal separation to commas\n\t\t\t\t\t\tfunction(value, context){\n\t\t\t\t\t\tvar number = value;\n\t\t\t\t\t\tvar newNumber = number.toLocaleString('ru-RU', { maximumFractionDigits: 2 });\n\t\t\t\t\t\treturn newNumber ;\n\t\t\t\t\t\t},\n\t\t\t\t\t\tcolor: '#323232',\n\t\t\t\t\t\tfont: {\n\t\t\t\t\t\t\tweight: 'bold'\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t   \t\tscales: {\n        \t\t\n        \t\txAxes:[{\n        \t\t\tstacked: false,\n        \t\t\tticks:{\n        \t\t\t\tmaxTicksLimit: 5\n        \t\t\t},\n        \t\t\tgridLines:{\n        \t\t\t\ttickMarkLength: 10,\n        \t\t\t\tdrawBorder: false,\n        \t\t\t\tdisplay: false,\n        \t\t\t} \n        \t\t}],\n            \tyAxes:[{\n            \t\tstacked: false,\n            \t\tgridLines:{\n            \t\t\tdrawBorder: false,\n            \t\t\tdisplay: false,\n            \t\t},\n                \tticks: {\n                \t\tbeginAtZero:true, \n                \t\t\n                \t}\n            \t}]\n       \t \t}\n    \t}\n\t});\n\t\n}",identifier:"7"},{name:"enterKey",source:"function(hypeDocument, element, event) {\t\n\t//Event listener for the Enter key\t\n\tvar enter = document.querySelector('#vanus');\n\tenter.onkeyup = function(e){\n\t\tif(e.keyCode == 13){\n   \t\tdocument.getElementById('palk').focus();\n   \t\t//hypeDocument.triggerCustomBehaviorNamed('drawChart');\n\t\t};\n\t};\n\t\n\tvar enter = document.querySelector('#palk');\n\tenter.onkeyup = function(e){\n\t\tif(e.keyCode == 13){\n   \t\thypeDocument.triggerCustomBehaviorNamed('drawChart');\n\t\t};\n\t};\n}",identifier:"74"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),d[b[a].name]=
function(){}}a=new HYPE_584(c,e,{"0":{n:"data.js"},"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},h,["<link href='https://fonts.googleapis.com/css?family=PT+Serif&subset=latin' rel='stylesheet' type='text/css'>"],d,[{n:"  ",o:"1",X:[0]}],[{o:"3",A:{a:[{p:4,h:"74"}]},p:"600px",cA:false,a:100,Z:600,Y:720,c:"#FFF6F3",L:[{a:[{p:4,h:"7"}],B:"drawChart"}],bY:1,d:720,U:{},T:{"42_hover":{i:"42_hover",n:"42_hover",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"rgba(207, 200, 197, 0.000)",s:"rgba(207, 200, 197, 0.195)",o:"80"},{y:1,i:"g",s:"rgba(207, 200, 197, 0.000)",z:0,o:"80",f:"c"}],f:30},"42_pressed":{i:"42_pressed",n:"42_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"rgba(207, 200, 197, 0.517)",s:"rgba(207, 200, 197, 0.195)",o:"80"},{y:1,i:"g",s:"rgba(207, 200, 197, 0.517)",z:0,o:"80",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["79","80","82","81","83"],n:"Untitled Layout","_":0,v:{"80":{b:176,z:10,K:"Solid",c:94,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,dB:"button",O:1,g:"rgba(207, 200, 197, 0.195)",aU:6,bS:32,P:1,i:"arvuta",aV:6,j:"absolute",k:"div",aI:38,aJ:38,aK:38,aL:38,A:"#A0A0A0",Y:16,B:"#A0A0A0",aM:"42_hover",Z:"break-word",C:"#A0A0A0",r:"inline",D:"#A0A0A0",aN:"42_pressed",t:16,aA:{a:[{p:4},{p:4,h:"7"}]},F:"center",v:"bold",G:"#9F9A97",aP:"pointer",w:"Arvuta",x:"visible",I:"Solid",a:8,y:"preserve",J:"Solid"},"83":{aV:8,w:"<b><span style=\"font-size: 36px; color: rgb(87, 137, 124);\" id=\"savings\"></span></b>",x:"visible",a:54,Z:"break-word",b:311,y:"preserve",j:"absolute",z:8,k:"div",s:"'PT Serif'",aT:8,d:53,c:237,aS:8,t:16,G:"#000000",aU:8,r:"inline"},"82":{c:720,bS:71,d:387,I:"None",s:"'PT Serif'",J:"None",K:"None",L:"None",u:"normal",M:0,v:"normal",i:"table",w:"<canvas id=\"chartjs\" style=\"height:100%;width: 100%; max-width:720px\"></canvas>",N:0,A:"#D8DDE4",x:"visible",j:"absolute",k:"div",O:0,B:"#D8DDE4",C:"#D8DDE4",z:5,P:0,D:"#D8DDE4",a:0,b:213},"81":{G:"#9F9A97",aU:8,c:284,bS:36,d:78,aV:8,r:"inline",s:"'PT Serif'",t:18,Y:24,Z:"break-word",i:"savingsText",w:"Pealtn\u00e4ha vaid veidi k\u00f5rgem teenustasu v\u00f5ib seega v\u00e4hedada sinu tuleviku pensionivara:<br>\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:16,aS:8,aT:8,a:55,b:229},"79":{G:"#9F9A97",aU:8,c:217,bS:36,aV:8,d:132,r:"inline",s:"'PT Serif'",t:16,Z:"break-word",w:"Sinu vanus<br><input type=\"text\" style=\"background-color: rgba(207, 200, 197, 0.197); border-width:0px; color: #312d2a; width:200px; padding:10px;font-size:18px; border-radius: 50px;\" id=\"vanus\" name=\"name\" required=\"\" minlength=\"2\" maxlength=\"3\" placeholder=\"25\" value=\"25\" autofocus><br><br>\nSinu brutopalk<br><input type=\"text\" style=\"background-color: rgba(207, 200, 197, 0.197); border-width:0px; color: #312d2a; width:200px; padding:10px;font-size:18px; border-radius: 50px;\" id=\"palk\" name=\"name\" required=\"\" minlength=\"3\" maxlength=\"6\" placeholder=\"1 225\" value=\"1225\">",j:"absolute",x:"visible",k:"div",y:"preserve",z:13,aS:8,aT:8,a:0,b:0}}}],{},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
