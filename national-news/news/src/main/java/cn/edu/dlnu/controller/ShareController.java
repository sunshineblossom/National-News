package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.*;
import cn.edu.dlnu.service.IPictureService;
import cn.edu.dlnu.service.IShareService;
import cn.edu.dlnu.service.IUsersService;
import cn.edu.dlnu.service.IVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/share")
public class ShareController {
    @Autowired
    private IShareService shareService;
    @Autowired
    private IPictureService pictureService;
    @Autowired
    private IVideoService videoService;
    @Autowired
    private IUsersService usersService;
    @RequestMapping("/insert")
    @ResponseBody
    public Integer insert(@RequestBody Share share){
        System.out.println(share.getShareId()+":"+share.getShareDate());
        return shareService.insert(share);
    }

    @RequestMapping("/countByNewsId")
    @ResponseBody
    public Integer countByNewsId(@RequestBody String newsId){
        return shareService.countByNewsId(Integer.parseInt(newsId.substring(7)));
    }
    @RequestMapping("/selectAllByUserId")
    @ResponseBody
    public List<ShareQueryVo> selectAllByUserId(@RequestBody Share share1)throws Exception{
        List<Share> shareList = shareService.selectAllByUserId(share1.getUserId());
        List<ShareQueryVo> shareQueryVos = new LinkedList<ShareQueryVo>();
        System.out.println("长度："+shareList.size());
        for(int i=0;i<shareList.size();i++){
            Share share = shareList.get(i);
//            如果parentShareId!null：
//               查找父级share
//            否则不查找直接返回
            if(share.getParentShareId()!=null){
                System.out.println("parentShareId:"+share.getParentShareId());
                System.out.println("shareId:"+share.getShareId());
//            父级share
                ShareQueryVo shareQueryVo = null;
                //            父级user
                User parentUser = null;
//                子级user
                User user = null;
                Share parentShare = shareService.selectByPrimaryKey(share.getParentShareId());
               if(parentShare.getUserId()!=null){
                   parentUser = usersService.selectByPrimaryKey(parentShare.getUserId());

               }else{
                   parentUser =null;
               }
               //           子级share
               if(share.getShareId()!=null){
                   shareQueryVo = shareService.selectShareByPrimaryKey(share.getShareId());
               }
//           子级user
                if(shareQueryVo.getUserId()!=null){
                  user  = usersService.selectByPrimaryKey(shareQueryVo.getUserId());
                }
                shareQueryVo.setParentShare(parentShare);
                shareQueryVo.setParentShareUser(parentUser);
                shareQueryVo.setUser(user);
                shareQueryVos.add(shareQueryVo);
                System.out.println("shareNumber:"+shareQueryVo.getShareNumber());
                System.out.println("upNumber:"+shareQueryVo.getUpNumber());
                System.out.println("commentNumber:"+shareQueryVo.getCommentNumber());
            }else{
                //子级share
                ShareQueryVo shareQueryVo = shareService.selectShareByPrimaryKey(share.getShareId());
                //子级user
                User user = usersService.selectByPrimaryKey(shareQueryVo.getUserId());
                shareQueryVo.setUser(user);
                shareQueryVos.add(shareQueryVo);
            }
        }
        return shareQueryVos;
    }
    @RequestMapping("/selectByUserIdWithPicture")
    @ResponseBody
    public List<ShareQueryVo> selectByUserIdWithPicture(@RequestBody Share share){
        System.out.println("userId:"+share.getUserId());
        return shareService.selectByUserIdWithPicture(share.getUserId());
    }
    @RequestMapping("/insertAndGetId")
    @ResponseBody
    public int insertAndGetId(@RequestBody Share share){
//        1.解析图片
//        2.解析视频
//        3.插入数据库
//        解析出图片路径
        String content = share.getShareContent();
        String initStr = "<img src=";
        Picture picture = new Picture();
        Video video = new Video();
//        解析出文章中的图片路径
        share.setShareDate(new Date());
        System.out.println("插入前："+share.getShareId());
        shareService.insertAndGetId(share);
        System.out.println("插入后："+share.getShareId());
//        获取返回的自增主键
        int shareId = share.getShareId();
        while (content.contains(initStr)){
            int startIndex = content.indexOf("<img src=");
            String imgPath = content.substring(startIndex+10,startIndex+87);
            picture.setEditorId(share.getUserId());
            System.out.println(share.getUserId());
            picture.setPath(imgPath);
            System.out.println(imgPath);
            picture.setShareId(shareId);
            System.out.println("shareId:"+shareId);
            pictureService.insert(picture);
            content = content.substring(startIndex+87,content.length());
        }
//    解析视频地址
        String videoContent = share.getShareContent();
        System.out.println(videoContent);
        String regStr = "<video class=";
        while (videoContent.contains(regStr)){
            int startIndex = videoContent.indexOf("<video class=");
            String videoPath = videoContent.substring(startIndex+117,startIndex+189);
            System.out.println(videoPath);
            video.setPlaynumber(0);
            video.setUploadTime(new Date());
            video.setShareId(shareId);
            video.setPath(videoPath);
            video.setUploaderId(share.getUserId());
            videoService.insert(video);
            videoContent = videoContent.substring(startIndex+189,content.length());
        }
        return shareId;
    }
    @RequestMapping("/deleteByPrimaryKey")
    public String deleteByPrimaryKey(Integer[] shareId){
        for (int i=0;i<shareId.length;i++){
            shareService.deleteByPrimaryKey(shareId[i]);
        }
        return "forward:/admin/getAllInfo";
    }
    @RequestMapping("/deleteOne")
    @ResponseBody
    public Integer deleteOne(@RequestBody  String shareId){
        System.out.println(shareId);

        return shareService.deleteByPrimaryKey(Integer.parseInt(shareId.substring(12,shareId.length()-2)));
    }
}
