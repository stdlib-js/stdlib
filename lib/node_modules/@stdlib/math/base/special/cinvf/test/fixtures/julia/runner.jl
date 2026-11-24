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
	gen( re, im, name )

Generate fixture data and write to file.

# Arguments

* `re`: real components for first complex number
* `im`: imaginary components for first complex number
* `name::AbstractString`: output filename

# Examples

``` julia
julia> re = rand( 1000 );
julia> im = rand( 1000 );
julia> gen( re, im, \"data.json\" );
```
"""
function gen( re, im, name )
	zre = Array{Float32}( undef, length(re) );
	zim = Array{Float32}( undef, length(re) );
	for i in eachindex(re)
		z = 1.0f0 / Complex{Float32}( re[i], im[i] );
		zre[ i ] = real( z );
		zim[ i ] = imag( z );
	end

	# Store data to be written to file as a collection:
	data = Dict([
		("re", re),
		("im", im),
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
re = rand( 500 ) .* 1.0e30;
im = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re, im, "large_positive_real_components.json" );

# Large negative real components:
re = -rand( 500 ) .* 1.0e30;
im = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re, im, "large_negative_real_components.json" );

# Large positive imaginary components:
re = ( rand( 500 ) .* 20.0 ) .- 10.0;
im = rand( 500 ) .* 1.0e30;
gen( re, im, "large_positive_imaginary_components.json" );

# Large negative imaginary components:
re = ( rand( 500 ) .* 20.0 ) .- 10.0;
im = -rand( 500 ) .* 1.0e30;
gen( re, im, "large_negative_imaginary_components.json" );

# Tiny positive real components:
re = rand( 500 ) .* 1.0e-30;
im = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re, im, "tiny_positive_real_components.json" );

# Tiny negative real components:
re = -rand( 500 ) .* 1.0e-30;
im = ( rand( 500 ) .* 20.0 ) .- 10.0;
gen( re, im, "tiny_negative_real_components.json" );

# Tiny positive imaginary components:
re = ( rand( 500 ) .* 20.0 ) .- 10.0;
im = rand( 500 ) .* 1.0e-30;
gen( re, im, "tiny_positive_imaginary_components.json" );

# Tiny negative imaginary components:
re = ( rand( 500 ) .* 20.0 ) .- 10.0;
im = -rand( 500 ) .* 1.0e-30;
gen( re, im, "tiny_negative_imaginary_components.json" );

# Normal:
re = ( rand( 500 ) .* 100.0 ) .- 50.0;
im = ( rand( 500 ) .* 100.0 ) .- 50.0;
gen( re, im, "data.json" );
