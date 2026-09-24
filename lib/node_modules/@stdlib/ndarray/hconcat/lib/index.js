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
* Concatenate a list of ndarrays along the last dimension.
*
* @module @stdlib/ndarray/hconcat
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var hconcat = require( '@stdlib/ndarray/hconcat' );
*
* var x = array( [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ]
*
* var y = array( [ [ 5.0, 6.0, 7.0 ], [ 8.0, 9.0, 10.0 ] ] );
* // returns <ndarray>[ [ 5.0, 6.0, 7.0 ], [ 8.0, 9.0, 10.0 ] ]
*
* var out = hconcat( [ x, y ] );
* // returns <ndarray>[ [ 1.0, 2.0, 5.0, 6.0, 7.0 ], [ 3.0, 4.0, 8.0, 9.0, 10.0 ] ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
