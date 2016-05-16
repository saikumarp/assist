app.directive('allowNumber', [function(){
	return {
		restrict : 'A',
		link: function(scope, element, attrs) {
			element.bind('keydown', function(e){
				// Allow: backspace, delete, tab, escape, enter and .
		        if ( ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode)!== -1)  ||
		             // Allow: Ctrl+A, Command+A
		            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) || 
		             // Allow: home, end, left, right, down, up
		            (e.keyCode >= 35 && e.keyCode <= 40)) {
		                 // let it happen, don't do anything
		                 return;
		        }
		        // Ensure that it is a number and stop the keypress
		        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		            e.preventDefault();
		        }	
			})
		}  
	}	
}]).directive('userTooltip', function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.tooltip();
		}
	}
});