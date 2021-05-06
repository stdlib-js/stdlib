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
* Compact adjacency matrix.
*
* @module @stdlib/utils/compact-adjacency-matrix
*
* @example
* var CompactAdjacencyMatrix = require( '@stdlib/utils/compact-adjacency-matrix' );
*
* var adj = new CompactAdjacencyMatrix( 4 );
* // returns <CompactAdjacencyMatrix>
*
* // ...
*
* adj.addEdge( 0, 1 );
* adj.addEdge( 0, 2 );
* adj.addEdge( 1, 2 );
* adj.addEdge( 2, 3 );
*
* // ...
*/

// MODULES //

var CompactAdjacencyMatrix = require( './main.js' );


// EXPORTS //

module.exports = CompactAdjacencyMatrix;
