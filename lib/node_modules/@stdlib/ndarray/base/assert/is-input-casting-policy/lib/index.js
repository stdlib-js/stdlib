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

/**
* Test whether an input value is a supported input ndarray casting policy.
*
* @module @stdlib/ndarray/base/assert/is-input-casting-policy
*
* @example
* var isInputCastingPolicy = require( '@stdlib/ndarray/base/assert/is-input-casting-policy' );
*
* var bool = isInputCastingPolicy( 'none' );
* // returns true
*
* bool = isInputCastingPolicy( 'promoted' );
* // returns true
*
* bool = isInputCastingPolicy( 'output' );
* // returns true
*
* bool = isInputCastingPolicy( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
