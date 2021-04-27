sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"

	], function(Controller, MessageToast, Fragment){
		
		return Controller.extend("EntrepinaresUI5.SAPUI5.controller.HelloPanel",{
		
		onInit: function(){

		},
		
		onShowHello: function(){
			//Read text from i18n/model
			var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
			var sName = this.getView().getModel().getProperty("/recipient/name");
			var sMsg = sHello.concat(" ").concat(sName);
			MessageToast.show(sMsg);
			/*eslint-disable no-alert*/
			//alert("Hello");
			/*eslint-enable no-alert*/
		},
		
		onOpenDialog: function(){
			
			this.getOwnerComponent().openHelloDialog();

		}
		

		});
	});