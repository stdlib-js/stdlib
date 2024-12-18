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
* Copy elements from an input strided array to elements in a strided DataView.
*
* @module @stdlib/strided/base/write-dataview
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
* var writeDataView = require( '@stdlib/strided/base/write-dataview' );
*
* var x = [ 1, 0, 1, 0 ];
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = writeDataView( 4, x, 1, view, 8, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
* var writeDataView = require( '@stdlib/strided/base/write-dataview' );
*
* var x = [ 1, 0, 1, 0 ];
*
* var buf = new ArrayBuffer( 32 );
* var view = new DataView( buf );
*
* var out = writeDataView.ndarray( 4, x, 1, 0, view, 8, 0, true );
* // returns <DataView>
*
* var bool = ( out === view );
* // returns true
*
* var v = view.getFloat64( 0, true );
* // returns 1.0
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
