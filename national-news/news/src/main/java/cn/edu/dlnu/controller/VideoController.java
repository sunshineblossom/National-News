package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.User;
import cn.edu.dlnu.pojo.Video;
import cn.edu.dlnu.pojo.VideoQueryVo;
import cn.edu.dlnu.service.IUsersService;
import cn.edu.dlnu.service.IVideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/video")
public class VideoController {
    @Autowired
    private IVideoService videoService;
    @Autowired
    private IUsersService usersService;

    //查找过一天以内播放次数最高的视频选取5条显示
    @RequestMapping("/selectHotVideo")
    @ResponseBody
    public List<Video> selectHotVideo() {
        return videoService.selectHotVideo();
    }

//    最新发布的视频
//    @RequestMapping("/selectAll")
//    @ResponseBody
//    public List<VideoQueryVo> selectAll(){
//        List<VideoQueryVo> queryVos = new LinkedList<VideoQueryVo>();
//        List<Video> videoList = new LinkedList<Video>();
//        for(int i=0;i<videoList.size();i++){
//
//            queryVos.add()
//        }
//        return queryVos;
//    }

    //  跳转至video页
    @RequestMapping("/videodetial/{videoId}/{userId}")
    public String videodetial(HttpServletRequest request, @PathVariable("videoId") String videoId, @PathVariable("userId") String userId) {
        request.setAttribute("video", videoService.selectByPrimaryKey(Integer.parseInt(videoId)));
        request.setAttribute("editor", usersService.selectByPrimaryKey(Integer.parseInt(userId)));
        List<Video> ref = videoService.selectReference(Integer.parseInt(userId));
        Map<Video,User> refMap = new HashMap<Video, User>();
        for(int i=0;i<ref.size();i++){
                refMap.put(ref.get(i),usersService.selectByPrimaryKey(ref.get(i).getUploaderId()));
        }
        request.setAttribute("refMap",refMap);
        return "video";
    }
    @RequestMapping("/deleteByPrimaryKey")
    public String deleteByPrimaryKey(Integer[] videoId){
        for (int i=0;i<videoId.length;i++){
            videoService.deleteByPrimaryKey(videoId[i]);
        }
        return "forward:/admin/getAllInfo";
    }

}
