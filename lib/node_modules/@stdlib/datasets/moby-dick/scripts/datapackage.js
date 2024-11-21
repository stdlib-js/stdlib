/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/*
* Script to automatically populate the `resources` field in the `datapackage.json` file.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var copy = require( '@stdlib/utils/copy' );
var FILE_LIST = require( './../data/file_list.json' );
var data = require( './../data/data.js' );
var pkg = require( './../datapackage.json' );


// VARIABLES //

var RE_FILENAME_PUNC = /[_.]/g;
var json = {
	'name': '',
	'title': '',
	'description': '',
	'format': 'json',
	'mediatype': 'application/json',
	'encoding': 'UTF-8',
	'hash': '',
	'path': ''
};
var txt = {
	'name': '',
	'title': '',
	'description': '',
	'format': 'text',
	'mediatype': 'plain/text',
	'encoding': 'UTF-8',
	'hash': '',
	'path': ''
};


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var opts;
	var tmp;
	var f;
	var i;

	opts = {
		'encoding': 'utf8'
	};
	pkg.resources = [];
	for ( i = 0; i < FILE_LIST.length; i++ ) {
		f = FILE_LIST[ i ];
		if ( f === 'contents.txt' ) {
			tmp = copy( txt );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Book contents.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );

			tmp = copy( json );
			f = replace( f, '.txt', '.json' );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Book contents.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );
		} else if ( f === 'epilogue.txt' ) {
			tmp = copy( txt );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Epilogue.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );

			tmp = copy( json );
			f = replace( f, '.txt', '.json' );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Epilogue.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );
		} else if ( f === 'etymology.txt' ) {
			tmp = copy( txt );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Etymology.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );

			tmp = copy( json );
			f = replace( f, '.txt', '.json' );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Etymology.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );
		} else if ( f === 'extracts.txt' ) {
			tmp = copy( txt );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Extracts.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );

			tmp = copy( json );
			f = replace( f, '.txt', '.json' );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Extracts.';
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );
		} else {
			tmp = copy( txt );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Chapter '+data[ i ].chapter;
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );

			tmp = copy( json );
			f = replace( f, '.txt', '.json' );
			tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
			tmp.title = data[ i ].title;
			tmp.description = 'Chapter '+data[ i ].chapter;
			tmp.path = './data/'+f;
			pkg.resources.push( tmp );
		}
	}
	fpath = resolve( __dirname, '..', 'datapackage.json' );
	writeFileSync( fpath, JSON.stringify( pkg, null, 2 ), opts );
}

main();
