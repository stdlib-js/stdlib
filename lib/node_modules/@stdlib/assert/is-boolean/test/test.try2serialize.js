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
var Boolean = require( '@stdlib/boolean/ctor' );
var serialize = require( './../lib/try2serialize.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof serialize, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if able to serialize', function test( t ) {
	t.equal( serialize( true ), true, 'returns true' );
	t.equal( serialize( new Boolean( true ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.equal( serialize( false ), true, 'returns true' );
	t.equal( serialize( new Boolean( false ) ), true, 'returns true' ); // eslint-disable-line no-new-wrappers
	t.end();
});

tape( 'the function returns `false` if unable to serialize', function test( t ) {
	t.equal( serialize( {} ), false, 'returns false' );
	t.end();
});
