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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var tryRequire = require( '@stdlib/utils/try-require' );
var Float64Array = require( '@stdlib/array/float64' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );


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

tape( 'the function throws an error if provided insufficient arguments', opts, function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		addon();
	}
});

tape( 'the function throws an error if provided unsupported array data types', opts, function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		var xbuf;
		var ybuf;
		var x;
		var y;

		xbuf = new Float64Array( 10 );
		ybuf = new Uint8Array( xbuf.length );

		x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
		y = new ndarray( 'uint8', ybuf, x.shape, x.strides, x.offset, x.order );

		addon( x, y );
	}
});

tape( 'the function does not throw an error when provided valid arguments', opts, function test( t ) {
	var xbuf;
	var ybuf;
	var x;
	var y;

	xbuf = new Float64Array( 10 );
	ybuf = new Float64Array( xbuf.length );

	x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
	y = new ndarray( x.dtype, ybuf, x.shape, x.strides, x.offset, x.order );

	try {
		addon( x, y );
		t.ok( true, 'does not throw' );
	} catch ( err ) {
		t.ok( false, err.message );
	}
	t.end();
});
