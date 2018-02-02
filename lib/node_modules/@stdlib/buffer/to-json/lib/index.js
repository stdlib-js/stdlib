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
* Return a JSON representation of a `Buffer`.
*
* @module @stdlib/buffer/to-json
*
* @example
* var array2buffer = require( '@stdlib/buffer/from-array' );
* var toJSON = require( '@stdlib/buffer/to-json' );
*
* var buf = array2buffer( [ 1, 2 ] );
* // returns <Buffer>
*
* var json = toJSON( buf );
* // returns { 'type': 'Buffer', 'data': [ 1, 2 ] }
*/

// MODULES //

var toJSON = require( './main.js' );


// EXPORTS //

module.exports = toJSON;
