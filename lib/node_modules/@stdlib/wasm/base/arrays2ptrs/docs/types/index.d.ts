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

import { Collection, AccessorArrayLike, ArrayLike, DataType } from '@stdlib/types/array';

/**
* Memory context.
*/
interface Context {
	/**
	* Returns a boolean indicating whether an array is a view on a module's memory.
	*
	* @param arr - input array
	* @returns boolean indicating whether an array is a view on a module's memory
	*/
	isView: ( arr: Collection | AccessorArrayLike<any> ) => boolean;

	/**
	* Reallocates module memory.
	*
	* @param nbytes - number of bytes
	*/
	realloc: ( nbytes: number ) => any;

	/**
	* Returns the current `DataView` of module memory.
	*/
	view: DataView;
}

/**
* Input array object.
*/
interface InputArrayObject<T> {
	/**
	* Array data type.
	*/
	dtype: DataType;

	/**
	* WebAssembly array data type.
	*/
	wdtype: DataType;

	/**
	* Number of indexed elements.
	*/
	length: number;

	/**
	* Original array-like object.
	*/
	data: T;

	/**
	* Index increment.
	*/
	stride: number;

	/**
	* Index offset;
	*/
	offset: number;
}

/**
* Output array object.
*/
interface OutputArrayObject<T> extends InputArrayObject<T> {
	/**
	* Number of bytes per element.
	*/
	BYTES_PER_ELEMENT: number;

	/**
	* Byte offset (i.e., a pointer).
	*/
	ptr: number;

	/**
	* Number of bytes consumed by **indexed** array elements as stored in module memory.
	*/
	nbytes: number;

	/**
	* Boolean indicating whether an array had to be copied to module memory.
	*/
	copy: boolean;
}

/**
* Converts a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly module memory.
*
* ## Notes
*
* -   Beware that this function may reallocate module memory, resulting in `ArrayBuffer` detachment and the invalidation of any typed array views which were views of the previously allocated memory. Additionally, this function may write to module memory and does so without regard for any existing memory content. Users are thus encouraged to take suitable precautions (e.g., copying results out of module memory prior to subsequent invocation) in order to avoid unexpected results.
* -   If an array's data is copied to module memory, the data is copied to a contiguous segment of module memory, and the respective array object in the returned array will have unit stride and an offset of zero.
*
* @param ctx - module context
* @param list - list of array objects
* @returns list of pointers
*
* @example
* var setReadOnlyAccessor = require( '@stdlib/utils/define-configurable-read-only-accessor' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
* var Float64Array = require( '@stdlib/array/float64' );
* var dtype2wasm = require( '@stdlib/wasm/base/dtype2wasm' );
*
* function Context() {
*     this._buffer = new ArrayBuffer( 100 );
*     return this;
* }
*
* Context.prototype.isView = function isView( arr ) {
*     return ( arr.buffer ) ? ( arr.buffer === this._buffer ) : false;
* };
*
* Context.prototype.realloc = function realloc( nbytes ) {
*     this._buffer = new ArrayBuffer( nbytes );
* };
*
* setReadOnlyAccessor( Context.prototype, 'view', function getter() {
*     return new DataView( this._buffer );
* });
*
* // ...
*
* var ctx = new Context();
*
* // ...
*
* var x = new Float64Array( 4 );
* var y = new Float64Array( 4 );
*
* // ...
*
* var xobj = {
*     'dtype': 'float64',
*     'wdtype': dtype2wasm( 'float64' ),
*     'length': x.length,
*     'data': x,
*     'stride': 1,
*     'offset': 0
* };
*
* var yobj = {
*     'dtype': 'float64',
*     'wdtype': dtype2wasm( 'float64' ),
*     'length': y.length,
*     'data': y,
*     'stride': 1,
*     'offset': 0
* };
*
* var out = arrays2ptrs( ctx, [ xobj, yobj ] );
* // returns [...]
*/
declare function arrays2ptrs<T extends Collection | AccessorArrayLike<any>>( ctx: Context, list: ArrayLike<InputArrayObject<T>> ): Array<OutputArrayObject<T>>;


// EXPORTS //

export = arrays2ptrs;
