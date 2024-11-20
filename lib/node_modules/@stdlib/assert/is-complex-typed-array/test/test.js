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

var vm = require( 'vm' ); // TODO: handle in-browser tests
var tape = require( 'tape' );
var inherit = require( '@stdlib/utils/inherit' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isComplexTypedArray = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': IS_BROWSER
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isComplexTypedArray, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a complex typed array', function test( t ) {
	var values;
	var i;

	values = [
		new Complex128Array( 10 ),
		new Complex64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isComplexTypedArray( values[i] ), true, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if provided a non-complex typed array', function test( t ) {
	var values;
	var i;

	values = [
		new Int8Array( 10 ),
		new Uint8Array( 10 ),
		new Uint8ClampedArray( 10 ),
		new Int16Array( 10 ),
		new Uint16Array( 10 ),
		new Int32Array( 10 ),
		new Uint32Array( 10 ),
		new Float32Array( 10 ),
		new Float64Array( 10 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isComplexTypedArray( values[i] ), false, 'returns true when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if provided an object inheriting from a complex typed array', function test( t ) {
	function CustomArray( data ) {
		var i;
		for ( i = 0; i < data.length; i++ ) {
			this[ i ] = data[ i ];
		}
		return this;
	}

	inherit( CustomArray, Complex64Array );

	t.strictEqual( isComplexTypedArray( new CustomArray( [ 5.0, 3.0 ] ) ), true, 'returns true when provided a value which inherits from a complex typed array' );
	t.end();
});

tape( 'the function returns `true` if provided a complex typed array from a different realm', opts, function test( t ) {
	var ctx;
	var arr;

	// FIXME: this test does not test what it is supposed to test. Since `require` is from the same realm, we generate objects from the same realm. In order to fix this, we need to create a "new" require function with a fresh cache. This has been done elsewhere in the project, but requires a bit of code to achieve.
	ctx = {
		'require': require
	};
	arr = vm.runInNewContext( 'new ( require( "@stdlib/array/complex64" ) )( [ 5.0, 3.0 ] )', ctx );
	t.strictEqual( isComplexTypedArray( arr ), true, 'returns true' );

	t.end();
});

tape( 'the function returns `true` if provided an object from a different realm which inherits from a complex typed array', opts, function test( t ) {
	var ctx;
	var arr;

	// FIXME: this test does not test what it is supposed to test. Since `require` is from the same realm, we generate objects from the same realm. In order to fix this, we need to create a "new" require function with a fresh cache. This has been done elsewhere in the project, but requires a bit of code to achieve.
	ctx = {
		'require': require
	};
	arr = vm.runInNewContext( 'function Arr() { return this; }; Arr.prototype = Object.create( require( "@stdlib/array/complex64" ).prototype ); Arr.prototype.constructor = Arr; new Arr( [ 5.0, 3.0 ] );', ctx );
	t.strictEqual( isComplexTypedArray( arr ), true, 'returns true' );

	t.end();
});

tape( 'the function returns `false` if not provided a complex typed array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isComplexTypedArray( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
