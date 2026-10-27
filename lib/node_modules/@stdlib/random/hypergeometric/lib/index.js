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
* Generate pseudorandom numbers drawn from a hypergeometric distribution.
*
* @module @stdlib/random/hypergeometric
*
* @example
* var hypergeometric = require( '@stdlib/random/hypergeometric' );
*
* var arr = hypergeometric( [ 10 ], 20, 10, 7 );
* // returns <ndarray>
*
* @example
* var hypergeometric = require( '@stdlib/random/hypergeometric' );
*
* var arr = hypergeometric( [ 10 ], 20, 10, 7, {
*     'dtype': 'generic'
* });
* // returns <ndarray>
*
* @example
* var hypergeometric = require( '@stdlib/random/hypergeometric' );
*
* var rand = hypergeometric.factory();
* // returns <Function>
*
* var arr = rand( [ 10 ], 20, 10, 7 );
* // returns <ndarray>
*
* @example
* var hypergeometric = require( '@stdlib/random/hypergeometric' );
*
* var rand = hypergeometric.factory();
* // returns <Function>
*
* var arr = rand( [ 10 ], 20, 10, 7, {
*     'dtype': 'generic'
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
