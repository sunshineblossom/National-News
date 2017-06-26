package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.Category;

import java.util.List;


/**
 * Created by root on 2017/5/14.
 */
public interface ICategoryService {
    Category selectByPrimaryKey(Integer categoryId);
    List<Category> selectAll();
    Integer insert(Category category);
    Integer deleteByPrimaryKey(Integer categoryId);
}
