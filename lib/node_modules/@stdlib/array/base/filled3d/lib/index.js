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
* Create a filled three-dimensional nested array.
*
* @module @stdlib/array/base/filled3d
*
* @example
* var filled3d = require( '@stdlib/array/base/filled3d' );
*
* var out = filled3d( 0.0, [ 1, 1, 3 ] );
* // returns [ [ [ 0.0, 0.0, 0.0 ] ] ]
*
* @example
* var filled3d = require( '@stdlib/array/base/filled3d' );
*
* var out = filled3d( 'beep', [ 1, 3, 1 ] );
* // returns [ [ [ 'beep' ], [ 'beep' ], [ 'beep' ] ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
