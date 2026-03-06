#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# Installs R packages.
#
# The script is called with one or more arguments, where each argument is a
# package name to install.

# Get only the trailing command-line arguments:
args <- commandArgs( trailingOnly = TRUE );

# Check that at least one package name has been provided...
n <- length( args );
if ( n == 0 ) {
	stop( "Must provide at least one package to install.", call. = FALSE );
}
# Install each package...
for ( i in 1:n ) {
	install.packages( args[ i ], repos = "http://lib.stat.cmu.edu/R/CRAN/" );
}
