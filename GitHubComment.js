var GitHubComment = function() {
    IGitComment.apply(this, arguments);
};
GitHubComment.prototype = Object.create(IGitComment.prototype);
GitHubComment.prototype.constructor = GitHubComment;

GitHubComment.prototype.render = function() {
   var self = this;
   console.log(self.AddButton);
   var linenumelement = $('.blob-num');
   linenumelement.each(function(element) {
   //	console.log(element);
   	var jElement = $(this);
   jElement.append(String.format(self.AddButton,jElement.attr('data-line-number')));
 });
}

$(function(){
	var gitComment = new GitHubComment();

	gitComment.render();
});