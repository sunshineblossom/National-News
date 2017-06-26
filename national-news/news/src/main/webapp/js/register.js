$(document).ready(function(){
	var basepath = $("#basePath").val()
	var num=1;
	var timer;
	var BG=$("body");
	BG.attr("style","background:url("+basepath+"'/images/1.jpg') no-repeat scroll center top;");
	function bodyBGimg(){
		timer=setInterval(function(){
			num++;
			if(num>3){
				num=1;
			}
			BG.attr("style","background:url('"+basepath+"/images/bg-"+num+".jpg') no-repeat scroll center top;");
		},3000);
	}
	bodyBGimg();

	$("input").focus(function(){
		$(this).css("outline","none");//answer1
		// $(this).css('outline-color':'red');//answer2
	})

	$("button").focus(function(){
		$(this).css("outline","none");//answer1
		// $(this).css('outline-color':'red');//answer2
	})

	$("#photo_upload").bind("change",function(){
		var file = this.files[0];
		if(window.FileReader) {
			var fr = new FileReader();
			fr.onloadend = function(e) {
				document.getElementById("photo").src = e.target.result;
			};
			fr.readAsDataURL(file);
		}

	})


	//验证信息
	$("#submit").bind("click",function(){
		var name=$("#userName").val();
		//alert(name);
		var regName=new RegExp("^[\\u4e00-\\u9fa5]{2,8}$");//只能为中文
		//alert(regName);
		var rsName=regName.test(name);
		//alert(rsName);
		if(rsName==false){
			$("#userName").css("color","red");
			alert("姓名填写错误");
		}
		else{
			$("#userName").css("color","#FFF");
		}


		var password=$("#setPassword").val();
		var rePassword=new RegExp("^\[0-9a-zA-Z]{6}$");
		var rsPassword=rePassword.test(password);
		if(rsPassword==false){
			$("#setPassword").css("color","red");
			alert("密码填写错误");
		}else{
			$("#setPassword").css("color","#FFF");
		}

		var Spassword=$("#surePassword").val();
		var rsSurePassword=false;
		if(password!=Spassword){
			$("#surePassword").css("color","red");
			alert("确认密码与密码不一致");
		}else{
			$("#surePassword").css("color","#FFF");
			rsSurePassword=true;
		}

		var birthday=$("#birth").val();
		//alert(birthday);
		var reBirthday=new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}$");
		var rsBirthday=reBirthday.test(birthday);
		if(rsBirthday==false){
			$("#birth").css("color","red");
			alert("出生日期填写错误");
		}else{
			$("#birth").css("color","#FFF");
		}


		var email=$("#mail").val();
		//alert(email);
		var reEmail=new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
		//alert(reEmail);
		var rsEmail=reEmail.test(email);
		if(rsEmail==false){
			$("#mail").css("color","red");
			alert("电子信箱填写错误");
		}else{
			$("#mail").css("color","#FFF");
		}


		if(rsName&&rsEmail&&rsPassword&&rsSurePassword&&rsBirthday){
			var val=$('input:radio[name="gender"]:checked').next().text();
			$("#sex").val(val);
			$("#registtime").val(new Date().Format("yyyy-MM-dd hh:mm:ss"));
			$(".birth").val(new Date($("#birth").val()).Format("yyyy-MM-dd hh:mm:ss"));
			$("#regist").submit();
		}
	})
	$(".text").bind("click",function(){
		//alert("sagds");
		$("input").css("box-shadow","0px 0px 0px");
		$(this).css("box-shadow","1px 1px 2px #ccc");
	})
})
Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}