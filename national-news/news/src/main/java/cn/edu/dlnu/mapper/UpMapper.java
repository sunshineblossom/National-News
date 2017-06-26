package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.Up;
import cn.edu.dlnu.pojo.UpExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UpMapper {
    int countByExample(UpExample example);

    int deleteByExample(UpExample example);

    int deleteByPrimaryKey(Integer upid);

    int insert(Up record);

    int insertSelective(Up record);

    List<Up> selectByExample(UpExample example);

    Up selectByPrimaryKey(Integer upid);

    int updateByExampleSelective(@Param("record") Up record, @Param("example") UpExample example);

    int updateByExample(@Param("record") Up record, @Param("example") UpExample example);

    int updateByPrimaryKeySelective(Up record);

    int updateByPrimaryKey(Up record);
//  defined by user
    int countByNewsId(Integer newsId);

    int countByCommentId(Integer commentId);

    int countDown(Up up);
}