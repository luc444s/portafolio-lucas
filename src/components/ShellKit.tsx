import { useState } from "react";
import { Badge, Button, Input, Switch, Tabs } from "@shell";

export default function ShellKit() {
  const [on, setOn] = useState(true);
  const [tab, setTab] = useState("ui");

  return (
    <div className="my-3 border border-border p-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Input placeholder="Input…" className="w-28" />
      </div>

      <div className="mt-3">
        <Tabs
          value={tab}
          onChange={setTab}
          tabs={[
            {
              value: "ui",
              label: "UI",
              content: (
                <p className="text-xs text-muted-foreground">
                  Componentes genéricos listos para cualquier host.
                </p>
              ),
            },
            {
              value: "api",
              label: "API",
              content: (
                <p className="text-xs text-muted-foreground">
                  Cliente fetch tipado — cero axios, cero dependencias.
                </p>
              ),
            },
            {
              value: "auth",
              label: "Auth",
              content: (
                <p className="text-xs text-muted-foreground">
                  Sesión y renovación resueltas a nivel shell.
                </p>
              ),
            },
          ]}
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2.5 text-[11px] text-muted-foreground">
        <span>25 componentes · dependencies: {"{}"}</span>
        <label className="flex items-center gap-2">
          <Switch checked={on} onChange={(e) => setOn(e.target.checked)} />
          <span>{on ? "on" : "off"}</span>
        </label>
        <Badge>{on ? "live demo" : "aún así flat"}</Badge>
      </div>
    </div>
  );
}
