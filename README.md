# Snippets
MapServer snippets are a large collection of examples designed to showcase the myriad of configuration options and use cases available with the platform. Each snippet is/was developed to be as concise as possible and highlights the target topic without the baggage of a more complete demo application.

The snippets website is generated from snippet metadata and consists of two components. First, an index.html page that presents a searchable interface of all snippets and second, a page to render any snippet given a snippets ID. The website relies on common web resources including jQuery, Bootstrap, Underscore.js and DataTables.

## Setup (web server)
1) Clone the repo on your machine. 
2) Create a symlink to the htdocs directory from within your web server's document root.
3) Edit htdocs/snippets.js to reflect the location of the mapfile and MapServer binary. Using an environment variable for the mapfile is recommended - it's setup for MAPSERVER_SNIPPETS by default.

## Anatomy of a Snippet
Each snippet consists of:
1) A simple MapServer mapfile configuration - typically a layer or two at most. The snippet is referenced as an INCLUDE in the primary mapfile - snippet.map.
2) A snippet definition (metadata) in JSON - added to htdocs/snippets.js.
3) Snippet file names must use their unique identifier (e.g. example.snippet and example.tmpl)  

Current snippet definition:
* __id__: unique identifier for the snippet
* __description__: long narrative describing what aspect of MapServer is being demonstrated 
* __title__: short narrative that describes what aspect of MapServer is being demonstrated (used as a page title)
* __type__: what type of output will the snippet create - currently only "image" is recognized but this will likely expand to include "text" and "interactive" output as well
* __image_url__: URL for the output image
* __mapfile_url__: URL for the snippet of mapfile code
* __template_url__: URL for the snippet of template code (currently unused)
* __tags__: an array of keywords to aid in finding snippets
* __author__: who created it (@username)
* __last_updated__: when was the snippet last updated (yyyy-mm-dd)

## Adding Snippets
Fork this repo and create pull requests against it - easy as that.
