/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Resolve the most common underlying storage layout.
*
* @module @stdlib/ndarray/base/consensus-order
*
* @example
* var consensusOrder = require( '@stdlib/ndarray/base/consensus-order' );
*
* var strides = [ [ 2, 1 ], [ 4, 1 ] ];
*
* var order = consensusOrder( strides );
* // returns 'row-major'
*
* @example
* var consensusOrder = require( '@stdlib/ndarray/base/consensus-order' );
*
* var strides = [ [ 1, 2 ], [ 1, 4 ] ];
*
* var order = consensusOrder( strides );
* // returns 'column-major'
*
* @example
* var consensusOrder = require( '@stdlib/ndarray/base/consensus-order' );
*
* var strides = [ [ 2, 1 ], [ 1, 4 ] ];
*
* var order = consensusOrder( strides );
* // returns <string>
*
* @example
* var consensusOrder = require( '@stdlib/ndarray/base/consensus-order' );
*
* var strides = [ [ 1, 1 ], [ 1, 1 ] ];
*
* var order = consensusOrder( strides );
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
