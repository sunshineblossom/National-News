package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.UserMapper;
import cn.edu.dlnu.pojo.User;
import cn.edu.dlnu.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


/**
 * Created by root on 2017/4/25.
 */

public class UsersServiceImpl implements IUsersService {
    @Autowired
    private UserMapper userMapper;

    public User validate(User user) {
        return userMapper.validate(user);
    }

    public User selectByPrimaryKey(Integer uid) {
        return userMapper.selectByPrimaryKey(uid);
    }

    public int updateInfo(User user) {
        return userMapper.updateInfo(user);
    }

    public int insert(User user) {
        return userMapper.insert(user);
    }
    public int insertAndGetId(User user){
        return  userMapper.insertAndGetId(user);
    }

    public List<User> selectAll() {
        return userMapper.selectAll();
    }

    public Integer deleteByPrimaryKey(Integer userId) {
        return userMapper.deleteByPrimaryKey(userId);
    }
}
