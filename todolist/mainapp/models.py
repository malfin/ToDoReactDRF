from django.contrib.auth.models import User
from django.db import models


class ToDo(models.Model):
    # username = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Что-то сделать...', max_length=256)
    date = models.DateField(verbose_name='дата', auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date']
        verbose_name = 'ToDo'
        verbose_name_plural = 'ToDo'
