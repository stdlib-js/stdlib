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
	'path': '@stdlib/stats/base/nanmean',
	'value': require( '@stdlib/stats/base/nanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmean',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanors',
	'path': '@stdlib/stats/base/nanmeanors',
	'value': require( '@stdlib/stats/base/nanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanors',
		'@stdlib/stats/strided/meanors',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/strided/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanpn',
	'path': '@stdlib/stats/base/nanmeanpn',
	'value': require( '@stdlib/stats/base/nanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanpn',
		'@stdlib/stats/strided/meanpn',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/strided/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanwd',
	'path': '@stdlib/stats/base/nanmeanwd',
	'value': require( '@stdlib/stats/base/nanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmeanwd',
		'@stdlib/stats/strided/meanwd',
		'@stdlib/stats/base/nanmean',
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
	'path': '@stdlib/stats/base/nanmskmax',
	'value': require( '@stdlib/stats/base/nanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskmax',
		'@stdlib/stats/strided/mskmax',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/strided/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmin',
	'path': '@stdlib/stats/base/nanmskmin',
	'value': require( '@stdlib/stats/base/nanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskmin',
		'@stdlib/stats/strided/mskmin',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/strided/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskrange',
	'path': '@stdlib/stats/base/nanmskrange',
	'value': require( '@stdlib/stats/base/nanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanmskrange',
		'@stdlib/stats/strided/mskrange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/strided/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrange',
	'path': '@stdlib/stats/base/nanrange',
	'value': require( '@stdlib/stats/base/nanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/base/range',
		'@stdlib/stats/strided/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrangeBy',
	'path': '@stdlib/stats/base/nanrange-by',
	'value': require( '@stdlib/stats/base/nanrange-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanrange',
		'@stdlib/stats/strided/nanmax-by',
		'@stdlib/stats/strided/nanmin-by',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/range-by',
		'@stdlib/stats/strided/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanstdev',
	'path': '@stdlib/stats/base/nanstdev',
	'value': require( '@stdlib/stats/base/nanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdev',
		'@stdlib/stats/base/mskstdev',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/stdev'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevch',
	'path': '@stdlib/stats/base/nanstdevch',
	'value': require( '@stdlib/stats/base/nanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevch',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevpn',
	'path': '@stdlib/stats/base/nanstdevpn',
	'value': require( '@stdlib/stats/base/nanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevpn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevtk',
	'path': '@stdlib/stats/base/nanstdevtk',
	'value': require( '@stdlib/stats/base/nanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevtk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevwd',
	'path': '@stdlib/stats/base/nanstdevwd',
	'value': require( '@stdlib/stats/base/nanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevwd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevyc',
	'path': '@stdlib/stats/base/nanstdevyc',
	'value': require( '@stdlib/stats/base/nanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanstdevyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.nanvariance',
	'path': '@stdlib/stats/base/nanvariance',
	'value': require( '@stdlib/stats/base/nanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariance',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancech',
	'path': '@stdlib/stats/base/nanvariancech',
	'value': require( '@stdlib/stats/base/nanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancech',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancepn',
	'path': '@stdlib/stats/base/nanvariancepn',
	'value': require( '@stdlib/stats/base/nanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancepn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancetk',
	'path': '@stdlib/stats/base/nanvariancetk',
	'value': require( '@stdlib/stats/base/nanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancetk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancewd',
	'path': '@stdlib/stats/base/nanvariancewd',
	'value': require( '@stdlib/stats/base/nanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvariancewd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.nanvarianceyc',
	'path': '@stdlib/stats/base/nanvarianceyc',
	'value': require( '@stdlib/stats/base/nanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dnanvarianceyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/varianceyc'
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
