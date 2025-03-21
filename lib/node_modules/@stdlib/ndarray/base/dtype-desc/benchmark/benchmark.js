/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var bench = require( '@stdlib/bench' );
var pkg = require( './../package.json' ).name;
var dtypeDesc = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var dtypes;
	var dtype;
	var out;
	var i;

	dtypes = [
		'float64',
		'float32',
		'int8',
		'uint8',
		'uint8c',
		'int16',
		'uint16',
		'int32',
		'uint32',
		'binary',
		'generic',
		'foobar'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		dtype = dtypes[ i%dtypes.length ];
		out = dtypeDesc( dtype );
		if ( typeof out !== 'string' && out !== null ) {
			b.fail( 'should return a string or null' );
		}
	}
	b.toc();
	if ( typeof out !== 'string' && out !== null ) {
		b.fail( 'should return a string or null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
