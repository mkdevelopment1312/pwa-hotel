#!/bin/bash

# Script to cancel pending GitHub Pages deployments
echo "🔍 Checking for pending GitHub Pages deployments..."

# Get repository info
REPO="mkdevelopment1312/pwa-hotel"
API_BASE="https://api.github.com/repos/$REPO"

# Check current deployments
echo "📋 Current Pages deployments:"
curl -s -H "Accept: application/vnd.github+json" \
     -H "Authorization: Bearer $GITHUB_TOKEN" \
     "$API_BASE/pages/deployments" | jq -r '.[] | select(.status == "pending" or .status == "in_progress") | "ID: \(.id) Status: \(.status) Created: \(.created_at)"'

# Cancel all pending deployments
echo "🛑 Cancelling pending deployments..."
PENDING_IDS=$(curl -s -H "Accept: application/vnd.github+json" \
                   -H "Authorization: Bearer $GITHUB_TOKEN" \
                   "$API_BASE/pages/deployments" | jq -r '.[] | select(.status == "pending" or .status == "in_progress") | .id')

for deployment_id in $PENDING_IDS; do
    echo "Cancelling deployment $deployment_id..."
    curl -s -X POST \
         -H "Accept: application/vnd.github+json" \
         -H "Authorization: Bearer $GITHUB_TOKEN" \
         "$API_BASE/pages/deployments/$deployment_id/cancel"
    echo "✅ Cancelled deployment $deployment_id"
done

echo "🎯 All pending deployments cancelled. Ready for new deployment."
