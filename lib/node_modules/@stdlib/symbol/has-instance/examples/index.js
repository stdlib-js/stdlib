/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isArray = require( '@stdlib/assert/is-array' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var defineProperty = require( '@stdlib/utils/define-property' );
var HasInstanceSymbol = require( './../lib' );

function ArrayLike() {
	return {
		'length': 3,
		'0': 4,
		'1': 5,
		'2': 6
	};
}

function hasInstance( instance ) {
	return isArray( instance );
}

var x = [ 1, 2, 3 ];

defineProperty( ArrayLike, HasInstanceSymbol, {
	'configurable': true,
	'value': null
});
console.log( instanceOf( x, ArrayLike ) );

defineProperty( ArrayLike, HasInstanceSymbol, {
	'configurable': true,
	'value': hasInstance
});
console.log( instanceOf( x, ArrayLike ) );
