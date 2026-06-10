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
* Return the k-means distance metric string associated with a k-means distance metric enumeration constant.
*
* @module @stdlib/ml/base/kmeans/metric-enum2str
*
* @example
* var str2enum = require( '@stdlib/ml/base/kmeans/metric-str2enum' );
* var enum2str = require( '@stdlib/ml/base/kmeans/metric-enum2str' );
*
* var v = str2enum( 'sqeuclidean' );
* // returns <number>
*
* var s = enum2str( v );
* // returns 'sqeuclidean'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
