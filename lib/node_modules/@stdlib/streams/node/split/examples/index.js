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

var transformStream = require( '@stdlib/streams/node/transform' );
var stdout = require( '@stdlib/streams/node/stdout' );
var splitStream = require( './../lib' );

function append( chunk, enc, clbk ) {
	clbk( null, chunk.toString()+'\n' );
}

var newline;
var stream;
var i;

// Create a split stream to split tab delimited data:
stream = splitStream({
	'sep': /\t/
});

// Create a transform stream to make newline delimited data...
newline = transformStream({
	'transform': append,
	'objectMode': true
});

// Create a stream pipeline:
stream
	.pipe( newline )
	.pipe( stdout );

// Write data to the pipeline...
for ( i = 0; i < 10; i++ ) {
	stream.write( i+'\t', 'utf8' );
}
stream.end();
