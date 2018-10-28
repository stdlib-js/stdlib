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
* Evaluate a normalized Hermite polynomial.
*
* @module @stdlib/math/base/tools/normhermitepoly
*
* @example
* var normhermitepoly = require( '@stdlib/math/base/tools/normhermitepoly' );
*
* var v = normhermitepoly( 1, 0.5 );
* // returns 0.5
*
* v = normhermitepoly( 0, 0.5 );
* // returns 1.0
*
* v = normhermitepoly( 2, 0.5 );
* // returns -0.75
*
* v = normhermitepoly( -1, 0.5 );
* // returns NaN
*
* @example
* var factory = require( '@stdlib/math/base/tools/normhermitepoly' ).factory;
*
* var polyval = factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -0.75
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var normhermitepoly = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( normhermitepoly, 'factory', factory );


// EXPORTS //

module.exports = normhermitepoly;
