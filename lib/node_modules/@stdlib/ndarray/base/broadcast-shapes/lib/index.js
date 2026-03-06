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
* Broadcast array shapes to a single shape.
*
* @module @stdlib/ndarray/base/broadcast-shapes
*
* @example
* var broadcastShapes = require( '@stdlib/ndarray/base/broadcast-shapes' );
*
* var shapes = [
*     [ 8, 1, 6, 1 ],
*     [ 7, 1, 5 ]
* ];
*
* var out = broadcastShapes( shapes );
* // returns [ 8, 7, 6, 5 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
