$("#search-bar").on("keyup", function() {
	var term = $(this).val().toLowerCase();
	
	$("#potion-table tr").each(function(index) {
		if (index !== 0) {
			$row = $(this);
			var value = "";
			
			this.find("td").each(function() {
				value += $(this).text();
			});
			
			value = value.toLowerCase();
			
			if (value.indexOf(term) == -1) {
			    $row.hide();
			} else {
			    $row.show();
			}
		}
	});
});