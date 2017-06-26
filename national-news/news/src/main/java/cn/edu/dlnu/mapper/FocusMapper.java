package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.Focus;
import cn.edu.dlnu.pojo.FocusExample;
import java.util.List;

import cn.edu.dlnu.pojo.FocusQueryVo;
import org.apache.ibatis.annotations.Param;

public interface FocusMapper {
    int countByExample(FocusExample example);

    int deleteByExample(FocusExample example);

    int deleteByPrimaryKey(Integer fid);

    int insert(Focus record);

    int insertSelective(Focus record);

    List<Focus> selectByExample(FocusExample example);

    Focus selectByPrimaryKey(Integer fid);

    int updateByExampleSelective(@Param("record") Focus record, @Param("example") FocusExample example);

    int updateByExample(@Param("record") Focus record, @Param("example") FocusExample example);

    int updateByPrimaryKeySelective(Focus record);

    int updateByPrimaryKey(Focus record);

    //    defined by user
    Focus validateFocus(Focus focus);
    List<Focus> selectAllByUserId(Integer userId);
    List<Focus> selectAllFocus(Integer focusUserId);
    FocusQueryVo selectFansAndFocusNumber(Integer userId);
}