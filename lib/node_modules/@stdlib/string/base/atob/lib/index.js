/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Decode a string of data which has been encoded using Base64 encoding.
*
* @module @stdlib/string/base/atob
*
* @example
* var atob = require( '@stdlib/string/base/atob' );
*
* var out = atob( 'SGVsbG8sIHdvcmxk' );
* // returns 'Hello, world'
*/

// MODULES //

var hasAtobSupport = require( '@stdlib/assert/has-atob-support' );
var builtin = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var main;
if ( hasAtobSupport() ) {
	main = builtin;
} else {
	main = polyfill;
}


// EXPORTS //

module.exports = main;
