package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.User;
import cn.edu.dlnu.service.IFocusService;
import cn.edu.dlnu.service.IUsersService;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.*;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUsersService usersService;
    @Autowired
    private IFocusService focusService;

    @RequestMapping("/login")
    @ResponseBody
    public User login(HttpSession session, @RequestBody User user) {
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        User tempuser = null;
        try {
            tempuser = usersService.validate(user);
            System.out.println("tempUser" + tempuser);
        } catch (Exception e) {
            System.out.println(e);
        }
        if (tempuser != null) {
            session.setAttribute("user", tempuser);
        }
        return tempuser;
    }

    @RequestMapping("/selectByPrimaryKey")
    @ResponseBody
    public User selectByPrimaryKey(@RequestBody String uid) {
        System.out.println("uid:" + uid);
        System.out.println(uid.substring(4, uid.length()));
        return usersService.selectByPrimaryKey(Integer.parseInt(uid.substring(4, uid.length())));
    }

    //跳转至主页
    @RequestMapping("/homepage")
    public String homepage() {

        return "redirect:/news/selectInOneDay";
    }

    //跳转至editor页
    @RequestMapping("/editor")
    public String editor() {
        return "editor";
    }

    //退出
    @RequestMapping("/quit")
    public String quit(HttpSession session) throws Exception {
        if (session != null) {
            session.invalidate();
        }
        return "redirect:/news/selectInOneDay";
    }

    //跳转至user页
    @RequestMapping("/user")
    public String user() {
        return "user";
    }

    //跳转至user页
    @RequestMapping("/newsdetial")
    public String newsdetial() {
        return "newsdetial";
    }


    //    首页跳转至用户信息页
    @RequestMapping("/redirectToUserInfo/{editorId}/{level}")
    public String redirectToUserInfo(HttpServletRequest request, @PathVariable String editorId, @PathVariable String level) {
        request.setAttribute("focusQueryVo", focusService.selectFansAndFocusNumber(Integer.parseInt(editorId)));
        request.setAttribute("editor", usersService.selectByPrimaryKey(Integer.parseInt(editorId)));
        return "others";
    }
    @RequestMapping("/selfInfo/{userId}/{level}")
    public String selfInfo(HttpServletRequest request,@PathVariable String userId,@PathVariable String level){
        if (level.equals("0")) {//跳转至用户页
            request.setAttribute("focusQueryVo", focusService.selectFansAndFocusNumber(Integer.parseInt(userId)));
            System.out.println("useInfo:"+usersService.selectByPrimaryKey(Integer.parseInt(userId)).getUsername());
            request.setAttribute("user", usersService.selectByPrimaryKey(Integer.parseInt(userId)));
            return "user";
        } else if (level.equals("1")) {//跳转至editor页
            request.setAttribute("focusQueryVo", focusService.selectFansAndFocusNumber(Integer.parseInt(userId)));
            request.setAttribute("editor", usersService.selectByPrimaryKey(Integer.parseInt(userId)));
            return "editor";
        }
        return "forward:/news/selectInOneDay";
    }
    @RequestMapping("/updateInfo")
    @ResponseBody
    public User updateInfo(@RequestBody User user) {
    	System.out.println("提交数据啦！");
        if (usersService.updateInfo(user) > 0) {
            return usersService.selectByPrimaryKey(user.getUid());
        }
        return null;
    }

    @RequestMapping("/others")
    public String forwardToOther() {
        return "others";
    }


    @RequestMapping("/register")
    public String register() {
        return "register";
    }

    @RequestMapping("/regist")
    public String regist(HttpSession session,HttpServletRequest request,User user,MultipartFile user_pic)throws Exception{
        System.out.println(user.getBirthday());
        String path = request.getSession().getServletContext().getRealPath("upload");
        String fileName = user_pic.getOriginalFilename();
        File targetFile = new File(path, fileName);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        //保存
        try {
            user_pic.transferTo(targetFile);
        } catch (Exception e) {
            e.printStackTrace();
        }
        user.setUserImage(request.getContextPath()+"/upload/"+fileName);
        user.setRegistTime(new Date());
        Calendar calBegin = Calendar.getInstance(); //获取日历实例
        Calendar calEnd = Calendar.getInstance();
        calBegin.setTime(user.getBirthday()); //字符串按照指定格式转化为日期
        calEnd.setTime(new Date());
        user.setAge(calEnd.get(Calendar.YEAR) - calBegin.get(Calendar.YEAR));
        if(usersService.insertAndGetId(user)>0){
            session.setAttribute("user", user);
            return "forward:/news/selectInOneDay";
        }
        return "register";
    }

    @RequestMapping("/admin")
    public String admin(){
        return "admin";
    }

    @RequestMapping(value = "/deleteByPrimaryKey",method = {RequestMethod.POST,RequestMethod.GET})
    public String deleteByPrimaryKey(Integer[] uid){
        for(int i=0;i<uid.length;i++){
            usersService.deleteByPrimaryKey(uid[i]);
        }
        return "forward:/admin/getAllInfo";
    }
}