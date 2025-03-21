/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Convert a number to a word representation.
*
* @module @stdlib/string/num2words
*
* @example
* var num2words = require( '@stdlib/string/num2words' );
*
* var out = num2words( 29 );
* // returns 'twenty-nine'
*
* out = num2words( 13072 );
* // returns 'thirteen thousand seventy-two'
*
* out = num2words( 183, { 'lang': 'de' } );
* // returns 'einhundertdreiundachtzig'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
