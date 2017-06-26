package cn.edu.dlnu.pojo;

import java.util.Date;

public class Share {
    private Integer shareId;

    private Integer newsId;

    private Integer userId;

    private Date shareDate;

    private Integer picId;

    private Integer parentShareId;

    private String shareContent;

    public Integer getShareId() {
        return shareId;
    }

    public void setShareId(Integer shareId) {
        this.shareId = shareId;
    }

    public Integer getNewsId() {
        return newsId;
    }

    public void setNewsId(Integer newsId) {
        this.newsId = newsId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getShareDate() {
        return shareDate;
    }

    public void setShareDate(Date shareDate) {
        this.shareDate = shareDate;
    }

    public Integer getPicId() {
        return picId;
    }

    public void setPicId(Integer picId) {
        this.picId = picId;
    }

    public Integer getParentShareId() {
        return parentShareId;
    }

    public void setParentShareId(Integer parentShareId) {
        this.parentShareId = parentShareId;
    }

    public String getShareContent() {
        return shareContent;
    }

    public void setShareContent(String shareContent) {
        this.shareContent = shareContent == null ? null : shareContent.trim();
    }
}