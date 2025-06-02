from sqlalchemy import (
    Column,
    Integer,
    Text,
    Date,
)

from .meta import Base


class Menu(Base):
    """ Model untuk tabel mahasiswa """
    __tablename__ = 'menu'
    id = Column(Integer, primary_key=True)
    price = Column(Integer, nullable=False)
    category = Column(Text, nullable=False)
    description = Column(Text, nullable=False)
    name = Column(Text, nullable=False)
    available = Column(Text, nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'price': self.price,
            'category': self.category,
            'description': self.description,
            'name': self.name,
            'available': self.available,
        }

class Pelanggan(Base):
    """ Model untuk tabel mahasiswa """
    __tablename__ = 'pelanggan'
    id = Column(Integer, primary_key=True)
    phone = Column(Text, nullable=False)
    email = Column(Text, nullable=False)
    address = Column(Text, nullable=False)
    name = Column(Text, nullable=False)
    points = Column(Integer, nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'phone': self.phone,
            'email': self.email,
            'address': self.address,
            'name': self.name,
            'points': self.points,
        }