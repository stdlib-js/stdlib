/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var forEach = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var arr;
	var out;
	var str;
	var i;

	function onItem( v ) {
		if ( typeof v !== 'string' ) {
			b.fail( 'values passed should be a string' );
		}
	}

	arr = [ 'I', 'ñ', 't', 'ë', 'r', 'n', 'â', 't', 'i', 'ô', 'n', 'à', 'l', 'i', 'z', 'æ', 't', 'i', 'ø', 'n' ];
	values = [];
	for ( i = 0; i < b.iterations; i++ ) {
		values.push( arr[ i%arr.length ] );
	}
	str = values.join( '' );

	b.tic();
	out = forEach( str, onItem );
	b.toc();
	if ( typeof out !== 'string' ) {
		b.fail( 'should return a string' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
