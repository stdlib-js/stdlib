/* eslint-disable max-lines */

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
	'alias': 'base.strided.nanmax',
	'path': '@stdlib/stats/strided/nanmax',
	'value': require( '@stdlib/stats/strided/nanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmaxabs',
	'path': '@stdlib/stats/strided/nanmaxabs',
	'value': require( '@stdlib/stats/strided/nanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmaxabs',
		'@stdlib/stats/strided/maxabs',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/nanminabs',
		'@stdlib/stats/strided/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.nanmaxBy',
	'path': '@stdlib/stats/strided/nanmax-by',
	'value': require( '@stdlib/stats/strided/nanmax-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmax',
		'@stdlib/stats/strided/max-by',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/nanmin-by',
		'@stdlib/stats/strided/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmean',
	'path': '@stdlib/stats/strided/nanmean',
	'value': require( '@stdlib/stats/strided/nanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanors',
	'path': '@stdlib/stats/strided/nanmeanors',
	'value': require( '@stdlib/stats/strided/nanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanors',
		'@stdlib/stats/strided/meanors',
		'@stdlib/stats/strided/nanmean',
		'@stdlib/stats/strided/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanpn',
	'path': '@stdlib/stats/strided/nanmeanpn',
	'value': require( '@stdlib/stats/strided/nanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanpn',
		'@stdlib/stats/strided/meanpn',
		'@stdlib/stats/strided/nanmean',
		'@stdlib/stats/strided/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanwd',
	'path': '@stdlib/stats/strided/nanmeanwd',
	'value': require( '@stdlib/stats/strided/nanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanwd',
		'@stdlib/stats/strided/meanwd',
		'@stdlib/stats/strided/nanmean',
		'@stdlib/stats/strided/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.nanmin',
	'path': '@stdlib/stats/strided/nanmin',
	'value': require( '@stdlib/stats/strided/nanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.nanminabs',
	'path': '@stdlib/stats/strided/nanminabs',
	'value': require( '@stdlib/stats/strided/nanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanminabs',
		'@stdlib/stats/strided/minabs',
		'@stdlib/stats/strided/nanmaxabs',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.nanminBy',
	'path': '@stdlib/stats/strided/nanmin-by',
	'value': require( '@stdlib/stats/strided/nanmin-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmin',
		'@stdlib/stats/strided/min-by',
		'@stdlib/stats/strided/nanmax-by',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmax',
	'path': '@stdlib/stats/strided/nanmskmax',
	'value': require( '@stdlib/stats/strided/nanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskmax',
		'@stdlib/stats/strided/mskmax',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/nanmskmin',
		'@stdlib/stats/strided/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmin',
	'path': '@stdlib/stats/strided/nanmskmin',
	'value': require( '@stdlib/stats/strided/nanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskmin',
		'@stdlib/stats/strided/mskmin',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/nanmskmax',
		'@stdlib/stats/strided/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskrange',
	'path': '@stdlib/stats/strided/nanmskrange',
	'value': require( '@stdlib/stats/strided/nanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskrange',
		'@stdlib/stats/strided/mskrange',
		'@stdlib/stats/strided/nanrange',
		'@stdlib/stats/strided/nanmskmax',
		'@stdlib/stats/strided/nanmskmin',
		'@stdlib/stats/strided/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrange',
	'path': '@stdlib/stats/strided/nanrange',
	'value': require( '@stdlib/stats/strided/nanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/range',
		'@stdlib/stats/strided/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrangeBy',
	'path': '@stdlib/stats/strided/nanrange-by',
	'value': require( '@stdlib/stats/strided/nanrange-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/strided/nanmax-by',
		'@stdlib/stats/strided/nanmin-by',
		'@stdlib/stats/strided/nanrange',
		'@stdlib/stats/strided/range-by',
		'@stdlib/stats/strided/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanstdev',
	'path': '@stdlib/stats/strided/nanstdev',
	'value': require( '@stdlib/stats/strided/nanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/base/mskstdev',
		'@stdlib/stats/strided/nanvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/strided/stdev'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevch',
	'path': '@stdlib/stats/strided/nanstdevch',
	'value': require( '@stdlib/stats/strided/nanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevch',
		'@stdlib/stats/strided/nanvariancech',
		'@stdlib/stats/strided/nanstdev',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/strided/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevpn',
	'path': '@stdlib/stats/strided/nanstdevpn',
	'value': require( '@stdlib/stats/strided/nanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevpn',
		'@stdlib/stats/strided/nanvariancepn',
		'@stdlib/stats/strided/nanstdev',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/strided/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevtk',
	'path': '@stdlib/stats/strided/nanstdevtk',
	'value': require( '@stdlib/stats/strided/nanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevtk',
		'@stdlib/stats/strided/nanvariancetk',
		'@stdlib/stats/strided/nanstdev',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/strided/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevwd',
	'path': '@stdlib/stats/strided/nanstdevwd',
	'value': require( '@stdlib/stats/strided/nanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevwd',
		'@stdlib/stats/strided/nanvariancewd',
		'@stdlib/stats/strided/nanstdev',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/strided/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevyc',
	'path': '@stdlib/stats/strided/nanstdevyc',
	'value': require( '@stdlib/stats/strided/nanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevyc',
		'@stdlib/stats/strided/nanvarianceyc',
		'@stdlib/stats/strided/nanstdev',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/strided/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.nanvariance',
	'path': '@stdlib/stats/strided/nanvariance',
	'value': require( '@stdlib/stats/strided/nanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/strided/nanstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/strided/variance'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancech',
	'path': '@stdlib/stats/strided/nanvariancech',
	'value': require( '@stdlib/stats/strided/nanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancech',
		'@stdlib/stats/strided/nanstdevch',
		'@stdlib/stats/strided/nanvariance',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/strided/variancech'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancepn',
	'path': '@stdlib/stats/strided/nanvariancepn',
	'value': require( '@stdlib/stats/strided/nanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancepn',
		'@stdlib/stats/strided/nanstdevpn',
		'@stdlib/stats/strided/nanvariance',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/strided/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancetk',
	'path': '@stdlib/stats/strided/nanvariancetk',
	'value': require( '@stdlib/stats/strided/nanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancetk',
		'@stdlib/stats/strided/nanstdevtk',
		'@stdlib/stats/strided/nanvariance',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/strided/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancewd',
	'path': '@stdlib/stats/strided/nanvariancewd',
	'value': require( '@stdlib/stats/strided/nanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancewd',
		'@stdlib/stats/strided/nanstdevwd',
		'@stdlib/stats/strided/nanvariance',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/strided/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.nanvarianceyc',
	'path': '@stdlib/stats/strided/nanvarianceyc',
	'value': require( '@stdlib/stats/strided/nanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvarianceyc',
		'@stdlib/stats/strided/nanstdevyc',
		'@stdlib/stats/strided/nanvariance',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/strided/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.nullary',
	'path': '@stdlib/strided/base/nullary',
	'value': require( '@stdlib/strided/base/nullary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});


// EXPORTS //

module.exports = ns;
