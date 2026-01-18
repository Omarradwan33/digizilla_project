{
    'name': 'Digizilla',
    'version': '18.0',
    'category': '',
    'summary': '',
    'depends': ['base'],
    'data': [
        'security/res_group.xml',
        'security/ir.model.access.csv',
        'views/ir_actions.xml',
        'views/ir_ui_menu.xml',
        'views/digizilla_view.xml',
        'views/digizilla_tag_view.xml',
        'report/report.xml',
        'report/digizilla_project_report.xml',
    ],
    'assets': {
        'web.assets_backend': ['digizilla_project/static/src/hide_create_button.js'],
    },

    'installable': True,
    'application': True,
}
