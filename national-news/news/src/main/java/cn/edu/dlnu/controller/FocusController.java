package cn.edu.dlnu.controller;



import cn.edu.dlnu.pojo.*;
import cn.edu.dlnu.service.IFocusService;

import cn.edu.dlnu.service.INewsService;
import cn.edu.dlnu.service.IShareService;
import cn.edu.dlnu.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.LinkedList;
import java.util.List;

/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/focus")
public class FocusController {
    @Autowired
    private IFocusService focusService;
    @Autowired
    private IUsersService usersService;
    @Autowired
    private IShareService shareService;
    @Autowired
    private INewsService newsService;
    @RequestMapping("/addFocus")
    @ResponseBody
    public int addFocus(@RequestBody Focus focus){
        return focusService.insert(focus);
    }
    @RequestMapping("/validateFocus")
    @ResponseBody
    public Focus validateFocus(@RequestBody  Focus focus){
        System.out.println(focus.getUserId()+":"+focus.getFocusUserId());
        return focusService.validateFocus(focus);
    }
    @RequestMapping("/selectAllFocus")
    @ResponseBody
    public List<FocusQueryVo> selectAllFocus(@RequestBody Focus focus){
        List<FocusQueryVo> focusQueryVos = new LinkedList<FocusQueryVo>();
        System.out.println(focus.getUserId());
      //  Focus focus1 = focusService.s
        List<Focus> focuses = focusService.selectAllByUserId(focus.getUserId());
        System.out.println(focuses.size());
        for (int i=0;i<focuses.size();i++){
            FocusQueryVo focusQueryVo = new FocusQueryVo();
            System.out.println("focusUserId:"+focuses.get(i).getFocusUserId());
//           查询用户信息
            User user =  usersService.selectByPrimaryKey(focuses.get(i).getFocusUserId());
            if (user==null){
                System.out.println("user为空");
            }
           // System.out.println("userId:"+user.getUid()+"username:"+user.getUsername());
            if(user.getLevel()==1){//如果是编辑身份，如果关注人是编辑 那么便查询他的最新的新闻
                System.out.println("用户级别"+user.getLevel());
                List<NewsCustom> newsList = newsService.selectNewsByEditorId(focuses.get(i).getFocusUserId());
                System.out.println(newsList.size());
                if((newsList!=null)&&(newsList.size()>0)){
                    News news = newsList.get(0);
                    if (news == null){
                        System.out.println("news null");
                    }
                    if(news!=null){
                        focusQueryVo.setNews(news);
                    }
                }else{
                    System.out.println("newsList==null");
                }
            }else {//普通用户，如果关注认识普通用户，那么边查询他的最新日志
               Share share = shareService.selectOneByUserId(focuses.get(i).getFocusUserId());
                if(share!=null){
                    focusQueryVo.setShare(share);
                }
            }
            focusQueryVo.setFocus(focuses.get(i));
            focusQueryVo.setUser(user);
            focusQueryVos.add(focusQueryVo);
        }
        System.out.println(focusQueryVos.size());
        return focusQueryVos;
    }
    @RequestMapping("/deleteByPrimaryKey")
    @ResponseBody
    public Integer deleteByPrimaryKey(@RequestBody String fid){

        Integer result = null;
        try {
            result = focusService.deleteByPrimaryKey(Integer.parseInt(fid.substring(4)));
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }
    @RequestMapping("/selectAllFans")
    @ResponseBody
    public List<FocusQueryVo> selectAllFans(@RequestBody Focus focus){
        List<FocusQueryVo> focusQueryVos = new LinkedList<FocusQueryVo>();
        List<Focus> focuses = focusService.selectAllFocus(focus.getUserId());
        for (int i=0;i<focuses.size();i++){
            FocusQueryVo focusQueryVo = new FocusQueryVo();
//           查询用户信息
            User user =  usersService.selectByPrimaryKey(focuses.get(i).getUserId());
            if(user.getLevel()==1){//如果是编辑身份，如果关注人是编辑 那么便查询他的最新的新闻
                List<NewsCustom> newsList = newsService.selectNewsByEditorId(focuses.get(i).getUserId());
                if(newsList!=null&&newsList.size()>0){
                    focusQueryVo.setNews(newsList.get(0));
                }else{
                    System.out.println("news为空");
                   // throw new NullPointerException("news is null");
                }

            }else {//普通用户，如果关注认识普通用户，那么边查询他的最新日志
                Share share = shareService.selectOneByUserId(focuses.get(i).getUserId());
                if(share!=null){
                    focusQueryVo.setShare(share);
                }else{
                    System.out.println("share为空");
            //        throw new NullPointerException("share is null");
                }
            }
            focusQueryVo.setUser(user);
            focusQueryVo.setFocus(focuses.get(i));
            focusQueryVos.add(focusQueryVo);
            System.out.println(user.getUsername());
        }
        return focusQueryVos;
    }
}
