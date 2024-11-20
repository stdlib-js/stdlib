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

// MODULES //

var bernoulli = require( '@stdlib/stats/base/dists/bernoulli/pmf' );
var binomial = require( '@stdlib/stats/base/dists/binomial/pmf' );
var discreteUniform = require( '@stdlib/stats/base/dists/discrete-uniform/pmf' );
var geometric = require( '@stdlib/stats/base/dists/geometric/pmf' );
var hypergeometric = require( '@stdlib/stats/base/dists/hypergeometric/pmf' );
var negativeBinomial = require( '@stdlib/stats/base/dists/negative-binomial/pmf' );
var poisson = require( '@stdlib/stats/base/dists/poisson/pmf' );


// MAIN //

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/
var PMF = {
	'bernoulli': bernoulli,
	'binomial': binomial,
	'discrete-uniform': discreteUniform,
	'geometric': geometric,
	'hypergeometric': hypergeometric,
	'negative-binomial': negativeBinomial,
	'poisson': poisson
};


// EXPORTS //

module.exports = PMF;
