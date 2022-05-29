from django.db import models


class Product(models.Model):
    name = models.CharField("Product's name", max_length=255)
    last_name = models.CharField("Last name", max_length=255)
    price = models.BigIntegerField("Price")
    currency = models.CharField("Currency", max_length=20)
    description = models.TextField(blank=True, null=True)
    type = models.CharField("Type", max_length=20)
    createdAt = models.DateTimeField("Created At", auto_now_add=True)

    def __str__(self):
        return self.name
