define(function(require, exports, module) {
	require("jquery");
	require("./header");
    var header={
    	init:function(){
    		//绑定退出事件
    		var $logout=$("#logout");
            var that=this;
    		$logout.bind("click",function(){
    			//alert("确定要退出么？");
                that.showConfirm("确定要退出么？",function(){
                    alert("点击的是确定！");
                },function(){
                     alert("点击的是取消！");
                });

    		});
    	},
        showConfirm:function(msg,yes,no){            
            var $confirm=$("#confirm");
            if($confirm.length==0){
                var html='<div id="confirm" class="confirm p_a w_350 h_220 f_f_n f_s_28 t_a_c c_606060 d_n"><p id="con_msg">是否确定退出？</p><p class="h_20"></p><p><button  id="con_sure_btn" type="button" class="f_f_n">确定</button><button  id="con_cancel_btn" type="button" class="w_94 f_f_n m_l_94">取消</button></p></div>';
                $(document.body).append(html);
                $confirm=$("#confirm");
            }
            $("#con_msg").html(msg);
            var top = ($(window).height() -  $confirm.height())/2;   
            var left = ($(window).width() -  $confirm.width())/2;   
            var scrollTop = $(document).scrollTop();   
            var scrollLeft = $(document).scrollLeft();   
            $confirm.css( {'top' : top + scrollTop, left : left + scrollLeft } ).show();
            $("#con_sure_btn").bind("click",function(){
                 if(yes){
                    yes();                    
                }
                $confirm.hide();
                this.unbind("click");                         
            });
            $("#con_cancel_btn").bind("click",function(){
                if(no){
                    no();                    
                }               
                $confirm.hide(); 
                this.unbind("click");
            });
        }
    };

    header.init();
   // module.exports  = Base64Encode;
});