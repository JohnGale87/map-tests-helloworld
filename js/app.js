define('app', ['module', 'jquery', 'cartodb'],
function(m, $) {
	return {
		initialize: function() {
			alert('123');
			try{
				window.cartodb.createLayer();
			} catch (err){
				alert('456');
			}
			alert('789');
		}
	};
});

require(['app'], function(App) {
	App.initialize();
});