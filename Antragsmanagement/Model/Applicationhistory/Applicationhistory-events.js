

model.Applicationhistory.events.onSave = function() {
	// Query all objects with this application ordered by date
	//var historyCollection = ds.Applicationhistory.query('application.ID == :1', this.application.ID);
	var historyCollection = ds.Application(this.application.ID).history;
	historyCollection.orderBy('date des');
	var i = 0;
	historyCollection.forEach(function(obj){
		obj.historyNumber = i++; 
	});
};
