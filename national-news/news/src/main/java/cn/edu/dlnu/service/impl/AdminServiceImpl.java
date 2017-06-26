package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.AdminMapper;
import cn.edu.dlnu.pojo.Admin;
import cn.edu.dlnu.service.IAdminService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by root on 2017/6/2.
 */
public class AdminServiceImpl implements IAdminService{
    @Autowired
    private AdminMapper adminMapper;
    public Admin validate(Admin admin) {
        return adminMapper.validate(admin);
    }
}
