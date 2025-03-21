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
* Generate a linearly spaced array.
*
* @module @stdlib/array/linspace
*
* @example
* var linspace = require( '@stdlib/array/linspace' );
*
* var arr = linspace( 0, 100, 6 );
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* @example
* var linspace = require( '@stdlib/array/linspace' );
*
* var arr = linspace( 0, 100, 5, {
*     'endpoint': false
* });
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var linspace = require( '@stdlib/array/linspace' );
*
* var arr = new Float64Array( 6 );
* var out = linspace.assign( 0, 100, out );
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
*
* var bool = ( arr === out );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var linspace = require( '@stdlib/array/linspace' );
*
* var arr = new Float64Array( 5 );
* var out = linspace.assign( 0, 100, out, {
*     'endpoint': false
* });
* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0 ]
*
* var bool = ( arr === out );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
