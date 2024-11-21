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

var tape = require( 'tape' );
var Buffer = require( '@stdlib/buffer/ctor' );
var isBuffer = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBuffer, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided a Buffer object, the function returns `true`', function test( t ) {
	var values;
	var i;

	values = [
		new Buffer( [ 1, 2, 3, 4 ] ),
		new Buffer( 'beep' ),
		new Buffer( new Buffer(4) )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isBuffer( values[i] ), true, 'returns `true` for value ' + i );
	}
	t.end();
});

tape( 'if provided any value other than a Buffer object, the function returns `false`', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'5',
		NaN,
		null,
		void 0,
		true,
		function noop() {},
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isBuffer( values[i] ), false, 'returns `false` for  value: ' + values[i] );
	}

	function Foo() {
		return this;
	}
	Foo.prototype.isBuffer = null;

	t.equal( isBuffer( new Foo() ), false, 'returns `false` when provided a class with an `isBuffer` method' );

	t.end();
});
