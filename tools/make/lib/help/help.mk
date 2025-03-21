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
#

# VARIABLES #

# Define the path to the Makefile usage text file for displaying help information:
MAKE_USAGE ?= $(TOOLS_MAKE_DIR)/usage.txt


# RULES #

#/
# Prints a `Makefile` help message which includes a list of common commands.
#
# @example
# make help
#/
help:
	$(QUIET) $(CAT) $(MAKE_USAGE)

.PHONY: help

#/
# Prints a sorted list of `Makefile` rules.
#
# ## Notes
#
# -   The list of rules is **not** exhaustive, as the list does **not** include rules which have not been explicitly declared PHONY targets and does **not** include rules declared via variables. These rules could be included by dumping the Makefile database `make -qp`, but this is not seen as necessary due to predominant use of `.PHONY`.
#
# @example
# make list-rules
#/
list-rules:
	$(QUIET) $(FIND_TOOLS_MAKEFILES_CMD) \
	| xargs grep '^.PHONY: ' \
	| awk '{print $$2}' \
	| sort

.PHONY: list-rules

#/
# Prints a sorted list of `Makefile` rules for computing project statistics.
#
# ## Notes
#
# -   The list of rules is **not** exhaustive, as the list does **not** include rules which have not been explicitly declared PHONY targets and does **not** include rules declared via variables. These rules could be included by dumping the Makefile database `make -qp`, but this is not seen as necessary due to predominant use of `.PHONY`.
#
# @example
# make list-stats-rules
#/
list-stats-rules:
	$(QUIET) $(FIND_TOOLS_MAKEFILES_CMD) \
	| xargs grep '^.PHONY: stats-' \
	| awk '{print $$2}' \
	| sort

.PHONY: list-stats-rules

#/
# Prints a sorted list of `Makefile` variable names.
#
# ## Notes
#
# -   The list of variables is **not** exhaustive, as the list does **not** include built-in variables. Built-in variables could be included by dumping the `Makefile` database via `make -qp`.
# -   To remove duplicates, pipe to `uniq`.
#
# @example
# make list-variables
#/
list-variables:
	$(QUIET) $(FIND_TOOLS_MAKEFILES_CMD) \
	| xargs grep -e '^[A-Z0-9_]\{1,\} ?=' -e '^[A-Za-z0-9_]\{1,\} :=' \
	| awk '{print $$1}' \
	| sed 's/.*:\(.*\)/\1/' \
	| sort

.PHONY: list-variables
