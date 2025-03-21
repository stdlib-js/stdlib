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

# Define the path to the pip requirements file:
PIP_REQUIREMENTS ?= $(CONFIG_DIR)/python/requirements.txt


# TODO: add support for specifying an installer (e.g., pip v conda)


# RULES #

#/
# Installs Python dependencies.
#
# @param {string} [PIP_REQUIREMENTS] - path to a requirements file
#
# @example
# make install-deps-python
#/
install-deps-python: $(PIP_REQUIREMENTS)
	$(QUIET) $(PYTHON) -m pip install --upgrade pip
	$(QUIET) $(PYTHON) -m pip install -r $(PIP_REQUIREMENTS)

.PHONY: install-deps-python

#/
# Updates Python dependencies.
#
# @param {string} [PIP_REQUIREMENTS] - path to a requirements file
#
# @example
# make update-deps-python
#/
update-deps-python:
	$(QUIET) $(PYTHON) -m pip install --upgrade pip
	$(QUIET) $(PYTHON) -m pip install --upgrade -r $(PIP_REQUIREMENTS)

.PHONY: update-deps-python

#/
# Removes installed Python dependencies.
#
# @param {string} [PIP_REQUIREMENTS] - path to a requirements file
#
# @example
# make clean-deps-python
#/
clean-deps-python:
	$(QUIET) $(PYTHON) -m pip install --upgrade pip
	$(QUIET) $(PYTHON) -m pip uninstall -r $(PIP_REQUIREMENTS)

.PHONY: clean-deps-python
