# Figma → Chi: Design to Code

Cursor skills and one Chi MCP tool that connect Figma with the Chi Design System so the assistant can generate Chi code (HTML/CSS, Web Components, or Vue) from Figma designs.

---

## Overview

When a user says **"Implement this from Figma"** (or similar), the assistant should:

1. Call the **Chi MCP tool** `get_implement_from_figma_using_chi`.
2. That tool returns the content of the **chi-figma-connection** skill (the full flow).
3. The assistant follows that flow, which in turn tells it to use the other Figma skills in order: **chi-figma-check-mcp** → **chi-figma-repo** → **chi-figma-design-to-code**.

So there is a **single entry point** (the MCP tool) that pulls in the skills in the right order; the assistant does not need to discover each skill separately.

---

## Architecture

| Piece | Location | Role |
|-------|----------|------|
| **MCP tool** `get_implement_from_figma_using_chi` | Chi MCP (`src/mcp/data/tools.json`) | Invoked when the user asks to implement from Figma. Returns the chi-figma-connection flow. |
| **Skill** chi-figma-connection | `chi-figma-connection/SKILL.md` | Flow entry: defines the 4 steps and references the other three skills. Source of truth; its content is what the tool returns (via metadata). |
| **Skill** chi-figma-check-mcp | `chi-figma-check-mcp/SKILL.md` | Ensures Figma MCP and Chi MCP are installed before continuing. |
| **Skill** chi-figma-repo | `chi-figma-repo/SKILL.md` | Defines the default Figma file (Master CHI) and the **fileKey** for Figma MCP calls. |
| **Skill** chi-figma-design-to-code | `chi-figma-design-to-code/SKILL.md` | Read design with `get_design_context`, map to Chi, generate and validate code. |
| **Metadata** `implementFromFigmaUsingChi` | Built into `src/mcp/metadata.json` (`npm run build:mcp`) | Holds the chi-figma-connection skill text. The **Chi MCP server** must return this when the tool `get_implement_from_figma_using_chi` is called. |

**Note:** This repo only produces the metadata. The Chi MCP server (external) must implement the tool handler so that it returns `metadata.implementFromFigmaUsingChi`.

---

## Flow (user → code)

```
User: "Implement this from Figma" / "Figma to Chi" / "Design to code"
    ↓
Assistant calls Chi MCP tool: get_implement_from_figma_using_chi
    ↓
Chi MCP returns chi-figma-connection content (4-step flow)
    ↓
Assistant follows the flow:
  Step 1 → chi-figma-check-mcp (verify both MCPs)
  Step 2 → chi-figma-repo (get fileKey / default design)
  Step 3 → get target frame/node from user if not provided
  Step 4 → chi-figma-design-to-code (get_design_context → map to Chi → generate → validate)
    ↓
User receives Chi code (HTML/CSS, Web Components, or Vue)
```

---

## Prerequisites

Two MCPs must be configured in Cursor:

| MCP | Purpose |
|-----|---------|
| **Figma MCP** | Read the design (e.g. `get_design_context`). May require a Figma API token. |
| **Chi MCP** (user-chi) | Generate and validate Chi code (`generate_chi_*_snippet`, `validate_chi_*`, etc.). |

If either is missing, the assistant must ask the user to install it (Settings → MCP / Integrations) and **must not continue**. The design must be read via the Figma MCP; no code should be generated from a URL or description alone.

---

## Default design source

- **Name:** Master CHI Design System – Enterprise (New 2025)
- **URL:** [Master CHI Design System – Enterprise](https://www.figma.com/design/k3fPTBy5hUii0sdMWNlopx/-Master--CHI-Design-System-%E2%80%93-Enterprise--New-2025-?node-id=0-1)
- **fileKey:** `k3fPTBy5hUii0sdMWNlopx`

The user can override this by saying “use our team’s Figma” or by providing another link.

**Node ID:** Figma URLs use `node-id=1374-381` (hyphens). For `get_design_context`, pass **nodeId** with colons: `1374:381`. Convert `-` to `:` when taking the node ID from a URL.

---

## The four steps (summary)

| Step | Action | On failure |
|------|--------|------------|
| 1 | Check Figma MCP and Chi MCP | Ask user to install/configure; stop. |
| 2 | Set Figma file (fileKey). Default: Master CHI | Use user’s file if specified. |
| 3 | Get target frame/node | Ask user for frame name, page, or node ID. |
| 4 | `get_design_context` → map to Chi → generate → validate → return code | Report MCP errors. Do not reuse Figma reference code as final output. |

---

## Skills reference

| Skill | Description |
|-------|-------------|
| **chi-figma-connection** | Entry point: orchestrates the full flow and references the other three skills. |
| **chi-figma-check-mcp** | Verifies both MCPs are available; stops and asks for installation if not. |
| **chi-figma-repo** | Default Figma file and fileKey for MCP calls. |
| **chi-figma-design-to-code** | Read design, map to Chi, generate (HTML/CE/Vue), validate. |

---

## How to use (user)

1. Ensure **Figma MCP** and **Chi MCP** are configured in Cursor.
2. Ask in natural language, e.g.:
   - *"Implement this from Figma"*
   - *"Implementa este Figma"*
   - *"Figma to Chi" / "Design to code"*
   - *"Generate Chi code from our Figma design"*
3. If you did not specify a frame or node, the assistant will ask for the frame name, page, or node ID.
4. The assistant calls `get_implement_from_figma_using_chi`, follows the returned flow (using the skills above), and returns Chi code.

---

## Output format

Generated code can be:

- **HTML/CSS** (Chi BEM classes)
- **Web Components** (e.g. `<chi-button>`)
- **Vue** (Chi Vue components)

The assistant chooses based on project context or user preference; Chi MCP’s `recommend_chi_implementation` or `get_unified_recommendation` can be used when unclear. The design is always **mapped** to Chi; any reference code from Figma (e.g. React+Tailwind) is only for structure, not the final output.

---

## Troubleshooting

If the flow does not run, confirm both MCPs are installed and responding (the **chi-figma-check-mcp** skill describes how). Without both MCPs, the flow cannot continue.
