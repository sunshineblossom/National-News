package cn.edu.dlnu.service;



import cn.edu.dlnu.pojo.Video;

import java.util.List;

/**
 * Created by root on 2017/5/14.
 */
public interface IVideoService {
    Video selectByPrimaryKey(Integer videoId);
    Integer insert(Video video);
    List<Video> selectHotVideo();
    List<Video> selectReference(Integer uploaderId);
    List<Video> selectByNewsId(Integer newsId);
    List<Video> selectAll();
    Integer deleteByPrimaryKey(Integer videoId);
}
