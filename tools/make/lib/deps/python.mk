
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
