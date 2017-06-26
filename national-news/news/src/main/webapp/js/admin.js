$(document).ready(function(){
	var basePath = $("#basePath").val();
	
/**********************************删除当前******************************************/
  $(".delete").bind("click",function(){
	  var ele = $(this)
	if(confirm("是否删除该记录！！！？")){
			ele.parent().parent().parent().children().eq(0).submit();
	}
	return false;
  })
	function sentData(url,data) {
  		alert(url+"::"+data)
		$.ajax({
			url: url,
			type: "POST",
			dataType: "json",
			contentType: "application/json;charset=utf-8",
			cache: false,
			async: true,
			data: JSON.stringify(data),
			success: function (result) {

			},
			error: function () {
				alert("系统异常，请稍后重试！");
			}// 这里不要加","
		});
	}
  /**********************************全选******************************************/
  $(".checkAll").bind("click",function(){
	var mylength=$(".checkbox").length;
	//alert(mylength);
	var checkbox=$(".checkbox");
	var i;
	for(i=0;i<mylength;i++)
	{
		//alert(checkbox[i]);
		checkbox[i].checked=true;
	}
  })
  /**********************************不选******************************************/
  $(".unCheck").bind("click",function(){
	var mylength=$(".checkbox").length;
	//alert(mylength);
	var checkbox=$(".checkbox");
	var i;
	for(i=0;i<mylength;i++)
	{
		//alert(checkbox[i]);
		checkbox[i].checked=false;
	}
  })
  /**********************************反选******************************************/
  $(".otherCheck").bind("click",function(){
	var mylength=$(".checkbox").length;
	//alert(mylength);
	var checkbox=$(".checkbox");
	var i;
	for(i=0;i<mylength;i++)
	{
		if(checkbox[i].checked==true){
			checkbox[i].checked=false;
		}
		else{
			checkbox[i].checked=true;
		}
	}
  })

	$(".delChecked").click(function(){
		$(".active").find('form').submit();
	})

 })

