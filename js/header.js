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

            //姓名后面加按钮，点击弹出下拉列表
            var $per_info=$("#per_info");
            $per_info.bind("click",function(){
                that.showList("personal","<li>个人档案</li><li>帐号设置</li><li>更改密码</li>",this);               
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
        },
        showList:function(id,text_html,obj){
            var $more_list=$("#"+id);
                if($more_list.length==0){
                    var html='<ul class="personal p_a l_h_25 f_s_12 p_1 l_s_n b_w d_n" id="'+id+'">'
                    +text_html+'</ul>';
                    $(document.body).append(html);                  
                    $more_list=$("#"+id);
                }
                //$("personal")
                if($more_list.css("display")=="block"){
                    $more_list.hide();
                }else{
                    var top=$(obj).offset().top;
                    top+=$(obj).height()-10;
                    var left=$(obj).offset().left-($more_list.width()/2)-10;
                    //left-=($("#tip").width()/4)+($(obj).width()/2);
                    $more_list.css("top",top).css("left",left).show();
                }
        }
    };

    header.init();
    module.exports  = header;
});