from dateutil.utils import today

from odoo import api, fields, models
from datetime import date

class DigizillaProject(models.Model):
    _name = 'digizilla.project'


    name = fields.Char(required=True)
    country_id = fields.Many2one('res.country')
    birth_date = fields.Date()
    age = fields.Float(compute='calculate_age')
    tag_ids = fields.Many2many('digizilla.tag')
    customer_id = fields.Many2one('res.partner' , string="Customers", required=True)
    no_of_sales_orders = fields.Float(string="No.of Sales Orders related")
    notes= fields.Html()
    comments = fields.Char()
    gender = fields.Selection([
        ('Male', 'male'),
        ('Female', 'female'),
    ])

    def calculate_age(self):
        today = date.today()
        for rec in self:
            if rec.birth_date:
                birth = rec.birth_date
                years = today.year - birth.year
                months = today.month - birth.month
                if today.day < birth.day:
                    months -= 1
                if months < 0:
                    years -= 1
                    months += 12
                rec.age = round(years + (months / 12), 1)
            else:
                rec.age = 0.0
