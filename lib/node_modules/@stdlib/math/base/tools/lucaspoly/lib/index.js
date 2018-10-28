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
* Evaluate a Lucas polynomial.
*
* @module @stdlib/math/base/tools/lucaspoly
*
* @example
* var lucaspoly = require( '@stdlib/math/base/tools/lucaspoly' );
*
* var v = lucaspoly( 5, 1.0 );
* // returns 11.0
*
* @example
* var factory = require( '@stdlib/math/base/tools/lucaspoly' ).factory;
*
* var polyval = factory( 5 );
*
* var v = polyval( 1.0 );
* // returns 11.0
*
* v = polyval( 2.0 );
* // returns 82.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var lucaspoly = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( lucaspoly, 'factory', factory );


// EXPORTS //

module.exports = lucaspoly;
