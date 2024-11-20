/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
* Evaluate a normalized Hermite polynomial using single-precision floating-point arithmetic.
*
* @module @stdlib/math/base/tools/normhermitepolyf
*
* @example
* var normhermitepolyf = require( '@stdlib/math/base/tools/normhermitepolyf' );
*
* var v = normhermitepolyf( 1, 0.5 );
* // returns 0.5
*
* v = normhermitepolyf( 0, 0.5 );
* // returns 1.0
*
* v = normhermitepolyf( 2, 0.5 );
* // returns -0.75
*
* v = normhermitepolyf( -1, 0.5 );
* // returns NaN
*
* @example
* var factory = require( '@stdlib/math/base/tools/normhermitepolyf' ).factory;
*
* var polyval = factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -0.75
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
