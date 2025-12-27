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
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var anyInBy = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var bool;
	var obj;
	var i;

	function predicate( v ) {
		return isnan( v );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': i,
			'b': i+1,
			'c': i+2,
			'd': i+3,
			'e': i+4,
			'f': NaN
		};
		bool = anyInBy( obj, predicate );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var bool;
	var keys;
	var obj;
	var i;

	function predicate( v ) {
		return isnan( v );
	}
	function testPredicate( key ) {
		return predicate( obj[ key ] );
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': i,
			'b': i+1,
			'c': i+2,
			'd': i+3,
			'e': i+4,
			'f': NaN
		};
		keys = Object.keys( obj );
		bool = keys.some( testPredicate );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var bool;
	var keys;
	var obj;
	var i;
	var j;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': i,
			'b': i+1,
			'c': i+2,
			'd': i+3,
			'e': i+4,
			'f': NaN
		};
		keys = Object.keys( obj );
		bool = false;
		for ( j = 0; j < keys.length; j++ ) {
			if ( isnan( obj[ keys[j] ] ) ) {
				bool = true;
				break;
			}
		}
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should be a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
