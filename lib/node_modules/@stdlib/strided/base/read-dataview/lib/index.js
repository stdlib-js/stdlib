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
* Copy elements from an input strided DataView to elements in an output strided array.
*
* @module @stdlib/strided/base/read-dataview
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
* var readDataView = require( '@stdlib/strided/base/read-dataview' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
* var out = readDataView( x.length, view, 8, y, 1, true );
* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( out === y );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var DataView = require( '@stdlib/array/dataview' );
* var readDataView = require( '@stdlib/strided/base/read-dataview' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var view = new DataView( x.buffer );
*
* var y = new Float64Array( x.length );
* var out = readDataView.ndarray( x.length, view, 8, 0, y, 1, 0, true );
* // e.g., returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
*
* var bool = ( out === y );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
