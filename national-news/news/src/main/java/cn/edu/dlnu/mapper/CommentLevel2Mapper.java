package cn.edu.dlnu.mapper;

import cn.edu.dlnu.pojo.CommentLevel2;
import cn.edu.dlnu.pojo.CommentLevel2Example;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CommentLevel2Mapper {
    int countByExample(CommentLevel2Example example);

    int deleteByExample(CommentLevel2Example example);

    int deleteByPrimaryKey(Integer scid);

    int insert(CommentLevel2 record);

    int insertSelective(CommentLevel2 record);

    List<CommentLevel2> selectByExample(CommentLevel2Example example);

    CommentLevel2 selectByPrimaryKey(Integer scid);

    int updateByExampleSelective(@Param("record") CommentLevel2 record, @Param("example") CommentLevel2Example example);

    int updateByExample(@Param("record") CommentLevel2 record, @Param("example") CommentLevel2Example example);

    int updateByPrimaryKeySelective(CommentLevel2 record);

    int updateByPrimaryKey(CommentLevel2 record);

    List<CommentLevel2> selectByCommentId(Integer commentId);

    int countByCommentId(Integer commentId);
}