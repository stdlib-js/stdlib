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
* Unzip a zipped array (i.e., a nested array of tuples).
*
* @module @stdlib/utils/unzip
*
* @example
* var unzip = require( '@stdlib/utils/unzip' );
*
* var arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
* var out = unzip( arr );
* // returns [ [ 1, 2 ], [ 'a', 'b' ], [ 3, 4 ] ]
*
* arr = [ [ 1, 'a', 3 ], [ 2, 'b', 4 ] ];
* out = unzip( arr, [ 0, 2 ] );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/

// MODULES //

var unzip = require( './unzip.js' );


// EXPORTS //

module.exports = unzip;
