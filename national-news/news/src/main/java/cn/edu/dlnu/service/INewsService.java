package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.News;
import cn.edu.dlnu.pojo.NewsCustom;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public interface INewsService {
    News selectByPrimaryKey(Integer newsId);
    int insert(News news);
    int insertAndGetId(News news);
    List<NewsCustom> selectByCategory(Integer categoryId);
    List<News> selectInOneDay();
    List<NewsCustom> selectHotNews();
    List<NewsCustom> selectNewsByEditorId(Integer editorId);
    List<News> selectByKeyWord(News news);
    List<News> selectAll();
    Integer deleteByPrimaryKey(Integer newsId);
}
