package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.Picture;
import cn.edu.dlnu.service.IPictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/picture")
public class PictureController {
    @Autowired
    private IPictureService pictureService;

    @RequestMapping("/selectByNewsId")
    @ResponseBody
    public List<Picture> selectByNewsId(@RequestBody String newsId){
        System.out.println(newsId);
        return pictureService.selectByNewsId(Integer.parseInt(newsId.substring(7)));
    }
    @RequestMapping("/selectOneByNewsId")
    @ResponseBody
    public Picture selectOneByNewsId(@RequestBody String newsId){
        System.out.println("newsId"+newsId);
        return pictureService.selectOneByNewsId(Integer.parseInt(newsId.substring(7)));
    }
    @RequestMapping("/selectByGroupId")
    @ResponseBody
    public  Picture selectByGroupId(@RequestBody  String groupId){
        System.out.println("groupId:"+pictureService.selectByGroupId(Integer.parseInt(groupId.substring(8))).getPath());
        return pictureService.selectByGroupId(Integer.parseInt(groupId.substring(8)));
    }
}
