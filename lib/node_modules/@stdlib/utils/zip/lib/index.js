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
* Generate array tuples from input arrays.
*
* @module @stdlib/utils/zip
*
* @example
* var zip = require( '@stdlib/utils/zip' );
*
* var zipped = zip( [ 1, 2 ], [ 'a', 'b' ] );
* // returns [ [ 1, 'a' ], [ 2, 'b' ] ]
*
* var opts = {
*    'trunc': false
* };
*
* zipped = zip( [ 1, 2, 3 ], [ 'a', 'b' ], opts );
* // returns [ [ 1, 'a' ], [ 2, 'b' ], [ 3, null ] ]
*/

// MODULES //

var zip = require( './zip.js' );


// EXPORTS //

module.exports = zip;
