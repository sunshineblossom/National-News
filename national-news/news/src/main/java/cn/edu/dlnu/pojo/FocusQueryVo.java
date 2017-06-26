package cn.edu.dlnu.pojo;

import java.util.List;

public class FocusQueryVo {
    private Focus focus;
    private User user;
    private Share share;
    private News news;
    private Integer focusNumber;
    private Integer fansNumber;

    public Integer getFocusNumber() {
        return focusNumber;
    }

    public void setFocusNumber(Integer focusNumber) {
        this.focusNumber = focusNumber;
    }

    public Integer getFansNumber() {
        return fansNumber;
    }

    public void setFansNumber(Integer fansNumber) {
        this.fansNumber = fansNumber;
    }

    public Focus getFocus() {
        return focus;
    }

    public void setFocus(Focus focus) {
        this.focus = focus;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Share getShare() {
        return share;
    }

    public void setShare(Share share) {
        this.share = share;
    }

    public News getNews() {
        return news;
    }

    public void setNews(News news) {
        this.news = news;
    }
}