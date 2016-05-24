
var IGitComment = function() {
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
										  "</div>"
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
	
		var obj = {content:$('#comment-content').val(),
								linenum:self.CurrentLineNumber,
								page: self.GetUrl()
							}
			console.log(obj);
		
	});
}
IGitComment.prototype.CancelAction = function(){
	var self = this;
	$('#cancel').on('click',function(){
	self.RemoveFormComment();
});
}
IGitComment.prototype.RemoveFormComment =function(){
		$('#commentform').remove();
}
IGitComment.prototype.InitFormComment = function(){
var self = this;
self.CancelAction();
self.SaveAction();
};