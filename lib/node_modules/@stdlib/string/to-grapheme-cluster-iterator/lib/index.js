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
* Create an iterator which iterates over grapheme clusters.
*
* @module @stdlib/string/to-grapheme-cluster-iterator
*
* @example
* var graphemeClusters2iterator = require( '@stdlib/string/to-grapheme-cluster-iterator' );
*
* var iter = graphemeClusters2iterator( '🌷🍕' );
*
* var v = iter.next().value;
* // returns '🌷'
*
* v = iter.next().value;
* // returns '🍕'
*
* var bool = iter.next().done;
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
