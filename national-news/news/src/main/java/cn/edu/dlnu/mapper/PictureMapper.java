package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.Picture;
import cn.edu.dlnu.pojo.PictureExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PictureMapper {
    int countByExample(PictureExample example);

    int deleteByExample(PictureExample example);

    int deleteByPrimaryKey(Integer picId);

    int insert(Picture record);

    int insertSelective(Picture record);

    List<Picture> selectByExample(PictureExample example);

    Picture selectByPrimaryKey(Integer picId);

    int updateByExampleSelective(@Param("record") Picture record, @Param("example") PictureExample example);

    int updateByExample(@Param("record") Picture record, @Param("example") PictureExample example);

    int updateByPrimaryKeySelective(Picture record);

    int updateByPrimaryKey(Picture record);
    //    defined by user
    List<Picture> selectByNewsId(Integer newsId);

    Picture selectOneByNewsId(Integer newsId);

    Picture selectByGroupId(Integer groupId);

    List<Picture> selectAllByGroupId(Integer groupId);
}