# Generated by Django 4.2.7 on 2023-11-15 04:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('agents', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='House',
            fields=[
                ('HouseID', models.IntegerField(primary_key=True, serialize=False)),
                ('Title', models.CharField(max_length=100)),
                ('Address', models.CharField(max_length=100)),
                ('City', models.CharField(max_length=100)),
                ('State', models.CharField(max_length=100)),
                ('Price', models.CharField(max_length=100)),
                ('Description', models.CharField(max_length=400)),
                ('Bedrooms', models.IntegerField()),
                ('Bathrooms', models.IntegerField()),
                ('Garage', models.IntegerField()),
                ('Sqft', models.IntegerField()),
                ('LotSize', models.IntegerField()),
                ('Type', models.CharField(max_length=100)),
                ('YearBuilt', models.DateField()),
                ('AgentID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='agents.agent')),
            ],
        ),
    ]
