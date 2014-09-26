define(function(require, exports, module) {
	require("jquery");
	require("./header");
    var supply={
    	init:function(){    		
    		//绑定图片按钮事件
    		var $pic=$("#pic");
			var $list=$("#list");
			var $board=$("#board");

    		$pic.bind("click",function(){
    			if($(this).hasClass("pic")){    				
    				$(this).removeClass("pic").addClass("pic_a");
    				$list.removeClass("list_a").addClass("list");
    				$board.removeClass("board_a").addClass("board");
    			}else{
    				$(this).removeClass("pic_a").addClass("pic");
    				//$list.removeClass("list").addClass("list_a");
    				//$board.removeClass("board").addClass("board_a");
    			}
    		});
    		var that=this;
    		$pic.bind("mouseenter",function(){
    			that.handlerIn("图片视图",this);
    		});
    		$pic.bind("mouseleave",function(){
    			that.handlerOut(this);
    		});


    		//绑定列表按钮事件
    		$list.bind("click",function(){
    			if($(this).hasClass("list")){    				
    				$(this).removeClass("list").addClass("list_a");
    				$pic.removeClass("pic_a").addClass("pic");
    				$board.removeClass("board_a").addClass("board");
    			}else{
    				$(this).removeClass("list_a").addClass("list");
    				//$pic.removeClass("pic").addClass("pic_a");
    				//$board.removeClass("board").addClass("board_a");
    			}
    		});//.hover(this.handlerIn("列表视图"),this.handlerOut());
    		$list.bind("mouseenter",function(){
    			that.handlerIn("列表视图",this);
    		});
    		$list.bind("mouseleave",function(){
    			that.handlerOut(this);
    		});

    		//绑定看板按钮事件
    		$board.bind("click",function(){
    			if($(this).hasClass("board")){    				
    				$(this).removeClass("board").addClass("board_a");
    				$list.removeClass("list_a").addClass("list");
    				$pic.removeClass("pic_a").addClass("pic");
    			}else{
    				$(this).removeClass("board_a").addClass("board");
    				//$list.removeClass("list").addClass("list_a");
    				//$pic.removeClass("pic").addClass("pic_a");
    			}
    		});//.hover(this.handlerIn("列表视图"),this.handlerOut());
    		$board.bind("mouseenter",function(){
    			that.handlerIn("看板视图",this);
    		});
    		$board.bind("mouseleave",function(){
    			that.handlerOut(this);
    		});


    		//绑定邮件发送按钮事件
    		var $mail=$("#mail");
    		$mail.bind("click",function(){
    			alert("邮件发送");
    		});//.hover(this.handlerIn("发送邮件"),this.handlerOut());
			/*
    		$mail.bind("mouseenter",function(){
    			that.handlerIn("邮件发送",this,10);
    		});
    		$mail.bind("mouseleave",function(){
    			that.handlerOut(this);
    		});*/
    		//更多操作
    		var $more=$("#more");
    		$more.bind("click",function(){
    			that.showList("personal","<li>导入</li><li>导出</li><li>批量发信</li>",this);  
    		});

    		//是否有子菜单显示
    		var v_timeout=0;
    		var $nav_menus=$(".nav .menu_txt");
    		$nav_menus.each(function(){
    			   			
				var $sub_menu=$("#sub_menu");
				$(this).bind("mouseenter",function(){
					var flag=$(this).attr("is_sub"); 
					$nav_menus.each(function(){
						$(this).removeClass("active");
					});
					$(this).addClass("active");
					if(flag=="true"){
						//模拟显示数据
						var html='<span>供应商管理</span><i class="sprite divi h_21 w_1 d_i m_b_-7"></i><span>经销商管理</span><i class="sprite divi h_21 w_1 d_i m_b_-7"></i><span>经销商管理</span><i class="sprite divi h_21 w_1 d_i m_b_-7"></i><span>经销商管理</span>';
						that.showSubMenu("sub_menu",html);
						$sub_menu.fadeIn();
						that.showFlag(this,"true");
					}else{						
						that.showFlag(this,"false");
						$sub_menu.html("");
						$sub_menu.hide();
					}
				});
				$(this).bind("mouseleave",function(e){
					var flag=$(this).attr("is_sub"); 
					if(flag=="true"){
						//that.showFlag(this,"false"); 
						$sub_menu.show();
						that.showFlag(this,"true");
						//$(this).removeClass("active");		
					}else{
						that.showFlag(this,"false");
						$(this).removeClass("active");						
					}				
				}); 			
    		});

			var $sub_menu=$("#sub_menu");
    		$sub_menu.bind("mouseleave",function(){
    			var $that=$(this);
    			clearTimeout(v_timeout);
    			v_timeout=setTimeout(function(){
    				that.showFlag(this,"false");
    				$that.fadeOut();},5000);
    		});
    		$sub_menu.bind("mouseenter",function(){
    			var $that=$(this);
    			clearTimeout(v_timeout);
    			//setTimeout(function(){$that.fadeOut();},5000);
    		});


			var $pageSize=$("#pageSize");
			$pageSize.bind("click",function(){
				alert("显示分页数量选择");
				$("#show_page").show();

				$("#page_list").css({"top":$("#show_page").height()+$("#show_page").offset().top,"left":$("#show_page").offset().left}).show();
				$("#page_list li").each(function(){
					$(this).bind("click",function(){
						$("#page_list li").each(function(){
							$(this).removeClass("active");
						});
						$(this).addClass("active");
						$("#page_size_show").html($(this).html()+'<em class="sprite triangle_b w_8 h_6 d_i m_l_5"></em>');
						$("#show_page").hide();
						$("#page_list").hide();
					});
				});
			});

            //绑定鼠标放入和移出用户头像的时候的事件 
           /* var $personal_pic=$("#personal_pic");
            $personal_pic.bind("mouseenter",function(){
                var $pic_edit_bg=$("#pic_edit_bg");
                if($pic_edit_bg.css("display")=="block"){
                    return;
                }
                var $photo_b_tip=$("#photo_b_tip");
                $pic_edit_bg.show();
                $photo_b_tip.show();
                var $pic_edit_id=$("#pic_edit_id");
                $pic_edit_id.bind("click",function(){
                    alert("编辑");
                });
                var $pic_del_id=$("#pic_del_id");
                $pic_del_id.bind("click",function(){
                    alert("删除");
                });
            });*/
            /*
            $personal_pic.bind("mouseleave",function(){
                 var $pic_edit_bg=$("#pic_edit_bg");
                 var $photo_b_tip=$("#photo_b_tip");
                $pic_edit_bg.hide();
                $photo_b_tip.hide();
                var $pic_edit_id=$("#pic_edit_id");
                $pic_edit_id.unbind("click");
                var $pic_del_id=$("#pic_del_id");
                $pic_del_id.unbind("click");
            });*/

            $tab_ul_lis=$(".tab_ul li");
            $tab_ul_lis.each(function(){
                $(this).bind("click",function(){
                    $tab_ul_lis.each(function(){
                        var con_id=$(this).attr("data-id");
                        $("#tab_"+con_id).hide();
                        $(this).removeClass("active");
                    });
                    var con_id=$(this).attr("data-id");
                    $(this).addClass("active")
                   $("#tab_"+con_id).show();
                });
            });
    		
    	},
    	showFlag:function(obj,show){
    		var $flag=$("#flag");
    			if($flag.length==0){
    				var html='<div id="flag" class="p_a sprite flag"></div>';
    				$(document.body).append(html);    				
    				$flag=$("#flag");
    			}
    			//$("personal")
    			if(show=="false"){
	    			$flag.hide();
    			}else{
    				var top=$(obj).offset().top;
	    			top+=$(obj).height()-7;
	    			var left=$(obj).offset().left+($flag.width()/2)+$(obj).width()/2;
	    			//left-=($("#tip").width()/4)+($(obj).width()/2);
	    			$flag.css("top",top).css("left",left).show();
    			}
    	},
    	showSubMenu:function(id,text_html){
    		var $sub_menu=$("#"+id);    			
			//$("personal")
			$sub_menu.html(text_html).show();
			
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
    	},
    	handlerIn:function(msg,obj,l,t){
    		var $tip=$("#tip");
    		if($tip.length==0){
    			$(document.body).append('<div class="sprite p_a tip c_w t_a_c l_h_25 f_s_12" id="tip"></div>');
    			$tip=$("#tip");
    		}
    		var top=$(obj).offset().top;
    		top-=$tip.height();
    		var left=$(obj).offset().left;
    		left-=($tip.width()/4)+($(obj).width()/2);
    		if(l){
    			left-=l;
    		}
    		if(t){
    			top-=t;
    		}
    		$tip.css("top",top).css("left",left).html(msg).show();
    	},
    	handlerOut:function(){
    		$("#tip").hide();
    	}
    };

    supply.init();
   // module.exports  = Base64Encode;
});