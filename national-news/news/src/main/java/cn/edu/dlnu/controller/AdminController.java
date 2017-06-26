package cn.edu.dlnu.controller;



import cn.edu.dlnu.pojo.Admin;
import cn.edu.dlnu.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private IUsersService usersService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IShareService shareService;
    @Autowired
    private INewsService newsService;
    @Autowired
    private IVideoService videoService;
    @Autowired
    private IAdminService adminService;
    @RequestMapping("/login")
    public String login(HttpSession session,Admin admin){
        System.out.println("adminName:"+admin.getAdminname());
        if(adminService.validate(admin)!=null){
            session.setAttribute("admin",admin);
            return "redirect:/admin/getAllInfo";
        }
        return "adminlogin";
    }
    @RequestMapping("/adminlogin")
    public String adminlogin(){
        return "adminlogin";
    }
    @RequestMapping("/admin")
    public String admin(){
        return "admin";
    }
    @RequestMapping("/quit")
    public String quit(HttpSession session){
        if(session != null){
            session.invalidate();
        }
        return "adminlogin";
    }
    @RequestMapping("/getAllInfo")
    public String getAllInfo(HttpServletRequest request){
        request.setAttribute("userList",usersService.selectAll());
        request.setAttribute("newsList",newsService.selectAll());
        request.setAttribute("categoryList",categoryService.selectAll());
        request.setAttribute("videoList",videoService.selectAll());
        request.setAttribute("shareList",shareService.selectAll());
        return "admin";
    }
}
