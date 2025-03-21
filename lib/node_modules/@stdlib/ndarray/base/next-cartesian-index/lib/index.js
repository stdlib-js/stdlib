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
* Return the next Cartesian index (i.e., set of subscripts/dimension indices).
*
* @module @stdlib/ndarray/base/next-cartesian-index
*
* @example
* var nextCartesianIndex = require( '@stdlib/ndarray/base/next-cartesian-index' );
*
* var shape = [ 2, 2, 2 ];
*
* var idx = nextCartesianIndex( shape, 'row-major', [ 0, 0, 1 ], -1 );
* // returns [ 0, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 0, 1, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 0, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 0, 1 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 1, 0 ]
*
* idx = nextCartesianIndex( shape, 'row-major', idx, -1 );
* // returns [ 1, 1, 1 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
