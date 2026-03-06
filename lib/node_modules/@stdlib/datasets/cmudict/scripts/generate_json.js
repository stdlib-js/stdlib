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

'use strict';

// MODULES //

var writeFile = require( 'fs' ).writeFileSync;
var join = require( 'path' ).join;
var readFile = require( '@stdlib/fs/read-file' ).sync;


// VARIABLES //

var dpath = join( __dirname, '..', 'data' );
var dict = readFile( join( dpath, 'dict.txt' ) ).toString();
var phones = readFile( join( dpath, 'phones.txt' ) ).toString();
var symbols = readFile( join( dpath, 'symbols.txt' ) ).toString();
var vp = readFile( join( dpath, 'vp.txt' ) ).toString();
var hash = {};
var parts;
var mark;
var idx;
var val;
var i;


// MAIN //

dict = dict.split( '\n' );
for ( i = 0; i < dict.length; i++ ) {
	parts = dict[ i ].split( '  ' );
	hash[ parts[ 0 ] ] = parts[ 1 ];
}
writeFile( join( dpath, 'dict.json' ), JSON.stringify( hash ) );

hash = {};
phones = phones.split( '\n' );
for ( i = 0; i < phones.length; i++ ) {
	parts = phones[ i ].split( '\t' );
	hash[ parts[ 0 ] ] = parts[ 1 ];
}
writeFile( join( dpath, 'phones.json' ), JSON.stringify( hash ) );

hash = {};
symbols = symbols.split( '\n' );
writeFile( join( dpath, 'symbols.json' ), JSON.stringify( symbols ) );

hash = {};
vp = vp.split( '\n' );
for ( i = 0; i < vp.length; i++ ) {
	val = vp[ i ];
	idx = val.indexOf( ' ' );
	mark = val.substr( 0, idx );
	hash[ mark ] = val.substr( idx+1 );
}
writeFile( join( dpath, 'vp.json' ), JSON.stringify( hash ) );
