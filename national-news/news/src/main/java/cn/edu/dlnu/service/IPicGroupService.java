package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.PicGroup;
import cn.edu.dlnu.pojo.PicGroupCustom;

import java.util.List;

/**
 * Created by root on 2017/5/17.
 */
public interface IPicGroupService {
   List<PicGroupCustom> selectHotPicGroup();
   PicGroup selectByPrimaryKey(Integer groupId);
}
