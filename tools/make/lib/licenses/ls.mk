
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the executable for listing licenses:
LIST_LICENSES ?= $(TOOLS_DIR)/licenses/licenses/bin/cli


# TARGETS #

# List package licenses.
#
# This target lists the license for each package dependency in the package dependency tree.

list-licenses: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_LICENSES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR)

.PHONY: list-licenses


# List missing licenses.
#
# This target lists packages missing license information.

list-missing-licenses: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_LICENSES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--filter 'no-license'

.PHONY: list-missing-licenses


# List dependency licenses.
#
# This target lists the license for each dependency.

list-dep-licenses: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_LICENSES)
	$(QUIET) $(LIST_LICENSES) \
		--dir $(ROOT_DIR) \
		--depth 0 \
		--root

.PHONY: list-dep-licenses
