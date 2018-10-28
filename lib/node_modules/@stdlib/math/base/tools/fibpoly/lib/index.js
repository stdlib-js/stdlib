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
* Evaluate a Fibonacci polynomial.
*
* @module @stdlib/math/base/tools/fibpoly
*
* @example
* var fibpoly = require( '@stdlib/math/base/tools/fibpoly' );
*
* var v = fibpoly( 5, 1.0 );
* // returns 5.0
*
* @example
* var factory = require( '@stdlib/math/base/tools/fibpoly' ).factory;
*
* var fibpolyval = factory( 5 );
*
* var v = fibpolyval( 1.0 );
* // returns 5.0
*
* v = fibpolyval( 2.0 );
* // returns 29.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var fibpoly = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( fibpoly, 'factory', factory );


// EXPORTS //

module.exports = fibpoly;
