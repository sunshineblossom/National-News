package cn.edu.dlnu.pojo;


import java.util.List;

public class NewsCustom extends News{
    private Integer picNumber;
    private Integer upNumber;
    private Integer shareNumber;
    private Integer commentNumber;
    private List<Picture> pictureList;
    private List<Video> videoList;
    private User editor;
    private Video video;
    private News news;

    public List<Video> getVideoList() {
        return videoList;
    }

    public void setVideoList(List<Video> videoList) {
        this.videoList = videoList;
    }

    public Video getVideo() {
        return video;
    }

    public void setVideo(Video video) {
        this.video = video;
    }

    public News getNews() {
        return news;
    }

    public void setNews(News news) {
        this.news = news;
    }

    public User getEditor() {
        return editor;
    }

    public void setEditor(User editor) {
        this.editor = editor;
    }

    public Integer getShareNumber() {
        return shareNumber;
    }

    public void setShareNumber(Integer shareNumber) {
        this.shareNumber = shareNumber;
    }

    public Integer getCommentNumber() {
        return commentNumber;
    }

    public void setCommentNumber(Integer commentNumber) {
        this.commentNumber = commentNumber;
    }

    public List<Picture> getPictureList() {
        return pictureList;
    }

    public void setPictureList(List<Picture> pictureList) {
        this.pictureList = pictureList;
    }

    public Integer getPicNumber() {
        return picNumber;
    }

    public Integer getUpNumber() {
        return upNumber;
    }

    public void setUpNumber(Integer upNumber) {
        this.upNumber = upNumber;
    }

    public void setPicNumber(Integer picNumber) {
        this.picNumber = picNumber;
    }

    @Override
    public String toString() {
        return "NewsCustom{}";
    }
}