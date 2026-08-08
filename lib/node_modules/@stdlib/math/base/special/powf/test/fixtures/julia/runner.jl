#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2025 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import JSON

"""
	gen( x, y, name )

Generate fixture data and write to file.

# Arguments

* `x`: base domain
* `y`: exponent domain
* `name::AbstractString`: output filename

# Examples

``` julia
julia> x = range( -1000, stop = 1000, length = 2001 );
julia> y = range( 0, stop = 1000, length = 1001 );
julia> gen( x, y, \"data.json\" );
```
"""
function gen( x, y, name )
	z = Array{Float32}( undef, length(x) );
	for i in eachindex(x)
		z[ i ] = x[i]^y[i];
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("x", x),
		("y", y),
		("expected", z)
	]);

	# Based on the script directory, create an output filepath:
	filepath = joinpath( dir, name );

	# Write the data to the output filepath as JSON:
	outfile = open( filepath, "w" );
	write( outfile, JSON.json(data) );
	write( outfile, "\n" );
	close( outfile );
end

# Get the filename:
file = @__FILE__;

# Extract the directory in which this file resides:
dir = dirname( file );

# Squares (x small):
x = Float32.( range( -1000, stop = 1000, length = 2001 ) );
y = zeros( 2001 );
y[:] .= 2.0f0;
gen( x, y, "squared_small.json" );

# Squares (x large):
x = Float32.( range( 3.14e8, stop = 3.14e18, length = 2001 ) );
y = zeros( 2001 );
y[:] .= 2.0f0;
gen( x, y, "squared_large.json" );

# Cubes (x small):
x = Float32.( range( -1000, stop = 1000, length = 2001 ) );
y = zeros( 2001 );
y[:] .= 3.0f0;
gen( x, y, "cubed_small.json" );

# Cubes (x large):
x = Float32.( range( -9.99e6, stop = -4.641588833612779e12, length = 2001 ) );
y = zeros( 2001 );
y[:] .= 3.0f0;
gen( x, y, "cubed_large.json" );

# To the 4th power (x small):
x = Float32.( range( -1000, stop = 1000, length = 2001 ) );
y = zeros( 2001 );
y[:] .= 4.0f0;
gen( x, y, "to_the_fourth_small.json" );

# To the 4th power (x large):
x = Float32.( range( 1.234e4, stop = 3.14e9, length = 2001 ) );
y = zeros( 2001 );
y[:] .= 4.0f0;
gen( x, y, "to_the_fourth_large.json" );

# Base near unity (y small):
x = Float32.( range( 0.9999990463256836, stop = 1.0000009536743164, length = 500 ) );
y = Float32.( range( -10, stop = 10, length = 500 ) );
gen( x, y, "base_near_unity_small.json" );

# Base near unity (y large):
x = Float32.( range( 0.9999990463256836, stop = 1.0000009536743164, length = 500 ) );
y = Float32.( range( 100, stop = 709, length = 500 ) );
gen( x, y, "base_near_unity_large.json" );

# Base near unity (y huge):
x = Float32.( range( 0.9999999999990463256836, stop = 1.0000000000009536743164, length = 500 ) );
y = Float32.( range( 1.8446744073709552e13, stop = 4.294967296e13, length = 500 ) );
gen( x, y, "base_near_unity_huge.json" );

# Subnormal results:
z = Float32.( range( 3.14e-39, stop = 3.14e-44, length = 2001 ) );
x = Float32.( range( 3.14e-41, stop = 3.14e-45, length = 2001 ) );
y = log.(z) ./ log.(x);
gen( x, y, "subnormal_results.json" );

# Negative exponents (x small, y small):
x = Float32.( range( 0, stop = 10, length = 5001 ) );
y = Float32.( rand( 5001 ) .* -100 );
gen( x, y, "negative_exp_small_small.json" );

# Negative exponents (x large, y small):
x = Float32.( range( 1e5, stop = 1e8, length = 5001 ) );
y = Float32.( rand( 5001 ) .* -10 );
gen( x, y, "negative_exp_large_small.json" );

# Negative exponents (x small, y large):
x = Float32.( range( 0, stop = 10, length = 5001 ) );
y = Float32.( rand( 5001 ) .* -(2.0^20) );
gen( x, y, "negative_exp_small_large.json" );

# Negative exponents (x large, y large):
x = Float32.( range( 1e20, stop = 1e30, length = 5001 ) );
y = Float32.( rand( 5001 ) .* -(2.0^20) );
gen( x, y, "negative_exp_large_large.json" );

# x small, y small:
x = Float32.( rand( 5001 ) .* 100 );
y = Float32.( rand( 5001 ) .* 100 );
gen( x, y, "small_small.json" );

# x small, y large:
x = Float32.( rand( 5001 ) .* 1.9988548118735103 );
y = Float32.( rand( 5001 ) .* 2.0^10 );
gen( x, y, "small_large.json" );

# x large, y small:
x = Float32.( rand( 5001 ) .* 5e10 );
y = Float32.( rand( 5001 ) .* 10 );
gen( x, y, "large_small.json" );

# Random (x decimal, y decimal):
x = Float32.( rand( 5001 ) .* 500 );
y = Float32.( rand( 5001 ) .* 100 );
gen( x, y, "decimal_decimal.json" );

# Random (x decimal, y integer):
x = Float32.( rand( 5001 ) .* 500 );
y = round.( rand(5001) .* 100 );
gen( x, y, "decimal_integer.json" );

# Random (x integer, y decimal):
x = round.( rand(5001) .* 500 );
y = Float32.( rand( 5001 ) .* 100 );
gen( x, y, "integer_decimal.json" );

# Random (x integer, y integer):
x = round.( rand(5001) .* 500 );
y = round.( rand(5001) .* 100 );
gen( x, y, "integer_integer.json" );
