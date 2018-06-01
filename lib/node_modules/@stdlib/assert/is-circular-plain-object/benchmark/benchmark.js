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
var isCircularPlainObject = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var bool;
	var obj1;
	var obj2;
	var arr;
	var i;

	obj1 = {
		'a': 'beep',
		'b': {
			'c': 'boop'
		}
	};
	obj1.b.self = obj1;
	obj2 = {
		'a': {},
		'b': obj1
	};
	arr = [ 1, 2, 3 ];
	arr.push( arr );
	values = [
		null,
		{},
		obj1,
		obj2,
		[],
		arr
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isCircularPlainObject( values[ i%values.length ] );
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
