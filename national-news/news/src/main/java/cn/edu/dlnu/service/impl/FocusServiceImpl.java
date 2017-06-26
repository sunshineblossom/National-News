package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.FocusMapper;
import cn.edu.dlnu.pojo.Focus;
import cn.edu.dlnu.pojo.FocusQueryVo;
import cn.edu.dlnu.service.IFocusService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


/**
 * Created by root on 2017/5/14.
 */
public class FocusServiceImpl implements IFocusService {
    @Autowired
    private FocusMapper focusMapper;

    public int insert(Focus focus) {
        return focusMapper.insert(focus);
    }

    public Focus validateFocus(Focus focus) {
        return focusMapper.validateFocus(focus);
    }

    public List<Focus> selectAllByUserId(Integer userId){
        return focusMapper.selectAllByUserId(userId);
    }

    public List<Focus> selectAllFocus(Integer focusUserId) {
        return focusMapper.selectAllFocus(focusUserId);
    }

    public Integer deleteByPrimaryKey(Integer fid) {
        Integer result  = null;
        try {
            result = focusMapper.deleteByPrimaryKey(fid);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    public FocusQueryVo selectFansAndFocusNumber(Integer userId) {
        return focusMapper.selectFansAndFocusNumber(userId);
    }


}
