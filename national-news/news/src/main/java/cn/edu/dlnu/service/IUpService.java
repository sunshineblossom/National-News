package cn.edu.dlnu.service;

import cn.edu.dlnu.pojo.Up;


/**
 * Created by root on 2017/5/14.
 */
public interface IUpService {
   int countByNewsId(Integer newsId);
   int countByCommentId(Integer commentId);
   int insert(Up up);
   int countDown(Up up);
}
