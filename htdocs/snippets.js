
/** treats queryString search and hash equally */
function urlParamsToJSON() {  // eslint-disable-line no-unused-vars
    var
      paramString = '',
      pairs,
      result = {};
    if (window.location.search) {
      paramString = decodeURIComponent(window.location.search).replace('?', '');
    }
  
    if (window.location.hash) {
      paramString += paramString ? '&' : '';
      paramString += window.location.hash.replace('#', '');
    }
  
    pairs = paramString.slice().split('&');
    pairs.forEach(function(pair) {
      pair = pair.split('=');
      result[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return JSON.parse(JSON.stringify(result));
  }

var urlParams = urlParamsToJSON();
var mapserv = urlParams.mapserv || '/cgi-bin/mapserv74';
var mapfile = urlParams.mapfile || 'MAPSERVER_SNIPPETS';
var baseurl = mapserv + '?MAP=' + mapfile;
var center = urlParams.center ? JSON.parse(urlParams.center) : [30,40];
var zoom = urlParams.zoom || 3;
var wmslayers = urlParams.wmslayers;
var tilelayers = urlParams.tilelayers;
var wfslayer = urlParams.wfslayers;
var wfsparams = '&SERVICE=WFS&VERSION=2.0.0&outputformat=geojson&REQUEST=getfeature&TYPENAME=';
// see filter documentation https://mapserver.org/ogc/filter_encoding.html
var wfsfilter = `&FILTER=<Filter><PropertyIsBetween><PropertyName>SCALERANK</PropertyName><LowerBoundary>0</LowerBoundary><UpperBoundary>1</UpperBoundary></PropertyIsBetween></Filter>`;

// remove whitespace
wfsfilter =  wfsfilter.replace(/\s/g, '');

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
        'leaflet_url':'leaflet.html?wmslayers=color01',
        'openlayers_url': 'openlayers.html?wmslayers=color01',
        'tags': ['style', 'color']
    }, {
        'id': 'regex01',
        'last_updated': '2019-05-17',
        'author': '@sdlime',
        'type': 'image',
        'title': 'Regex Class Expression',
        'description': 'Simple filtering based on an attribute and a regular expression.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=regex01&mode=map',
        'mapfile_url': 'snippets/regex01.snippet',
        'leaflet_url': null,
        'openlayers_url': null,
        'tags': ['expression', 'regex']
    }, {
        'id': 'regex02',
        'last_updated': '2019-05-17',
        'author': '@sdlime',
        'type': 'image',
        'title': 'Case-Insensitive Regex Class Expression',
        'description': 'Simple filtering based on an attribute and a case-insensitive regular expression.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=regex02&mode=map',
        'mapfile_url': 'snippets/regex02.snippet',
        'leaflet_url': null,
        'openlayers_url': null,
        'tags': ['expression', 'regex']
    }, {
        'id': 'regex03',
        'last_updated': '2019-05-17',
        'author': '@sdlime',
        'type': 'image',
        'title': 'Logical Class Expression Using Regex',
        'description': 'Simple filtering based on an attribute using a regular expression inside a logical expression.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=regex03&mode=map',
        'mapfile_url': 'snippets/regex03.snippet',
        'leaflet_url': null,
        'openlayers_url': null,       
        'tags': ['expression', 'logical', 'regex']
    }, {
        'id': 'regex04',
        'last_updated': '2019-05-21',
        'author': '@sdlime',
        'type': 'image',
        'title': 'Logical Class Expression Using Case-Insensitive Regex',
        'description': 'Simple filtering based on an attribute using a case-insensitive regular expression inside a logical expression.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=regex04&mode=map',
        'mapfile_url': 'snippets/regex04.snippet',
        'leaflet_url': null,
        'openlayers_url': null,
        'tags': ['expression', 'logical', 'regex']
    }, {
        'id': 'raster',
        'last_updated': '2019-07-05',
        'author': '@greenwoodmap',
        'type': 'image',
        'title': 'Raster Layer',
        'description': 'Raster example',
        'image_url': mapserv + '?map=' + mapfile + '&layer=hypsometric&mode=map',
        'mapfile_url': 'snippets/hypsometric.snippet',
        'leaflet_url':'leaflet.html?wmslayers=hypsometric',
        'openlayers_url': 'openlayers.html?wmslayers=hypsometric',
        'tags': ['raster', 'map file']
    }, {
        'id': 'label01',
        'last_updated': '2019-07-05',
        'author': '@greenwoodmap',
        'type': 'image',
        'title': 'Labeling at Different Scales',
        'description': 'Scale-dependent labeling - in this case using classes and an item related to place size. Successively smaller places are labeled are larger scales. Larger places are also labeled using a larger font.',
        'image_url': mapserv + '?map=' + mapfile + '&layer=label01&mode=map',
        'mapfile_url': 'snippets/label01.snippet',
        'leaflet_url':'leaflet.html?wmslayers=label01',
        'openlayers_url': 'openlayers.html?wmslayers=label01',
        'tags': ['point','label']
    }
];
