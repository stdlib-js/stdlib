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
* Script to process source text obtained from Project Gutenberg.
*
* ## Notes
*
* -   The text is expected to have removed the front matter before the contents, the contents, the etymology, and the extracts.
* -   The text is expected to have removed the end matter after the epilogue and the epilogue.
* -   The contents, etymology, extracts, and epilogue are outside the scope of this script and should be done manually, include special character replacement.
*/
'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var writeFileSync = require( '@stdlib/fs/write-file' ).sync;
var readFileSync = require( '@stdlib/fs/read-file' ).sync;
var reEOL = require( '@stdlib/regexp/eol' );
var replace = require( '@stdlib/string/replace' );


// VARIABLES //

var RE_DOUBLE_QUOTES = /[“”]/g;
var RE_SINGLE_QUOTES = /[’‘]/g;
var RE_CHAPTER = /^CHAPTER (\d+)/;
var RE_CHAPTER_SEP = /\n\n\n\n\n\n/g;


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var fpath;
	var opts;
	var file;
	var num;
	var tmp;
	var str;
	var len;
	var ch;
	var i;

	fpath = resolve( __dirname, '..', 'data', 'data.txt' );
	opts = {
		'encoding': 'utf8'
	};
	file = readFileSync( fpath, opts );
	file = replace( file, RE_CHAPTER_SEP, '\n\n' );

	file = file.split( reEOL.REGEXP );
	len = file.length;
	ch = '';
	for ( i = 0; i < len; i++ ) {
		str = file[ i ];
		str = replace( str, RE_DOUBLE_QUOTES, '"' );
		str = replace( str, RE_SINGLE_QUOTES, '\'' );
		tmp = RE_CHAPTER.exec( str );

		// If we found a chapter heading, time to begin a new chapter...
		if ( tmp ) {
			ch += str + '\n\n';
			num = tmp[ 1 ];
			i += 1; // skip the next line
			continue;
		}
		// Check if the next line is a chapter heading...
		if ( i < len-1 ) {
			tmp = RE_CHAPTER.exec( file[ i+1 ] );

			// If yes, write the current chapter to file...
			if ( tmp ) {
				fpath = resolve( __dirname, '..', 'data', 'chapter_'+num+'.txt' );
				writeFileSync( fpath, ch.slice( 0, ch.length-1 ), opts );
				ch = '';
				continue;
			}
		}
		if ( i === len-1 ) {
			fpath = resolve( __dirname, '..', 'data', 'chapter_'+num+'.txt' );
			writeFileSync( fpath, ch.slice( 0, ch.length-1 ), opts );
		} else if ( str !== '' ) {
			// Process the next line...
			ch += str;
			if ( file[ i+1 ] === '' ) {
				ch += '\n\n';
			} else {
				ch += ' ';
			}
		}
	}
}

main();
