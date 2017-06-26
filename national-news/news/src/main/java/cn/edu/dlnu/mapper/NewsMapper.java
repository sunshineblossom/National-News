package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.News;
import cn.edu.dlnu.pojo.NewsCustom;
import cn.edu.dlnu.pojo.NewsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface NewsMapper {
    int countByExample(NewsExample example);

    int deleteByExample(NewsExample example);

    int deleteByPrimaryKey(Integer newsId);

    int insert(News record);

    int insertSelective(News record);

    List<News> selectByExampleWithBLOBs(NewsExample example);

    List<News> selectByExample(NewsExample example);

    News selectByPrimaryKey(Integer newsId);

    int updateByExampleSelective(@Param("record") News record, @Param("example") NewsExample example);

    int updateByExampleWithBLOBs(@Param("record") News record, @Param("example") NewsExample example);

    int updateByExample(@Param("record") News record, @Param("example") NewsExample example);

    int updateByPrimaryKeySelective(News record);

    int updateByPrimaryKeyWithBLOBs(News record);

    int updateByPrimaryKey(News record);

    //  defined by user
    int insertAndGetId(News news);

    List<NewsCustom> selectByCategory(int CategoryId);

    List<News> selectInOneDay();

    List<NewsCustom> selectHotNews();

    List<NewsCustom> selectNewsByEditorId(Integer editorId);

    List<News> selectByKeyWord(News news);

    List<News> selectAll();
}