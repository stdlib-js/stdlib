/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Return a JSON representation of a number.
*
* @module @stdlib/number/float64/to-json
*
* @example
* var number2json = require( '@stdlib/number/float64/to-json' );
*
* var str = JSON.stringify( number2json( NaN ) );
* // returns '{"type":"float64","value":"NaN"}'
*/

// MODULES //

var number2json = require( './main.js' );


// EXPORTS //

module.exports = number2json;
