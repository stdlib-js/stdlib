/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Set ndarray descriptor index offsets.
*
* @module @stdlib/ndarray/base/set-descriptor-offsets
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var getOffset = require( '@stdlib/ndarray/base/offset' );
* var ndarraylike2descriptor = require( '@stdlib/ndarray/base/ndarraylike2descriptor' );
* var setDescriptorOffsets = require( '@stdlib/ndarray/base/set-descriptor-offsets' );
*
* var obj = ndarraylike2descriptor({
*     'dtype': 'float64',
*     'data': new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] ),
*     'shape': [ 1 ],
*     'strides': [ 1 ],
*     'offset': 0,
*     'order': 'row-major'
* });
*
* var arr = [ obj ];
* var out = setDescriptorOffsets( arr, [ 2 ] );
* // returns [...]
*
* var bool = ( out === arr );
* // returns true
*
* var offset = getOffset( arr[ 0 ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
