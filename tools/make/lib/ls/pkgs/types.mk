#/
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
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
#/

# VARIABLES #

# Define the path of the executable:
LIST_PKGS_TYPES ?= $(TOOLS_PKGS_DIR)/pkgs/types/bin/cli

# Define the command flags:
LIST_PKGS_TYPES_FLAGS ?=

# Define the directory from which to search for packages:
LIST_PKGS_TYPES_DIR ?= $(SRC_DIR)


# RULES #

#/
# Prints a list of all packages containing TypeScript declarations.
#
# @param {string} [LIST_PKGS_TYPES_DIR] - absolute path of the directory from which to search (default: source directory)
#
# @example
# make list-pkgs-types
#
# @example
# make list-pkgs-types LIST_PKGS_TYPES_DIR="$PWD/lib/node_modules/\@stdlib/utils"
#/
list-pkgs-types: $(LIST_PKGS_TYPES) $(NODE_MODULES)
	$(QUIET) NODE_PATH="$(NODE_PATH)" $(NODE) "$(LIST_PKGS_TYPES)" $(LIST_PKGS_TYPES_FLAGS) "$(LIST_PKGS_TYPES_DIR)"

.PHONY: list-pkgs-types

#/
# Prints a newline-delimited list of all packages without TypeScript declarations.
#
# @example
# make list-pkgs-no-types
#/
list-pkgs-no-types:
	$(QUIET) comm -23 <($(MAKE) -f $(this_file) list-lib-pkgs | sort) <($(MAKE) -f $(this_file) list-pkgs-types | sort)

.PHONY: list-pkgs-no-types
