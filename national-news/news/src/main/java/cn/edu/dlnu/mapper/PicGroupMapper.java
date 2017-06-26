package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.PicGroup;
import cn.edu.dlnu.pojo.PicGroupCustom;
import cn.edu.dlnu.pojo.PicGroupExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PicGroupMapper {
    int countByExample(PicGroupExample example);

    int deleteByExample(PicGroupExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(PicGroup record);

    int insertSelective(PicGroup record);

    List<PicGroup> selectByExample(PicGroupExample example);

    PicGroup selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") PicGroup record, @Param("example") PicGroupExample example);

    int updateByExample(@Param("record") PicGroup record, @Param("example") PicGroupExample example);

    int updateByPrimaryKeySelective(PicGroup record);

    int updateByPrimaryKey(PicGroup record);

    List<PicGroupCustom> selectHotPicGroup();
}