#!/bin/sh

PACKAGE_DIR="package"
PACKAGE="${PACKAGE_DIR}/mdl-toolbox.zip"

mkdir -p "${PACKAGE_DIR}"
rm -f "${PACKAGE}"
zip -r "${PACKAGE}" js/ logo.png LICENSE manifest.json
