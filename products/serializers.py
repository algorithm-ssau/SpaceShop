from rest_framework import serializers

from .models import Product


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('pk', 'name', 'price', 'currency', 'description', "type", "createdAt")
