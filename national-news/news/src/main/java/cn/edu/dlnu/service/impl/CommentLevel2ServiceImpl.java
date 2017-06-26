package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.CommentLevel2Mapper;
import cn.edu.dlnu.pojo.CommentLevel2;
import cn.edu.dlnu.service.ICommentLevel2Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


/**
 * Created by root on 2017/5/14.
 */
public class CommentLevel2ServiceImpl implements ICommentLevel2Service {
    @Autowired
    private CommentLevel2Mapper commentLevel2Mapper;
    public List<CommentLevel2> selectByCommentId(Integer commentId) {
        return commentLevel2Mapper.selectByCommentId(commentId);
    }

    public int countByCommentId(Integer commentId) {
        return commentLevel2Mapper.countByCommentId(commentId);
    }

    public int insert(CommentLevel2 commentLevel2) {
        return commentLevel2Mapper.insert(commentLevel2);
    }
}
