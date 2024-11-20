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

var tape = require( 'tape' );
var ndarray = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ndarray, 'function', 'main export is a function' );
	t.end();
});

tape( 'an ndarray constructor returns an instance which has an `iset` method for setting an array element (0d)', function test( t ) {
	var strides;
	var buffer;
	var offset;
	var dtype;
	var order;
	var shape;
	var arr;

	dtype = 'generic';
	buffer = [ 1.0, 2.0, 3.0 ];
	shape = [];
	order = 'row-major';
	strides = [ 0 ];
	offset = 1;

	arr = ndarray( dtype, buffer, shape, strides, offset, order );

	arr.iset( 5.0 );

	t.strictEqual( arr.iget(), 5.0, 'returns expected value' );
	t.deepEqual( buffer, [ 1.0, 5.0, 3.0 ], 'has expected values' );

	t.end();
});
