package cn.edu.dlnu.service;


import cn.edu.dlnu.pojo.Focus;
import cn.edu.dlnu.pojo.FocusQueryVo;

import java.util.List;

/**
 * Created by root on 2017/5/17.
 */
public interface IFocusService {
    int insert(Focus focus);
    Focus validateFocus(Focus focus);
    List<Focus> selectAllByUserId(Integer userId);
    List<Focus> selectAllFocus(Integer focusUserId);
    Integer deleteByPrimaryKey(Integer fid);
    FocusQueryVo selectFansAndFocusNumber(Integer userId);
}
