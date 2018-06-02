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
* Test if an object-like value contains a circular reference.
*
* @module @stdlib/assert/is-circular
*
* @example
* var isCircular = require( '@stdlib/assert/is-circular' );
*
* var obj = {
*   'a': 'beep',
*   'b': {
*     'c': 'boop'
*   }
* };
* obj.b.self = obj;
*
* var bool = isCircular( obj );
* // returns true
*
* bool = isCircular( null );
* // returns false
*/

// MODULES //

var isCircular = require( './main.js' );


// EXPORTS //

module.exports = isCircular;
