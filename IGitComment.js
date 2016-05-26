
var IGitComment = function(data) {
	var self = this;
    if (this.constructor === IGitComment) {
      throw new Error("Can't instantiate abstract class!");
    }
   self.AddButton = "<div class='addbutton' >"+
   "<img src='https://avatars2.githubusercontent.com/u/19391104?v=3&s=40' height=20 width=20 class='add-comment' line-number={0}></img>"+
   "</div>";
  self.CommentForm  = "<div id='commentform' > "+
										  "<label>comment:</label>"+
										  "<input id='comment-content' type='text'/> "+
										  "<button id='cancel'>cancel</button>"+
										  "<button id='savecomment'>save</button>"+
										  "</div>";
	self.CommentedLayout = "<div class='comment' style='display: block;height: 20px;border: 1px dashed #6cc644;background-color: rgba(108, 198, 68, 0.22);'>{0}</div>";

	self.lineContent = data;
		self.IsRenderForm = false;									  
};

/**
 @abstract
 */
IGitComment.prototype.render = function() {
	console.log('IGitComent render ');
    throw new Error("Abstract method!");
}

IGitComment.prototype.SaveAction = function(){
	var self = this;
	
	$('#savecomment').on('click',function(){
	
		var obj = {comments:$('#comment-content').val(),
								line:self.CurrentLineNumber,
								page: self.GetUrl()
							}
			console.log(obj);
			$('.comment').remove();
		self.lineContent.push(obj);
		 self.renderComment(self.lineContent);
		self.RemoveFormComment();
	});
}
IGitComment.prototype.CancelAction = function(){
	var self = this;
	$('#cancel').on('click',function(){
	self.RemoveFormComment();
});
}
IGitComment.prototype.RemoveFormComment =function(){
	var self = this;
	 	self.lineElement.find('.addbutton').remove();
		self.IsRenderForm = false;
		$('#commentform').remove();
}
IGitComment.prototype.InitFormComment = function(){
var self = this;
self.CancelAction();
self.SaveAction();
};