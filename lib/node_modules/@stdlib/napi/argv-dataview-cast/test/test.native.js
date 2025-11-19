/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var Float64Array = require( '@stdlib/array/float64' );
var DataView = require( '@stdlib/array/dataview' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
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

tape( 'the function throws an error if provided an argument which is not a DataView', opts, function test( t ) {
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
		typedarray( 10, 'float32' )
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

tape( 'the function throws an error if provided an argument having insufficient memory', opts, function test( t ) {
	var values;
	var i;

	values = [
		new DataView( new ArrayBuffer( 1 ) ),
		new DataView( new ArrayBuffer( 2 ) ),
		new DataView( new ArrayBuffer( 3 ) ),
		new DataView( new ArrayBuffer( 4 ) )
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

tape( 'the function does not throw an error if provided a DataView', opts, function test( t ) {
	var expected;
	var buf;
	var x;
	var i;

	x = [
		new Float64Array( [ 1.0, 2.0 ] ),
		new Float64Array( [ 3.0, 4.0 ] ),
		new Float64Array( [ 5.0, 6.0 ] )
	];
	expected = [
		new Float64Array( [ 2.0, 4.0 ] ),
		new Float64Array( [ 6.0, 8.0 ] ),
		new Float64Array( [ 10.0, 12.0 ] )
	];
	for ( i = 0; i < x.length; i++ ) {
		buf = x[ i ].buffer;
		addon( new DataView( buf ), new DataView( buf ) );
		t.deepEqual( x[ i ], expected[ i ], 'returns expected value' );
	}
	t.end();
});
