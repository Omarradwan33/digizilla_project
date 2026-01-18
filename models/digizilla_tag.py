from odoo import api, fields, models

class DigizillaTags(models.Model):
    _name = 'digizilla.tag'


    name = fields.Char()
    color = fields.Integer()