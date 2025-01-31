/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var isInfinitef = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( isInfinitef instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isInfinitef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided `+infinity`', opts, function test( t ) {
	t.equal( isInfinitef( PINF ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if provided `-infinity`', opts, function test( t ) {
	t.equal( isInfinitef( NINF ), true, 'returns true' );
	t.end();
});
