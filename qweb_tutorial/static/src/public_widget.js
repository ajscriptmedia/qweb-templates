/* @odoo-module */

import publicWidget from "@web/legacy/js/public/public_widget"
import { renderToElement } from "@web/core/utils/render"

publicWidget.registry.jsTemplate = publicWidget.Widget.extend({
    selector: '.js_template',
    template: 'qweb_tutorials.jsTemplate',
    start(){
        //console.log("JS Template Activated!")
        this.renderElement();
    }
})

publicWidget.registry.templateWithVariables = publicWidget.Widget.extend({
    selector: '.js_template_with_variables',
    template: 'qweb_tutorials.templateWithVariables',
    init(){
        this._super(...arguments);
        this.orm = this.bindService("orm")
    },
    async start(){
        const content = renderToElement(this.template, {
            string: "QWEB Tutorials using Javascript",
            array: [1,2,3,4,5],
            email: "ajscriptmedia@gmail.com",
            model: await this.orm.searchRead("sale.order", [], ["name"]),
        })
        this.$target.html(content)
    }
})

publicWidget.registry.mainTemplate = publicWidget.Widget.extend({
    selector: '.js_template_extension',
    template: 'qweb_tutorials.mainTemplate',
    start(){
        this.renderElement();

        const templatePrimary = document.querySelector('.js_template_primary')
        templatePrimary.innerHTML = renderToElement("qweb_tutorials.mainTemplatePrimary").outerHTML
    }
})

publicWidget.registry.subTemplate = publicWidget.Widget.extend({
    selector: '.js_sub_template',
    template: 'qweb_tutorials.subTemplate',
    start(){
        this.renderElement();
    }
})

publicWidget.registry.templateWithEvents = publicWidget.Widget.extend({
    selector: '.js_template_with_events',
    template: 'qweb_tutorials.templateWithEvents',
    events: {
        'click button': 'onClick',
    },
    init(){
        this._super(...arguments)
        this.counter = 0
    },
    start(){
        this.renderElement();
    },
    onClick(){
        this.counter++
        this.$el.find('#counter').text(this.counter)
    }
})

publicWidget.registry.betterForSeo = publicWidget.Widget.extend({
    selector: '#betterForSeo',
    events: {
        'click button': 'onClick',
    },
    init(){
        this._super(...arguments)
        this.counter = 0
    },
    onClick(){
        this.counter++
        this.$el.find('#counter').text(this.counter)
    }
})