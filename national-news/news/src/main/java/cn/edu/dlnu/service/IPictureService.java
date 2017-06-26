package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.Picture;

import java.util.List;

/**
 * Created by root on 2017/5/17.
 */
public interface IPictureService {
    int insert(Picture picture);
    List<Picture> selectByNewsId(Integer newsId);
    Picture selectOneByNewsId(Integer newsId);
    Picture selectByGroupId(Integer groupId);
    List<Picture> selectAllByGroupId(Integer groupId);
}
