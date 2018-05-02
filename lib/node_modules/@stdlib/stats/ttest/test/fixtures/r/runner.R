#!/usr/bin/env Rscript
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

# Set the precision to 16 digits:
options( digits = 16 );

#' Generate test fixtures.
#'
#' @examples
#' main();
main <- function() {
	#' Get the script filepath.
	#'
	#' @return The absolute path of this script
	#'
	#' @examples
	#' filepath <- get_script_path();
	get_script_path <- function() {
		args <- commandArgs( trailingOnly = FALSE );
		needle <- "--file=";
		match <- grep( needle, args );
		if ( length( match ) > 0 ) {
			# Rscript:
			filepath <- sub( needle, "", args[match] );
		} else {
			ls_vars <- ls( sys.frames()[[1]] )
			if ( "fileName" %in% ls_vars ) {
				# Source'd via RStudio:
				filepath <- sys.frames()[[1]]$fileName; # nolint
			} else {
				# Source'd via R console:
				filepath <- sys.frames()[[1]]$ofile;
			}
		}
		return( normalizePath( filepath ) );
	}

	#' Convert a data structure to JSON.
	#'
	#' @param x A data structure to convert
	#' @return JSON blob
	#'
	#' @examples
	#' x <- seq( -6.5, 25, 0.5 );
	#' json <- to_json( x );
	to_json <- function( x ) {
		return( jsonlite::toJSON( x, digits = 16, auto_unbox = TRUE ) );
	}

	#' Generate an output absolute filepath based on the script directory.
	#'
	#' @param name An output filename
	#' @return An absolute filepath
	#'
	#' @examples
	#' filepath <- get_filepath( "data.json" );
	get_filepath <- function( name ) {
		return( paste( source_dir, "/", name, sep = "" ) );
	}

	# Get the directory of this script:
	source_dir <- dirname( get_script_path() );

	# Generate test fixture data:
	x <- rnorm( 100 );
	twosided <- t.test( x );
	twosided <- list( x = x, pValue = twosided$p.value, statistic = twosided$statistic, lower = twosided$conf.int[1], upper = twosided$conf.int[2] );

	x <- rnorm( 100, 2.0, 2.5 );
	twosided.custom.alpha <- t.test( x, conf.level = 0.9 );
	twosided.custom.alpha <- list(
		x = x, pValue = twosided.custom.alpha$p.value,
		statistic = twosided.custom.alpha$statistic,
		lower = twosided.custom.alpha$conf.int[1],
		upper = twosided.custom.alpha$conf.int[2]
	);

	x <- rnorm( 100 );
	less <- t.test( x, alternative = "less" );
	less <- list( x = x, pValue = less$p.value, statistic = less$statistic, lower = less$conf.int[1], upper = less$conf.int[2] );

	x <- rnorm( 100 );
	greater <- t.test( x, alternative = "greater" );
	greater <- list( x = x, pValue = greater$p.value, statistic = greater$statistic, lower = greater$conf.int[1], upper = greater$conf.int[2] );

	x <- rnorm( 100 );
	less.custom.alpha <- t.test( x, alternative = "less", conf.level = 0.99 );
	less.custom.alpha <- list( x = x, pValue = less.custom.alpha$p.value, statistic = less.custom.alpha$statistic, lower = less.custom.alpha$conf.int[1], upper = less.custom.alpha$conf.int[2] );

	x <- rnorm( 100 );
	greater.custom.alpha <- t.test( x, alternative = "greater", conf.level = 0.9 );
	greater.custom.alpha <- list(
		x = x,
		pValue = greater.custom.alpha$p.value,
		statistic = greater.custom.alpha$statistic,
		lower = greater.custom.alpha$conf.int[1],
		upper = greater.custom.alpha$conf.int[2]
	);
	x <- rnorm( 100, 1.0, 2.0 );
	y <- rnorm( 100, 1.0, 2.0 );
	paired <- t.test( x, y, paired = TRUE );
	paired <- list( x = x, y = y, pValue = paired$p.value, statistic = paired$statistic, lower = paired$conf.int[1], upper = paired$conf.int[2] );

	x <- rnorm( 100, 1.0, 2.0 );
	y <- rnorm( 100, 2.0, 2.0 );
	paired.less <- t.test( x, y, paired = TRUE, alternative = "less" );
	paired.less <- list( x = x, y = y, pValue = paired.less$p.value, statistic = paired.less$statistic, lower = paired.less$conf.int[1], upper = paired.less$conf.int[2] );

	# Convert fixture data to JSON:
	twosided <- to_json( twosided );
	twosided.custom.alpha <- to_json( twosided.custom.alpha );
	greater <- to_json( greater );
	less <- to_json( less );
	paired <- to_json( paired );
	paired.less <- to_json( paired.less );
	less.custom.alpha <- to_json( less.custom.alpha );
	greater.custom.alpha <- to_json( greater.custom.alpha );

	# Write the data to file...
	filepath <- get_filepath( "twosided.json" );
	write( twosided, filepath );

	filepath <- get_filepath( "twosided_custom_alpha.json" );
	write( twosided.custom.alpha, filepath );

	filepath <- get_filepath( "greater.json" );
	write( greater, filepath );

	filepath <- get_filepath( "less.json" );
	write( less, filepath );

	filepath <- get_filepath( "paired.json" );
	write( paired, filepath );

	filepath <- get_filepath( "paired_less.json" );
	write( paired.less, filepath );

	filepath <- get_filepath( "less_custom_alpha.json" );
	write( less.custom.alpha, filepath );

	filepath <- get_filepath( "greater_custom_alpha.json" );
	write( greater.custom.alpha, filepath );
}

main();
