def includeme(config):
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')

    #routes menu
    config.add_route('menu','/menu',request_method='GET')
    config.add_route('menu_by_id','/menu/{id}',request_method='GET')
    config.add_route('tambah_menu','/menu',request_method='POST')
    config.add_route('update_menu','/menu/{id}',request_method='PUT')
    config.add_route('hapus_menu','/menu/{id}',request_method='DELETE')

    #routes pelanggan
    config.add_route('pelanggan','/pelanggan',request_method='GET')
    config.add_route('tambah_pelanggan','/pelanggan',request_method='POST')
    config.add_route('update_pelanggan','/pelanggan/{id}',request_method='PUT')
    config.add_route('hapus_pelanggan','/pelanggan/{id}',request_method='DELETE')
