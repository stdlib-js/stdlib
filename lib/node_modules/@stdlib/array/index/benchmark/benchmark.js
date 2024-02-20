/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var instanceOf = require( '@stdlib/assert/instance-of' );
var pkg = require( './../package.json' ).name;
var ArrayIndex = require( './../lib' );


// MAIN //

bench( pkg+'::instantiation,new', function benchmark( b ) {
	var values;
	var v;
	var i;

	values = [
		[ 1, 2, 3 ],
		[ 5, 6, 7 ],
		[ true, false, true ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = new ArrayIndex( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( v, ArrayIndex ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new', function benchmark( b ) {
	var values;
	var idx;
	var v;
	var i;

	idx = ArrayIndex;

	values = [
		[ 1, 2, 3 ],
		[ 5, 6, 7 ],
		[ true, false, true ]
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = idx( values[ i%values.length ] );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !instanceOf( v, ArrayIndex ) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
