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

// MODULES //

var bench = require( '@stdlib/bench' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var reNativeFunction = require( './../lib' );


// VARIABLES //

var fcn2str = Function.prototype.toString;


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var i;

	values = [
		fcn2str.call( benchmark ),
		fcn2str.call( bench ),
		fcn2str.call( isBoolean ),
		fcn2str.call( Math.sqrt ), // eslint-disable-line stdlib/no-builtin-math
		fcn2str.call( Date ),
		fcn2str.call( RegExp ),
		fcn2str.call( b.fail ),
		fcn2str.call( b.tic ),
		fcn2str.call( b.toc ),
		fcn2str.call( b.end )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = reNativeFunction.REGEXP.test( values[ i%values.length ] );
		if ( !isBoolean( bool ) ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( isBoolean( bool ) ) {
		b.pass( 'benchmark finished' );
	} else {
		b.fail( 'should return a boolean' );
	}
	b.end();
});
