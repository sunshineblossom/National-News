package cn.edu.dlnu.pojo;



public class ShareQueryVo extends Share{
    private Integer upNumber;
    private Integer commentNumber;
    private Integer shareNumber;
    private  User parentShareUser;
    private Share share;

    private Share parentShare;

    private User user;

    public Share getShare() {
        return share;
    }

    public void setShare(Share share) {
        this.share = share;
    }

    public User getUser() {
        return user;
    }

    public User getParentShareUser() {
        return parentShareUser;
    }

    public void setParentShareUser(User parentShareUser) {
        this.parentShareUser = parentShareUser;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Share getParentShare() {
        return parentShare;
    }

    public void setParentShare(Share parentShare) {
        this.parentShare = parentShare;
    }

    public Integer getUpNumber() {
        return upNumber;
    }

    public void setUpNumber(Integer upNumber) {
        this.upNumber = upNumber;
    }

    public Integer getCommentNumber() {
        return commentNumber;
    }

    public void setCommentNumber(Integer commentNumber) {
        this.commentNumber = commentNumber;
    }

    public Integer getShareNumber() {
        return shareNumber;
    }

    public void setShareNumber(Integer shareNumber) {
        this.shareNumber = shareNumber;
    }

}