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

var parseJSON = require( '@stdlib/utils/parse-json' );
var transformFactory = require( '@stdlib/streams/node/transform' ).factory;
var debugSinkStream = require( './../lib' ).objectMode;

function parse( chunk, enc, clbk ) {
	clbk( null, parseJSON( chunk ) );
}

function pluck( chunk, enc, clbk ) {
	clbk( null, chunk.value );
}

function square( chunk, enc, clbk ) {
	var v = +chunk;
	clbk( null, v*v );
}

function toStr( chunk, enc, clbk ) {
	clbk( null, chunk.toString() );
}

function join( chunk, enc, clbk ) {
	clbk( null, chunk+'\n' );
}

// Create a factory for generating streams running in `objectMode`:
var tStream = transformFactory({
	'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var s2 = tStream( pluck );
var s3 = tStream( square );
var s4 = tStream( toStr );
var s5 = tStream( join );

// Create a writable stream for debugging the result of the transformations:
var ds = debugSinkStream({
	'name': 'debugger'
});

// Create the pipeline:
s1.pipe( s2 )
	.pipe( s3 )
	.pipe( s4 )
	.pipe( s5 )
	.pipe( ds );

// Write data to the pipeline...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = '{"value":'+i+'}';
	s1.write( v, 'utf8' );
}
s1.end();
