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
* Evaluate a physicist's Hermite polynomial.
*
* @module @stdlib/math/base/tools/hermitepoly
*
* @example
* var hermitepoly = require( '@stdlib/math/base/tools/hermitepoly' );
*
* var v = hermitepoly( 1, 1.0 );
* // returns 2.0
*
* v = hermitepoly( 1, 0.5 );
* // returns 0.5
*
* v = hermitepoly( -1, 0.5 );
* // returns NaN
*
* v = hermitepoly( 0, 0.5 );
* // returns 1.0
*
* v = hermitepoly( 2, 0.5 );
* // returns -1.0
*
* @example
* var factory = require( '@stdlib/math/base/tools/hermitepoly' ).factory;
*
* var polyval = factory( 2 );
*
* var v = polyval( 0.5 );
* // returns -1.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var hermitepoly = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( hermitepoly, 'factory', factory );


// EXPORTS //

module.exports = hermitepoly;
