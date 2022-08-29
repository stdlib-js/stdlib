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
* Incremental parser for delimiter-separated values.
*
* @module @stdlib/utils/dsv/base/parse
*
* @example
* var Parser = require( '@stdlib/utils/dsv/base/parse' );
*
* var parser = new Parser();
*
* // ...
*
* parser.next( '1,2,3,4\n' );
*
* // ...
*
* parser.next( '5,6,7,8\n' );
*
* // ...
*
* parser.next( '9,10,11,12\n' );
*
* // ...
*
* parser.close();
*
* // ...
*
* var bool = parser.done;
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
