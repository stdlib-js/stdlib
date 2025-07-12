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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var wrapper = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( wrapper instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wrapper, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an argument which is not a complex number', opts, function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
		[],
		{
			'abc': 2,
			'def': 3
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), Error, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			wrapper( value );
		};
	}
});

tape( 'the function does not throw an error if provided a complex number', opts, function test( t ) {
	var values;
	var v;
	var i;

	values = [
		new Complex128( 3.0, 5.0 ),
		{
			're': 3.0,
			'im': 5.0
		},
		new Complex64( 3.0, 5.0 )
	];
	for ( i = 0; i < values.length; i++ ) {
		v = wrapper( values[ i ] );
		t.strictEqual( v, void 0, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});
