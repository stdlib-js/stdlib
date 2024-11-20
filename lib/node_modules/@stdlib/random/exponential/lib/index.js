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
* Generate pseudorandom numbers drawn from an exponential distribution.
*
* @module @stdlib/random/exponential
*
* @example
* var exponential = require( '@stdlib/random/exponential' );
*
* var arr = exponential( [ 10 ], 2.0 );
* // returns <ndarray>
*
* @example
* var exponential = require( '@stdlib/random/exponential' );
*
* var arr = exponential( [ 10 ], 2.0, {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* @example
* var exponential = require( '@stdlib/random/exponential' );
*
* var rand = exponential.factory({
*     'dtype': 'generic',
*     'order': 'column-major'
* });
* // returns <Function>
*
* var arr = rand( [ 10 ], 2.0 );
* // returns <ndarray>
*
* @example
* var exponential = require( '@stdlib/random/exponential' );
*
* var rand = exponential.factory({
*     'dtype': 'generic',
*     'order': 'column-major'
* });
* // returns <Function>
*
* var arr = rand( [ 10 ], 2.0, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign", "factory": "main.factory" }
