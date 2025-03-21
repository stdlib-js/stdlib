#/
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
#/

# VARIABLES #

# Define the command flags:
FIND_PACKAGES_FLAGS ?= \
	-type f \
	-name "$(PACKAGES_PATTERN)" \
	-regex "$(PACKAGES_FILTER)" \
	$(FIND_PACKAGES_EXCLUDE_FLAGS) \
	-exec dirname {} \;

ifneq ($(OS), Darwin)
	FIND_PACKAGES_FLAGS := -regextype posix-extended $(FIND_PACKAGES_FLAGS)
endif

# Define a command for listing packages:
FIND_PACKAGES_CMD ?= find $(find_kernel_prefix) "$(ROOT_DIR)" $(FIND_PACKAGES_FLAGS)

# Define the list of packages:
PACKAGES ?= $(shell $(FIND_PACKAGES_CMD))


# RULES #

#/
# Prints a list of all packages.
#
# ## Notes
#
# -   This recipe excludes the `node_modules`, `build`, and `reports` directories.
#
# @param {string} [PACKAGES_PATTERN='package.json'] - filename pattern for identifying packages
# @param {string} [PACKAGES_FILTER='.*/.*'] - filepath pattern for finding packages
#
# @example
# make list-pkgs
#
# @example
# make list-pkgs PACKAGES_FILTER='.*/math/base/special/.*'
#/
list-pkgs:
	$(QUIET) find $(find_kernel_prefix) "$(ROOT_DIR)" $(FIND_PACKAGES_FLAGS) | xargs printf '%s\n'

.PHONY: list-pkgs
