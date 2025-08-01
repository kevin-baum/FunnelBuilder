
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
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

export default function Builder() {
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
    <div className="h-screen w-screen flex flex-col bg-gray-50 text-base">
      {/* Top Bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="secondary">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium">Career page builder</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 mr-3">Save draft</span>
          <Button variant="outline">Preview</Button>
          <Button>Publish</Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-white overflow-y-auto">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setTab('layers')}
              className={'flex-1 px-3 py-2 flex items-center gap-1 justify-center text-sm font-medium ' + (tab==='layers' ? 'border-b-2 border-black' : '')}
            >
              <Layers className="h-4 w-4" /> Layers
            </button>
            <button
              onClick={() => setTab('styles')}
              className={'flex-1 px-3 py-2 flex items-center gap-1 justify-center text-sm font-medium ' + (tab==='styles' ? 'border-b-2 border-black' : '')}
            >
              <Brush className="h-4 w-4" /> Styles
            </button>
          </div>

          {tab==='layers' && (
            <div className="p-4 space-y-2">
              <Button
                variant="secondary"
                className="w-full flex items-center gap-1"
                onClick={() => setSections([...sections, `Section ${sections.length+1}`])}
              >
                <Plus className="h-4 w-4" /> New section
              </Button>

              <div className="space-y-1">
                {sections.map((sec, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelected(idx)}
                    className={'group flex items-center justify-between px-2 py-1 rounded border cursor-pointer ' + (selected===idx ? 'border-black bg-gray-100' : 'border-transparent')}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <GripVertical className="h-4 w-4 text-gray-400 group-hover:text-black" />
                      {sec}
                    </div>
                    <Pencil className="h-4 w-4 text-gray-400 group-hover:text-black" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab==='styles' && <div className="p-6 text-sm text-gray-500">Style controls …</div>}
        </aside>

        {/* Canvas */}
        <main className="flex-1 overflow-y-auto p-10">
          <Card className="mx-auto max-w-4xl border-dashed border-2 border-gray-300 flex flex-col relative group">
            {/* Toolbar */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 hidden group-hover:flex gap-1">
              <Button variant="secondary"><Pencil className="h-4 w-4" /></Button>
              <Button variant="secondary"><Copy className="h-4 w-4" /></Button>
              <Button variant="secondary"><Trash className="h-4 w-4" /></Button>
            </div>

            {/* Move handles */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 flex flex-col gap-1 opacity-0 group-hover:opacity-100">
              <Button variant="secondary"><ArrowUp className="h-4 w-4" /></Button>
              <Button variant="secondary"><ArrowDown className="h-4 w-4" /></Button>
            </div>

            <CardContent className="grid grid-cols-2 gap-6 p-12 min-h-[260px] place-items-center bg-gray-100">
              <div className="h-48 bg-gray-200 rounded w-full" />
              <div className="space-y-4">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-8 w-72 bg-gray-200 rounded" />
                <div className="h-8 w-64 bg-gray-200 rounded" />
                <Button>Explore Roles</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
