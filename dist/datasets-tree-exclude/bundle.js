/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

// MAIN //

// Define the bundle:
var BUNDLE = {
	'name': 'bundle',
	'standalone': 'stdlib_datasets_exclude',
	'namespace': 'tree',
	'raw': false,
	'minified': true,
	'include': [
		// WARNING: this list is fragile, as we must manually update the list of what to include as the namespace changes.

		// TODO: we should be able to programmatically generate this list by reading the `bundle.js` files in the various datasets bundle packages, deriving the list of datasets in those packages, and then taking the complement to arrive at this list
		'@stdlib/datasets/afinn-111',
		'@stdlib/datasets/afinn-96',
		'@stdlib/datasets/anscombes-quartet',
		'@stdlib/datasets/berndt-cps-wages-1985',
		'@stdlib/datasets/cdc-nchs-us-births-1969-1988',
		'@stdlib/datasets/cdc-nchs-us-births-1994-2003',
		'@stdlib/datasets/cdc-nchs-us-infant-mortality-bw-1915-2013',
		'@stdlib/datasets/dale-chall-new',
		'@stdlib/datasets/female-first-names-en',
		'@stdlib/datasets/frb-sf-wage-rigidity',
		'@stdlib/datasets/harrison-boston-house-prices',
		'@stdlib/datasets/harrison-boston-house-prices-corrected',
		'@stdlib/datasets/herndon-venus-semidiameters',
		'@stdlib/datasets/liu-negative-opinion-words-en',
		'@stdlib/datasets/liu-positive-opinion-words-en',
		'@stdlib/datasets/male-first-names-en',
		'@stdlib/datasets/minard-napoleons-march',
		'@stdlib/datasets/month-names-en',
		'@stdlib/datasets/nightingales-rose',
		'@stdlib/datasets/pace-boston-house-prices',
		'@stdlib/datasets/savoy-stopwords-fin',
		'@stdlib/datasets/savoy-stopwords-fr',
		'@stdlib/datasets/savoy-stopwords-ger',
		'@stdlib/datasets/savoy-stopwords-it',
		'@stdlib/datasets/savoy-stopwords-por',
		'@stdlib/datasets/savoy-stopwords-sp',
		'@stdlib/datasets/savoy-stopwords-swe',
		'@stdlib/datasets/spache-revised',
		'@stdlib/datasets/ssa-us-births-2000-2014',
		'@stdlib/datasets/standard-card-deck',
		'@stdlib/datasets/stopwords-en',
		'@stdlib/datasets/us-states-abbr',
		'@stdlib/datasets/us-states-capitals',
		'@stdlib/datasets/us-states-capitals-names',
		'@stdlib/datasets/us-states-names',
		'@stdlib/datasets/us-states-names-capitals'
	]
};


// EXPORTS //

module.exports = BUNDLE;
