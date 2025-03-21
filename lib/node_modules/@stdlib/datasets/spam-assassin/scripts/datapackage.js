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
var pkg = require( './../datapackage.json' );


// VARIABLES //

var RE_FILENAME_PUNC = /[\/_.]/g; // eslint-disable-line no-useless-escape
var RE_FILENAME = /^(.*)\/(\d{5})\.(.*)\.txt$/;
var RE_SPAM = /spam/;
var RE_HARD_HAM = /hard/;
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
	var parts;
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
		parts = RE_FILENAME.exec( f );
		if ( !parts ) {
			continue;
		}
		tmp = copy( txt );
		tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
		tmp.title = parts[ 1 ] + ':' + parts[ 2 ];
		if ( RE_SPAM.test( f ) ) {
			tmp.description = 'Spam Assassin spam email.';
		} else if ( RE_HARD_HAM.test( f ) ) {
			tmp.description = 'Spam Assassin hard ham email.';
		} else {
			tmp.description = 'Spam Assassin ham email.';
		}
		tmp.path = './data/'+f;
		tmp.hash = parts[ 3 ];
		pkg.resources.push( tmp );

		tmp = copy( json );
		f = replace( f, '.txt', '.json' );
		tmp.name = replace( f, RE_FILENAME_PUNC, '-' );
		tmp.title = parts[ 1 ] + ':' + parts[ 2 ];
		if ( RE_SPAM.test( f ) ) {
			tmp.description = 'Spam Assassin spam email.';
		} else if ( RE_HARD_HAM.test( f ) ) {
			tmp.description = 'Spam Assassin hard ham email.';
		} else {
			tmp.description = 'Spam Assassin ham email.';
		}
		tmp.path = './data/'+f;
		pkg.resources.push( tmp );
	}
	fpath = resolve( __dirname, '..', 'datapackage.json' );
	writeFileSync( fpath, JSON.stringify( pkg, null, 2 ), opts );
}

main();
