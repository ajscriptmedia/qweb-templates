# -*- coding: utf-8 -*-
{
    'name' : 'QWEB Tutorial',
    'version' : '17.0',
    'summary': 'QWEB Tutorial',
    'sequence': -1,
    'description': """QWEB Tutorial""",
    'category': 'Website',
    'depends' : ['web', 'website'],
    'data': [
        'views/for_python_templates.xml',
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_frontend': [
            'qweb_tutorial/static/src/*',
        ],
    },
}