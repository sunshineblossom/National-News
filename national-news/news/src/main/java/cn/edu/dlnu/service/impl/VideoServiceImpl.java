package cn.edu.dlnu.service.impl;

import cn.edu.dlnu.mapper.VideoMapper;
import cn.edu.dlnu.pojo.Video;
import cn.edu.dlnu.service.IVideoService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public class VideoServiceImpl implements IVideoService {
    @Autowired
    private VideoMapper videoMapper;


    public Video selectByPrimaryKey(Integer videoId) {
        return videoMapper.selectByPrimaryKey(videoId);
    }

    public Integer insert(Video video) {
        return videoMapper.insert(video);
    }
//    查找过一天以内播放次数最高的视频选取5条显示
    public List<Video> selectHotVideo() {
        return videoMapper.selectHotVideo();
    }
//    查询标题相似的推荐
    public List<Video> selectReference(Integer uploaderId) {
        return videoMapper.selectReference(uploaderId);
    }

    public List<Video> selectByNewsId(Integer newsId) {
        return videoMapper.selectByNewsId(newsId);
    }

    public List<Video> selectAll() {
        return videoMapper.selectAll();
    }

    public Integer deleteByPrimaryKey(Integer videoId) {
        return videoMapper.deleteByPrimaryKey(videoId);
    }

}
