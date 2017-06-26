package cn.edu.dlnu.service;


import cn.edu.dlnu.pojo.User;

import java.util.List;

/**
 * Created by root on 2017/4/25.
 */
public interface IUsersService {
    User validate(User user);
    User selectByPrimaryKey(Integer uid);
    int updateInfo(User user);
    int insert(User user);
    int insertAndGetId(User user);
    List<User> selectAll();
    Integer deleteByPrimaryKey(Integer userId);
}
