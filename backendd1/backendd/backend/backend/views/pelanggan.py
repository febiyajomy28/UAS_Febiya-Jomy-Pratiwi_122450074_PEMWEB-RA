from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
from sqlalchemy.exc import DBAPIError
import logging

logger = logging.getLogger(__name__)

# Import Model
from ..models import Pelanggan

# JSON response
def json_response(payload):
    return Response(
        json_body=payload,
        content_type='application/json',
    )

# Daftar Data pelanggan
@view_config(route_name='pelanggan', renderer='json')
def daftar_pelanggan(request):
    try:
        query = request.dbsession.query(Pelanggan)
        pelanggan = query.all()
        return json_response({
            'status': 200,
            'success': True,
            'message': 'Daftar pelanggan berhasil diambil',
            'data': [m.to_dict() for m in pelanggan]
        })
    except DBAPIError as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })

# Tambah Data pelanggan
@view_config(route_name='tambah_pelanggan', request_method='POST', renderer='json')
def tambah_pelanggan(request):
    try:
        json_data = request.json_body

        required_fields = ['name', 'address', 'phone', 'points','email']
        for field in required_fields:
            if field not in json_data:
                return json_response({
                    'status': 400,
                    'success': False,
                    'message': f"Field '{field}' wajib disertakan"
                })
        
        pelanggan = Pelanggan(
                name=json_data['name'],
                address=json_data['address'],
                phone=json_data['phone'],
                points = json_data['points'],
                email=json_data['email']
            )
        request.dbsession.add(pelanggan)
        request.dbsession.flush()

        return json_response({
                'status': 200,
                'success': True,
                'message': 'Data pelanggan berhasil ditambahkan',
                'data': pelanggan.to_dict()
            })
    except Exception as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })

# Update Data pelanggan
@view_config(route_name='update_pelanggan', request_method='PUT', renderer='json')
def update_pelanggan(request):
    dbsession = request.dbsession
    id = request.matchdict['id']

    pelanggan = dbsession.query(Pelanggan).filter_by(id=id).first()
    if pelanggan is None:
        return json_response({
            'status': 404,
            'success': False,
            'message': 'Data pelanggan tidak ditemukan'
        })

    try:
        json_data = request.json_body
        if 'name' in json_data:
            pelanggan.name = json_data['name']
        if 'address' in json_data:
            pelanggan.address = json_data['address']
        if 'phone' in json_data:
            pelanggan.phone = json_data['phone']
        if 'points' in json_data:
            pelanggan.points = json_data['points']
        if 'email' in json_data:
            pelanggan.available = json_data['email']
        
        return json_response({
            'status': 200,
            'success': True,
            'message': f"Data pelanggan dengan id : {id} berhasil diupdate",
            'data': pelanggan.to_dict()
        })
    except Exception as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })

# Hapus Data pelanggan
@view_config(route_name='hapus_pelanggan', request_method='DELETE', renderer='json')
def hapus_pelanggan(request):
    dbsession = request.dbsession
    id = request.matchdict['id']

    pelanggan = dbsession.query(Pelanggan).filter_by(id=id).first()
    if pelanggan is None:
        return json_response({
            'status': 404,
            'success': False,
            'message': 'Data pelanggan tidak ditemukan'
        })

    try:
        dbsession.delete(pelanggan)
        
        return json_response({
            'status': 200,
            'success': True,
            'message': f'Data pelanggan dengan id : {id} berhasil dihapus'
        })
    except Exception as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })