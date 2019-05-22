var mapserv = '/cgi-bin/mapserv72';
var mapfile = 'MAPSERVER_SNIPPETS';

var snippets = [
    {
      'id': 'color01',
      'last_updated': '2019-05-21',
      'author': '@sdlime',
      'type': 'image',
      'title': 'Specifiying Colors',
      'description': 'MapServer supports a couple of ways of specifiying colors. Colors can be defined using either 8-bit (0-255) RGB tuples separated by spaces or a standard web hexidecimal string. In addition, hexidecimal colors can define an optional alpha value.',
      'image_url': mapserv + '?map=' + mapfile + '&layer=color01&mode=map',
      'mapfile_url': 'snippets/color01.snippet',
      'tags': [ 'style', 'color' ]
    },{
	'id': 'regex01',
	'last_updated': '2019-05-17',
	'author': '@sdlime',
	'type': 'image',
	'title': 'Regex Class Expression',
	'description': 'Simple filtering based on an attribute and a regular expression.',
	'image_url': mapserv + '?map=' + mapfile + '&layer=regex01&mode=map',
	'mapfile_url': 'snippets/regex01.snippet',
	'tags': [ 'expression', 'regex' ]
    },{
	'id': 'regex02',
	'last_updated': '2019-05-17',
	'author': '@sdlime',
	'type': 'image',
	'title': 'Case-Insensitive Regex Class Expression',
	'description': 'Simple filtering based on an attribute and a case-insensitive regular expression.',
	'image_url': mapserv + '?map=' + mapfile + '&layer=regex02&mode=map',
	'mapfile_url': 'snippets/regex02.snippet',
	'tags': [ 'expression', 'regex' ]
    },{
        'id': 'regex03',
        'last_updated': '2019-05-17',
        'author': '@sdlime',
        'type': 'image',
        'title': 'Logical Class Expression Using Regex',
        'description': 'Simple filtering based on an attribute using a regular expression inside a logical expression.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=regex03&mode=map',
        'mapfile_url': 'snippets/regex03.snippet',
        'tags': [ 'expression', 'logical', 'regex' ]
    },{
        'id': 'regex04',
        'last_updated': '2019-05-21',
        'author': '@sdlime',
        'type': 'image',
        'title': 'Logical Class Expression Using Case-Insensitive Regex',
        'description': 'Simple filtering based on an attribute using a case-insensitive regular expression inside a logical expression.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=regex04&mode=map',
        'mapfile_url': 'snippets/regex04.snippet',
        'tags': [ 'expression', 'logical', 'regex' ]
    }
];
