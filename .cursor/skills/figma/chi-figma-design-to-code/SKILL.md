---
name: chi-figma-design-to-code
description: Read a Figma design via get_design_context and generate Chi-based code (HTML/CSS, Web Components, or Vue) using Chi MCP. Use when the user asks to implement a Figma prototype or frame in Chi code.
---

# Read Figma Design and Generate Chi Code

Use this skill when the user asks to implement a Figma prototype in code, generate HTML/CE/Vue from a Figma design, or create the structure for a screen/frame from Figma using Chi. Output may be **HTML/CSS**, **Web Components (CE)**, or **Vue** depending on context; map Figma's design to Chi components rather than reusing Figma's reference code as-is.

**Required:** You need access to both the **Figma MCP** (to read the design) and the **Chi MCP** (to generate code). If you do not have access to either MCP, **require the user to install it and stop**. Do not generate code by guessing the design from a Figma URL, screenshot, or description — the design must be read via the Figma MCP.

## Prerequisites

1. **Figma design source:** Use the Figma file (and **fileKey**) defined in the **chi-figma-repo** skill. If not set or the user points to another file, ask the user which Figma file to use.
2. **Check both MCPs:** First run the check that **Figma MCP and Chi MCP are installed** (see the **chi-figma-check-mcp** skill). If either is missing, **require the user to install/configure it and stop**. Do not attempt to read Figma or generate code until both MCPs are available. Do not produce placeholder or example code instead.

## Flow

### 1. Read the design

- Call the **Figma MCP** tool **`get_design_context`** with the **fileKey** (from chi-figma-repo) and **nodeId** for the requested frame or node.
- **Node ID format:** Figma URLs use `node-id=1374-381` (hyphens). For `get_design_context`, use **nodeId** as `1374:381` (colon). Convert `-` to `:` when passing nodeId.
- The response includes reference code (often React+Tailwind), a screenshot, and metadata. **Do not use that code as the final output** — use it to understand layout and components, then map to Chi.

### 2. Map to Chi and generate code

- Using **Chi MCP tools** and **Chi skills** (and chi-custom-elements / chi-vue skills when generating CE or Vue), map Figma components and variants to Chi components and modifiers/props.
- Use Chi MCP tools as appropriate:
  - `get_component_schema` — to resolve allowed modifiers/props for a component.
  - `generate_chi_html_snippet` — for HTML/CSS output.
  - `generate_chi_ce_snippet` — for Web Components output.
  - `generate_chi_vue_snippet` — for Vue output.
- Prefer **Web Components (CE)** or **Vue** when the user or project context indicates it; otherwise use HTML/CSS.
- If the target (HTML vs CE vs Vue) is unclear, use `recommend_chi_implementation` or `get_unified_recommendation` from the Chi MCP.
- Map Figma component/variant names to Chi `baseClass` or `webComponentTag` and modifiers/props (see chi-component-schemas and Chi skills for allowed values).

### 3. Output and validate

- Produce the **markup/code** that matches the design using Chi components and conventions.
- When available, validate the generated snippet with `validate_chi_code`, `validate_chi_ce_snippet`, or `validate_chi_vue_code` from the Chi MCP.

## References

- **Component mapping and validation:** [.cursor/skills/chi-component-schemas/](.cursor/skills/chi-component-schemas/) (schemas.json, allowed modifiers, conflicts).
- **Figma MCP:** `get_design_context` (primary; requires fileKey + nodeId). Optional: `get_metadata` for file/node info.
- **Chi MCP tools:** get_component_schema, generate_chi_html_snippet, generate_chi_ce_snippet, generate_chi_vue_snippet, recommend_chi_implementation, validate_chi_code, validate_chi_ce_snippet, validate_chi_vue_code.
