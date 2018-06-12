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
* Test if a value is generator object-like.
*
* @module @stdlib/assert/is-generator-object-like
*
* @example
* var isGeneratorObjectLike = require( '@stdlib/assert/is-generator-object-like' );
*
* var gen = {
*     'next': function noop() {},
*     'return': function noop() {},
*     'throw': function noop() {}
* };
* var bool = isGeneratorObjectLike( gen );
* // returns true
*
* bool = isGeneratorObjectLike( {} );
* // returns false
*/

// MODULES //

var isGeneratorObject = require( './main.js' );


// EXPORTS //

module.exports = isGeneratorObject;
