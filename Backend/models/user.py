from datetime import datetime
from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column(db.String(50))
    last_name = db.Column(db.String(50))
    age = db.Column(db.String(2))
    gender = db.Column(db.String(20))
    country = db.Column(db.String(100))
    address = db.Column(db.String(200))
    date_joined = db.Column(db.Date,default=datetime.utcnow)


    def __refr__(self):
        return f"<User:{self.name}>"
    
    def to_dict(self):
        data = dict(self.__dict__)
        del data['_sa_instance_state']
        return data
    