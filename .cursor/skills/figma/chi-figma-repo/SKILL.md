---
name: chi-figma-repo
description: Defines which Figma file is the design source for Chi Figma-to-code. Use when implementing from Figma or when you need the fileKey/file to pass to get_design_context.
---

# Figma Design Source for Chi

This skill defines which Figma file is the **design source** for Chi Figma-to-code. Use it when the user asks to implement something from Figma, when generating code from a Figma design, or when you need the **fileKey** and file to pass to the Figma MCP (e.g. `get_design_context`).

## Before using this source

Before using the Figma file below, ensure the **Figma MCP and Chi MCP are installed** (see the skill **chi-figma-check-mcp**). Run that check first. **If either MCP is missing, require the user to install it and stop** — do not attempt to read Figma or generate code without the MCPs, and do not create code by guessing the design from a link or description.

## Figma design source (default)

The Figma design source for Chi is:

- **Name:** Master CHI Design System – Enterprise (New 2025)
- **URL:**  https://www.figma.com/design/k3fPTBy5hUii0sdMWNlopx/-Master--CHI-Design-System-%E2%80%93-Enterprise--New-2025-?node-id=0-1&p=f&t=6gWMpNKRjMX8O1rR-0
- **fileKey** (for Figma MCP calls): `k3fPTBy5hUii0sdMWNlopx`

Use this file when the user refers to "our Figma", "the Chi Figma", or "the Master CHI design". When calling `get_design_context`, use this **fileKey** and the nodeId for the frame/node. **Node ID note:** Figma URLs use `node-id=1374-381` (hyphens); for `get_design_context` pass **nodeId** as `1374:381` (colon). Convert `-` to `:` when extracting from a URL.

## Override by end users

End users can override this default by maintaining their own copy of this skill with a different file URL or file key, or by telling you explicitly which Figma file to use. If the user says "use our team Figma" or gives a different link, prefer that over the default above.

## When to use

- User asks to "implement from Figma", "generate code from our Figma design", or similar.
- You need the fileKey or file to pass to the Figma MCP (e.g. `get_design_context`) when reading a prototype or frame.
