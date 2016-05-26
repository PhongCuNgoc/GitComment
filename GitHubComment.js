var GitHubComment = function(data) {
    IGitComment.apply(this, [data]);
};
GitHubComment.prototype = Object.create(IGitComment.prototype);
GitHubComment.prototype.constructor = GitHubComment;

GitHubComment.prototype.setUpAdd = function(){
	var self = this;
	$('.add-comment').on('click',function(){
		if(self.IsRenderForm)
			return;
			
			 self.lineElement.append(self.CommentForm);
			self.IsRenderForm = true;
			self.InitFormComment();
	});
}
GitHubComment.prototype.GetUrl = function(){
		var currentUrl =window.location.href;
	var position =  currentUrl.lastIndexOf('#L') != -1 ? currentUrl.lastIndexOf('#L'):0;
	 var url = currentUrl.substr(0, position);
	 return url;
}
GitHubComment.prototype.render = function() {

   var self = this;
   self.renderComment(self.lineContent);
   var linenumelement = $('.blob-num');
   var tablerow = $('table.js-file-line-container>tbody>tr');

   tablerow.hover(function(){
   	if(self.IsRenderForm )
   		return;
   	var row = $(this);
   	self.CurrentRow = row;
   var line =	$(row.find('td.blob-num.js-line-number'));
   var linecontent = $(row.find('td.blob-code.blob-code-inner.js-file-line'));
    self.lineElement = linecontent;
   self.CurrentLineNumber = line.attr('data-line-number');
   linecontent.prepend(String.format(self.AddButton,line.attr('data-line-number')));
   self.setUpAdd();
   },function(){
   	if(self.IsRenderForm)
   		return;
   	if(!self.lineElement){
 			var row = $(this);
  	  self.lineElement =	$(row.find('td.blob-num.js-line-number'));
   	}

   	self.lineElement.find('.addbutton').remove();
   	//self.RemoveFormComment();
   });

 
}
GitHubComment.prototype.renderComment = function(data){
	var self = this;
	data.forEach(function(comment) {
		var prefix='#LC';
		 var linecontent = $(prefix+comment.line);
		var contentElement = String.format(self.CommentedLayout,comment.comments);
		linecontent.append(contentElement);
	});
}
$(function(){
	var data=[
	{
		line:16,
		comments:'Hello world'
	},{
			line:1,
		comments:'Hello world'
	}];
	var gitComment = new GitHubComment(data);

	gitComment.render();
});