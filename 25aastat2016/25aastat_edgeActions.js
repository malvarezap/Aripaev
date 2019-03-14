/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${initial2}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${initial2}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("init_down");

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3569, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter1");
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${toStage1_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter2");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7913, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("education_bars").play("pohi");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("education_bars").play("init");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("education_bars").play("ulde");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("education_bars").play("init");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group3}", "mouseover", function(sym, e) {
         sym.getSymbol("education_bars").play("kutse");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group3}", "mouseout", function(sym, e) {
         sym.getSymbol("education_bars").play("init");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group4}", "mouseover", function(sym, e) {
         sym.getSymbol("education_bars").play("esim");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group4}", "mouseout", function(sym, e) {
         sym.getSymbol("education_bars").play("init");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group5}", "mouseover", function(sym, e) {
         sym.getSymbol("education_bars").play("magi");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group5}", "mouseout", function(sym, e) {
         sym.getSymbol("education_bars").play("init");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group6}", "mouseover", function(sym, e) {
         sym.getSymbol("education_bars").play("dokt");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group6}", "mouseout", function(sym, e) {
         sym.getSymbol("education_bars").play("init");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage2_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter3");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_1}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("work_1").play("on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_1}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("work_1").play("off");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("work_2").play("on");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_2}", "mouseout", function(sym, e) {
         sym.getSymbol("work_2").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_3}", "mouseover", function(sym, e) {
         sym.getSymbol("work_3").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_3}", "mouseout", function(sym, e) {
         sym.getSymbol("work_3").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_4}", "mouseover", function(sym, e) {
         sym.getSymbol("work_4").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_4}", "mouseout", function(sym, e) {
         sym.getSymbol("work_4").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_5}", "mouseover", function(sym, e) {
         sym.getSymbol("work_5").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_5}", "mouseout", function(sym, e) {
         sym.getSymbol("work_5").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_6}", "mouseover", function(sym, e) {
         sym.getSymbol("work_6").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_6}", "mouseout", function(sym, e) {
         sym.getSymbol("work_6").play("of");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_7}", "mouseover", function(sym, e) {
         sym.getSymbol("work_7").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_7}", "mouseout", function(sym, e) {
         sym.getSymbol("work_7").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_8}", "mouseover", function(sym, e) {
         sym.getSymbol("work_8").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_8}", "mouseout", function(sym, e) {
         sym.getSymbol("work_8").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_9}", "mouseover", function(sym, e) {
         sym.getSymbol("work_9").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_9}", "mouseout", function(sym, e) {
         sym.getSymbol("work_9").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_10}", "mouseover", function(sym, e) {
         sym.getSymbol("work_10").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_10}", "mouseout", function(sym, e) {
         sym.getSymbol("work_10").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_11}", "mouseover", function(sym, e) {
         sym.getSymbol("work_11").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_11}", "mouseout", function(sym, e) {
         sym.getSymbol("work_11").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_12}", "mouseover", function(sym, e) {
         sym.getSymbol("work_12").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_12}", "mouseout", function(sym, e) {
         sym.getSymbol("work_12").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_13}", "mouseover", function(sym, e) {
         sym.getSymbol("work_13").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_13}", "mouseout", function(sym, e) {
         sym.getSymbol("work_13").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_14}", "mouseover", function(sym, e) {
         sym.getSymbol("work_14").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_14}", "mouseout", function(sym, e) {
         sym.getSymbol("work_14").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_15}", "mouseover", function(sym, e) {
         sym.getSymbol("work_15").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_15}", "mouseout", function(sym, e) {
         sym.getSymbol("work_15").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_16}", "mouseover", function(sym, e) {
         sym.getSymbol("work_16").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_16}", "mouseout", function(sym, e) {
         sym.getSymbol("work_16").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_17}", "mouseover", function(sym, e) {
         sym.getSymbol("work_17").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_17}", "mouseout", function(sym, e) {
         sym.getSymbol("work_17").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_18}", "mouseover", function(sym, e) {
         sym.getSymbol("work_18").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_18}", "mouseout", function(sym, e) {
         sym.getSymbol("work_18").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_19}", "mouseover", function(sym, e) {
         sym.getSymbol("work_19").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_19}", "mouseout", function(sym, e) {
         sym.getSymbol("work_19").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_20}", "mouseover", function(sym, e) {
         sym.getSymbol("work_20").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_20}", "mouseout", function(sym, e) {
         sym.getSymbol("work_20").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_21}", "mouseover", function(sym, e) {
         sym.getSymbol("work_21").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_21}", "mouseout", function(sym, e) {
         sym.getSymbol("work_21").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_22}", "mouseover", function(sym, e) {
         sym.getSymbol("work_22").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_22}", "mouseout", function(sym, e) {
         sym.getSymbol("work_22").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_23}", "mouseover", function(sym, e) {
         sym.getSymbol("work_23").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_23}", "mouseout", function(sym, e) {
         sym.getSymbol("work_23").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_24}", "mouseover", function(sym, e) {
         sym.getSymbol("work_24").play("on");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${work_24}", "mouseout", function(sym, e) {
         sym.getSymbol("work_24").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage3_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage4");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage5}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter4");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage4_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage6}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter5");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage5_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage6");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter6");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${names_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("names_sym").play("over");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${names_button}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("names_sym").play("off");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${names_button}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("names_sym").play("on");
         sym.getSymbol("natality_sym").play("off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage6_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage7");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage8}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter7");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26206, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${to1991}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("stage7");
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("map_after").play("off");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${to2016}", "click", function(sym, e) {
         sym.play("map2");
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("map_before").play("off");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage7_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage8");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage9}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter8");
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${dream_house2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.getSymbol("dream_house2").playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse11}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("dream_house2").play("on");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage8_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage9");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage10}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter9");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage9_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage10");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage11}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter10");
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage10_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage11");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage12Copy}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("inter11");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40761, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41719, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42182, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${helkur}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("helkur");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${seatbelt}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("seatbelt");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${marathon}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("marathon");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${gym}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("gym");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41242, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45728, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStage11_back}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse("stage12");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${toStart}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("stage1");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'clouds'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("clouds");
   //Edge symbol end:'clouds'

   //=========================================================
   
   //Edge symbol: 'kesmine'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3884, function(sym, e) {
         
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrow_white}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.play("on");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${arrow_white2}", "click", function(sym, e) {
         // insert code for mouse click here
         
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${couple2}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("on");
         

      });
      //Edge binding end

   })("kesmine");
   //Edge symbol end:'kesmine'

   //=========================================================
   
   //Edge symbol: 'education_bars'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("education_bars");
   //Edge symbol end:'education_bars'

   //=========================================================
   
   //Edge symbol: 'work_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_1");
   //Edge symbol end:'work_1'

   //=========================================================
   
   //Edge symbol: 'work_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_2");
   //Edge symbol end:'work_2'

   //=========================================================
   
   //Edge symbol: 'work_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_3");
   //Edge symbol end:'work_3'

   //=========================================================
   
   //Edge symbol: 'work_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_4");
   //Edge symbol end:'work_4'

   //=========================================================
   
   //Edge symbol: 'work_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_5");
   //Edge symbol end:'work_5'

   //=========================================================
   
   //Edge symbol: 'work_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_6");
   //Edge symbol end:'work_6'

   //=========================================================
   
   //Edge symbol: 'work_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_7");
   //Edge symbol end:'work_7'

   //=========================================================
   
   //Edge symbol: 'work_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_8");
   //Edge symbol end:'work_8'

   //=========================================================
   
   //Edge symbol: 'work_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_9");
   //Edge symbol end:'work_9'

   //=========================================================
   
   //Edge symbol: 'work_10'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_10");
   //Edge symbol end:'work_10'

   //=========================================================
   
   //Edge symbol: 'work_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_11");
   //Edge symbol end:'work_11'

   //=========================================================
   
   //Edge symbol: 'work_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_12");
   //Edge symbol end:'work_12'

   //=========================================================
   
   //Edge symbol: 'work_13'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_13");
   //Edge symbol end:'work_13'

   //=========================================================
   
   //Edge symbol: 'work_14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_14");
   //Edge symbol end:'work_14'

   //=========================================================
   
   //Edge symbol: 'work_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_15");
   //Edge symbol end:'work_15'

   //=========================================================
   
   //Edge symbol: 'work_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_16");
   //Edge symbol end:'work_16'

   //=========================================================
   
   //Edge symbol: 'work_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_17");
   //Edge symbol end:'work_17'

   //=========================================================
   
   //Edge symbol: 'work_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_18");
   //Edge symbol end:'work_18'

   //=========================================================
   
   //Edge symbol: 'work_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_19");
   //Edge symbol end:'work_19'

   //=========================================================
   
   //Edge symbol: 'work_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_20");
   //Edge symbol end:'work_20'

   //=========================================================
   
   //Edge symbol: 'work_21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_21");
   //Edge symbol end:'work_21'

   //=========================================================
   
   //Edge symbol: 'work_22'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_22");
   //Edge symbol end:'work_22'

   //=========================================================
   
   //Edge symbol: 'work_23'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_23");
   //Edge symbol end:'work_23'

   //=========================================================
   
   //Edge symbol: 'work_24'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("work_24");
   //Edge symbol end:'work_24'

   //=========================================================
   
   //Edge symbol: 'grass'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("grass");
   //Edge symbol end:'grass'

   //=========================================================
   
   //Edge symbol: 'gap_symbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy2}", "click", function(sym, e) {
         sym.play("2006");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy3}", "click", function(sym, e) {
         sym.play("2007");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy4}", "click", function(sym, e) {
         sym.play("2008");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy5}", "click", function(sym, e) {
         sym.play("2009");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy6}", "click", function(sym, e) {
         sym.play("2010");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy7}", "click", function(sym, e) {
         sym.play("2011");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy8}", "click", function(sym, e) {
         sym.play("2012");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy9}", "click", function(sym, e) {
         sym.play("2013");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Text6Copy10}", "click", function(sym, e) {
         sym.play("2014");

      });
      //Edge binding end

   })("gap_symbol");
   //Edge symbol end:'gap_symbol'

   //=========================================================
   
   //Edge symbol: 'marry_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle5}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy3}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy4}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy5}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("4");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy6}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy7}", "mouseover", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy8}", "mouseover", function(sym, e) {
         sym.play("7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy9}", "mouseover", function(sym, e) {
         sym.play("8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy10}", "mouseover", function(sym, e) {
         sym.play("9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy11}", "mouseover", function(sym, e) {
         sym.play("10");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy12}", "mouseover", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy13}", "mouseover", function(sym, e) {
         sym.play("12");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy14}", "mouseover", function(sym, e) {
         sym.play("13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy15}", "mouseover", function(sym, e) {
         sym.play("14");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy16}", "mouseover", function(sym, e) {
         sym.play("15");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy17}", "mouseover", function(sym, e) {
         sym.play("16");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy18}", "mouseover", function(sym, e) {
         sym.play("17");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy20}", "mouseover", function(sym, e) {
         sym.play("19");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy21}", "mouseover", function(sym, e) {
         sym.play("20");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy22}", "mouseover", function(sym, e) {
         sym.play("21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy23}", "mouseover", function(sym, e) {
         sym.play("22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy24}", "mouseover", function(sym, e) {
         sym.play("23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy25}", "mouseover", function(sym, e) {
         sym.play("24");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy26}", "mouseover", function(sym, e) {
         sym.play("25");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy19}", "mouseover", function(sym, e) {
         sym.play("18");

      });
      //Edge binding end

   })("marry_sym");
   //Edge symbol end:'marry_sym'

   //=========================================================
   
   //Edge symbol: 'natality_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2626, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3660, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4668, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5650, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6764, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7586, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8700, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9681, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10663, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12758, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13713, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14642, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15676, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16790, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17798, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18753, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19522, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20424, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21273, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22519, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23262, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24482, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy}", "mouseover", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy2}", "mouseover", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy3}", "mouseover", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy4}", "mouseover", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy5}", "mouseover", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy6}", "mouseover", function(sym, e) {
         sym.play("7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy7}", "mouseover", function(sym, e) {
         sym.play("8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy8}", "mouseover", function(sym, e) {
         sym.play("9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy9}", "mouseover", function(sym, e) {
         sym.play("10");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy10}", "mouseover", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy11}", "mouseover", function(sym, e) {
         sym.play("12");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy12}", "mouseover", function(sym, e) {
         sym.play("13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy13}", "mouseover", function(sym, e) {
         sym.play("14");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy14}", "mouseover", function(sym, e) {
         sym.play("15");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy15}", "mouseover", function(sym, e) {
         sym.play("16");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy16}", "mouseover", function(sym, e) {
         sym.play("17");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy17}", "mouseover", function(sym, e) {
         sym.play("18");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy18}", "mouseover", function(sym, e) {
         sym.play("19");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy19}", "mouseover", function(sym, e) {
         sym.play("20");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy20}", "mouseover", function(sym, e) {
         sym.play("21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy21}", "mouseover", function(sym, e) {
         sym.play("22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy22}", "mouseover", function(sym, e) {
         sym.play("23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy23}", "mouseover", function(sym, e) {
         sym.play("24");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle5Copy24}", "mouseover", function(sym, e) {
         sym.play("25");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25304, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("natality_sym");
   //Edge symbol end:'natality_sym'

   //=========================================================
   
   //Edge symbol: 'names_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("names_sym");
   //Edge symbol end:'names_sym'

   //=========================================================
   
   //Edge symbol: 'map_before'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 530, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1459, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5650, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6472, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7480, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8488, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9549, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10557, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12626, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13395, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14456, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${harju_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("harju");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ida_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tartu_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tartu");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${parnu_button1}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("parnu");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${laaneviru_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("laaneviru");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${viljandi_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("viljandi");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${voru_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("voru");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jarva_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("jarva");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jogeva_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("jogeva");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${valga_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("valga");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${saare_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("saare");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rapla_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("rapla");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rapla_buttonCopy}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("rapla");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${polva_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("polva");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${laane_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("laane");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hiiu_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("hiiu");
         

      });
      //Edge binding end

   })("map_before");
   //Edge symbol end:'map_before'

   //=========================================================
   
   //Edge symbol: 'map_before_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 530, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1459, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4695, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5650, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6472, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7480, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8488, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9549, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10557, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12626, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13395, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14456, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${harju_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("harju");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ida_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("ida");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${tartu_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("tartu");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${parnu_button1}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("parnu");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${laaneviru_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("laaneviru");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${viljandi_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("viljandi");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${voru_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("voru");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jarva_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("jarva");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${jogeva_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("jogeva");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${valga_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("valga");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${saare_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("saare");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rapla_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("rapla");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rapla_buttonCopy}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("rapla");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${polva_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("polva");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${laane_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("laane");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hiiu_button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("hiiu");
         

      });
      //Edge binding end

   })("map_after");
   //Edge symbol end:'map_after'

   //=========================================================
   
   //Edge symbol: 'dream_house'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 477, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1908, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4123, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect2}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse9}", "click", function(sym, e) {
         // insert code for mouse click here
         

      });
      //Edge binding end

   })("dream_house");
   //Edge symbol end:'dream_house'

   //=========================================================
   
   //Edge symbol: 'boom_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1512, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2739, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3815, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4646, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5668, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6499, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7549, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8543, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9633, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10451, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11650, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12577, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13517, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14402, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("boom_sym");
   //Edge symbol end:'boom_sym'

   //=========================================================
   
   //Edge symbol: 'cars_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11539, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12397, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13352, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14326, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16645, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17288, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18419, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21615, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22589, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23563, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24460, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25356, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26370, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27578, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28708, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29254, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30326, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31417, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32586, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33472, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34544, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35440, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Label 1");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Label 2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy2}", "mouseover", function(sym, e) {
         sym.play("Label 3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy5}", "mouseover", function(sym, e) {
         sym.play("Label 4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy4}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play("Label 5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy3}", "mouseover", function(sym, e) {
         sym.play("Label 6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy11}", "mouseover", function(sym, e) {
         sym.play("Label 6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy10}", "mouseover", function(sym, e) {
         sym.play("Label 8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy9}", "mouseover", function(sym, e) {
         sym.play("Label 9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy8}", "mouseover", function(sym, e) {
         sym.play("Label 10");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy7}", "mouseover", function(sym, e) {
         sym.play("Label 11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy6}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Label 12");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy23}", "mouseover", function(sym, e) {
         sym.play("Label 13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy22}", "mouseover", function(sym, e) {
         sym.play("Label 14");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy21}", "mouseover", function(sym, e) {
         sym.play("Label 15");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy20}", "mouseover", function(sym, e) {
         sym.play("Label 16");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy19}", "mouseover", function(sym, e) {
         sym.play("Label 17");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy18}", "mouseover", function(sym, e) {
         sym.play("Label 18");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy17}", "mouseover", function(sym, e) {
         sym.play("Label 19");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy16}", "mouseover", function(sym, e) {
         sym.play("Label 20");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy15}", "mouseover", function(sym, e) {
         sym.play("Label 21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy14}", "mouseover", function(sym, e) {
         sym.play("Label 22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy13}", "mouseover", function(sym, e) {
         sym.play("Label 23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy12}", "mouseover", function(sym, e) {
         sym.play("Label 24");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Pasted2Copy24}", "mouseover", function(sym, e) {
         sym.play("Label 25");

      });
      //Edge binding end

   })("cars_sym");
   //Edge symbol end:'cars_sym'

   //=========================================================
   
   //Edge symbol: 'wheel'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1035, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("start");

      });
      //Edge binding end

   })("wheel");
   //Edge symbol end:'wheel'

   //=========================================================
   
   //Edge symbol: 'elder_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 534, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16577, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17681, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18840, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19502, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20808, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21526, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22685, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23550, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24755, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("0");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy2}", "mouseover", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy4}", "mouseover", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy3}", "mouseover", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy8}", "mouseover", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy7}", "mouseover", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy6}", "mouseover", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy5}", "mouseover", function(sym, e) {
         sym.play("7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy16}", "mouseover", function(sym, e) {
         sym.play("8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy15}", "mouseover", function(sym, e) {
         sym.play("9");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy14}", "mouseover", function(sym, e) {
         sym.play("10");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy13}", "mouseover", function(sym, e) {
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy12}", "mouseover", function(sym, e) {
         sym.play("12");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy11}", "mouseover", function(sym, e) {
         sym.play("13");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy10}", "mouseover", function(sym, e) {
         sym.play("14");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy9}", "mouseover", function(sym, e) {
         sym.play("15");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy25}", "mouseover", function(sym, e) {
         sym.play("16");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy24}", "mouseover", function(sym, e) {
         sym.play("17");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy23}", "mouseover", function(sym, e) {
         sym.play("18");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy22}", "mouseover", function(sym, e) {
         sym.play("19");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy21}", "mouseover", function(sym, e) {
         sym.play("20");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy20}", "mouseover", function(sym, e) {
         sym.play("21");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy19}", "mouseover", function(sym, e) {
         sym.play("22");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy18}", "mouseover", function(sym, e) {
         sym.play("23");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle15Copy17}", "mouseover", function(sym, e) {
         sym.play("24");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24755, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("elder_sym");
   //Edge symbol end:'elder_sym'

   //=========================================================
   
   //Edge symbol: 'seal'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

   })("seal");
   //Edge symbol end:'seal'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-21594444");