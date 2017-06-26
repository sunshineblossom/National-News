package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.CommentMapper;
import cn.edu.dlnu.pojo.Comment;
import cn.edu.dlnu.pojo.CommentCustom;
import cn.edu.dlnu.service.ICommentService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public class CommentServiceImpl implements ICommentService {
    @Autowired
    private CommentMapper commentMapper;

    public Comment selectByPrimaryKey(Integer commentId) {
        return commentMapper.selectByPrimaryKey(commentId);
    }

    public Integer insert(Comment comment) {
        return commentMapper.insert(comment);
    }

    public int countByNewsId(Integer newsId) {
        return commentMapper.countByNewsId(newsId);
    }

    public List<Comment> selectByNewsId(Integer newsId) {
        return commentMapper.selectByNewsId(newsId);
    }

    public List<CommentCustom> selectHotCommentNews() {
        return commentMapper.selectHotCommentNews();
    }

    public List<Comment> selectByShareId(Integer shareId) {
        return commentMapper.selectByShareId(shareId);
    }
}
