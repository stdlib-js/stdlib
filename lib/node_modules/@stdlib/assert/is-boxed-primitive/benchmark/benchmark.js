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

/* eslint-disable no-empty-function */

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var Number = require( '@stdlib/number/ctor' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var isBoxedPrimitive = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		'5',
		new String( '5' ), // eslint-disable-line no-new-wrappers
		5,
		new Number( 5 ), // eslint-disable-line no-new-wrappers
		NaN,
		true,
		new Boolean( false ), // eslint-disable-line no-new-wrappers
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isBoxedPrimitive( values[ i%values.length ] );
		if ( !isBoolean( bool ) ) {
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
