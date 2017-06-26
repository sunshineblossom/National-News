package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.PicGroupMapper;
import cn.edu.dlnu.pojo.PicGroup;
import cn.edu.dlnu.pojo.PicGroupCustom;
import cn.edu.dlnu.service.IPicGroupService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/17.
 */
public class PicGroupServiceImpl implements IPicGroupService {
    @Autowired
    private PicGroupMapper picGroupMapper;

    public List<PicGroupCustom> selectHotPicGroup() {
        return picGroupMapper.selectHotPicGroup();
    }

    public PicGroup selectByPrimaryKey(Integer groupId) {
        return picGroupMapper.selectByPrimaryKey(groupId);
    }
}
