sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	//"EntrepinaresUI5/SAPUI5/model/models",
	//"sap/ui/model/resource/ResourceModel"
	], function(Controller, MessageToast){
		
		return Controller.extend("EntrepinaresUI5.SAPUI5.controller.App",{
		
		onInit: function(){

		},
		
		onOpenDialog: function(){
			
			this.getOwnerComponent().openHelloDialog();

		}		
		
		});
	});