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
var noneInBy = require( './../lib' );


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
			'b': i + 1,
			'c': i + 2,
			'd': i + 3,
			'e': i + 4
		};
		bool = noneInBy( obj, predicate );
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

bench( pkg+'::for-in-loop', function benchmark( b ) {
	var bool;
	var obj;
	var key;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': i,
			'b': i + 1,
			'c': i + 2,
			'd': i + 3,
			'e': i + 4
		};
		bool = true;
		for ( key in obj ) {
			if ( isnan( obj[key] ) ) {
				bool = false;
				break;
			}
		}
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
