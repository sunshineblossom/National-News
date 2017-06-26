package cn.edu.dlnu.pojo;

/**
 * Created by root on 2017/5/24.
 */
public class CommentQueryVo {
    private Comment comment;
    private Integer secondCommentNumber;
    private User user;
    private Integer upNumber;
    private Integer commentNumber;
    private CommentCustom commentCustom;
    private Share share;
    private News news;

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

    public CommentCustom getCommentCustom() {
        return commentCustom;
    }

    public void setCommentCustom(CommentCustom commentCustom) {
        this.commentCustom = commentCustom;
    }
    public Integer getCommentNumber() {
        return commentNumber;
    }

    public void setCommentNumber(Integer commentNumber) {
        this.commentNumber = commentNumber;
    }

    public Integer getUpNumber() {
        return upNumber;
    }

    public void setUpNumber(Integer upNumber) {
        this.upNumber = upNumber;
    }

    public Integer getSecondCommentNumber() {
        return secondCommentNumber;
    }

    public void setSecondCommentNumber(Integer secondCommentNumber) {
        this.secondCommentNumber = secondCommentNumber;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }
}
