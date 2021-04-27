sap.ui.define([
	"sap/ui/core/UIComponent",
	"EntrepinaresUI5/SAPUI5/model/models",
	"sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"
	], function(UIComponent, models, ResourceModel, HelloDialog){
		
		return UIComponent.extend("EntrepinaresUI5.SAPUI5.Component", {
			
			metadata:{
				manifest: "json"
				/*rootView: {
					"viewName":"EntrepinaresUI5.SAPUI5.view.App",
					"type": "XML",
					"async": true,
					"id": "app"
				}*/
			},
			
			init: function(){
				//call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);
				this.setModel(models.createRecipient());
				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "EntrepinaresUI5.SAPUI5.i18n.i18n"	
				});
			this.setModel(i18nModel, "i18n");
			
			this._HelloDialog = new HelloDialog(this.getRootControl());
			},
			exit: function(){
				this._HelloDialog.destoy();
				delete this._HelloDialog;
			},
			
			openHelloDialog: function(){
				this._HelloDialog.open();
			}
		});
	}
	);
