package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.Share;
import cn.edu.dlnu.pojo.ShareExample;
import java.util.List;

import cn.edu.dlnu.pojo.ShareQueryVo;
import org.apache.ibatis.annotations.Param;

public interface ShareMapper {
    int countByExample(ShareExample example);

    int deleteByExample(ShareExample example);

    int deleteByPrimaryKey(Integer shareId);

    int insert(Share record);

    int insertSelective(Share record);

    List<Share> selectByExampleWithBLOBs(ShareExample example);

    List<Share> selectByExample(ShareExample example);

    Share selectByPrimaryKey(Integer shareId);

    int updateByExampleSelective(@Param("record") Share record, @Param("example") ShareExample example);

    int updateByExampleWithBLOBs(@Param("record") Share record, @Param("example") ShareExample example);

    int updateByExample(@Param("record") Share record, @Param("example") ShareExample example);

    int updateByPrimaryKeySelective(Share record);

    int updateByPrimaryKeyWithBLOBs(Share record);

    int updateByPrimaryKey(Share record);

//  defined by user
    int insertAndGetId(Share share);

    int countByNewsId(Integer newsId);

    List<Share> selectAllByUserId(Integer userId);

    ShareQueryVo selectShareByPrimaryKey(Integer shareId);

    List<ShareQueryVo> selectByUserIdWithPicture(Integer userId);

    Share selectOneByUserId(Integer userId);

    List<Share> selectAll();
}