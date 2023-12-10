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

var tape = require( 'tape' );
var isArray = require( '@stdlib/assert/is-array' );
var loopOrder = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof loopOrder, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns loop interchange data (row-major)', function test( t ) {
	var sh;
	var sx;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ 4, -2, 1 ];

	o = loopOrder( sh, sx );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 2, 2, 4 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, -2, 4 ], 'returns expected value' );

	t.end();
});

tape( 'the function returns loop interchange data (column-major)', function test( t ) {
	var sh;
	var sx;
	var o;

	sh = [ 4, 2, 2 ];
	sx = [ 1, -4, 8 ];

	o = loopOrder( sh, sx );

	t.notEqual( o.sh, sh, 'returns new array' );
	t.strictEqual( isArray( o.sh ), true, 'returns expected value' );
	t.deepEqual( o.sh, [ 4, 2, 2 ], 'returns expected value' );

	t.notEqual( o.sx, sx, 'returns new array' );
	t.strictEqual( isArray( o.sx ), true, 'returns expected value' );
	t.deepEqual( o.sx, [ 1, -4, 8 ], 'returns expected value' );

	t.end();
});

tape( 'if provided empty arrays, the function returns empty arrays', function test( t ) {
	var o = loopOrder( [], [] );
	t.deepEqual( o.sh, [], 'returns expected value' );
	t.deepEqual( o.sx, [], 'returns expected value' );
	t.end();
});
