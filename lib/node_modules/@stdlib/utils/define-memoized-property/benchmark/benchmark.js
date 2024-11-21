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
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var fromCodePoint = require( '@stdlib/string/from-code-point' );
var pkg = require( './../package.json' ).name;
var defineMemoizedProperty = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var descriptor;
	var obj;
	var i;

	descriptor = {};

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {};
		descriptor.value = f( i );
		defineMemoizedProperty( obj, 'foo', descriptor );
		if ( typeof obj.foo !== 'string' ) {
			b.fail( 'should return a string' );
		}
	}
	b.toc();
	if ( !isString( obj.foo ) ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function f( i ) {
		return fcn;

		function fcn() {
			return fromCodePoint( 97 + (i%26) );
		}
	}
});
