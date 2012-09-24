function addPotions(callback) {
	logInfo("Adding potions...");
	$.ajax({
		type: "GET",
		url: "assets/xml/potions.xml", 
		dataType: "xml",
		success: function(xml) {	
			$(xml).find('potion').each(function() {	
				addPotion(getValue(this, 'name'),
						  getValue(this, 'icon'),
						  getValue(this, 'id'),
						  getValue(this, 'duration'));
			});
			$("#potion-table").fadeIn("slow");
			logInfo("Done!");
			
			callback();
		}
	});
}

function addPotion(name, icon, id, duration) {
	$('<tr></tr>').html(
		'<td><img src="assets/img/potions/'+icon+'.png" /></td>' +
		'<td>' + id + '</td>' +
		'<td>' + name + '</td>' +
		'<td>' + duration + '</td>'
	)
	.appendTo('#potion-table');
	
	logDebug('Added ' + name + ' (' + duration + ').');
}