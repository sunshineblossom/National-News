package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.Video;
import cn.edu.dlnu.pojo.VideoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface VideoMapper {
    int countByExample(VideoExample example);

    int deleteByExample(VideoExample example);

    int deleteByPrimaryKey(Integer videoId);

    int insert(Video record);

    int insertSelective(Video record);

    List<Video> selectByExample(VideoExample example);

    Video selectByPrimaryKey(Integer videoId);

    int updateByExampleSelective(@Param("record") Video record, @Param("example") VideoExample example);

    int updateByExample(@Param("record") Video record, @Param("example") VideoExample example);

    int updateByPrimaryKeySelective(Video record);

    int updateByPrimaryKey(Video record);

    List<Video> selectHotVideo();
    //    查询类似推荐
    List<Video> selectReference(Integer uploaderId);

    List<Video> selectByNewsId(Integer newsId);

    List<Video> selectAll();
}