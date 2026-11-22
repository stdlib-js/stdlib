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
* Split a number into the high and low 32-bit words of a 64-bit signed integer.
*
* @module @stdlib/number/int64/base/number2words
*
* @example
* var number2words = require( '@stdlib/number/int64/base/number2words' );
*
* var out = number2words( -1 );
* // returns [ 4294967295, 4294967295 ]
*
* out = number2words( 1234 );
* // returns [ 0, 1234 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var assign = require( './assign.js' );
var main = require( './main.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
