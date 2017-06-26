package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.CommentLevel2;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public interface ICommentLevel2Service {
    List<CommentLevel2> selectByCommentId(Integer commentId);
    int countByCommentId(Integer commentId);
    int insert(CommentLevel2 commentLevel2);
}