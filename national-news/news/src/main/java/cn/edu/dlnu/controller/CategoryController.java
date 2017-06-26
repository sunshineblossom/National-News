package cn.edu.dlnu.controller;


import cn.edu.dlnu.pojo.Category;
import cn.edu.dlnu.service.ICategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;

    @RequestMapping("/selectAll")
    @ResponseBody
    public List<Category> selectAll(){
        return categoryService.selectAll();
    }
    @RequestMapping("/deleteByPrimaryKey")
    public String deleteByPrimaryKey(Integer[] categoryId){
        for (int i=0;i<categoryId.length;i++){
            categoryService.deleteByPrimaryKey(categoryId[i]);
        }
        return "forward:/admin/getAllInfo";
    }

}
