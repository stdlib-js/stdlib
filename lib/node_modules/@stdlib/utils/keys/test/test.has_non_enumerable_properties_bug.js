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
var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
var bool = require( './../lib/has_non_enumerable_properties_bug.js' );


// TESTS //

tape( 'main export is a boolean', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bool, 'boolean', 'main export is a boolean' );
	t.end();
});

tape( 'the exported value is `true` if an environment does not allow certain overwritten properties to be enumerable', function test( t ) {
	var bool = proxyquire( './../lib/has_non_enumerable_properties_bug.js', {
		'@stdlib/assert/is-enumerable-property': mock
	});

	t.strictEqual( bool, true, 'returns expected value' );
	t.end();

	function mock( obj, prop ) {
		if ( prop === 'toString' ) {
			return false;
		}
		return isEnumerableProperty( obj, prop );
	}
});

tape( 'the exported value is `false` if an environment does allow certain overwritten properties to be enumerable', function test( t ) {
	var bool = proxyquire( './../lib/has_non_enumerable_properties_bug.js', {
		'@stdlib/assert/is-enumerable-property': mock
	});

	t.strictEqual( bool, false, 'returns expected value' );
	t.end();

	function mock( obj, prop ) {
		if ( prop === 'toString' ) {
			return true;
		}
		return isEnumerableProperty( obj, prop );
	}
});
