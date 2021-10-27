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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.strided.variance',
	'path': '@stdlib/stats/base/variance',
	'value': require( '@stdlib/stats/base/variance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/varm'
	]
});

ns.push({
	'alias': 'base.strided.variancech',
	'path': '@stdlib/stats/base/variancech',
	'value': require( '@stdlib/stats/base/variancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/stdevch',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.variancepn',
	'path': '@stdlib/stats/base/variancepn',
	'value': require( '@stdlib/stats/base/variancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/stdevpn',
		'@stdlib/stats/base/variance',
		'@stdlib/stats/base/varmpn'
	]
});

ns.push({
	'alias': 'base.strided.variancetk',
	'path': '@stdlib/stats/base/variancetk',
	'value': require( '@stdlib/stats/base/variancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/stdevtk',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.variancewd',
	'path': '@stdlib/stats/base/variancewd',
	'value': require( '@stdlib/stats/base/variancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/stdevwd',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.varianceyc',
	'path': '@stdlib/stats/base/varianceyc',
	'value': require( '@stdlib/stats/base/varianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/stdevyc',
		'@stdlib/stats/base/variance'
	]
});


// EXPORTS //

module.exports = ns;
