package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.NewsMapper;
import cn.edu.dlnu.pojo.News;
import cn.edu.dlnu.pojo.NewsCustom;
import cn.edu.dlnu.service.INewsService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public class NewsServiceImpl implements INewsService {
    @Autowired
    private NewsMapper newsMapper;

    public News selectByPrimaryKey(Integer newsId) {
        System.out.println(newsId);
        return newsMapper.selectByPrimaryKey(newsId);
    }

    public int insert(News news) {
        return newsMapper.insert(news);
    }

    public int insertAndGetId(News news) {
        return newsMapper.insertAndGetId(news);
    }

    public List<NewsCustom> selectByCategory(Integer categoryId) {
          return newsMapper.selectByCategory(categoryId);
    }

    public List<News> selectInOneDay() {
        return newsMapper.selectInOneDay();
    }

    public List<NewsCustom> selectHotNews() {
        return newsMapper.selectHotNews();
    }

    public List<NewsCustom> selectNewsByEditorId(Integer editorId) {
        return newsMapper.selectNewsByEditorId(editorId);
    }

    public List<News> selectByKeyWord(News news) {
        return newsMapper.selectByKeyWord(news);
    }

    public List<News> selectAll() {
        return newsMapper.selectAll();
    }

    public Integer deleteByPrimaryKey(Integer newsId) {
        return newsMapper.deleteByPrimaryKey(newsId);
    }
}
