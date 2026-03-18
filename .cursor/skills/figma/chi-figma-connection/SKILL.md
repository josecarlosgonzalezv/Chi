---
name: chi-figma-connection
description: Single entry point that establishes the Figma–Chi connection. This is the skill to use when implementing from Figma: it runs the full flow (check MCPs, design source, prototype target, read and implement in Chi). Enter through this skill only for Figma-to-Chi design-to-code.
---

# Figma–Chi Connection (Single Entry Point)

This skill **establishes the connection** between Figma and Chi for design-to-code. It is the **only entry point** you should use when the user wants to implement a design from Figma in Chi — run all steps in order. **Alternatively,** call the Chi MCP tool **`get_implement_from_figma_using_chi`** first; it returns the same flow so you can execute it directly without searching for skills. For detailed behavior of each step, see the other Figma skills (chi-figma-check-mcp, chi-figma-repo, chi-figma-design-to-code).

**Required:** Without access to the Figma MCP and Chi MCP, you **must require the user to install them** and **must not continue**. Do not generate code from a Figma link or description by guessing — the design must be read via the Figma MCP. If either MCP is missing, stop and ask the user to install it; do not produce placeholder or example code.

## When to use (enter through this skill)

- User says: "Implement from Figma", "Generate code from our Figma design", "Figma to Chi", "Design to code", "Build this screen from Figma", "Implement the [X] from Figma in Chi".
- User wants one conversation to go from "I have a Figma design" to "here is the Chi code" without invoking separate skills.

---

## Flow (run in this order)

### Step 1: Check Figma MCP and Chi MCP

Run the checks from **chi-figma-check-mcp**: call Figma MCP (e.g. `get_design_context` or `get_metadata`) and Chi MCP (e.g. `get_chi_version` or `list_chi_css_components`). If either is missing or errors, require the user to install/configure it and **stop** — do not generate code without both MCPs.

*Detail: see skill **chi-figma-check-mcp**.*

---

### Step 2: Establish the Figma design source

- Get the Figma file and **fileKey** from **chi-figma-repo** (default: Master CHI Design System – Enterprise). If the user specified a different file or link, use that and derive its fileKey.
- Use this fileKey for all Figma MCP calls (e.g. `get_design_context`).

*Detail: see skill **chi-figma-repo**.*

---

### Step 3: Ask for the prototype (if not already given)

- If the user **already specified** which frame, screen, or node to implement (e.g. "implement the login card", "frame X", "node-id 123"), use that.
- If **not**, ask the user clearly: "Which prototype or frame should I implement? You can give me the frame name, the page name, or the Figma node ID."
- Do not proceed to read Figma until you have a concrete target (frame/page/node).

---

### Step 4: Read the design and generate Chi code

1. **Read with Figma MCP:** Call **`get_design_context`** with the fileKey (from Step 2) and nodeId. Use nodeId with colons (e.g. `1374:381`); convert from URL format `1374-381` if needed. The response may include reference code (e.g. React+Tailwind) and a screenshot — **do not use that code as final output**; use it to understand the design.
2. **Map to Chi:** Map the design to Chi components and modifiers/props (use Chi skills and `get_component_schema` for allowed values). Generate Chi code with `generate_chi_html_snippet`, `generate_chi_ce_snippet`, or `generate_chi_vue_snippet` as appropriate; prefer CE or Vue unless the user asked for HTML/CSS. If unclear, use `recommend_chi_implementation` or `get_unified_recommendation`.
3. **Validate and return:** When available, call `validate_chi_code`, `validate_chi_ce_snippet`, or `validate_chi_vue_code`. Return the complete markup/code using Chi components and conventions.

*Detail: see skill **chi-figma-design-to-code**.*

---

## Summary

| Step | Action | On failure |
|------|--------|------------|
| 1 | Check Figma MCP + Chi MCP | **Require installation**; explain how to install in Cursor and **stop**. Do not generate code without MCPs. |
| 2 | Set Figma design source (default Master CHI) | Use user's file if they specified one. |
| 3 | Get prototype target from user | Ask for frame name, page, or node ID. |
| 4 | get_design_context (fileKey + nodeId) → map to Chi → generate → validate → return code | Report errors from MCPs. Do not reuse Figma reference code as-is; map to Chi. |

This skill is the Figma–Chi connection; the other three Figma skills provide the detailed instructions for each part.
