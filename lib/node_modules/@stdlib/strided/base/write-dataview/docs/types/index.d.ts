/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, AccessorArrayLike } from '@stdlib/types/array';

/**
* Interface describing `writeDataView`.
*/
interface Routine {
	/**
	* Copies elements from an input strided array to elements in a strided DataView.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param view - output DataView
	* @param strideView - `view` stride length (in bytes)
	* @param littleEndian - boolean indicating whether to store the data in little-endian format
	* @returns output DataView
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
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
	*/
	( N: number, x: Collection | AccessorArrayLike<any>, strideX: number, view: DataView, strideView: number, littleEndian: boolean ): DataView;

	/**
	* Copies elements from an input strided array to elements in a strided DataView.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - `x` stride length
	* @param offsetX - starting `x` index
	* @param view - output DataView
	* @param strideView - `view` stride length (in bytes)
	* @param offsetView - starting `view` index (in bytes)
	* @param littleEndian - boolean indicating whether to store the data in little-endian format
	* @returns output DataView
	*
	* @example
	* var ArrayBuffer = require( '@stdlib/array/buffer' );
	* var DataView = require( '@stdlib/array/dataview' );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
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
	ndarray( N: number, x: Collection | AccessorArrayLike<any>, strideX: number, offsetX: number, view: DataView, strideView: number, offsetView: number, littleEndian: boolean ): DataView;
}

/**
* Copies elements from an input strided array to elements in a strided DataView.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - `x` stride length
* @param view - output DataView
* @param strideView - `view` stride length (in bytes)
* @param littleEndian - boolean indicating whether to store the data in little-endian format
* @returns output DataView
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
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
*
* var x = [ 1.0, 2.0, 3.0, 4.0 ];
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
declare var writeDataView: Routine;


// EXPORTS //

export = writeDataView;
