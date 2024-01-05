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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var defaults = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof defaults, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns default settings', function test( t ) {
	var o = defaults();

	t.strictEqual( hasOwnProp( o, 'dtypes' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes, 'object', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'default' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.default, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'numeric' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.numeric, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'real' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.real, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'floating_point' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.floating_point, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'real_floating_point' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.real_floating_point, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'complex_floating_point' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.complex_floating_point, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'integer' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.integer, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'signed_integer' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.signed_integer, 'string', 'returns expected value' );

	t.strictEqual( hasOwnProp( o.dtypes, 'unsigned_integer' ), true, 'has property' );
	t.strictEqual( typeof o.dtypes.unsigned_integer, 'string', 'returns expected value' );

	t.end();
});
