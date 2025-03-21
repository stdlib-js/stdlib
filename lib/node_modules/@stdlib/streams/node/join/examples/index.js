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

var splitStream = require( '@stdlib/streams/node/split' );
var inspectStream = require( '@stdlib/streams/node/inspect-sink' );
var joinStream = require( './../lib' );

var inspect;
var split;
var join;
var i;

function log( chunk ) {
	console.log( chunk.toString() );
}

// Create a split stream for tab delimited data:
split = splitStream({
	'sep': /\t/
});

// Create a stream to make newline delimited data:
join = joinStream({
	'sep': '\n'
});

// Create a stream to inspect joined output:
inspect = inspectStream( log );

// Create a stream pipeline:
split
	.pipe( join )
	.pipe( inspect );

// Write values to the split stream...
for ( i = 0; i < 10; i++ ) {
	split.write( i+'\t', 'utf8' );
}
split.end();
