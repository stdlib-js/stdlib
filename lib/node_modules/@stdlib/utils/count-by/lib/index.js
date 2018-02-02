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
* Group values according to an indicator function and return group counts.
*
* @module @stdlib/utils/count-by
*
* @example
* var countBy = require( '@stdlib/utils/count-by' );
*
* function indicator( v ) {
*     return v[ 0 ];
* }
* var arr = [ 'beep', 'boop', 'foo', 'bar' ];
*
* var out = countBy( arr, indicator );
* // returns { 'b': 3, 'f': 1 }
*/

// MODULES //

var countBy = require( './count_by.js' );


// EXPORTS //

module.exports = countBy;
