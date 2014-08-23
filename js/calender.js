define(function(require, exports, module) {
	require("jquery");
	var Calender={
		options:{className:"calender"},
		init:function(options){

			for (var i in options) {
				this.options[i]=options[i];
			}
			
			var calenders=$("."+this.options.className);			
			for (var i =0,len= calenders.length; i<len; i++) {				
				this.showCalender($(calenders[i]));		
			};
			

		},
		showCalender:function(calender){//显示日历框架 year 显示的年份   month显示的月份
			var calendarHtml="<div class=\"cal_prev\">上一月</div>"+
			"<div class=\"cal_show\">"+
	        "<div class=\"cal_month\"></div>"+
	        "<ul  class=\"cal_week\"></ul>"+
	        "<ul class=\"cal_day\"></ul>"+
	    	"</div><div class=\"cal_next\">下一月</div>";
			var weekDoc=calender.html(calendarHtml);
			this.reloadCalender(calender);
			var that=this;
			//绑定上月  下月事件
			$(calender.find(".cal_prev")).bind("click",function(){
				that.prevMonth(calender);
			});
			$(calender.find(".cal_next")).bind("click",function(){
				that.nextMonth(calender);
			});
		},
		reloadCalender:function(calender,year,month){
			var weekArray=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
			var monthArray=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
			var date=new Date();
			var today=new Date();
			if(!year&&year!=0){
				year=date.getFullYear();
			}else{
				date.setYear(year);
			}
			if(!month&&month!=0){
				month=date.getMonth()+1;
			}else{
				if(month>12){
					year+=1
					month=1;
				}else if(month<1){
					year-=1;
					month=12;
				}
				date.setYear(year);
				date.setMonth(month-1);
			}
			this.options.year=year;
			this.options.month=month;
			var day=date.getDate();
			var todayYear=today.getFullYear();//当前年份
			var todayDay=today.getDate();//当前年份月份的天数
			var todayMonth=today.getMonth()+1;////当前年份月份
			this.options.day=day;
			var week=date.getDay();
			this.options.week=week;
	    	var that=this;
	    	$(calender.find(".cal_month")).html("<span class=\"today\">回到今天</span>"+year+"-----"+monthArray[month-1]); 
	    	
	    	$(calender.find(".today")).bind("click",function(){
	    		that.returnToday(calender);
	    	});
	    	var weekHtml="";
	    	for (var i =0; i<7; i++) {	    		
	    		weekHtml+="<li>"+weekArray[i]+"</li>";
	    	}
	    	$(calender.find(".cal_week")).html(weekHtml);

	    	var dayCount=this.getCountDays(year,month);
	    	var dayHtml="";
	    	//if()
	    	for (var i =0; i <week; i++) {
	    		dayHtml+="<li></li>";
	    	}
	    	for (var i =1; i <=dayCount; i++) {
	    		if(todayDay==i&&year==todayYear&&month==todayMonth){
	    			dayHtml+="<li class=\"active\">"+i+"</li>";	    			
	    		}else{
	    			dayHtml+="<li class=\"normal\">"+i+"</li>";	    			
	    		}
	    	}
	    	var lastDayCount=40-(dayCount+week-1);	    	
	    	for (var i =0; i <=lastDayCount; i++) {
	    		dayHtml+="<li></li>";	    		   		
	    	}
	    	$(calender.find(".cal_day")).html(dayHtml);
	    	$(calender.find(".normal")).bind("click",function(){
	    		alert($(this).html());
	    	});


	    	$(calender.find(".cal_show")).fadeIn("slow");
		},
		nextMonth:function(calender){
			$(calender.find(".cal_show")).fadeOut("slow");
			this.reloadCalender(calender,this.options.year,this.options.month+1);
		},
		prevMonth:function(calender){
			$(calender.find(".cal_show")).fadeOut("slow");
			this.reloadCalender(calender,this.options.year,this.options.month-1);
		},
		selectMonth:function(){

		},
		returnToday:function(calender){
			$(calender.find(".cal_show")).fadeOut("slow");
			this.reloadCalender(calender);
		},
		selectYear:function(){

		},
		getCountDays:function(year,month) {
	        var curDate = new Date();
	        /* 获取当前月份 */
	        //var curMonth = curDate.getMonth();
	       /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
	       if(year&&year!=0){
	       		curDate.setYear(year);//设置年份
	       }
	       if(month&&month!=0){
	       		curDate.setMonth(month);//设置月份  
	       }
	       /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
	       curDate.setDate(0);
	       /* 返回当月的天数 */
	       return curDate.getDate();
		},
		test:function(){
			var startTime=new Date().getTime();
			console.log(startTime);
			for(var i=10000;i<99999;i++){
				var str=i+"";				
				var strs=str.split("");
				var result="";
				var len=strs.length;				
				for(var j=0;j<len+1;j++){
					result+=strs[len-1]
				}
				result=parseInt(result,10)
				var a=parseInt(strs[0],10);
				if(result==i*a){
					console.log(a+" * "+i+" = "+result);
				}
			}
			var endTime=new Date().getTime();
			console.log("计算花费了时间为："+(endTime-startTime)+"ms");
		},
		test1:function(){
			var startTime=new Date().getTime();
			console.log(startTime);
			for(var i=10000;i<99999;i++){
				var result="";
				var str=i+"";				
				//var strs=str.split("");
				var len=str.length;				
				for(var j=0;j<len+1;j++){
					result+=str.charAt(len-1);
				}
				result=parseInt(result,10)
				var a=parseInt(str.charAt(0),10);
				if(result==i*a){
					console.log(a+" * "+i+" = "+result);
				}
			}
			var endTime=new Date().getTime();
			console.log("计算花费了时间为："+(endTime-startTime)+"ms");
		},
		test2:function(){
			var startTime=new Date().getTime();
			console.log(startTime);
			//var a=0,b=0,c=0,d=0,e=0;
			var j=0;
			for(var k=1;k<=9;k++){
				for (var i = 1;i<=9; i++) {
					j=111111*i/k
					j=j+"";
					if(i==j.charAt(4)&&k==j.charAt(0)&&j.length==5){
						console.log(j+" * "+k+" = "+(i*111111));
					}
				}
			}			
			var endTime=new Date().getTime();
			console.log("计算花费了时间为："+(endTime-startTime)+"ms");
		},
		test3:function(){
			var startTime=new Date().getTime();
			console.log(startTime);
			for (var i = 3; i < 9; i++) {
			    for(var j = 1; j < 9; j++) {
			        var a = 111111*j/i;
			        if (a === parseInt(a, 10)) {
			            var str = a + '';
			            if (str.length === 5 && str[4] == j && str[0] == i) {
			                console.log(a + ' * ' + i + ' = ' + j * 111111);
			            }
			        }
			    }
			}
			var endTime=new Date().getTime();
			console.log("计算花费了时间为："+(endTime-startTime)+"ms");
		}
	}
	//Calender.test();
	//Calender.test1();
	//Calender.test2();
	//Calender.test3();
	Calender.init();
	module.exports = Calender;
});