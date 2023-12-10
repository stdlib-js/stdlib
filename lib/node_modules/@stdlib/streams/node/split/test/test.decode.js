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
var string2buffer = require( '@stdlib/buffer/from-string' );
var decode = require( './../lib/decode.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof decode, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a UTF-8 string to a specified encoding', function test( t ) {
	var str;

	str = decode( 'beep', 'base64' );
	t.equal( str, string2buffer( 'beep' ).toString( 'base64' ), 'returns base64 encoded string' );

	str = decode( 'beep', 'ascii' );
	t.equal( str, string2buffer( 'beep' ).toString( 'ascii' ), 'returns ascii encoded string' );

	t.end();
});

tape( 'the function returns the input string if the specified encoding is either `utf8` or `buffer`', function test( t ) {
	var str;

	str = decode( 'beep', 'utf8' );
	t.equal( str, 'beep', 'returns utf8 encoding string' );

	str = decode( 'beep', 'buffer' );
	t.equal( str, 'beep', 'returns string having buffer encoding' );

	t.end();
});
