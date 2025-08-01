import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  Layers,
  Brush,
  Plus,
  GripVertical,
  ArrowUp,
  ArrowDown,
  Copy,
  Pencil,
  Trash,
} from "lucide-react";

/**
 * BuilderPage – UI‑Gerüst entsprechend des Referenz‑Screenshots
 *
 * ‑ zweispaltiges Layout (Sidebar + Canvas)
 * ‑ Sidebar mit Tabs „Layers / Styles“ und einer Section‑Liste
 * ‑ Haupt‑Canvas mit ausgewähltem Abschnitt samt Toolbar
 *
 * Funktionale Drag‑and‑Drop‑Logik (Swapy / dnd‑Kit) *kann* später ergänzt werden –
 * dieses Gerüst fokussiert auf die Optik.
 */
export default function BuilderPage() {
  const [tab, setTab] = useState("layers");
  const [sections, setSections] = useState([
    "Hero image",
    "Video",
    "Featured",
    "Glassdoor rating",
    "Benefits",
    "Photo grid",
    "Jobs wall",
  ]);
  const [selected, setSelected] = useState(0);

  return (
    <div className="h-screen w-screen flex flex-col bg-muted/40 text-base">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-background shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium">Career page builder</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground mr-3">Save draft</span>
          <Button variant="outline">Preview</Button>
          <Button>Publish</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-background overflow-y-auto">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setTab("layers")}
              className={`flex-1 px-3 py-2 flex items-center gap-1 justify-center text-sm font-medium transition hover:bg-muted/40 ${
                tab === "layers" ? "border-b-2 border-primary text-primary" : ""
              }`}
            >
              <Layers className="h-4 w-4" /> Layers
            </button>
            <button
              onClick={() => setTab("styles")}
              className={`flex-1 px-3 py-2 flex items-center gap-1 justify-center text-sm font-medium transition hover:bg-muted/40 ${
                tab === "styles" ? "border-b-2 border-primary text-primary" : ""
              }`}
            >
              <Brush className="h-4 w-4" /> Styles
            </button>
          </div>

          {tab === "layers" && (
            <div className="p-4 space-y-2">
              <Button
                variant="secondary"
                className="w-full flex items-center gap-1"
                onClick={() => setSections([...sections, `Section ${sections.length + 1}`])}
              >
                <Plus className="h-4 w-4" /> New section
              </Button>

              <div className="space-y-1">
                {sections.map((sec, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={`group flex items-center justify-between px-2 py-1 rounded border hover:bg-muted/40 cursor-pointer ${
                      selected === idx ? "border-primary bg-muted" : "border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <GripVertical className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                      {sec}
                    </div>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "styles" && (
            <div className="p-6 text-sm text-muted-foreground">Style controls …</div>
          )}
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto p-10">
          <Card className="mx-auto max-w-4xl border-dashed border-2 border-muted flex flex-col relative group">
            {/* Toolbar */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden group-hover:flex gap-1">
              <Button size="icon" variant="secondary">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary">
                <Copy className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary">
                <Trash className="h-4 w-4" />
              </Button>
            </div>

            {/* Move handles */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
              <Button size="icon" variant="secondary">
                <ArrowUp className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary">
                <ArrowDown className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="grid grid-cols-2 gap-6 p-12 min-h-[260px] place-items-center bg-muted/20">
              {/* Image placeholder */}
              <div className="h-48 bg-muted rounded w-full" />

              {/* Text placeholder */}
              <div className="space-y-4">
                <div className="h-4 w-40 bg-muted rounded" />
                <div className="h-8 w-72 bg-muted rounded" />
                <div className="h-8 w-64 bg-muted rounded" />
                <Button>Explore Roles</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
