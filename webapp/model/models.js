sap.ui.define([
	"sap/ui/model/json/JSONModel"
	], function(JSONModel){
		
		return {
			createRecipient: function(){
		var oData = {
			recipient :{
				name: "Word"
			}
		};
		//var oModel = new JSONModel(oData);
		return new JSONModel(oData);
			}
		};
		
	});		