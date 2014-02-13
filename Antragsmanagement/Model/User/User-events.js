

model.User.fullName.onGet = function() {
	// Initialize variable
	var nameParts = 0;
	
	// Check firstName
	nameParts = (this.firstName != null && this.firstName != '') ? nameParts + 1 : nameParts;

	// Check lastName
	nameParts = (this.lastName != null && this.lastName != '') ? nameParts + 2 : nameParts;
	
	// Calculate fullName
	switch(nameParts) {
		case 1:
			return this.firstName;
			break;
		case 2:
			return this.lastName;
			break;
		case 3:
			return this.firstName + ' ' + this.lastName;
			break;
		default:
			return 'No name';
			break;
			
	}
};
