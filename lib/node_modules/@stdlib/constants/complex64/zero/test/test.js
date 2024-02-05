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

var tape = require( 'tape' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var isComplex64 = require( '@stdlib/assert/is-complex64' );
var COMPLEX64_ZERO = require( './../lib' );


// TESTS //

tape( 'main export is a complex floating-point number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( isComplex64( COMPLEX64_ZERO ), true, 'main export is a complex number' );
	t.end();
});

tape( 'export is equal to complex floating-point zero', function test( t ) {
	t.strictEqual( realf( COMPLEX64_ZERO ), 0.0, 'returns expected value' );
	t.strictEqual( imagf( COMPLEX64_ZERO ), 0.0, 'returns expected value' );
	t.end();
});
