














///** @odoo-module **/
//
//import { patch } from "@web/core/utils/patch";
//import { ListController } from "@web/views/list/list_controller";
//import { FormController } from "@web/views/form/form_controller";
//
//
//const hideAllCreateButtons = () => {
//    setTimeout(() => {
//        const selectors = [
//            'button.o_list_button_add',
//            'button.o_form_button_create',
//            'button[title*="Create"]',
//            '.o_form_button_create',
//            '.o_list_button_add'
//        ];
//
//        selectors.forEach(selector => {
//            document.querySelectorAll(selector).forEach(button => {
//                button.style.display = 'none';
//                button.classList.add('d-none');
//                button.setAttribute('disabled', 'disabled');
//            });
//        });
//    },50);
//};
//
//patch(ListController.prototype, {
//    /**
//     * @override
//     */
//    setup() {
//        super.setup();
//
//        if (this.props.resModel === 'digizilla.project') {
//            hideAllCreateButtons();
//        }
//    }
//});
//
//patch(FormController.prototype, {
//    /**
//     * @override
//     */
//    setup() {
//        super.setup();
//
//        if (this.props.resModel === 'digizilla.project') {
//            hideAllCreateButtons();
//        }
//    }
//});
//








/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { ListController } from "@web/views/list/list_controller";
import { FormController } from "@web/views/form/form_controller";

patch(FormController.prototype, {
    /**
     * @override
     */
    setup() {
        super.setup();

        if (this.props.resModel === 'digizilla.project') {
            this.__hideCreateButton();
        }
    },

    __hideCreateButton() {
        this.onWillUpdateProps = (nextProps) => {
            if (nextProps.resModel === 'digizilla.project') {
                this.__hideButton();
            }
        };

        setTimeout(() => this.__hideButton(), 50);
    },

    __hideButton() {
        const buttons = document.querySelectorAll('button.o_form_button_create');
        buttons.forEach(button => {
            button.style.display = 'none';
            button.classList.add('d-none');
        });
    },

});