$("#search-bar").on("keyup", function() {
	var term = $(this).val().toLowerCase();
	var visible = 0;
	
	$("#potion-table tr").each(function(index) {
		if (index !== 0) {
			$row = $(this);
			var value = "";
			
			$(this).find("td").each(function() {
				value += $(this).text();
			});
			
			value = value.toLowerCase();
			
			if (value.indexOf(term) == -1) {
			    $row.hide();
			} else {
			    $row.show();
			    visible++;
			}
		}
	});
	
	if (term) {
		log(visible + " results found.");
	}
});

function log(msg) {
	console.log('[Potions] ' + msg);
}