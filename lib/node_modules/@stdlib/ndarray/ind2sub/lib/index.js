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
* Convert a linear index to an array of subscripts.
*
* @module @stdlib/ndarray/ind2sub
*
* @example
* var ind2sub = require( '@stdlib/ndarray/ind2sub' );
*
* var s = ind2sub( [ 3, 3, 3 ], 17 );
* // returns [ 1, 2, 2 ]
*
* @example
* var ind2sub = require( '@stdlib/ndarray/ind2sub' );
*
* var shape = [ 3, 3, 3 ];
* var out = [ 0, 0, 0 ];
*
* var s = ind2sub.assign( shape, 17, out );
* // returns [ 1, 2, 2 ]
*
* var bool = ( s === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
