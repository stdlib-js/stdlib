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

# Define the command for installing R packages:
R_INSTALL_PKGS_CMD ?= $(RSCRIPT) $(TOOLS_DIR)/scripts/install_r_pkgs.R

# Define the path to the R requirements file:
R_REQUIREMENTS ?= $(CONFIG_DIR)/r/requirements.txt


# TARGETS #

# Install R dependencies.
#
# This target installs R dependencies.

install-deps-r:
	$(QUIET) cat $(R_REQUIREMENTS) | xargs $(R_INSTALL_PKGS_CMD)

.PHONY: install-deps-r


# Update R dependencies.
#
# This target updates R dependencies.

update-deps-r: clean-deps-r install-deps-r

.PHONY: update-deps-r


# Uninstall R dependencies.
#
# This target removes installed R dependencies.

clean-deps-r:
	$(QUIET) cat $(R_REQUIREMENTS) | xargs $(R) CMD REMOVE

.PHONY: clean-deps-r
