import Controller from "sap/ui/core/mvc/Controller";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace sap.btp.helloworldui5.controller
 */
export default class View1 extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }
    onPress(): void {
        MessageBox.alert("You have been alerted!");
    }
}