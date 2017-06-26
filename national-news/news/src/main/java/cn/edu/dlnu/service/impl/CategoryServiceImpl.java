package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.CategoryMapper;
import cn.edu.dlnu.pojo.Category;
import cn.edu.dlnu.service.ICategoryService;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public class CategoryServiceImpl implements ICategoryService {
    @Autowired
    private CategoryMapper categoryMapper;


    public Category selectByPrimaryKey(Integer categoryId) {
        return categoryMapper.selectByPrimaryKey(categoryId);
    }

    public List<Category> selectAll() {
        return categoryMapper.selectAll();
    }

    public Integer insert(Category category) {
        return categoryMapper.insert(category);
    }

    public Integer deleteByPrimaryKey(Integer categoryId) {
        return categoryMapper.deleteByPrimaryKey(categoryId);
    }
}
