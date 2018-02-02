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
* Invoke a function once for each element in a collection and update the collection in-place.
*
* @module @stdlib/utils/inmap
*
* @example
* var inmap = require( '@stdlib/utils/inmap' );
*
* function scale( value, index, collection ) {
*     return value * index;
* }
*
* var arr = [ 1, 2, 3, 4 ];
*
* var out = inmap( arr, scale );
* // returns [ 0, 2, 6, 12 ]
*
* var bool = ( out === arr );
* // returns true
*/

// MODULES //

var inmap = require( './inmap.js' );


// EXPORTS //

module.exports = inmap;
