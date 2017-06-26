package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.PictureMapper;
import cn.edu.dlnu.pojo.Picture;
import cn.edu.dlnu.service.IPictureService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/17.
 */
public class PictureServiceImpl implements IPictureService{
    @Autowired
    private PictureMapper pictureMapper;
    public int insert(Picture picture) {
        return pictureMapper.insert(picture);
    }

    public List<Picture> selectByNewsId(Integer newsId) {
        return pictureMapper.selectByNewsId(newsId);
    }

    public Picture selectOneByNewsId(Integer newsId) {
        return pictureMapper.selectOneByNewsId(newsId);
    }

    public Picture selectByGroupId(Integer groupId) {
        return pictureMapper.selectByGroupId(groupId);
    }

    public List<Picture> selectAllByGroupId(Integer groupId) {
        return pictureMapper.selectAllByGroupId(groupId);
    }


}
