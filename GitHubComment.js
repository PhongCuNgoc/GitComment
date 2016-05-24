var GitHubComment = function() {
    IGitComment.apply(this, arguments);
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
	console.log( currentUrl.lastIndexOf('#L'));
	 var url = currentUrl.substr(0, position);
	 return url;
}
GitHubComment.prototype.render = function() {
   var self = this;
   var linenumelement = $('.blob-num');
   var tablerow = $('table.js-file-line-container>tbody>tr');

   tablerow.hover(function(){
   	var row = $(this);
   	self.CurrentRow = row;
   var line =	$(row.find('td.blob-num.js-line-number'));
   var linecontent = $(row.find('td.blob-code.blob-code-inner.js-file-line'));
    self.lineElement = linecontent;
   self.CurrentLineNumber = line.attr('data-line-number');
   linecontent.prepend(String.format(self.AddButton,line.attr('data-line-number')));
   self.setUpAdd();
   },function(){
   	if(!self.lineElement){
 			var row = $(this);
  	  self.lineElement =	$(row.find('td.blob-num.js-line-number'));
   	}
self.IsRenderForm = false;
   	self.lineElement.find('.addbutton').remove();
   	self.RemoveFormComment();
   });

  /* linenumelement.each(function(element) {
   //	console.log(element);
   	var jElement = $(this);
   jElement.append(String.format(self.AddButton,jElement.attr('data-line-number')));
 });*/
}

$(function(){
	var gitComment = new GitHubComment();

	gitComment.render();
});