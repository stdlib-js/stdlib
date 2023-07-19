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

/* global BigInt */

/* eslint-disable stdlib/require-globals */

'use strict';

// MODULES //

var tape = require( 'tape' );
var detect = require( './../lib' );


// VARIABLES //

var hasBigInts = ( typeof BigInt === 'function' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof detect, 'function', 'main export is a function' );
	t.end();
});

tape( 'feature detection result is a boolean', function test( t ) {
	t.strictEqual( typeof detect(), 'boolean', 'detection result is a boolean' );
	t.end();
});

tape( 'if `BigInts` are supported, detection result is `true`', function test( t ) {
	if ( hasBigInts ) {
		t.strictEqual( detect(), true, 'detection result is `true`' );
	} else {
		t.strictEqual( detect(), false, 'detection result is `false`' );
	}
	t.end();
});

tape( 'the function guards against a `BigInt` global variable which does not produce `BigInt`s', function test( t ) {
	var tmp;
	if ( hasBigInts ) {
		tmp = BigInt;
		BigInt = {}; // eslint-disable-line no-global-assign
	} else {
		global.BigInt = {};
	}
	t.strictEqual( detect(), false, 'detection result is `false`' );
	if ( hasBigInts ) {
		BigInt = tmp; // eslint-disable-line no-global-assign
	}
	t.end();
});
