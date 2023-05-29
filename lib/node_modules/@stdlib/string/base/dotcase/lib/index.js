/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Convert a string to dot case.
*
* @module @stdlib/string/base/dotcase
*
* @example
* var dotcase = require( '@stdlib/string/base/dotcase' );
*
* var str = dotcase( 'aBcDeF' );
* // returns 'abcdef'
*
* str = dotcase( 'Hello World!' );
* // returns 'hello.world'
*
* str = dotcase( 'I am a robot' );
* // returns 'i.am.a.robot'
*/


// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
