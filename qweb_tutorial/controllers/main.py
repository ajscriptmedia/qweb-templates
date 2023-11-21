# -*- coding: utf-8 -*-

from odoo import http
from odoo.tools import html_escape, html_sanitize
from markupsafe import Markup


class QwebTutorials(http.Controller):
    @http.route('/qweb-tutorials', type='http', auth='public', website=True)
    def qweb_tutorials(self):
        """ QWEB Tutorials """

        def some_function():
            return "returning string  from a function"

        some_model = http.request.env['sale.order'].sudo().search([])

        data = {
            'string': 'QWEB Tutorials',
            'integer': '1000',
            'some_float': 10.05,
            'boolean': True,
            'some_list': [1, 2, 3, 4, 5],
            'some_dict': {'any_key': "any_value"},
            'some_function': some_function(),
            'model': some_model,
            'html': '<h3>This is an HTML value!</h3> Added by attacker <script>alert("Do something!!")</script>',
            'html_escape': '<h3>This is an HTML value!</h3> %s'
                           % html_escape('Added by attacker <script>alert("Do something!!")</script>'),
            'html_sanitize': '<h3>This is an HTML value!</h3> %s'
                           % html_sanitize('Added by attacker <script>alert("Do something!!")</script>'),
            'markup': Markup('<h3>This is an HTML value!</h3> %s')
                      % 'Added by attacker <script>alert("Do something!!")</script>',
        }
        return http.request.render("qweb_tutorial.somePythonTemplate", data)
