function addPotion(name, icon, id, duration) {
	$('<tr></tr>').html(
	    '<td><img src="assets/img/potions/'+icon+'.png" /></td>'
	  + '<td>' + name + '</td>'
	  + '<td>' + duration + '</td>'
	  + '<td>' + id + '</td>')
	  .appendTo('#potion-table');
	
	logDebug('Added ' + name + ' (' + duration + ').');
}