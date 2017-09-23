
# DEPENDENCIES #

include $(TOOLS_MAKE_LIB_DIR)/node/addons.mk
include $(TOOLS_MAKE_LIB_DIR)/node/modules.mk


# TARGETS #

# Run Node install sequence.
#
# This target runs the Node install sequence, including installing node module dependencies and compiling native add-ons.

install-node: install-node-modules install-node-addons

.PHONY: install-node


# Perform Node clean-up.
#
# This target runs cleanup tasks specific to Node.js, such as removing node module dependencies and removing native add-ons.

clean-node: clean-node-addons clean-node-modules

.PHONY: clean-node
