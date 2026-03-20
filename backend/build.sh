#!/usr/bin/env bash
# Build Script for Render / Cloud Deployments
set -o errexit

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Generating Prisma Client..."
prisma generate

echo "Build complete."
