/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Return an ndarray formed by appending provided scalar values to a one-dimensional input ndarray.
*
* @module @stdlib/ndarray/push
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var push = require( '@stdlib/ndarray/push' );
*
* var x = array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = push( x, 5.0, 6.0, 7.0 );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
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
