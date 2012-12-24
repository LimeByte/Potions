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
					  getValue(this, 'type'),
					  getValue(this, 'duration'));
			});
			logInfo("Done!");
			
			callback();
		}
	});
}

function addPotion(name, icon, id, type, duration) {	
	$('<tr></tr>').html(
		'<td><img src="assets/img/potions/'+type.toLowerCase()+'/'+icon+'.png" /></td>' +
		'<td>' + id + '</td>' +
		'<td>' + name + '</td>' +
		'<td>' + duration + '</td>'
	)
	.appendTo('#potion-table');
	
	logDebug('Added ' + name + ' (' + duration + ').');
}
