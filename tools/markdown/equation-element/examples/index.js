'use strict';

var createElement = require( './../lib' );

var opts = {
	'className': 'eqn',
	'align': 'left',
	'raw': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt',
	'label': 'eq:erf',
	'src': 'https://cdn.rawgit.com/math-io/erf/master/docs/img/eqn.svg',
	'alt': 'Error function.'
};

var html = createElement( opts );

console.log( html );
/* returns
    '<div class="eqn" align="left" data-raw-text="\operatorname{erf}(x) = \frac{2}{\sqrt\pi}\int_0^x e^{-t^2}\,\mathrm dt" data-equation="eq:erf">
      <img src="https://cdn.rawgit.com/math-io/erf/master/docs/img/eqn.svg" alt="Error function.">
      <br>
    </div>'
*/
