package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.ShareMapper;
import cn.edu.dlnu.pojo.Share;
import cn.edu.dlnu.pojo.ShareQueryVo;
import cn.edu.dlnu.service.IShareService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public class ShareServiceImpl implements IShareService {
    @Autowired
    private ShareMapper shareMapper;

    public Share selectByPrimaryKey(Integer shareId) {
        return shareMapper.selectByPrimaryKey(shareId);
    }

    public Integer insert(Share share) {
        return shareMapper.insert(share);
    }

    public int countByNewsId(Integer newsId) {
        return shareMapper.countByNewsId(newsId);
    }

    public List<Share> selectAllByUserId(Integer userId) {
        System.out.println("shareService:"+userId);
        return shareMapper.selectAllByUserId(userId);
    }
    public ShareQueryVo selectShareByPrimaryKey(Integer shareId) {
        return shareMapper.selectShareByPrimaryKey(shareId);
    }

    public int insertAndGetId(Share share) {
        return shareMapper.insertAndGetId(share);
    }

    public List<ShareQueryVo> selectByUserIdWithPicture(Integer userId) {
        return shareMapper.selectByUserIdWithPicture(userId);
    }

    public Share selectOneByUserId(Integer userId) {
        return shareMapper.selectOneByUserId(userId);
    }

    public Integer deleteByPrimaryKey(Integer shareId) {
        return shareMapper.deleteByPrimaryKey(shareId);
    }

    public List<Share> selectAll() {
        return shareMapper.selectAll();
    }

}
