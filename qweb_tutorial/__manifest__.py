# -*- coding: utf-8 -*-
{
    'name' : 'QWEB Tutorial',
    'version' : '17.0',
    'summary': 'QWEB Tutorial',
    'sequence': -1,
    'description': """QWEB Tutorial""",
    'category': 'Website',
    'depends' : ['web', 'website', 'portal'],
    'data': [
        'views/for_python_templates.xml',
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_frontend': [
            'qweb_tutorial/static/src/*',
        ],
        'my_owl_app.assets': [
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap_backend'),

            # required for fa icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',

            # include base files from framework
            ('include', 'web._assets_core'),

            # remove some files that we do not use to create a minimal bundle
            # ('remove', 'web/static/src/core/**/*'),
            # ('remove', 'web/static/lib/luxon/luxon.js'),
            # 'web/static/src/core/utils/functions.js',
            # 'web/static/src/core/browser/browser.js',
            # 'web/static/src/core/registry.js',
            # 'web/static/src/core/assets.js',
            'qweb_tutorial/static/src/components/*',
        ]
    },
}