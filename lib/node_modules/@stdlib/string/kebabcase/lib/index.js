/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
* Convert a string to kebab case.
*
* @module @stdlib/string/kebabcase
*
* @example
* var kebabcase = require( '@stdlib/string/kebabcase' );
*
* var str = kebabcase( 'Foo Bar' );
* // returns 'foo-bar'
*
* str = kebabcase( 'I am a tiny little house' );
* // returns 'i-am-a-tiny-little-house'
*/

// MODULES //

var kebabcase = require( './main.js' );


// EXPORTS //

module.exports = kebabcase;
