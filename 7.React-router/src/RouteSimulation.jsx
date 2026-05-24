import React, { useState } from "react";

const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/Contact", label: "Contact", state: { txt: "simulation" } },
  { path: "/profiles/42", label: "Profile :id → 42" },
  { path: "/profiles/99", label: "Profile :id → 99" },
  { path: "/Analytics", label: "Analytics" },
  { path: "/Analytics/development", label: "Analytics › Development" },
  { path: "/Analytics/cyberSecurity", label: "Analytics › CyberSecurity" },
  { path: "/Analytics/uiux", label: "Analytics › UI/UX" },
  { path: "/unknown-page", label: "404 – Page inconnue" },
];

function SimHome() {
  return <div className="p-6 text-2xl font-bold text-center">🏠 Home</div>;
}

function SimContact({ routeState }) {
  const txt = routeState?.txt ?? "(aucun état)";
  return (
    <div className="p-6 text-center">
      <p className="text-2xl font-bold">📬 Contact</p>
      <p className="text-gray-600 mt-2">
        state.txt = <code className="bg-gray-100 px-1 rounded">{txt}</code>
      </p>
    </div>
  );
}

function SimUserProfile({ path }) {
  const id = path.split("/profiles/")[1] ?? "?";
  return (
    <div className="p-6 text-center">
      <p className="text-2xl font-bold">👤 Profil utilisateur</p>
      <p className="text-gray-600 mt-2">
        id = <code className="bg-gray-100 px-1 rounded">{id}</code>
      </p>
    </div>
  );
}

function SimAnalytics({ path, onNavigate }) {
  const subLabels = {
    "/Analytics/development": { label: "⚙️ Development", color: "text-green-700" },
    "/Analytics/cyberSecurity": { label: "🔒 CyberSecurity", color: "text-red-700" },
    "/Analytics/uiux": { label: "🎨 UI/UX", color: "text-purple-700" },
  };
  const active = subLabels[path];
  return (
    <div className="p-6 text-center bg-slate-100 rounded">
      <p className="text-2xl font-bold">📊 Analytics</p>
      <nav className="mt-3 flex justify-center gap-4 text-sm">
        {Object.entries(subLabels).map(([p, { label }]) => (
          <button
            key={p}
            onClick={() => onNavigate(p)}
            className={`text-blue-600 hover:underline ${path === p ? "font-bold underline" : ""}`}
          >
            {label.split(" ")[1]}
          </button>
        ))}
      </nav>
      {active && (
        <p className={`mt-4 font-semibold ${active.color}`}>
          {active.label} — sous-route active
        </p>
      )}
    </div>
  );
}

function SimNotFound({ onNavigate }) {
  return (
    <div className="p-6 text-center">
      <p className="text-2xl font-bold text-red-500">⚠️ 404 – Page non trouvée</p>
      <button
        onClick={() => onNavigate("/")}
        className="text-blue-500 hover:underline text-sm mt-2 inline-block"
      >
        ← Retour à l'accueil
      </button>
    </div>
  );
}

function renderRoute(path, routeState, onNavigate) {
  if (path === "/") return <SimHome />;
  if (path === "/Contact") return <SimContact routeState={routeState} />;
  if (path.startsWith("/profiles/")) return <SimUserProfile path={path} />;
  if (path.startsWith("/Analytics")) return <SimAnalytics path={path} onNavigate={onNavigate} />;
  return <SimNotFound onNavigate={onNavigate} />;
}

export default function RouteSimulation() {
  const [current, setCurrent] = useState({ path: "/", state: null });
  const [log, setLog] = useState([{ path: "/", time: new Date().toLocaleTimeString() }]);

  function navigate(route) {
    setCurrent({ path: route.path, state: route.state ?? null });
    setLog((prev) =>
      [{ path: route.path, time: new Date().toLocaleTimeString() }, ...prev].slice(0, 10)
    );
  }

  function navigatePath(path) {
    const route = ROUTES.find((r) => r.path === path) ?? { path };
    navigate(route);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">Simulation de Routes</h1>
      <p className="text-gray-500 text-sm mb-6">
        Naviguez via les boutons. Le rendu est isolé — l'URL du navigateur n'est{" "}
        <strong>pas</strong> modifiée.
      </p>

      <div className="flex gap-6">
        {/* Panneau de navigation */}
        <div className="flex flex-col gap-2 min-w-[230px]">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
            Routes simulées
          </p>
          {ROUTES.map((r) => (
            <button
              key={r.path}
              onClick={() => navigate(r)}
              className={`text-left px-3 py-2 rounded text-sm transition-colors ${
                current.path === r.path
                  ? "bg-blue-600 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        {/* Fenêtre de rendu simulé */}
        <div className="flex-1 border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
          <div className="border-b px-4 py-2 bg-gray-50 text-xs text-gray-500 font-mono flex items-center gap-2">
            <span className="text-gray-400">📍</span>
            <span className="font-semibold text-gray-700">{current.path}</span>
            {current.state && (
              <span className="text-gray-400">
                | state: {JSON.stringify(current.state)}
              </span>
            )}
          </div>
          <div className="min-h-[180px]">
            {renderRoute(current.path, current.state, navigatePath)}
          </div>
        </div>
      </div>

      {/* Journal */}
      <div className="mt-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Journal de navigation
        </p>
        <ul className="text-sm font-mono space-y-1">
          {log.map((entry, i) => (
            <li key={i} className="text-gray-600">
              <span className="text-gray-400 mr-2">{entry.time}</span>
              {entry.path}
              {i === 0 && (
                <span className="ml-2 text-blue-500 text-xs">(actuel)</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
