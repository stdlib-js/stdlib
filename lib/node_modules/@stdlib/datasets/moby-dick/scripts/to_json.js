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
* Converts raw chapter text files to JSON.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var replace = require( '@stdlib/string/replace' );
var FILE_LIST = require( './../data/file_list.json' );


// VARIABLES //

var RE_TITLE = /^\S+\.? (.+)/;
var RE_CHAPTER_TITLE = /^CHAPTER (\d+)\. (.+)/;
var RE_FIRST_TWO_LINES = /^.*\n\n/;


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var file;
	var opts;
	var out;
	var tmp;
	var f;
	var i;

	opts = {
		'encoding': 'utf8'
	};
	for ( i = 0; i < FILE_LIST.length; i++ ) {
		f = FILE_LIST[ i ];
		fpath = resolve( __dirname, '..', 'data', f );
		file = readFileSync( fpath, opts );
		out = {};
		if ( f === 'contents.txt' ) {
			out.chapter = 'Contents';
			out.title = '';
		} else if ( f === 'epilogue.txt' ) {
			tmp = RE_TITLE.exec( file );
			if ( !tmp ) {
				throw new Error( 'Unexpected file content for file '+f+'.' );
			}
			out.chapter = 'Epilogue';
			out.title = tmp[ 1 ];
		} else if ( f === 'etymology.txt' ) {
			tmp = RE_TITLE.exec( file );
			if ( !tmp ) {
				throw new Error( 'Unexpected file content for file '+f+'.' );
			}
			out.chapter = 'Etymology';
			out.title = tmp[ 1 ];
		} else if ( f === 'extracts.txt' ) {
			tmp = RE_TITLE.exec( file );
			if ( !tmp ) {
				throw new Error( 'Unexpected file content for file '+f+'.' );
			}
			out.chapter = 'Extracts';
			out.title = tmp[ 1 ];
		} else {
			tmp = RE_CHAPTER_TITLE.exec( file );
			if ( !tmp ) {
				throw new Error( 'Unexpected file content for file '+f+'.' );
			}
			out.chapter = tmp[ 1 ];
			out.title = tmp[ 2 ];
			file = replace( file, RE_FIRST_TWO_LINES, '' );
		}
		out.text = file;
		fpath = replace( fpath, '.txt', '.json' );
		writeFileSync( fpath, JSON.stringify( out ), opts );
	}
}

main();
