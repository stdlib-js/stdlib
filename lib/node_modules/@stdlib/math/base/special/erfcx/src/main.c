/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [SciPy]{@link https://github.com/scipy/scipy/blob/ed14bf0a66440a4d164581499fda662121963a56/scipy/special/Faddeeva.cc}. The implementation follows the original, but has been modified for use in stdlib.
*
* ```text
* Copyright (c) 2012 Massachusetts Institute of Technology
*
* Permission is hereby granted, free of charge, to any person obtaining
* a copy of this software and associated documentation files (the
* "Software"), to deal in the Software without restriction, including
* without limitation the rights to use, copy, modify, merge, publish,
* distribute, sublicense, and/or sell copies of the Software, and to
* permit persons to whom the Software is furnished to do so, subject to
* the following conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
* LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
* OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
* WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
* ```
*/

#include "stdlib/math/base/special/erfcx.h"
#include "stdlib/math/base/special/exp.h"
#include "stdlib/constants/float64/pinf.h"
#include "stdlib/math/base/special/floor.h"
#include "stdlib/math/base/assert/is_nan.h"

static double INV_SQRT_PI = 0.56418958354775628694807945156; // 1 / sqrt(pi);

/**
* Chebyshev polynomial for \[0, 0.01).
*
* @param t   scaled value
* @return    result
*/
static double p0( const double t ) {
	return 0.70878032454106438663e-3 + (0.71234091047026302958e-3 + (0.35779077297597742384e-5 + (0.17403143962587937815e-7 + (0.81710660047307788845e-10 + (0.36885022360434957634e-12 + 0.15917038551111111111e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.01, 0.02).
*
* @param t   scaled value
* @return    result
*/
static double p1( const double t ) {
	return 0.21479143208285144230e-2 + (0.72686402367379996033e-3 + (0.36843175430938995552e-5 + (0.18071841272149201685e-7 + (0.85496449296040325555e-10 + (0.38852037518534291510e-12 + 0.16868473576888888889e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.02, 0.03).
*
* @param t   scaled value
* @return    result
*/
static double p2( const double t ) {
	return 0.36165255935630175090e-2 + (0.74182092323555510862e-3 + (0.37948319957528242260e-5 + (0.18771627021793087350e-7 + (0.89484715122415089123e-10 + (0.40935858517772440862e-12 + 0.17872061464888888889e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.03, 0.04).
*
* @param t   scaled value
* @return    result
*/
static double p3( const double t ) {
	return 0.51154983860031979264e-2 + (0.75722840734791660540e-3 + (0.39096425726735703941e-5 + (0.19504168704300468210e-7 + (0.93687503063178993915e-10 + (0.43143925959079664747e-12 + 0.18939926435555555556e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.04, 0.05).
*
* @param t   scaled value
* @return    result
*/
static double p4( const double t ) {
	return 0.66457513172673049824e-2 + (0.77310406054447454920e-3 + (0.40289510589399439385e-5 + (0.20271233238288381092e-7 + (0.98117631321709100264e-10 + (0.45484207406017752971e-12 + 0.20076352213333333333e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.05, 0.06).
*
* @param t   scaled value
* @return    result
*/
static double p5( const double t ) {
	return 0.82082389970241207883e-2 + (0.78946629611881710721e-3 + (0.41529701552622656574e-5 + (0.21074693344544655714e-7 + (0.10278874108587317989e-9 + (0.47965201390613339638e-12 + 0.21285907413333333333e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.06, 0.07).
*
* @param t   scaled value
* @return    result
*/
static double p6( const double t ) {
	return 0.98039537275352193165e-2 + (0.80633440108342840956e-3 + (0.42819241329736982942e-5 + (0.21916534346907168612e-7 + (0.10771535136565470914e-9 + (0.50595972623692822410e-12 + 0.22573462684444444444e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.07, 0.08).
*
* @param t   scaled value
* @return    result
*/
static double p7( const double t ) {
	return 0.11433927298290302370e-1 + (0.82372858383196561209e-3 + (0.44160495311765438816e-5 + (0.22798861426211986056e-7 + (0.11291291745879239736e-9 + (0.53386189365816880454e-12 + 0.23944209546666666667e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.08, 0.09).
*
* @param t   scaled value
* @return    result
*/
static double p8( const double t ) {
	return 0.13099232878814653979e-1 + (0.84167002467906968214e-3 + (0.45555958988457506002e-5 + (0.23723907357214175198e-7 + (0.11839789326602695603e-9 + (0.56346163067550237877e-12 + 0.25403679644444444444e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.09, 0.10).
*
* @param t   scaled value
* @return    result
*/
static double p9( const double t ) {
	return 0.14800987015587535621e-1 + (0.86018092946345943214e-3 + (0.47008265848816866105e-5 + (0.24694040760197315333e-7 + (0.12418779768752299093e-9 + (0.59486890370320261949e-12 + 0.26957764568888888889e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.10, 0.11).
*
* @param t   scaled value
* @return    result
*/
static double p10( const double t ) {
	return 0.16540351739394069380e-1 + (0.87928458641241463952e-3 + (0.48520195793001753903e-5 + (0.25711774900881709176e-7 + (0.13030128534230822419e-9 + (0.62820097586874779402e-12 + 0.28612737351111111111e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.11, 0.12).
*
* @param t   scaled value
* @return    result
*/
static double p11( const double t ) {
	return 0.18318536789842392647e-1 + (0.89900542647891721692e-3 + (0.50094684089553365810e-5 + (0.26779777074218070482e-7 + (0.13675822186304615566e-9 + (0.66358287745352705725e-12 + 0.30375273884444444444e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.12, 0.13).
*
* @param t   scaled value
* @return    result
*/
static double p12( const double t ) {
	return 0.20136801964214276775e-1 + (0.91936908737673676012e-3 + (0.51734830914104276820e-5 + (0.27900878609710432673e-7 + (0.14357976402809042257e-9 + (0.70114790311043728387e-12 + 0.32252476000000000000e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.13, 0.14).
*
* @param t   scaled value
* @return    result
*/
static double p13( const double t ) {
	return 0.21996459598282740954e-1 + (0.94040248155366777784e-3 + (0.53443911508041164739e-5 + (0.29078085538049374673e-7 + (0.15078844500329731137e-9 + (0.74103813647499204269e-12 + 0.34251892320000000000e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.14, 0.15).
*
* @param t   scaled value
* @return    result
*/
static double p14( const double t ) {
	return 0.23898877187226319502e-1 + (0.96213386835900177540e-3 + (0.55225386998049012752e-5 + (0.30314589961047687059e-7 + (0.15840826497296335264e-9 + (0.78340500472414454395e-12 + 0.36381553564444444445e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.15, 0.16).
*
* @param t   scaled value
* @return    result
*/
static double p15( const double t ) {
	return 0.25845480155298518485e-1 + (0.98459293067820123389e-3 + (0.57082915920051843672e-5 + (0.31613782169164830118e-7 + (0.16646478745529630813e-9 + (0.82840985928785407942e-12 + 0.38649975768888888890e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.16, 0.17).
*
* @param t   scaled value
* @return    result
*/
static double p16( const double t ) {
	return 0.27837754783474696598e-1 + (0.10078108563256892757e-2 + (0.59020366493792212221e-5 + (0.32979263553246520417e-7 + (0.17498524159268458073e-9 + (0.87622459124842525110e-12 + 0.41066206488888888890e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.17, 0.18).
*
* @param t   scaled value
* @return    result
*/
static double p17( const double t ) {
	return 0.29877251304899307550e-1 + (0.10318204245057349310e-2 + (0.61041829697162055093e-5 + (0.34414860359542720579e-7 + (0.18399863072934089607e-9 + (0.92703227366365046533e-12 + 0.43639844053333333334e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.18, 0.19).
*
* @param t   scaled value
* @return    result
*/
static double p18( const double t ) {
	return 0.31965587178596443475e-1 + (0.10566560976716574401e-2 + (0.63151633192414586770e-5 + (0.35924638339521924242e-7 + (0.19353584758781174038e-9 + (0.98102783859889264382e-12 + 0.46381060817777777779e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.19, 0.20).
*
* @param t   scaled value
* @return    result
*/
static double p19( const double t ) {
	return 0.34104450552588334840e-1 + (0.10823541191350532574e-2 + (0.65354356159553934436e-5 + (0.37512918348533521149e-7 + (0.20362979635817883229e-9 + (0.10384187833037282363e-11 + 0.49300625262222222221e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.20, 0.21).
*
* @param t   scaled value
* @return    result
*/
static double p20( const double t ) {
	return 0.36295603928292425716e-1 + (0.11089526167995268200e-2 + (0.67654845095518363577e-5 + (0.39184292949913591646e-7 + (0.21431552202133775150e-9 + (0.10994259106646731797e-11 + 0.52409949102222222221e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.21, 0.22).
*
* @param t   scaled value
* @return    result
*/
static double p21( const double t ) {
	return 0.38540888038840509795e-1 + (0.11364917134175420009e-2 + (0.70058230641246312003e-5 + (0.40943644083718586939e-7 + (0.22563034723692881631e-9 + (0.11642841011361992885e-11 + 0.55721092871111111110e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.22, 0.23).
*
* @param t   scaled value
* @return    result
*/
static double p22( const double t ) {
	return 0.40842225954785960651e-1 + (0.11650136437945673891e-2 + (0.72569945502343006619e-5 + (0.42796161861855042273e-7 + (0.23761401711005024162e-9 + (0.12332431172381557035e-11 + 0.59246802364444444445e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.23, 0.24).
*
* @param t   scaled value
* @return    result
*/
static double p23( const double t ) {
	return 0.43201627431540222422e-1 + (0.11945628793917272199e-2 + (0.75195743532849206263e-5 + (0.44747364553960993492e-7 + (0.25030885216472953674e-9 + (0.13065684400300476484e-11 + 0.63000532853333333334e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.24, 0.25).
*
* @param t   scaled value
* @return    result
*/
static double p24( const double t ) {
	return 0.45621193513810471438e-1 + (0.12251862608067529503e-2 + (0.77941720055551920319e-5 + (0.46803119830954460212e-7 + (0.26375990983978426273e-9 + (0.13845421370977119765e-11 + 0.66996477404444444445e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.25, 0.26).
*
* @param t   scaled value
* @return    result
*/
static double p25( const double t ) {
	return 0.48103121413299865517e-1 + (0.12569331386432195113e-2 + (0.80814333496367673980e-5 + (0.48969667335682018324e-7 + (0.27801515481905748484e-9 + (0.14674637611609884208e-11 + 0.71249589351111111110e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.26, 0.27).
*
* @param t   scaled value
* @return    result
*/
static double p26( const double t ) {
	return 0.50649709676983338501e-1 + (0.12898555233099055810e-2 + (0.83820428414568799654e-5 + (0.51253642652551838659e-7 + (0.29312563849675507232e-9 + (0.15556512782814827846e-11 + 0.75775607822222222221e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.27, 0.28).
*
* @param t   scaled value
* @return    result
*/
static double p27( const double t ) {
	return 0.53263363664388864181e-1 + (0.13240082443256975769e-2 + (0.86967260015007658418e-5 + (0.53662102750396795566e-7 + (0.30914568786634796807e-9 + (0.16494420240828493176e-11 + 0.80591079644444444445e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.28, 0.29).
*
* @param t   scaled value
* @return    result
*/
static double p28( const double t ) {
	return 0.55946601353500013794e-1 + (0.13594491197408190706e-2 + (0.90262520233016380987e-5 + (0.56202552975056695376e-7 + (0.32613310410503135996e-9 + (0.17491936862246367398e-11 + 0.85713381688888888890e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.29, 0.30).
*
* @param t   scaled value
* @return    result
*/
static double p29( const double t ) {
	return 0.58702059496154081813e-1 + (0.13962391363223647892e-2 + (0.93714365487312784270e-5 + (0.58882975670265286526e-7 + (0.34414937110591753387e-9 + (0.18552853109751857859e-11 + 0.91160736711111111110e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.30, 0.31).
*
* @param t   scaled value
* @return    result
*/
static double p30( const double t ) {
	return 0.61532500145144778048e-1 + (0.14344426411912015247e-2 + (0.97331446201016809696e-5 + (0.61711860507347175097e-7 + (0.36325987418295300221e-9 + (0.19681183310134518232e-11 + 0.96952238400000000000e-14 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.31, 0.32).
*
* @param t   scaled value
* @return    result
*/
static double p31( const double t ) {
	return 0.64440817576653297993e-1 + (0.14741275456383131151e-2 + (0.10112293819576437838e-4 + (0.64698236605933246196e-7 + (0.38353412915303665586e-9 + (0.20881176114385120186e-11 + 0.10310784480000000000e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.32, 0.33).
*
* @param t   scaled value
* @return    result
*/
static double p32( const double t ) {
	return 0.67430045633130393282e-1 + (0.15153655418916540370e-2 + (0.10509857606888328667e-4 + (0.67851706529363332855e-7 + (0.40504602194811140006e-9 + (0.22157325110542534469e-11 + 0.10964842115555555556e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.33, 0.34).
*
* @param t   scaled value
* @return    result
*/
static double p33( const double t ) {
	return 0.70503365513338850709e-1 + (0.15582323336495709827e-2 + (0.10926868866865231089e-4 + (0.71182482239613507542e-7 + (0.42787405890153386710e-9 + (0.23514379522274416437e-11 + 0.11659571751111111111e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.34, 0.35).
*
* @param t   scaled value
* @return    result
*/
static double p34( const double t ) {
	return 0.73664114037944596353e-1 + (0.16028078812438820413e-2 + (0.11364423678778207991e-4 + (0.74701423097423182009e-7 + (0.45210162777476488324e-9 + (0.24957355004088569134e-11 + 0.12397238257777777778e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.35, 0.36).
*
* @param t   scaled value
* @return    result
*/
static double p35( const double t ) {
	return 0.76915792420819562379e-1 + (0.16491766623447889354e-2 + (0.11823685320041302169e-4 + (0.78420075993781544386e-7 + (0.47781726956916478925e-9 + (0.26491544403815724749e-11 + 0.13180196462222222222e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.36, 0.37).
*
* @param t   scaled value
* @return    result
*/
static double p36( const double t ) {
	return 0.80262075578094612819e-1 + (0.16974279491709504117e-2 + (0.12305888517309891674e-4 + (0.82350717698979042290e-7 + (0.50511496109857113929e-9 + (0.28122528497626897696e-11 + 0.14010889635555555556e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.37, 0.38).
*
* @param t   scaled value
* @return    result
*/
static double p37( const double t ) {
	return 0.83706822008980357446e-1 + (0.17476561032212656962e-2 + (0.12812343958540763368e-4 + (0.86506399515036435592e-7 + (0.53409440823869467453e-9 + (0.29856186620887555043e-11 + 0.14891851591111111111e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.38, 0.39).
*
* @param t   scaled value
* @return    result
*/
static double p38( const double t ) {
	return 0.87254084284461718231e-1 + (0.17999608886001962327e-2 + (0.13344443080089492218e-4 + (0.90900994316429008631e-7 + (0.56486134972616465316e-9 + (0.31698707080033956934e-11 + 0.15825697795555555556e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.39, 0.40).
*
* @param t   scaled value
* @return    result
*/
static double p39( const double t ) {
	return 0.90908120182172748487e-1 + (0.18544478050657699758e-2 + (0.13903663143426120077e-4 + (0.95549246062549906177e-7 + (0.59752787125242054315e-9 + (0.33656597366099099413e-11 + 0.16815130613333333333e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.40, 0.41).
*
* @param t   scaled value
* @return    result
*/
static double p40( const double t ) {
	return 0.94673404508075481121e-1 + (0.19112284419887303347e-2 + (0.14491572616545004930e-4 + (0.10046682186333613697e-6 + (0.63221272959791000515e-9 + (0.35736693975589130818e-11 + 0.17862931591111111111e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.41, 0.42).
*
* @param t   scaled value
* @return    result
*/
static double p41( const double t ) {
	return 0.98554641648004456555e-1 + (0.19704208544725622126e-2 + (0.15109836875625443935e-4 + (0.10567036667675984067e-6 + (0.66904168640019354565e-9 + (0.37946171850824333014e-11 + 0.18971959040000000000e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.42, 0.43).
*
* @param t   scaled value
* @return    result
*/
static double p42( const double t ) {
	return 0.10255677889470089531e0 + (0.20321499629472857418e-2 + (0.15760224242962179564e-4 + (0.11117756071353507391e-6 + (0.70814785110097658502e-9 + (0.40292553276632563925e-11 + 0.20145143075555555556e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.43, 0.44).
*
* @param t   scaled value
* @return    result
*/
static double p43( const double t ) {
	return 0.10668502059865093318e0 + (0.20965479776148731610e-2 + (0.16444612377624983565e-4 + (0.11700717962026152749e-6 + (0.74967203250938418991e-9 + (0.42783716186085922176e-11 + 0.21385479360000000000e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.44, 0.45).
*
* @param t   scaled value
* @return    result
*/
static double p44( const double t ) {
	return 0.11094484319386444474e0 + (0.21637548491908170841e-2 + (0.17164995035719657111e-4 + (0.12317915750735938089e-6 + (0.79376309831499633734e-9 + (0.45427901763106353914e-11 + 0.22696025653333333333e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.45, 0.46).
*
* @param t   scaled value
* @return    result
*/
static double p45( const double t ) {
	return 0.11534201115268804714e0 + (0.22339187474546420375e-2 + (0.17923489217504226813e-4 + (0.12971465288245997681e-6 + (0.84057834180389073587e-9 + (0.48233721206418027227e-11 + 0.24079890062222222222e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.46, 0.47).
*
* @param t   scaled value
* @return    result
*/
static double p46( const double t ) {
	return 0.11988259392684094740e0 + (0.23071965691918689601e-2 + (0.18722342718958935446e-4 + (0.13663611754337957520e-6 + (0.89028385488493287005e-9 + (0.51210161569225846701e-11 + 0.25540227111111111111e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.47, 0.48).
*
* @param t   scaled value
* @return    result
*/
static double p47( const double t ) {
	return 0.12457298393509812907e0 + (0.23837544771809575380e-2 + (0.19563942105711612475e-4 + (0.14396736847739470782e-6 + (0.94305490646459247016e-9 + (0.54366590583134218096e-11 + 0.27080225920000000000e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.48, 0.49).
*
* @param t   scaled value
* @return    result
*/
static double p48( const double t ) {
	return 0.12941991566142438816e0 + (0.24637684719508859484e-2 + (0.20450821127475879816e-4 + (0.15173366280523906622e-6 + (0.99907632506389027739e-9 + (0.57712760311351625221e-11 + 0.28703099555555555556e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.49, 0.50).
*
* @param t   scaled value
* @return    result
*/
static double p49( const double t ) {
	return 0.13443048593088696613e0 + (0.25474249981080823877e-2 + (0.21385669591362915223e-4 + (0.15996177579900443030e-6 + (0.10585428844575134013e-8 + (0.61258809536787882989e-11 + 0.30412080142222222222e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.50, 0.51).
*
* @param t   scaled value
* @return    result
*/
static double p50( const double t ) {
	return 0.13961217543434561353e0 + (0.26349215871051761416e-2 + (0.22371342712572567744e-4 + (0.16868008199296822247e-6 + (0.11216596910444996246e-8 + (0.65015264753090890662e-11 + 0.32210394506666666666e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.51, 0.52).
*
* @param t   scaled value
* @return    result
*/
static double p51( const double t ) {
	return 0.14497287157673800690e0 + (0.27264675383982439814e-2 + (0.23410870961050950197e-4 + (0.17791863939526376477e-6 + (0.11886425714330958106e-8 + (0.68993039665054288034e-11 + 0.34101266222222222221e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.52, 0.53).
*
* @param t   scaled value
* @return    result
*/
static double p52( const double t ) {
	return 0.15052089272774618151e0 + (0.28222846410136238008e-2 + (0.24507470422713397006e-4 + (0.18770927679626136909e-6 + (0.12597184587583370712e-8 + (0.73203433049229821618e-11 + 0.36087889048888888890e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.53, 0.54).
*
* @param t   scaled value
* @return    result
*/
static double p53( const double t ) {
	return 0.15626501395774612325e0 + (0.29226079376196624949e-2 + (0.25664553693768450545e-4 + (0.19808568415654461964e-6 + (0.13351257759815557897e-8 + (0.77658124891046760667e-11 + 0.38173420035555555555e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.54, 0.55).
*
* @param t   scaled value
* @return    result
*/
static double p54( const double t ) {
	return 0.16221449434620737567e0 + (0.30276865332726475672e-2 + (0.26885741326534564336e-4 + (0.20908350604346384143e-6 + (0.14151148144240728728e-8 + (0.82369170665974313027e-11 + 0.40360957457777777779e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.55, 0.56).
*
* @param t   scaled value
* @return    result
*/
static double p55( const double t ) {
	return 0.16837910595412130659e0 + (0.31377844510793082301e-2 + (0.28174873844911175026e-4 + (0.22074043807045782387e-6 + (0.14999481055996090039e-8 + (0.87348993661930809254e-11 + 0.42653528977777777779e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.56, 0.57).
*
* @param t   scaled value
* @return    result
*/
static double p56( const double t ) {
	return 0.17476916455659369953e0 + (0.32531815370903068316e-2 + (0.29536024347344364074e-4 + (0.23309632627767074202e-6 + (0.15899007843582444846e-8 + (0.92610375235427359475e-11 + 0.45054073102222222221e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.57, 0.58).
*
* @param t   scaled value
* @return    result
*/
static double p57( const double t ) {
	return 0.18139556223643701364e0 + (0.33741744168096996041e-2 + (0.30973511714709500836e-4 + (0.24619326937592290996e-6 + (0.16852609412267750744e-8 + (0.98166442942854895573e-11 + 0.47565418097777777779e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.58, 0.59).
*
* @param t   scaled value
* @return    result
*/
static double p58( const double t ) {
	return 0.18826980194443664549e0 + (0.35010775057740317997e-2 + (0.32491914440014267480e-4 + (0.26007572375886319028e-6 + (0.17863299617388376116e-8 + (0.10403065638343878679e-10 + 0.50190265831111111110e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.59, 0.60).
*
* @param t   scaled value
* @return    result
*/
static double p59( const double t ) {
	return 0.19540403413693967350e0 + (0.36342240767211326315e-2 + (0.34096085096200907289e-4 + (0.27479061117017637474e-6 + (0.18934228504790032826e-8 + (0.11021679075323598664e-10 + 0.52931171733333333334e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.60, 0.61).
*
* @param t   scaled value
* @return    result
*/
static double p60( const double t ) {
	return 0.20281109560651886959e0 + (0.37739673859323597060e-2 + (0.35791165457592409054e-4 + (0.29038742889416172404e-6 + (0.20068685374849001770e-8 + (0.11673891799578381999e-10 + 0.55790523093333333334e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.61, 0.62).
*
* @param t   scaled value
* @return    result
*/
static double p61( const double t ) {
	return 0.21050455062669334978e0 + (0.39206818613925652425e-2 + (0.37582602289680101704e-4 + (0.30691836231886877385e-6 + (0.21270101645763677824e-8 + (0.12361138551062899455e-10 + 0.58770520160000000000e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.62, 0.63).
*
* @param t   scaled value
* @return    result
*/
static double p62( const double t ) {
	return 0.21849873453703332479e0 + (0.40747643554689586041e-2 + (0.39476163820986711501e-4 + (0.32443839970139918836e-6 + (0.22542053491518680200e-8 + (0.13084879235290858490e-10 + 0.61873153262222222221e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.63, 0.64).
*
* @param t   scaled value
* @return    result
*/
static double p63( const double t ) {
	return 0.22680879990043229327e0 + (0.42366354648628516935e-2 + (0.41477956909656896779e-4 + (0.34300544894502810002e-6 + (0.23888264229264067658e-8 + (0.13846596292818514601e-10 + 0.65100183751111111110e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.64, 0.65).
*
* @param t   scaled value
* @return    result
*/
static double p64( const double t ) {
	return 0.23545076536988703937e0 + (0.44067409206365170888e-2 + (0.43594444916224700881e-4 + (0.36268045617760415178e-6 + (0.25312606430853202748e-8 + (0.14647791812837903061e-10 + 0.68453122631111111110e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.65, 0.66).
*
* @param t   scaled value
* @return    result
*/
static double p65( const double t ) {
	return 0.24444156740777432838e0 + (0.45855530511605787178e-2 + (0.45832466292683085475e-4 + (0.38352752590033030472e-6 + (0.26819103733055603460e-8 + (0.15489984390884756993e-10 + 0.71933206364444444445e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.66, 0.67).
*
* @param t   scaled value
* @return    result
*/
static double p66( const double t ) {
	return 0.25379911500634264643e0 + (0.47735723208650032167e-2 + (0.48199253896534185372e-4 + (0.40561404245564732314e-6 + (0.28411932320871165585e-8 + (0.16374705736458320149e-10 + 0.75541379822222222221e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.67, 0.68).
*
* @param t   scaled value
* @return    result
*/
static double p67( const double t ) {
	return 0.26354234756393613032e0 + (0.49713289477083781266e-2 + (0.50702455036930367504e-4 + (0.42901079254268185722e-6 + (0.30095422058900481753e-8 + (0.17303497025347342498e-10 + 0.79278273368888888890e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.68, 0.69).
*
* @param t   scaled value
* @return    result
*/
static double p68( const double t ) {
	return 0.27369129607732343398e0 + (0.51793846023052643767e-2 + (0.53350152258326602629e-4 + (0.45379208848865015485e-6 + (0.31874057245814381257e-8 + (0.18277905010245111046e-10 + 0.83144182364444444445e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.69, 0.70).
*
* @param t   scaled value
* @return    result
*/
static double p69( const double t ) {
	return 0.28426714781640316172e0 + (0.53983341916695141966e-2 + (0.56150884865255810638e-4 + (0.48003589196494734238e-6 + (0.33752476967570796349e-8 + (0.19299477888083469086e-10 + 0.87139049137777777779e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.70, 0.71).
*
* @param t   scaled value
* @return    result
*/
static double p70( const double t ) {
	return 0.29529231465348519920e0 + (0.56288077305420795663e-2 + (0.59113671189913307427e-4 + (0.50782393781744840482e-6 + (0.35735475025851713168e-8 + (0.20369760937017070382e-10 + 0.91262442613333333334e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.71, 0.72).
*
* @param t   scaled value
* @return    result
*/
static double p71( const double t ) {
	return 0.30679050522528838613e0 + (0.58714723032745403331e-2 + (0.62248031602197686791e-4 + (0.53724185766200945789e-6 + (0.37827999418960232678e-8 + (0.21490291930444538307e-10 + 0.95513539182222222221e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.72, 0.73).
*
* @param t   scaled value
* @return    result
*/
static double p72( const double t ) {
	return 0.31878680111173319425e0 + (0.61270341192339103514e-2 + (0.65564012259707640976e-4 + (0.56837930287837738996e-6 + (0.40035151353392378882e-8 + (0.22662596341239294792e-10 + 0.99891109760000000000e-13 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.73, 0.74).
*
* @param t   scaled value
* @return    result
*/
static double p73( const double t ) {
	return 0.33130773722152622027e0 + (0.63962406646798080903e-2 + (0.69072209592942396666e-4 + (0.60133006661885941812e-6 + (0.42362183765883466691e-8 + (0.23888182347073698382e-10 + 0.10439349811555555556e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.74, 0.75).
*
* @param t   scaled value
* @return    result
*/
static double p74( const double t ) {
	return 0.34438138658041336523e0 + (0.66798829540414007258e-2 + (0.72783795518603561144e-4 + (0.63619220443228800680e-6 + (0.44814499336514453364e-8 + (0.25168535651285475274e-10 + 0.10901861383111111111e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.75, 0.76).
*
* @param t   scaled value
* @return    result
*/
static double p75( const double t ) {
	return 0.35803744972380175583e0 + (0.69787978834882685031e-2 + (0.76710543371454822497e-4 + (0.67306815308917386747e-6 + (0.47397647975845228205e-8 + (0.26505114141143050509e-10 + 0.11376390933333333333e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.76, 0.77).
*
* @param t   scaled value
* @return    result
*/
static double p76( const double t ) {
	return 0.37230734890119724188e0 + (0.72938706896461381003e-2 + (0.80864854542670714092e-4 + (0.71206484718062688779e-6 + (0.50117323769745883805e-8 + (0.27899342394100074165e-10 + 0.11862637614222222222e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.77, 0.78).
*
* @param t   scaled value
* @return    result
*/
static double p77( const double t ) {
	return 0.38722432730555448223e0 + (0.76260375162549802745e-2 + (0.85259785810004603848e-4 + (0.75329383305171327677e-6 + (0.52979361368388119355e-8 + (0.29352606054164086709e-10 + 0.12360253370666666667e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.78, 0.79).
*
* @param t   scaled value
* @return    result
*/
static double p78( const double t ) {
	return 0.40282355354616940667e0 + (0.79762880915029728079e-2 + (0.89909077342438246452e-4 + (0.79687137961956194579e-6 + (0.55989731807360403195e-8 + (0.30866246101464869050e-10 + 0.12868841946666666667e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.79, 0.80).
*
* @param t   scaled value
* @return    result
*/
static double p79( const double t ) {
	return 0.41914223158913787649e0 + (0.83456685186950463538e-2 + (0.94827181359250161335e-4 + (0.84291858561783141014e-6 + (0.59154537751083485684e-8 + (0.32441553034347469291e-10 + 0.13387957943111111111e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.80, 0.81).
*
* @param t   scaled value
* @return    result
*/
static double p80( const double t ) {
	return 0.43621971639463786896e0 + (0.87352841828289495773e-2 + (0.10002929142066799966e-3 + (0.89156148280219880024e-6 + (0.62480008150788597147e-8 + (0.34079760983458878910e-10 + 0.13917107176888888889e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.81, 0.82).
*
* @param t   scaled value
* @return    result
*/
static double p81( const double t ) {
	return 0.45409763548534330981e0 + (0.91463027755548240654e-2 + (0.10553137232446167258e-3 + (0.94293113464638623798e-6 + (0.65972492312219959885e-8 + (0.35782041795476563662e-10 + 0.14455745872000000000e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.82, 0.83).
*
* @param t   scaled value
* @return    result
*/
static double p82( const double t ) {
	return 0.47282001668512331468e0 + (0.95799574408860463394e-2 + (0.11135019058000067469e-3 + (0.99716373005509038080e-6 + (0.69638453369956970347e-8 + (0.37549499088161345850e-10 + 0.15003280712888888889e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.83, 0.84).
*
* @param t   scaled value
* @return    result
*/
static double p83( const double t ) {
	return 0.49243342227179841649e0 + (0.10037550043909497071e-1 + (0.11750334542845234952e-3 + (0.10544006716188967172e-5 + (0.73484461168242224872e-8 + (0.39383162326435752965e-10 + 0.15559069118222222222e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.84, 0.85).
*
* @param t   scaled value
* @return    result
*/
static double p84( const double t ) {
	return 0.51298708979209258326e0 + (0.10520454564612427224e-1 + (0.12400930037494996655e-3 + (0.11147886579371265246e-5 + (0.77517184550568711454e-8 + (0.41283980931872622611e-10 + 0.16122419680000000000e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.85, 0.86).
*
* @param t   scaled value
* @return    result
*/
static double p85( const double t ) {
	return 0.53453307979101369843e0 + (0.11030120618800726938e-1 + (0.13088741519572269581e-3 + (0.11784797595374515432e-5 + (0.81743383063044825400e-8 + (0.43252818449517081051e-10 + 0.16692592640000000000e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.86, 0.87).
*
* @param t   scaled value
* @return    result
*/
static double p86( const double t ) {
	return 0.55712643071169299478e0 + (0.11568077107929735233e-1 + (0.13815797838036651289e-3 + (0.12456314879260904558e-5 + (0.86169898078969313597e-8 + (0.45290446811539652525e-10 + 0.17268801084444444444e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.87, 0.88).
*
* @param t   scaled value
* @return    result
*/
static double p87( const double t ) {
	return 0.58082532122519320968e0 + (0.12135935999503877077e-1 + (0.14584223996665838559e-3 + (0.13164068573095710742e-5 + (0.90803643355106020163e-8 + (0.47397540713124619155e-10 + 0.17850211608888888889e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.88, 0.89).
*
* @param t   scaled value
* @return    result
*/
static double p88( const double t ) {
	return 0.60569124025293375554e0 + (0.12735396239525550361e-1 + (0.15396244472258863344e-3 + (0.13909744385382818253e-5 + (0.95651595032306228245e-8 + (0.49574672127669041550e-10 + 0.18435945564444444444e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.89, 0.90).
*
* @param t   scaled value
* @return    result
*/
static double p89( const double t ) {
	return 0.63178916494715716894e0 + (0.13368247798287030927e-1 + (0.16254186562762076141e-3 + (0.14695084048334056083e-5 + (0.10072078109604152350e-7 + (0.51822304995680707483e-10 + 0.19025081422222222222e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.90, 0.91).
*
* @param t   scaled value
* @return    result
*/
static double p90( const double t ) {
	return 0.65918774689725319200e0 + (0.14036375850601992063e-1 + (0.17160483760259706354e-3 + (0.15521885688723188371e-5 + (0.10601827031535280590e-7 + (0.54140790105837520499e-10 + 0.19616655146666666667e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.91, 0.92).
*
* @param t   scaled value
* @return    result
*/
static double p91( const double t ) {
	return 0.68795950683174433822e0 + (0.14741765091365869084e-1 + (0.18117679143520433835e-3 + (0.16392004108230585213e-5 + (0.11155116068018043001e-7 + (0.56530360194925690374e-10 + 0.20209663662222222222e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.92, 0.93).
*
* @param t   scaled value
* @return    result
*/
static double p92( const double t ) {
	return 0.71818103808729967036e0 + (0.15486504187117112279e-1 + (0.19128428784550923217e-3 + (0.17307350969359975848e-5 + (0.11732656736113607751e-7 + (0.58991125287563833603e-10 + 0.20803065333333333333e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.93, 0.94).
*
* @param t   scaled value
* @return    result
*/
static double p93( const double t ) {
	return 0.74993321911726254661e0 + (0.16272790364044783382e-1 + (0.20195505163377912645e-3 + (0.18269894883203346953e-5 + (0.12335161021630225535e-7 + (0.61523068312169087227e-10 + 0.21395783431111111111e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.94, 0.95).
*
* @param t   scaled value
* @return    result
*/
static double p94( const double t ) {
	return 0.78330143531283492729e0 + (0.17102934132652429240e-1 + (0.21321800585063327041e-3 + (0.19281661395543913713e-5 + (0.12963340087354341574e-7 + (0.64126040998066348872e-10 + 0.21986708942222222222e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.95, 0.96).
*
* @param t   scaled value
* @return    result
*/
static double p95( const double t ) {
	return 0.81837581041023811832e0 + (0.17979364149044223802e-1 + (0.22510330592753129006e-3 + (0.20344732868018175389e-5 + (0.13617902941839949718e-7 + (0.66799760083972474642e-10 + 0.22574701262222222222e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.96, 0.97).
*
* @param t   scaled value
* @return    result
*/
static double p96( const double t ) {
	return 0.85525144775685126237e0 + (0.18904632212547561026e-1 + (0.23764237370371255638e-3 + (0.21461248251306387979e-5 + (0.14299555071870523786e-7 + (0.69543803864694171934e-10 + 0.23158593688888888889e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.97, 0.98).
*
* @param t   scaled value
* @return    result
*/
static double p97( const double t ) {
	return 0.89402868170849933734e0 + (0.19881418399127202569e-1 + (0.25086793128395995798e-3 + (0.22633402747585233180e-5 + (0.15008997042116532283e-7 + (0.72357609075043941261e-10 + 0.23737194737777777778e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.98, 0.99).
*
* @param t   scaled value
* @return    result
*/
static double p98( const double t ) {
	return 0.93481333942870796363e0 + (0.20912536329780368893e-1 + (0.26481403465998477969e-3 + (0.23863447359754921676e-5 + (0.15746923065472184451e-7 + (0.75240468141720143653e-10 + 0.24309291271111111111e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for \[0.99, 1.00).
*
* @param t   scaled value
* @return    result
*/
static double p99( const double t ) {
	return 0.97771701335885035464e0 + (0.22000938572830479551e-1 + (0.27951610702682383001e-3 + (0.25153688325245314530e-5 + (0.16514019547822821453e-7 + (0.78191526829368231251e-10 + 0.24873652355555555556e-12 * t) * t) * t) * t) * t) * t;
}

/**
* Chebyshev polynomial for `1.0`.
*
* @param t   scaled value
* @return    result
*/
static double p100() {
	// We only get here if y = 1; i.e., |x| < 4*eps, in which case `erfcx` is within `1e-15` of 1...
	return 1.0;
}


static double (* const table[])(const double) = {
	p0, p1, p2, p3, p4, p5, p6, p7, p8, p9,
	p10, p11, p12, p13, p14, p15, p16, p17, p18, p19,
	p20, p21, p22, p23, p24, p25, p26, p27, p28, p29,
	p30, p31, p32, p33, p34, p35, p36, p37, p38, p39,
	p40, p41, p42, p43, p44, p45, p46, p47, p48, p49,
	p50, p51, p52, p53, p54, p55, p56, p57, p58, p59,
	p60, p61, p62, p63, p64, p65, p66, p67, p68, p69,
	p70, p71, p72, p73, p74, p75, p76, p77, p78, p79,
	p80, p81, p82, p83, p84, p85, p86, p87, p88, p89,
	p90, p91, p92, p93, p94, p95, p96, p97, p98, p99,
	p100
};

/**
* Given `y100 = 100*y`, where `y = 4/(4+x)` for `x >= 0`, compute `erfc(x)`.
*
* ## Notes
*
* -   Uses a look-up table of 100 different Chebyshev polynomials or y intervals \[0,0.01\], \[0.01,0.02\], ..., \[0.99,1\], generated with the help of Maple and a little shell script.
* -   This allows the Chebyshev polynomials to be of significantly lower degree (about 1/4) compared to fitting the whole \[0,1\] interval with a single polynomial.
*
* @param y100    scaled argument
* @return        complementary error function
*/
static double erfcxY100( const double y100 ) {
	double t;
	double(*f)(const double);

	t = stdlib_base_floor( y100 );
	f = table[ (int)t ];
	return f( 2 * y100 - ( ( 2 * t ) + 1 )  );
}

/**
* Evaluates the scaled complementary error function.
*
* ```tex
* \operatorname{erfcx}(x) = \exp{x^2} \cdot \operatorname{erfc}(x)
* ```
*
* ## Notes
*
* -   Use this function to replace expressions containing `exp{x^2} erfc(x)` in order to avoid errors due to underflow or overflow.
* -   For expressions of the form `\exp{-x^2} erfcx(x)`, use the complementary error function `erfc(x)` instead, as this substitution maintains accuracy by avoiding roundoff errors for large values of `x`.
*
* @param x    input value
* @return     evaluated scaled complementary error function
*
* @example
* double y = stdlib_base_erfcx( 0.0 );
* // returns 1.0
*
* @example
* double y = stdlib_base_erfcx( 1.0 );
* // returns ~0.4276
*
* @example
* double y = stdlib_base_erfcx( -1.0 );
* // returns ~5.01
*
* @example
* double y = stdlib_base_erfcx( 50.0 );
* // returns ~0.011
*
* @example
* double y = stdlib_base_erfcx( -50.0 );
* // returns +Infinity
*/
double stdlib_base_erfcx( const double x ) {
	double x2;

	if( stdlib_base_is_nan( x ) ) {
		return x;
	}
	if ( x >= 0.0 ) {
		if ( x > 50.0 ) { // continued-fraction expansion is faster
			if ( x > 5.0e7 ) { // 1-term expansion, important to avoid overflow
				return INV_SQRT_PI / x;
			}
			x2 = x * x;

			// 5-term expansion (rely on compiler for CSE), simplified from: INV_SQRT_PI / (x+0.5/(x+1/(x+1.5/(x+2/x))))
			return INV_SQRT_PI * ( ( x2 * ( x2 + 4.5 ) ) + 2.0 ) / ( x * ( ( x2 * ( x2 + 5.0 ) ) + 3.75 ) );
		}
		return erfcxY100( 400.0 / ( 4.0 + x ) );
	}
	if ( x < -26.7 ) {
		return STDLIB_CONSTANT_FLOAT64_PINF;
	}
	x2 = x * x;
	if ( x < -6.1 ) {
		return 2.0 * stdlib_base_exp( x2 );
	}
	return ( 2.0 * stdlib_base_exp( x2 ) ) - erfcxY100( 400.0 / ( 4.0 - x ) );
}
