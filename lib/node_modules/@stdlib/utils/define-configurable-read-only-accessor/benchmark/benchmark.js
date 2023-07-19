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
var setConfigurableReadOnlyAccessor = require( './../lib' ); // eslint-disable-line id-length


// MAIN //

bench( pkg, function benchmark( b ) {
	var obj;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {};
		setConfigurableReadOnlyAccessor( obj, 'foo', getter( i ) );
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

	function getter( i ) {
		var v = fromCodePoint( 97 + (i%26) );
		return get;

		function get() {
			return v;
		}
	}
});
