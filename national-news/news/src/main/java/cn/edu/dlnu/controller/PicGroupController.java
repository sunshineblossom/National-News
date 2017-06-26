package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.PicGroupCustom;
import cn.edu.dlnu.service.IPicGroupService;
import cn.edu.dlnu.service.IPictureService;
import cn.edu.dlnu.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/picGroup")
public class PicGroupController {
    @Autowired
    private IPicGroupService picGroupService;
    @Autowired
    private IUsersService usersService;
    @Autowired
    private IPictureService pictureService;
//  查询所有图片组信息
    @RequestMapping("/selectHotPicGroup")
    @ResponseBody
    public List<PicGroupCustom> selectHotPicGroup(){
    	System.out.println("-->进入poicGroup");
    	List<PicGroupCustom> list = picGroupService.selectHotPicGroup();
    	System.out.println(list.size());
        return list;
    }
//    跳转至图片页
    @RequestMapping("/picturedetial/{picGroupId}/{editorId}")
    public String redirectToPicGroup(HttpServletRequest request, @PathVariable("picGroupId") String picGroupId, @PathVariable("editorId") String editorId){
        request.setAttribute("picGroup",picGroupService.selectByPrimaryKey(Integer.parseInt(picGroupId)));
        request.setAttribute("editor",usersService.selectByPrimaryKey(Integer.parseInt(editorId)));
        request.setAttribute("picList", pictureService.selectAllByGroupId(Integer.parseInt(picGroupId)));
        return "picture";
    }
}
