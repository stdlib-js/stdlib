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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var typedarray = require( '@stdlib/array/typed' );
var filledarray = require( '@stdlib/array/filled' );
var reinterpret = require( '@stdlib/strided/base/reinterpret-complex64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var addon = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( addon instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof addon, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an argument which is not a Float32Array', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{},
		typedarray( 10, 'int32' ),
		typedarray( 10, 'float64' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			addon( value );
		};
	}
});

tape( 'the function does not throw an error if provided a Float32Array', opts, function test( t ) {
	var expected;
	var x;

	x = typedarray( 4, 'complex64' );
	expected = filledarray( 1.0, 8, 'float32' );

	addon( x );
	t.deepEqual( reinterpret( x, 0 ), expected, 'returns expected value' );

	t.end();
});
