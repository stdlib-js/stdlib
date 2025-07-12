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

// MODULES //

var objectAssign = require( '@stdlib/object/assign' );
var bytesPerElement = require( '@stdlib/ndarray/base/bytes-per-element' );
var writeDataView = require( '@stdlib/strided/base/write-dataview' ).ndarray;


// MAIN //

/**
* Converts a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly module memory.
*
* ## Notes
*
* -   Beware that this function may reallocate module memory, resulting in `ArrayBuffer` detachment and the invalidation of any typed array views which were views of the previously allocated memory. Additionally, this function may write to module memory and does so without regard for any existing memory content. Users are thus encouraged to take suitable precautions (e.g., copying results out of module memory prior to subsequent invocation) in order to avoid unexpected results.
*
* -   Each element in the list of input arrays should have the following properties:
*
*     -   **dtype**: array data type.
*     -   **wdtype**: WebAssembly array data type.
*     -   **length**: number of indexed elements.
*     -   **data**: original array-like object.
*     -   **stride**: index increment.
*     -   **offset**: index offset.
*
* -   In addition to each element's existing properties, each element of the returned array has the following additional properties:
*
*     -   **BYTES_PER_ELEMENT**: number of bytes per element.
*     -   **ptr**: byte offset.
*     -   **nbytes**: number of bytes consumed by **indexed** array elements as stored in module memory.
*     -   **copy**: boolean indicating whether an array had to be copied to module memory.
*
* -   If an array's data is copied to module memory, the data is copied to a contiguous segment of module memory, and the respective array object in the returned array will have unit stride and an offset of zero.
*
* @param {Object} ctx - module context
* @param {Function} ctx.isView - function to check whether an array is a view on a module's memory
* @param {Function} ctx.realloc - function to reallocate module memory
* @param {DataView} ctx.view - data accessor which returns the current `DataView` of module memory
* @param {Array<Object>} list - list of array objects
* @returns {Array<Object>} list of pointers
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
function arrays2ptrs( ctx, list ) {
	var ptr;
	var out;
	var tmp;
	var o;
	var n;
	var i;

	// Initialize an output array:
	out = [];

	// Attempt to resolve "pointers" to arrays stored in module memory...
	n = 0;
	for ( i = 0; i < list.length; i++ ) {
		o = list[ i ];

		// Copy over properties from the input array object:
		tmp = objectAssign( {}, o );

		// Compute array byte properties:
		tmp.BYTES_PER_ELEMENT = bytesPerElement( o.wdtype );
		tmp.nbytes = o.length * tmp.BYTES_PER_ELEMENT;

		// If provided a memory view, resolve the byte offset; otherwise, indicate that the array needs to be copied to module memory...
		if ( ctx.isView( o.data ) ) {
			tmp.ptr = o.data.byteOffset;
			tmp.copy = false;
		} else {
			tmp.ptr = -1;
			tmp.copy = true;
			n += tmp.nbytes;
		}
		out.push( tmp );
	}
	// If we were unable to resolve one or more pointers, ensure that the module has enough memory to hold copied array data...
	if ( n > 0 ) {
		ctx.realloc( n );
	}
	// For arrays which are not stored in module memory, copy the respective data to module memory...
	ptr = 0;
	for ( i = 0; i < out.length; i++ ) {
		o = out[ i ];
		if ( o.copy ) {
			writeDataView( o.length, o.data, o.stride, o.offset, ctx.view, o.BYTES_PER_ELEMENT, ptr, true ); // eslint-disable-line max-len

			// Update the array pointer (i.e., byte offset):
			o.ptr = ptr;

			// Update the stride and offset to reflect that the data is stored contiguously in module memory:
			o.stride = 1;
			o.offset = 0;

			// Increment the byte offset to mark the start of the next array:
			ptr += o.nbytes;
		}
	}
	return out;
}


// EXPORTS //

module.exports = arrays2ptrs;
