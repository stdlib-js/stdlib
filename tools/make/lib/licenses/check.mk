
# VARIABLES #

# Define the command for setting executable permissions:
MAKE_EXECUTABLE ?= chmod +x

# Define the path to the executable for checking licenses:
CHECK_LICENSES ?= $(TOOLS_DIR)/licenses/check


# TARGETS #

# Checks licenses.
#
# This target checks the license for each dependency and flags any not fulfilling license criteria.

check-licenses: $(NODE_MODULES)
	$(QUIET) $(MAKE_EXECUTABLE) $(CHECK_LICENSES)
	$(QUIET) $(CHECK_LICENSES)

.PHONY: check-licenses
