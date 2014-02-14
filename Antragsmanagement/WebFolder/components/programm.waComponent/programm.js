
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'programm';
	// @endregion// @endlock


	this.load = function (data) {// @lock
		
	// @region namespaceDeclaration// @startlock
	var programmEvent = {};	// @dataSource
	var imageButton3 = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	programmEvent.onCollectionChange = function programmEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(sources.programm.length > 0)
			$$(getHtmlId('container2')).show();
		else
			$$(getHtmlId('container2')).hide();
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock

		// Add your code here
		var vis = $$(getHtmlId('container2')).isVisible();
		if (!vis)
			$$(getHtmlId('container2')).show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_programm", "onCollectionChange", programmEvent.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	// @endregion// @endlock

	};// @lock
		
}// @startlock
return constructor;
})();// @endlock
