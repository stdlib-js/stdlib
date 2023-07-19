/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var format = require( '@stdlib/string/format' );
var Parser = require( './../lib' );

function onColumn( v, row, col ) {
	console.log( format( 'Row: %d. Column: %d. Value: %s', row, col, v ) );
}

function onRow( v, row, ncols ) {
	console.log( format( 'Row: %d. nFields: %d. Value: | %s |', row, ncols, v.join( ' | ' ) ) );
}

function onComment( str ) {
	console.log( format( 'Comment: %s', str ) );
}

function onSkip( str ) {
	console.log( format( 'Skipped line: %s', str ) );
}

function onWarn( err ) {
	console.log( format( 'Warning: %s', err.message ) );
}

function onError( err ) {
	console.log( format( 'Error: %s', err.message ) );
}

function onClose( v ) {
	console.log( format( 'End: %s', v || '(none)' ) );
}

var opts = {
	'strict': false,
	'newline': '\r\n',
	'delimiter': ',',
	'escape': '\\',
	'comment': '#',
	'skip': '//',
	'doublequote': true,
	'quoting': true,
	'onColumn': onColumn,
	'onRow': onRow,
	'onComment': onComment,
	'onSkip': onSkip,
	'onError': onError,
	'onWarn': onWarn,
	'onClose': onClose
};
var parse = new Parser( opts );

var str = [
	[ '1', '2', '3', '4' ],
	[ '5', '6', '7', '8' ],
	[ 'foo\\,', 'bar\\ ,', 'beep\\,', 'boop\\,' ],
	[ '""",1,"""', '""",2,"""', '""",3,"""', '""",4,"""' ],
	[ '# This is a "comment", including with commas.' ],
	[ '\\# Escaped comment', '# 2', '# 3', '# 4' ],
	[ '1', '2', '3', '4' ],
	[ '//A,Skipped,Line,!!!' ],
	[ '"foo"', '"bar\\ "', '"beep"', '"boop"' ],
	[ ' # 😃', ' # 🥳', ' # 😮', ' # 🤠' ]
];
var i;
for ( i = 0; i < str.length; i++ ) {
	str[ i ] = str[ i ].join( opts.delimiter );
}
str = str.join( opts.newline );

console.log( format( 'Input:\n\n%s\n', str ) );
parse.next( str ).close();
