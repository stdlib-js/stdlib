/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var lpad = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof lpad, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function left pads a string with spaces', function test( t ) {
	var str = lpad( 'a', 5, ' ' );
	t.equal( str, '    a', 'left padded with spaces' );
	t.end();
});

tape( 'the function supports left padding a string with a custom pad string', function test( t ) {
	var str = lpad( 'beep', 10, 'b' );
	t.equal( str, 'bbbbbbbeep', 'left padded to desired length' );
	t.end();
});

tape( 'the function left pads a string such that an output string may exceed the specified length (minimum bound)', function test( t ) {
	var str = lpad( 'a', 5, 'beepboop' );
	t.equal( str, 'beepboopa', 'left padded and length exceeds minimum length' );
	t.end();
});

tape( 'if the specified string length is less than or equal to the input string length, the function returns the input string', function test( t ) {
	t.equal( lpad( 'boop', 2, 'beep' ), 'boop', 'returns input string (<)' );
	t.equal( lpad( 'boop', 4, 'beep' ), 'boop', 'returns input string (=)' );
	t.end();
});
