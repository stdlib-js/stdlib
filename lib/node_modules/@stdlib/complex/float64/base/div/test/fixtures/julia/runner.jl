#!/usr/bin/env julia
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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
	gen( re1, im1, re2, im2, name )

Generate fixture data and write to file.

# Arguments

* `re1`: real components for first complex number
* `im1`: imaginary components for first complex number
* `re2`: real components for second complex number
* `im2`: imaginary components for second complex number
* `name::AbstractString`: output filename

# Examples

``` julia
julia> re1 = rand( 1000 );
julia> im1 = rand( 1000 );
julia> re2 = rand( 1000 );
julia> im2 = rand( 1000 );
julia> gen( re1, im1, re2, im2, \"data.json\" );
```
"""
function gen( re1, im1, re2, im2, name )
	zre = Array{Float64}( undef, length(re1) );
	zim = Array{Float64}( undef, length(re1) );
	for i in eachindex(re1)
		z = Complex{Float64}( re1[i], im1[i] ) / Complex{Float64}( re2[i], im2[i] );
		zre[ i ] = real( z );
		zim[ i ] = imag( z );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("re1", re1),
		("im1", im1),
		("re2", re2),
		("im2", im2),
		("qre", zre),
		("qim", zim),
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

# Large positive real components:
re1 = rand( 500 ) .* 1.0e300;
re2 = rand( 500 ) .* 1.0e300;
im1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re1, re2, im1, im2, "large_positive_real_components.json" );

# Large negative real components:
re1 = -rand( 500 ) .* 1.0e300;
re2 = -rand( 500 ) .* 1.0e300;
im1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re1, im1, re2,  im2, "large_negative_real_components.json" );

# Large positive imaginary components:
re1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
re2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im1 = rand( 500 ) .* 1.0e300;
im2 = rand( 500 ) .* 1.0e300;
gen( re1, im1, re2, im2, "large_positive_imaginary_components.json" );

# Large negative imaginary components:
re1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
re2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im1 = -rand( 500 ) .* 1.0e300;
im2 = -rand( 500 ) .* 1.0e300;
gen( re1, im1, re2, im2, "large_negative_imaginary_components.json" );

# Tiny positive real components:
re1 = rand( 500 ) .* 1.0e-324;
re2 = rand( 500 ) .* 1.0e-324;
im1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re1, im1, re2, im2, "tiny_positive_real_components.json" );

# Tiny negative real components:
re1 = -rand( 500 ) .* 1.0e-324;
re2 = -rand( 500 ) .* 1.0e-324;
im1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re1, im1, re2, im2, "tiny_negative_real_components.json" );

# Tiny positive imaginary components:
re1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
re2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im1 = rand( 500 ) .* 1.0e-324;
im2 = rand( 500 ) .* 1.0e-324;
gen( re1, im1, re2, im2, "tiny_positive_imaginary_components.json" );

# Tiny negative imaginary components:
re1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
re2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im1 = -rand( 500 ) .* 1.0e-324;
im2 = -rand( 500 ) .* 1.0e-324;
gen( re1, im1, re2, im2, "tiny_negative_imaginary_components.json" );

# Real components different scales:
re1 = rand( 500 ) .* 1.0e200;
re2 = rand( 500 ) .* 1.0e-100;
im1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re1, im1, re2, im2, "real_component_scales.json" );

# Imaginary components different scales:
re1 = ( rand( 500 ) .* 20.0 ) .- 10.0;
re2 = ( rand( 500 ) .* 20.0 ) .- 10.0;
im1 = rand( 500 ) .* 1.0e200;
im2 = rand( 500 ) .* 1.0e-100;
gen( re1, im1, re2, im2, "imaginary_component_scales.json" );

# Components different scales:
re1 = rand( 500 ) .* 1.0e200;
re2 = rand( 500 ) .* 1.0e200;
im1 = ( rand( 500 ) .* 1.0e-200 ) .- 0.5e-200;
im2 = ( rand( 500 ) .* 1.0e-200 ) .- 0.5e-200;
gen( re1, im1, re2, im2, "component_scales1.json" );

# Components different scales:
re1 = ( rand( 500 ) .* 1.0e-200 ) .- 0.5e-200;
re2 = ( rand( 500 ) .* 1.0e-200 ) .- 0.5e-200;
im1 = rand( 500 ) .* 1.0e200;
im2 = rand( 500 ) .* 1.0e200;
gen( re1, im1, re2, im2, "component_scales2.json" );

# Normal:
re1 = ( rand( 500 ) .* 100.0 ) .- 50.0;
re2 = ( rand( 500 ) .* 100.0 ) .- 50.0;
im1 = ( rand( 500 ) .* 100.0 ) .- 50.0;
im2 = ( rand( 500 ) .* 100.0 ) .- 50.0;
gen( re1, im1, re2, im2, "data.json" );
