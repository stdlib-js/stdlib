// To run this script, `cd` to the `./test/fixtures` directory and then execute in the terminal `runWandbox --file --compiler gcc-head --output output.json ./runner.cpp`.

#include <random>
#include <algorithm>
#include <iterator>
#include <vector>
#include <iostream>
#include <boost/math/special_functions/gamma.hpp>

using namespace std;

vector<double> linspace( double start, double end, int num ) {
	double delta = (end - start) / (num - 1);
	vector<double> arr( num - 1 );
	for ( int i = 0; i < num - 1; ++i ){
		arr[ i ] = start + delta * i;
	}
	arr.push_back( end );
	return arr;
}

void print_vector( vector<double> vec, bool last = false ) {
	cout << "[";
	for ( vector<double>::iterator it = vec.begin(); it != vec.end(); ++it ) {
		if ( vec.end() != it+1 ) {
			cout << setprecision (16) << *it;
			cout << ",";
		} else {
			cout << setprecision (16) << *it;
			cout << "]";
			if ( last == false ) {
				cout << ",";
			}
		}
	}
	return;
}

void print_results(
	vector<double> x,
	vector<double> s,
	vector<double> lower_regularized,
	vector<double> upper_regularized,
	vector<double> lower_unregularized,
	vector<double> upper_unregularized
) {
	cout << "{" << endl;
	cout << "  \"x\": ";
	print_vector( x );
	cout << "  \"s\": ";
	print_vector( s );
	cout << "  \"lower_regularized\": ";
	print_vector( lower_regularized );
	cout << "  \"upper_regularized\": ";
	print_vector( upper_regularized );
	cout << "  \"lower_unregularized\": ";
	print_vector( lower_unregularized );
	cout << "  \"upper_unregularized\": ";
	print_vector( upper_unregularized, true );
	cout << "}" << endl;
	return;
}

int main() {
	random_device rd;
	mt19937 g(rd());

	vector<double> x = linspace( 1.0, 40.0, 100 );
	shuffle( x.begin(), x.end(), g );
	vector<double> s = linspace( 1.0, 40.0, 100 );
	shuffle( s.begin(), s.end(), g );
	vector<double> lower_regularized;
	vector<double> upper_regularized;
	vector<double> lower_unregularized;
	vector<double> upper_unregularized;

	for ( int i = 0; i < 100; i++  ) {
		double arg1 = s[ i ];
		double arg2 = x[ i ];
		lower_regularized.push_back( boost::math::gamma_p( arg1, arg2 ) );
		upper_regularized.push_back( boost::math::gamma_q( arg1, arg2 ) );
		lower_unregularized.push_back( boost::math::tgamma_lower( arg1, arg2 ) );
		upper_unregularized.push_back( boost::math::tgamma( arg1, arg2 ) );
	}

	print_results( x, s, lower_regularized, upper_regularized, lower_unregularized, upper_unregularized );
	return 0;
}
