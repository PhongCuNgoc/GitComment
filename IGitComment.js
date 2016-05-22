
var IGitComment = function() {
	var self = this;
    if (this.constructor === IGitComment) {
      throw new Error("Can't instantiate abstract class!");
    }
   self.AddButton = "<div ><span class='add-comment' line-number={0}>+</span></div>";
};

/**
 @abstract
 */
IGitComment.prototype.render = function() {
	console.log('IGitComent render ');
    throw new Error("Abstract method!");
}
