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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var ArrayBuffer = require( '@stdlib/array/buffer' );
var DataView = require( '@stdlib/array/dataview' );


// MAIN //

/**
* Mock context constructor.
*
* @private
* @constructor
* @returns {Context} context instance
*/
function Context() {
	this._buffer = new ArrayBuffer( 100 );
	return this;
}

/**
* Returns a boolean indicating whether a provided array is a view on the context `ArrayBuffer`.
*
* @private
* @name isView
* @memberof Context.prototype
* @type {Function}
* @param {Collection} arr - input array
* @returns {boolean} boolean indicating whether a provided array is a view
*/
setReadOnly( Context.prototype, 'isView', function isView( arr ) {
	return ( arr.buffer ) ? ( arr.buffer === this._buffer ) : false;
});

/**
* Reallocates context memory.
*
* @private
* @name realloc
* @memberof Context.prototype
* @type {Function}
* @param {NonNegativeInteger} nbytes - number of bytes
*/
setReadOnly( Context.prototype, 'realloc', function realloc( nbytes ) {
	this._buffer = new ArrayBuffer( nbytes );
});

/**
* Returns a `DataView` of context memory.
*
* @private
* @name view
* @memberof Context.prototype
* @type {DataView}
*/
setReadOnlyAccessor( Context.prototype, 'view', function getter() {
	return new DataView( this._buffer );
});


// EXPORTS //

module.exports = Context;
