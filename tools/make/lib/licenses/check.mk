
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the executable for checking licenses:
CHECK_LICENSES ?= $(TOOLS_DIR)/licenses/licenses/bin/cli


# TARGETS #

# Check package licenses.
#
# This target checks the license for each package dependency against a list of permitted licenses.

check-licenses: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(CHECK_LICENSES)
	$(QUIET) $(CHECK_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
		--root \
		--filter 'exclude'

.PHONY: check-licenses


# Check package licenses.
#
# This target checks the license for each package dependency against a list of permitted licenses.

check-licenses-production: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(CHECK_LICENSES)
	$(QUIET) $(CHECK_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
		--no-dev \
		--root \
		--filter 'exclude'

.PHONY: check-licenses-production
