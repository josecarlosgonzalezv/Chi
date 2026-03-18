---
name: chi-figma-check-mcp
description: Check that Figma MCP and Chi MCP are installed and available for Figma-to-code. Use before running any design-to-code flow so the user gets a clear message if something is missing.
---

# Check Figma MCP and Chi MCP for Figma-to-Code

Use this skill when the user asks to implement something from Figma, generate code from a Figma design, or when any Figma-to-Chi flow is about to run. **Run this check first** so the user knows if their environment is ready.

**Critical:** Without access to the Figma MCP and Chi MCP, you **must require the user to install them** and **must not continue**. Do not attempt to generate code from a Figma link, URL, or description by guessing the design — the design must be read via the Figma MCP. If either MCP is missing, stop and ask the user to install/configure it; do not produce placeholder or example code.

## When to use

- User says "implement this from Figma", "generate code from our Figma design", or similar.
- Before reading a Figma prototype or generating Chi code from a design.
- When the user asks "can you build this from Figma?" or "is my Figma/Chi setup ready?"

## Step 1: Check Figma MCP

1. Verify that the Figma MCP is configured in Cursor.
2. Try calling a Figma MCP tool: **`get_design_context`** (with a valid fileKey + nodeId) or **`get_metadata`** to verify the connection. Do not rely on generic "get file info" or "list files" — use the tools your Figma MCP actually exposes.
3. **If the Figma MCP is not available or returns an error**, tell the user:
   - "Figma MCP is not installed or not responding. To implement from Figma I need the Figma MCP to read the design. Please add and enable the Figma MCP in Cursor settings (MCP / Integrations) and ensure you have a valid Figma API token if required. Once installed, ask me again."
   - **Require installation and stop.** Do not proceed. Do not generate code by guessing or from the link alone.

## Step 2: Check Chi MCP

1. Verify that the Chi MCP (user-chi) is configured in Cursor.
2. Try calling a Chi MCP tool (e.g. `get_chi_version` or `list_chi_css_components`).
3. **If the Chi MCP is not available or returns an error**, tell the user:
   - "Chi MCP is not installed or not responding. To generate Chi code from Figma I need the Chi MCP. Please add and enable the Chi MCP in Cursor settings. Once installed, ask me again."
   - **Require installation and stop.** Do not proceed. Do not generate Chi code without the Chi MCP.

## If both OK

- If both MCPs respond successfully, proceed with the Figma-to-code flow (use **chi-figma-repo** for fileKey/file to read, and **chi-figma-design-to-code** to generate Chi code).
- If either check fails, **require the user to install the missing MCP** and **stop**. Do not attempt to read Figma or generate Chi code until the user has installed and configured the MCPs. Do not guess the design or produce code from the Figma URL alone.

## Summary

| Check    | Action on failure |
|----------|-------------------|
| Figma MCP | **Require installation.** Tell user to add/enable Figma MCP and API token in Cursor. Stop; do not generate code without it. |
| Chi MCP   | **Require installation.** Tell user to add/enable Chi MCP in Cursor. Stop; do not generate code without it. |
