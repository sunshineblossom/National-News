package cn.edu.dlnu.service;


import cn.edu.dlnu.pojo.Share;
import cn.edu.dlnu.pojo.ShareQueryVo;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public interface IShareService {
    Share selectByPrimaryKey(Integer shareId);
    Integer insert(Share share);
    int countByNewsId(Integer newsId);
    List<Share> selectAllByUserId(Integer userId);
    ShareQueryVo selectShareByPrimaryKey(Integer shareId);
    int insertAndGetId(Share share);
    List<ShareQueryVo> selectByUserIdWithPicture(Integer userId);
    Share selectOneByUserId(Integer userId);
    Integer deleteByPrimaryKey(Integer shareId);
    List<Share> selectAll();
}
