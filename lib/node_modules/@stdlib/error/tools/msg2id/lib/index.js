/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Return a two-character error identifier corresponding to a provided error message.
*
* @module @stdlib/error/tools/msg2id
*
* @example
* var msg2id = require( '@stdlib/error/tools/msg2id' );
*
* var v = msg2id( 'invalid option. `%s` option must be an array. Option: `%s`.' );
* // returns '8t'
*/

// MODULES //

var msg2id = require( './main.js' );


// EXPORTS //

module.exports = msg2id;
