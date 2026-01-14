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
var proxyquire = require( 'proxyquire' );
var defineProperty = require( '@stdlib/utils/define-property' );
var getGlobal = require( '@stdlib/utils/global' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var nav = require( './../lib/navigator.js' );


// VARIABLES //

var Global = getGlobal();


// FUNCTIONS //

/**
* Restores the global navigator property.
*
* @private
* @param {*} val - value to restore
*/
function restoreNavigator( val ) {
	if ( val === void 0 ) {
		delete global.navigator;
		return;
	}
	// Use `defineProperty` to set navigator (no `global` setters in newer Node.js versions):
	defineProperty( global, 'navigator', {
		'value': val,
		'writable': true,
		'configurable': true
	});
}


// FIXTURES //

if ( IS_BROWSER && typeof Global.global === 'undefined' ) {
	// Global is `window`, so, if not present, add `global` to global namespace:
	Global.global = {};
}


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nav, 'object', 'main export is an object' );
	t.end();
});

tape( 'if present, the exported value is a global `navigator` object', function test( t ) {
	var nav;
	var val;

	val = global.navigator;
	defineProperty( global, 'navigator', {
		'value': {
			'hardwareConcurrency': 4
		},
		'writable': true,
		'configurable': true
	});

	nav = proxyquire( './../lib/navigator.js', {} );

	t.deepEqual( nav, global.navigator, 'exports global' );

	restoreNavigator( val );

	t.end();
});

tape( 'if not present, the exported value is an empty object', function test( t ) {
	var nav;
	var val;

	val = global.navigator;
	delete global.navigator;

	nav = proxyquire( './../lib/navigator.js', {} );

	t.deepEqual( nav, {}, 'export is an empty object' );

	restoreNavigator( val );

	t.end();
});
