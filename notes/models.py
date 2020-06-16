from django.db import models

class Note(models.Model):
    id = models.CharField(max_length=50,primary_key=True,default="")
    title = models.CharField(max_length=150)
    content  = models.TextField(default="")
    created_at =models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
      
# class User(models.Model):
#     name = models.CharField(max_length = 20,default="")
#     user_id = models.CharField(max_length = 20,primary_key=True,default="")
#     password = models.CharField(max_length=20, default="")
#     active = models.BooleanField(default=True)


# class Group(models.Model):
#     group_id = models.CharField(max_length=30,primary_key=True)
#     title = models.CharField(max_length=30,default="")
#     user_id = models.ForeignKey(User,on_delete=models.CASCADE)
#     type = models.CharField(max_length= 1,default="0")


# class Task(models.Model):
#     task_id = models.CharField(max_length=50,primary_key=True,default="")
#     description  = models.CharField(max_length=200,default="")
#     status = models.BooleanField(default=False)
#     group_id = models.ForeignKey(Group,on_delete=models.CASCADE)



# class GroupTaskMapping(models.Model):
#     user_id = models.CharField(User,max_length=30,default="")
#     group_id = models.CharField(Group,max_length=30,default="")
#     title = models.CharField(Group,max_length=30,default="")
