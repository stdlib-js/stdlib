/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* WebAssembly memory interface.
*/
export interface Memory {
	/**
	* Underlying `ArrayBuffer` (or `SharedArrayBuffer`) associated with a memory instance.
	*/
	buffer: ArrayBuffer;

	/**
	* Increases the size of the memory instance by a specified number of WebAssembly pages (i.e., 64KiB).
	*
	* ## Notes
	*
	* -   Upon increasing the size, the previous `ArrayBuffer` is detached, thus invalidating any typed arrays which were views over the previous `ArrayBuffer`.
	* -   Detachment means that the previous `ArrayBuffer` byte length becomes zero, and it no longer has bytes accessible to JavaScript.
	* -   `ArrayBuffer` detachment applies even when `delta` is zero.
	* -   Detachment only applies for non-shared memory instances. For a shared memory instance, the initial buffer (which is a `SharedArrayBuffer`) will not become detached and, instead, its length will not be updated.
	* -   Accesses to the `buffer` property after growing a `SharedArrayBuffer` will yield a larger `SharedArrayBuffer` which may access a larger span of memory than the buffer before growing memory.
	* -   Every `SharedArrayBuffer` accessed via the `buffer` property will always refer to the start of the same memory address range and thus manipulate the same data.
	*
	* @param delta - number of WebAssembly pages (i.e., 64KiB) by which to grow the underlying memory
	* @returns size of the previous `ArrayBuffer` (or `SharedArrayBuffer`)
	*/
	grow( delta: number ): number;
}

/**
* WebAssembly module wrapper interface.
*/
export interface ModuleWrapper {
	/**
	* WebAssembly binary code.
	*/
	binary: Uint8Array;

	/**
	* WebAssembly memory.
	*/
	memory: Memory | null;

	/**
	* WebAssembly memory buffer as a Uint8Array.
	*/
	buffer: Uint8Array | null;

	/**
	* WebAssembly memory buffer as a DataView.
	*/
	view: DataView | null;

	/**
	* "Raw" WebAssembly module exports.
	*/
	exports: Object | null;

	/**
	* Asynchronously initializes a WebAssembly module instance.
	*
	* @returns promise which resolves upon initializing a WebAssembly module instance
	*/
	initialize(): Promise<ModuleWrapper>;

	/**
	* Asynchronously initializes a WebAssembly module instance.
	*
	* @param clbk - callback to invoke upon initializing a WebAssembly module
	*/
	initializeAsync( clbk: ( error: Error | null, mod?: ModuleWrapper ) => void ): void;

	/**
	* Synchronously initializes a WebAssembly module instance.
	*
	* @returns module wrapper instance
	*/
	initializeSync(): ModuleWrapper;

	/**
	* Reallocates the underlying WebAssembly memory instance to a specified number of bytes.
	*
	* ## Notes
	*
	* -   WebAssembly memory can only **grow**, not shrink. Hence, if provided a number of bytes which is less than or equal to the size of the current memory, the function does nothing.
	* -   When non-shared memory is resized, the underlying the `ArrayBuffer` is detached, consequently invalidating any associated typed array views. Before resizing non-shared memory, ensure that associated typed array views no longer need byte access and can be garbage collected.
	*
	* @param nbytes - memory size (in bytes)
	* @returns boolean indicating whether the resize operation was successful
	*/
	realloc( nbytes: number ): boolean;

	/**
	* Returns a boolean indicating whether the underlying WebAssembly memory instance has the capacity to store a provided list of values starting from a specified byte offset.
	*
	* @param byteOffset - byte offset at which to start writing values
	* @param values - input array containing values to write
	* @returns boolean indicating whether the underlying WebAssembly memory instance has enough capacity
	*/
	hasCapacity( byteOffset: number, values: Collection | AccessorArrayLike<any> ): boolean;

	/**
	* Returns a boolean indicating whether a provided list of values is a view of the underlying memory of the WebAssembly module.
	*
	* @param values - input array
	* @returns boolean indicating whether the list is a memory view
	*/
	isView( values: Collection | AccessorArrayLike<any> ): boolean;

	/**
	* Writes values to the underlying WebAssembly memory instance.
	*
	* ## Notes
	*
	* -   The function infers element size (i.e., number of bytes per element) from the data type of the input array. For example, if provided a `Float32Array`, the function writes each element as a single-precision floating-point number to the underlying WebAssembly memory instance.
	* -   In order to write elements as a different data type, you need to perform an explicit cast **before** calling this method. For example, in order to write single-precision floating-point numbers contained in a `Float32Array` as signed 32-bit integers, you must first convert the `Float32Array` to an `Int32Array` before passing the values to this method.
	* -   If provided an array having an unknown or "generic" data type, elements are written as double-precision floating-point numbers.
	*
	* @param byteOffset - byte offset at which to start writing values
	* @param values - input array containing values to write
	* @returns module wrapper instance
	*/
	write( byteOffset: number, values: Collection | AccessorArrayLike<any> ): ModuleWrapper;

	/**
	* Reads values from the underlying WebAssembly memory instance.
	*
	* ## Notes
	*
	* -   The function infers element size (i.e., number of bytes per element) from the data type of the output array. For example, if provided a `Float32Array`, the function reads each element as a single-precision floating-point number from the underlying WebAssembly memory instance.
	* -   In order to read elements as a different data type, you need to perform an explicit cast **after** calling this method. For example, in order to read single-precision floating-point numbers contained in a `Float32Array` as signed 32-bit integers, you must convert the `Float32Array` to an `Int32Array` after reading memory values using this method.
	* -   If provided an output array having an unknown or "generic" data type, elements are read as double-precision floating-point numbers.
	*
	* @param byteOffset - byte offset at which to start reading values
	* @param out - output array
	* @returns module wrapper instance
	*/
	read( byteOffset: number, out: Collection | AccessorArrayLike<any> ): ModuleWrapper;
}
