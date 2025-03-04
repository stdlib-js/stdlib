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

/**
* WebAssembly memory descriptor object.
*/
interface Descriptor {
	/**
	* Initial memory size in units of pages (i.e., 64KiB).
	*/
	initial: number;

	/**
	* Maximum memory size in units of pages (i.e., 64 KiB).
	*/
	maximum?: number;

	/**
	* Boolean indicating whether the memory is shared. Default: `false`.
	*/
	shared?: boolean;
}

/**
* Class for creating WebAssembly memory instances.
*/
declare class Memory {
	/**
	* WebAssembly memory instance constructor.
	*
	* @param descriptor - descriptor object
	* @returns memory instance
	*
	* @example
	* var mem = new Memory({
	*     'initial': 0
	* });
	*/
	constructor( descriptor: Descriptor );

	/**
	* Underlying `ArrayBuffer` (or `SharedArrayBuffer`) associated with a memory instance.
	*
	* @example
	* var mem = new Memory({
	*     'initial': 0
	* });
	*
	* var buf = mem.buffer;
	* // returns <ArrayBuffer>
	*/
	readonly buffer: ArrayBuffer;

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
	*
	* @example
	* var mem = new Memory({
	*     'initial': 0
	* });
	*
	* // ...
	*
	* var out = mem.grow( 1 );
	* // returns <number>
	*/
	grow( delta: number ): number;
}


// EXPORTS //

export = Memory;
