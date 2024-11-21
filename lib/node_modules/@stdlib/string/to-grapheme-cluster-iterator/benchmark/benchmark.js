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

// MODULES //

var bench = require( '@stdlib/bench' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var pkg = require( './../package.json' ).name;
var graphemeClusters2iterator = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var iter;
	var i;

	values = 'Iñtërnâtiônàlizætiøn';

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = graphemeClusters2iterator( values );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( iter ) ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var values;
	var iter;
	var str;
	var z;
	var i;

	str = [ 'I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n' ];
	values = [];
	for ( i = 0; i < b.iterations; i++ ) {
		values.push( str[ i%str.length ] );
	}

	iter = graphemeClusters2iterator( values.join( '' ) );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( typeof z !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof z !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration,map', function benchmark( b ) {
	var values;
	var iter;
	var str;
	var z;
	var i;

	str = [ 'I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n' ];
	values = [];
	for ( i = 0; i < b.iterations; i++ ) {
		values.push( str[ i%str.length ] );
	}

	iter = graphemeClusters2iterator( values.join( '' ), transform );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( typeof z !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( typeof z !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function transform( v ) {
		return v + v;
	}
});
