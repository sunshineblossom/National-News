package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.CommentLevel2;
import cn.edu.dlnu.pojo.CommentLevel2QueryVo;
import cn.edu.dlnu.service.ICommentLevel2Service;
import cn.edu.dlnu.service.IUpService;
import cn.edu.dlnu.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/commentlevel2")
public class CommentLevel2Controller {
    @Autowired
    private ICommentLevel2Service commentLevel2Service;
    @Autowired
    private IUsersService usersService;
    @Autowired
    private IUpService upService;
    @RequestMapping("/selectByCommentId")
    @ResponseBody
    public List<CommentLevel2QueryVo> selectByCommentId(@RequestBody String commentId){
        System.out.println(commentId);
        List<CommentLevel2QueryVo> commentLevel2QueryVos = new ArrayList<CommentLevel2QueryVo>();
        List<CommentLevel2> commentList = commentLevel2Service.selectByCommentId(Integer.parseInt(commentId.substring(14,commentId.length()-2)));
        for(int i=0;i<commentList.size();i++){
            CommentLevel2QueryVo commentLevel2QueryVo = new CommentLevel2QueryVo();
            CommentLevel2 commentLevel2 = commentList.get(i);
            commentLevel2QueryVo.setUser(usersService.selectByPrimaryKey(commentLevel2.getUserId()));
            commentLevel2QueryVo.setCommentLevel2(commentLevel2);
            commentLevel2QueryVo.setUpNumber(upService.countByCommentId(commentLevel2.getCommentId()));
            commentLevel2QueryVos.add(commentLevel2QueryVo);
        }
        return commentLevel2QueryVos;
    }
    @RequestMapping("/addComment")
    @ResponseBody
    public int addComment(@RequestBody CommentLevel2 commentLevel2){
        commentLevel2.setPublishtime(new Date());
        System.out.println(commentLevel2.getContent());
        return commentLevel2Service.insert(commentLevel2);
    }
}
