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

/**
* Generate a frequency table according to an indicator function.
*
* @module @stdlib/utils/tabulate-by
*
* @example
* var tabulateBy = require( '@stdlib/utils/tabulate-by' );
*
* function indicator( value ) {
*     return value[ 0 ];
* }
*
* var arr = [ 'beep', 'boop', 'foo', 'beep' ];
*
* var out = tabulateBy( arr, indicator );
* // returns [ [ 'b', 3, 0.75 ], [ 'f', 1, 0.25 ] ]
*/

// MODULES //

var tabulateBy = require( './tabulate_by.js' );


// EXPORTS //

module.exports = tabulateBy;
