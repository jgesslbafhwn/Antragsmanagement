
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'programm';
	// @endregion// @endlock


	this.load = function (data) {// @lock
		
	// @region namespaceDeclaration// @startlock
	var imageButton3 = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		// Add your code here
		var vis = $$(getHtmlId('container2')).isVisible();
		if (!vis)
			$$(getHtmlId('container2')).show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	// @endregion// @endlock

	};// @lock

}// @startlock
return constructor;
})();// @endlock
