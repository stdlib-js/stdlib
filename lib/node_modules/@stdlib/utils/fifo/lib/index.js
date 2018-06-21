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
* First-in-first-out queue.
*
* @module @stdlib/utils/fifo
*
* @example
* var fifo = require( '@stdlib/utils/fifo' );
*
* var queue = fifo();
*
* // Add values to the queue:
* queue.push( 'foo' ).push( 'bar' );
*
* // Remove the first value:
* var v = queue.pop();
* // returns 'foo'
*
* // Add a new value to the queue:
* queue.push( 'beep' );
*
* // Remove the "oldest" queue value:
* v = queue.pop();
* // returns 'bar'
*/

// MODULES //

var fifo = require( './main.js' );


// EXPORTS //

module.exports = fifo;
