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
var stdout = require( '@stdlib/streams/node/stdout' );
var transformFactory = require( '@stdlib/streams/node/transform' ).factory;
var inspect = require( './../lib' ).objectMode;

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

function logger( name ) {
	return log;

	function log( chunk, idx ) {
		console.log( 'name: %s', name );
		console.log( 'index: %d', idx );
		console.log( chunk );
	}
}

// Create a factory for generating streams running in `objectMode`:
var tStream = transformFactory({
	'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var i1 = inspect( logger( 'parse' ) );
var s2 = tStream( pluck );
var i2 = inspect( logger( 'pluck' ) );
var s3 = tStream( square );
var i3 = inspect( logger( 'square' ) );
var s4 = tStream( toStr );
var i4 = inspect( logger( 'toString' ) );
var s5 = tStream( join );
var i5 = inspect( logger( 'join' ) );

// Create the pipeline:
s1.pipe( i1 )
	.pipe( s2 )
	.pipe( i2 )
	.pipe( s3 )
	.pipe( i3 )
	.pipe( s4 )
	.pipe( i4 )
	.pipe( s5 )
	.pipe( i5 )
	.pipe( stdout );

// Write data to the pipeline...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = '{"value":'+i+'}';
	s1.write( v, 'utf8' );
}
s1.end();
