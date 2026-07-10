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

// MODULES //

var dsquaredEuclidean = require( '@stdlib/stats/strided/distances/dsquared-euclidean' );
var dcorrelation = require( '@stdlib/stats/strided/distances/dcorrelation' );
var dcityblock = require( '@stdlib/stats/strided/distances/dcityblock' );
var dcosine = require( '@stdlib/stats/strided/distances/dcosine-distance' );


// MAIN //

/**
* Table mapping a metric to a corresponding strided function.
*
* @private
* @name metric2strided
* @type {Object}
*/
var metric2strided = {
	'sqeuclidean': dsquaredEuclidean,
	'correlation': dcorrelation,
	'cityblock': dcityblock,
	'cosine': dcosine
};


// EXPORTS //

module.exports = metric2strided;
