
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the executable for listing licenses:
LIST_LICENSES ?= $(TOOLS_DIR)/licenses/licenses/bin/cli

# Define the command-line options to be used when listing licenses:
LIST_LICENSES_FLAGS ?= \
	--dir $(ROOT_DIR)


# TARGETS #

# List licenses.
#
# This target lists the license for each dependency.

list-licenses: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(LIST_LICENSES)
	$(QUIET) $(LIST_LICENSES) $(LIST_LICENSES_FLAGS)

.PHONY: list-licenses
