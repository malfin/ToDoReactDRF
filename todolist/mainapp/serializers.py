from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from mainapp.models import ToDo


class ToDoSerializer(serializers.ModelSerializer):

    class Meta:
        model = ToDo
        fields = '__all__'
