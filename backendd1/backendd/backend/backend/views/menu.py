from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config
from sqlalchemy.exc import DBAPIError
import logging

logger = logging.getLogger(__name__)

# Import Model
from ..models import Menu

# JSON response
def json_response(payload):
    return Response(
        json_body=payload,
        content_type='application/json',
    )

# Daftar Data menu
@view_config(route_name='menu', renderer='json')
def daftar_menu(request):
    try:
        query = request.dbsession.query(Menu)
        menu = query.all()
        return json_response({
            'status': 200,
            'success': True,
            'message': 'Daftar Menu berhasil diambil',
            'data': [m.to_dict() for m in menu]
        })
    except DBAPIError as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })
        

# Daftar Data Menu By ID
@view_config(route_name='menu_by_id', renderer='json')
def daftar_menu_by_id(request):
    id = request.matchdict['id']
    try:
        query = request.dbsession.query(Menu).filter_by(id=id).first()
        menu = query
        return json_response({
            'status': 200,
            'success': True,
            'message': 'Daftar Menu berhasil diambil',
            'data': menu.to_dict()
        })
    except DBAPIError as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })

# Tambah Data Menu
@view_config(route_name='tambah_menu', request_method='POST', renderer='json')
def tambah_menu(request):
    try:
        json_data = request.json_body

        required_fields = ['name', 'price', 'description', 'category','available']
        for field in required_fields:
            if field not in json_data:
                return json_response({
                    'status': 400,
                    'success': False,
                    'message': f"Field '{field}' wajib disertakan"
                })
        
        menu = Menu(
                name=json_data['name'],
                price=json_data['price'],
                description=json_data['description'],
                category = json_data['category'],
                available=json_data['available']
            )
        request.dbsession.add(menu)
        request.dbsession.flush()

        return json_response({
                'status': 200,
                'success': True,
                'message': 'Data menu berhasil ditambahkan',
                'data': menu.to_dict()
            })
    except Exception as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })

# Update Data menu
@view_config(route_name='update_menu', request_method='PUT', renderer='json')
def update_menu(request):
    dbsession = request.dbsession
    id = request.matchdict['id']

    menu = dbsession.query(Menu).filter_by(id=id).first()
    if menu is None:
        return json_response({
            'status': 404,
            'success': False,
            'message': 'Data menu tidak ditemukan'
        })

    try:
        json_data = request.json_body
        if 'name' in json_data:
            menu.name = json_data['name']
        if 'price' in json_data:
            menu.price = json_data['price']
        if 'description' in json_data:
            menu.description = json_data['description']
        if 'category' in json_data:
            menu.category = json_data['category']
        if 'available' in json_data:
            menu.available = json_data['available']
        
        return json_response({
            'status': 200,
            'success': True,
            'message': f"Data menu dengan id : {id} berhasil diupdate",
            'data': menu.to_dict()
        })
    except Exception as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })

# Hapus Data menu
@view_config(route_name='hapus_menu', request_method='DELETE', renderer='json')
def hapus_menu(request):
    dbsession = request.dbsession
    id = request.matchdict['id']

    menu = dbsession.query(Menu).filter_by(id=id).first()
    if menu is None:
        return json_response({
            'status': 404,
            'success': False,
            'message': 'Data menu tidak ditemukan'
        })

    try:
        dbsession.delete(menu)
        
        return json_response({
            'status': 200,
            'success': True,
            'message': f'Data menu dengan id : {id} berhasil dihapus'
        })
    except Exception as e:
        logger.exception(e)
        return json_response({
            'status': 500,
            'success': False,
            'message': 'Database Error'
        })