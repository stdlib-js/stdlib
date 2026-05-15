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
* Convert a list of arrays to "pointers" (i.e., byte offsets) in WebAssembly module memory.
*
* @module @stdlib/wasm/base/arrays2ptrs
*
* @example
* var setReadOnlyAccessor = require( '@stdlib/utils/define-configurable-read-only-accessor' );
* var ArrayBuffer = require( '@stdlib/array/buffer' );
* var DataView = require( '@stdlib/array/dataview' );
* var Float64Array = require( '@stdlib/array/float64' );
* var dtype2wasm = require( '@stdlib/wasm/base/dtype2wasm' );
* var arrays2ptrs = require( '@stdlib/wasm/base/arrays2ptrs' );
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

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
