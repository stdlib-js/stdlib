/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

/**
* Test whether a JSON Pointer reference token is safe.
*
* @module @stdlib/utils/json-pointer/base/assert/is-safe-token
*
* @example
* var isSafeToken = require( '@stdlib/utils/json-pointer/base/assert/is-safe-token' );
*
* var bool = isSafeToken( 'foo' );
* // returns true
*
* bool = isSafeToken( '__proto__' );
* // returns false
*
* bool = isSafeToken( 'constructor' );
* // returns false
*
* bool = isSafeToken( 'prototype' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
