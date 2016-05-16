$(function(){
	var rv=new Review();
	rv.render();
});


function Review(){
	var self=this;
	var parameters={
		id:window.location.pathname,
		blob:$('.blob-wrapper'),
		number:'.blob-num',
		line:'.blob-code.blob-code-inner'
	}		
	var components={
		menu:"<div><ul><li>+</li><li>-</li></ul></div>",
		comment:'<div style="display: block;height: 20px;border: 1px dashed #6cc644;background-color: rgba(108, 198, 68, 0.22);"></div>'
	}
	var data=[
	{
		line:56,
		comments:'Hello world'
	}];
		
	this.render=function render(){		
		data.forEach(function(value,id){
			var $line=$('#L'+value.line);
			$line.addClass('ci-comments');
			$line.next(parameters.line).append($(components.comment));
		});
	}
	this.showMenu=function showMenu(){
		
	}
	
	$(parameters.number).hover(function(){
		self.showMenu({
			line:$(this)
		});		
	},function(){
		self.hideMenu({
			line:$(this)
		});
	});
}
