package cn.edu.dlnu.controller;



import cn.edu.dlnu.pojo.Up;
import cn.edu.dlnu.service.IUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by root on 2017/4/26.
 */
@Controller
@RequestMapping("/up")
public class UpController {
    @Autowired
    private IUpService upService;
    @RequestMapping("/countByNewsId")
    @ResponseBody
    public int countByNewsId(@RequestBody String newsId){
        return upService.countByNewsId(Integer.parseInt(newsId.substring(7)));
    }
    @RequestMapping("/addUp")
    @ResponseBody
    public int addUp(@RequestBody Up up){
        return upService.insert(up);
    }
    @RequestMapping("/countDown")
    @ResponseBody
    public int countDown(@RequestBody Up up){
        return upService.countDown(up);
    }
}
