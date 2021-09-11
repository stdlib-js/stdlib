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
* Convert a string to Pascal case.
*
* @module @stdlib/string/pascalcase
*
* @example
* var pascalcase = require( '@stdlib/string/pascalcase' );
*
* var str = pascalcase( 'foo bar' );
* // returns 'FooBar'
*
* str = pascalcase( '--foo-bar--' );
* // returns 'FooBar'
*
* str = pascalcase( 'Hello World!' );
* // returns 'HelloWorld'
*/

// MODULES //

var pascalcase = require( './main.js' );


// EXPORTS //

module.exports = pascalcase;
