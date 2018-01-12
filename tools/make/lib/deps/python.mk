#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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


# TARGETS #

# Install Python dependencies.
#
# This target installs Python dependencies.

install-deps-python:
	$(QUIET) $(PYTHON) -m pip install --upgrade pip
	$(QUIET) $(PYTHON) -m pip install -r $(PIP_REQUIREMENTS)

.PHONY: install-deps-python


# Update Python dependencies.
#
# This target updates Python dependencies.

update-deps-python:
	$(QUIET) $(PYTHON) -m pip install --upgrade pip
	$(QUIET) $(PYTHON) -m pip install --upgrade -r $(PIP_REQUIREMENTS)

.PHONY: update-deps-python


# Uninstall Python dependencies.
#
# This target removes installed Python dependencies.

clean-deps-python:
	$(QUIET) $(PYTHON) -m pip install --upgrade pip
	$(QUIET) $(PYTHON) -m pip uninstall -r $(PIP_REQUIREMENTS)

.PHONY: clean-deps-python
