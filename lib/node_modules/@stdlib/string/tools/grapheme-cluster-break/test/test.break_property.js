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

var tape = require( 'tape' );
var constants = require( './../lib/constants.js' );
var graphemeBreakProperty = require( './../lib/break_property.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof graphemeBreakProperty, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a grapheme break property', function test( t ) {
	var out;

	out = graphemeBreakProperty( 0x008f );
	t.strictEqual( out, constants.Control, 'returns expected value' );

	out = graphemeBreakProperty( 0x111C2 );
	t.strictEqual( out, constants.Prepend, 'returns expected value' );

	out = graphemeBreakProperty( 0x1F3FC );
	t.strictEqual( out, constants.Extend, 'returns expected value' );

	out = graphemeBreakProperty( 0x1F1FF );
	t.strictEqual( out, constants.RegionalIndicator, 'returns expected value' );

	out = graphemeBreakProperty( 0x16F52 );
	t.strictEqual( out, constants.SpacingMark, 'returns expected value' );

	out = graphemeBreakProperty( 0x1101 );
	t.strictEqual( out, constants.L, 'returns expected value' );

	out = graphemeBreakProperty( 0x11A7 );
	t.strictEqual( out, constants.V, 'returns expected value' );

	out = graphemeBreakProperty( 0x11FE );
	t.strictEqual( out, constants.T, 'returns expected value' );

	out = graphemeBreakProperty( 0xAEBC );
	t.strictEqual( out, constants.LV, 'returns expected value' );

	out = graphemeBreakProperty( 0xAFD2 );
	t.strictEqual( out, constants.LVT, 'returns expected value' );

	out = graphemeBreakProperty( 0x200D );
	t.strictEqual( out, constants.ZWJ, 'returns expected value' );

	out = graphemeBreakProperty( 0x000A );
	t.strictEqual( out, constants.LF, 'returns expected value' );

	out = graphemeBreakProperty( 0x000D );
	t.strictEqual( out, constants.CR, 'returns expected value' );

	t.end();
});
