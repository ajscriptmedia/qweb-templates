/* @odoo-module */

import { Component, xml, mount, whenReady, useState, onWillStart } from "@odoo/owl"
import { templates } from "@web/core/assets"
import { jsonrpc } from "@web/core/network/rpc_service"

class OwlSubComponent extends Component {
    static template = "qweb_tutorials.owl_sub_component"
}

class OwlSubComponentChild extends Component {
    static template = "qweb_tutorials.owl_sub_component_child"
}

class OwlMainComponent extends Component {
    setup(){
        this.state = useState({
            counter: 0,
        })
        this.date = new Date().toLocaleString()
    }

    increaseCounter(){
        this.state.counter++
    }

    get someList(){
        return [1,2,3,4,5]
    }
}

//OwlMainComponent.template = xml`
//<div class="p-4 border">
//    <h3>This is rendered using OWL</h3>
//</div>
//`

OwlMainComponent.template = "qweb_tutorials.owl_main_component"
OwlMainComponent.components = { OwlSubComponent, OwlSubComponentChild }

class OwlWithBackendData extends Component {
    static template = "qweb_tutorials.with_backend_data"

    setup(){
        this.state = useState({
            orders: [],
            txtInput: "",
        })

        onWillStart(async ()=>{
            const data = await jsonrpc("/web/dataset/call_kw/sale.order/search_read",{
                model: "sale.order",
                method: "search_read",
                args: [ [['state', 'in', ['sale','done'] ]], ['name', 'date_order'] ],
                kwargs: {
                    limit: 10,
                    order: "date_order"
                }
            })

            this.state.orders = data
        })
    }

    async submitForm(e){
        e.preventDefault()
        const data = await jsonrpc("/qweb-tutorials/form", {
            txtInput: this.state.txtInput,
            otherValues: 'other values'
        })
        console.log(data)
    }
}

whenReady(()=>{
//    const element = document.querySelector('.js_template_using_owl')
//    if (element){
//        mount(OwlMainComponent, element, { templates })
//    }

    const element = document.querySelectorAll('.js_template_using_owl')
    if (element.length > 0){
        element.forEach(el => mount(OwlMainComponent, el, { templates }))
    }

    const owlTemplateWithData = document.querySelector('.owl_template_with_data')
    if (owlTemplateWithData){
        mount(OwlWithBackendData, owlTemplateWithData, { templates })
    }
})
