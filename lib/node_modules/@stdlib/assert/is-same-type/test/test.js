/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

/* eslint-disable no-new-wrappers */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Number = require( '@stdlib/number/ctor' );
var isSameType = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSameType, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided two arguments which have the same type', function test( t ) {
	var values;
	var bool;
	var i;

	values = [
		[ true, false ],
		[ 1.0, 3.1 ],
		[ [], {} ],
		[ null, null ],
		[ NaN, NaN ],
		[ new Number( 0.0 ), new Number( 0.0 ) ],
		[ new String( '0.0' ), new String( '0.0' ) ]
	];

	for ( i = 0; i < values.length; i++ ) {
		bool = isSameType( values[ i ][ 0 ], values[ i ][ 1 ] );
		t.strictEqual( bool, true, 'returns true' );
	}
	t.end();
});

tape( 'the function returns `false` if not provided two arguments having the same type', function test( t ) {
	var values;
	var bool;

	values = [
		[ 1.0, '1.0' ],
		[ null, NaN ],
		[ null, void 0 ],
		[ new Number( 0.0 ), 0.0 ],
		[ new String( 'beep' ), 'beep' ]
	];

	for ( var i = 0; i < values.length; i++ ) {
		bool = isSameType( values[ i ][ 0 ], values[ i ][ 1 ] );
		t.strictEqual( bool, false, 'returns false' );
	}
	t.end();
});
