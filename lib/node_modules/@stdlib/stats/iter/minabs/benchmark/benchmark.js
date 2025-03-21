/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var iterminabs = require( './../lib' );


// FUNCTIONS //

function createIterator( arr ) {
	var len;
	var it;
	var i;

	len = arr.length;
	i = -1;

	it = {};
	it.next = next;
	it.reset = reset;

	return it;

	function next() {
		i += 1;
		if ( i < len ) {
			return {
				'value': arr[ i ],
				'done': false
			};
		}
		return {
			'done': true
		};
	}

	function reset() {
		i = -1;
	}
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = createIterator( [ 1.0, -2.0, 3.0, -4.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = iterminabs( arr );
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
		arr.reset();
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
