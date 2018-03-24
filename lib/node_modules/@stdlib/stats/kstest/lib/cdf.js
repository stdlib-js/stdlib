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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MAIN //

var CDF = {};

CDF[ 'arcsine' ] = require( '@stdlib/stats/base/dists/arcsine/cdf' );
CDF[ 'beta' ] = require( '@stdlib/stats/base/dists/beta/cdf' );
CDF[ 'betaprime' ] = require( '@stdlib/stats/base/dists/betaprime/cdf' );
CDF[ 'cauchy' ] = require( '@stdlib/stats/base/dists/cauchy/cdf' );
CDF[ 'chi' ] = require( '@stdlib/stats/base/dists/chi/cdf' );
CDF[ 'chisquare' ] = require( '@stdlib/stats/base/dists/chisquare/cdf' );
CDF[ 'cosine' ] = require( '@stdlib/stats/base/dists/cosine/cdf' );
CDF[ 'erlang' ] = require( '@stdlib/stats/base/dists/erlang/cdf' );
CDF[ 'exponential' ] = require( '@stdlib/stats/base/dists/exponential/cdf' );
CDF[ 'f' ] = require( '@stdlib/stats/base/dists/f/cdf' );
CDF[ 'frechet' ] = require( '@stdlib/stats/base/dists/frechet/cdf' );
CDF[ 'gamma' ] = require( '@stdlib/stats/base/dists/gamma/cdf' );
CDF[ 'gumbel' ] = require( '@stdlib/stats/base/dists/gumbel/cdf' );
CDF[ 'invgamma' ] = require( '@stdlib/stats/base/dists/invgamma/cdf' );
CDF[ 'kumaraswamy' ] = require( '@stdlib/stats/base/dists/kumaraswamy/cdf' );
CDF[ 'laplace' ] = require( '@stdlib/stats/base/dists/laplace/cdf' );
CDF[ 'levy' ] = require( '@stdlib/stats/base/dists/levy/cdf' );
CDF[ 'logistic' ] = require( '@stdlib/stats/base/dists/logistic/cdf' );
CDF[ 'lognormal' ] = require( '@stdlib/stats/base/dists/lognormal/cdf' );
CDF[ 'normal' ] = require( '@stdlib/stats/base/dists/normal/cdf' );
CDF[ 'pareto-type1' ] = require( '@stdlib/stats/base/dists/pareto-type1/cdf' );
CDF[ 'rayleigh' ] = require( '@stdlib/stats/base/dists/rayleigh/cdf' );
CDF[ 't' ] = require( '@stdlib/stats/base/dists/t/cdf' );
CDF[ 'triangular' ] = require( '@stdlib/stats/base/dists/triangular/cdf' );
CDF[ 'uniform' ] = require( '@stdlib/stats/base/dists/uniform/cdf' );
CDF[ 'weibull' ] = require( '@stdlib/stats/base/dists/weibull/cdf' );


// EXPORTS //

module.exports = CDF;
