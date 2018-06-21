/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Circular buffer.
*
* @module @stdlib/utils/circular-buffer
*
* @example
* var CircularBuffer = require( '@stdlib/utils/circular-buffer' );
*
* var b = new CircularBuffer( 3 );
*
* // Fill the buffer...
* var v = b.push( 'foo' );
* // returns undefined
*
* v = b.push( 'bar' );
* // returns undefined
*
* v = b.push( 'beep' );
* // returns undefined
*
* // Add another value to the buffer and return the removed element:
* v = b.push( 'boop' );
* // returns 'foo'
*/

// MODULES //

var CircularBuffer = require( './main.js' );


// EXPORTS //

module.exports = CircularBuffer;
