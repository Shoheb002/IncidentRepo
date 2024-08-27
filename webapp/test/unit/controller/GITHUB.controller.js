/*global QUnit*/

sap.ui.define([
	"gitapp/controller/GITHUB.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GITHUB Controller");

	QUnit.test("I should test the GITHUB controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
