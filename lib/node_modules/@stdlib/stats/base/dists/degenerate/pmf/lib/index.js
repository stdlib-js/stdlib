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
* Degenerate distribution probability mass function (PDF).
*
* @module @stdlib/stats/base/dists/degenerate/pmf
*
* @example
* var pmf = require( '@stdlib/stats/base/dists/degenerate/pmf' );
*
* var y = pmf( 2.0, 0.0 );
* // returns 0.0
*
* @example
* var factory = require( '@stdlib/stats/base/dists/degenerate/pmf' ).factory;
*
* var pmf = factory( 10.0 );
*
* var y = pmf( 10.0 );
* // returns 1.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pmf = require( './pmf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( pmf, 'factory', factory );


// EXPORTS //

module.exports = pmf;
