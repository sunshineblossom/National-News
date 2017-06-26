package cn.edu.dlnu.service.impl;


import cn.edu.dlnu.mapper.UpMapper;
import cn.edu.dlnu.pojo.Up;
import cn.edu.dlnu.service.IUpService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by root on 2017/5/14.
 */
public class UpServiceImpl implements IUpService {
    @Autowired
    private UpMapper upMapper;


    public int countByNewsId(Integer newsId) {
        return upMapper.countByNewsId(newsId);
    }

    public int countByCommentId(Integer commentId) {
        return upMapper.countByCommentId(commentId);
    }

    public int insert(Up up) {
        return upMapper.insert(up);
    }

    public int countDown(Up up) {
        return upMapper.countDown(up);
    }
}
