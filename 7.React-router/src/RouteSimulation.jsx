import React, { useState } from "react";
import {
  MemoryRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

const ROUTES = [
  { path: "/", label: "Home" },
  { path: "/Contact", label: "Contact", state: { txt: "simulation" } },
  { path: "/profiles/42", label: "Profile :id (42)" },
  { path: "/profiles/99", label: "Profile :id (99)" },
  { path: "/Analytics", label: "Analytics" },
  { path: "/Analytics/development", label: "Analytics › Development" },
  { path: "/Analytics/cyberSecurity", label: "Analytics › CyberSecurity" },
  { path: "/Analytics/uiux", label: "Analytics › UI/UX" },
  { path: "/unknown-page", label: "404 – Page inconnue" },
];

function SimHome() {
  return <div className="p-6 text-2xl font-bold text-center">🏠 Home</div>;
}

function SimContact() {
  const loc = useLocation();
  const txt = loc.state?.txt ?? "(aucun état)";
  return (
    <div className="p-6 text-center">
      <p className="text-2xl font-bold">📬 Contact</p>
      <p className="text-gray-600 mt-2">state.txt = <code>{txt}</code></p>
    </div>
  );
}

function SimUserProfile() {
  const { id } = useParams();
  return (
    <div className="p-6 text-center">
      <p className="text-2xl font-bold">👤 Profil utilisateur</p>
      <p className="text-gray-600 mt-2">id = <code>{id}</code></p>
    </div>
  );
}

function SimAnalytics({ children }) {
  return (
    <div className="p-6 text-center bg-slate-100 rounded">
      <p className="text-2xl font-bold">📊 Analytics</p>
      <nav className="mt-3 flex justify-center gap-4 text-sm">
        <Link to="/Analytics/development" className="text-blue-600 hover:underline">Development</Link>
        <Link to="/Analytics/cyberSecurity" className="text-blue-600 hover:underline">CyberSecurity</Link>
        <Link to="/Analytics/uiux" className="text-blue-600 hover:underline">UI/UX</Link>
      </nav>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function SimDevelopment() {
  return <p className="mt-3 text-green-700 font-semibold">⚙️ Development — sous-route active</p>;
}
function SimCyberSecurity() {
  return <p className="mt-3 text-red-700 font-semibold">🔒 CyberSecurity — sous-route active</p>;
}
function SimUIUX() {
  return <p className="mt-3 text-purple-700 font-semibold">🎨 UI/UX — sous-route active</p>;
}
function SimNotFound() {
  return (
    <div className="p-6 text-center">
      <p className="text-2xl font-bold text-red-500">⚠️ 404 – Page non trouvée</p>
      <Link to="/" className="text-blue-500 hover:underline text-sm mt-2 inline-block">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}

function Navigator({ onNavigate }) {
  const navigate = useNavigate();
  const location = useLocation();

  function go(route) {
    navigate(route.path, route.state ? { state: route.state } : undefined);
    onNavigate(route.path);
  }

  return (
    <div className="flex flex-col gap-2 min-w-[220px]">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
        Routes simulées
      </p>
      {ROUTES.map((r) => (
        <button
          key={r.path}
          onClick={() => go(r)}
          className={`text-left px-3 py-2 rounded text-sm transition-colors ${
            location.pathname === r.path
              ? "bg-blue-600 text-white font-semibold"
              : "bg-gray-100 hover:bg-gray-200 text-gray-800"
          }`}
        >
          {r.label}
        </button>
      ))}
    </div>
  );
}

function AppContent({ onNavigate }) {
  const location = useLocation();
  return (
    <div className="flex gap-6">
      <Navigator onNavigate={onNavigate} />
      <div className="flex-1 border border-gray-200 rounded-lg bg-white shadow-sm">
        <div className="border-b px-4 py-2 bg-gray-50 text-xs text-gray-500 font-mono rounded-t-lg">
          📍 {location.pathname}
          {location.state ? (
            <span className="ml-2 text-gray-400">
              | state: {JSON.stringify(location.state)}
            </span>
          ) : null}
        </div>
        <Routes>
          <Route path="/" element={<SimHome />} />
          <Route path="/Contact" element={<SimContact />} />
          <Route path="/profiles/:id" element={<SimUserProfile />} />
          <Route path="/Analytics" element={<SimAnalytics />}>
            <Route path="/Analytics/development" element={<SimDevelopment />} />
            <Route path="/Analytics/cyberSecurity" element={<SimCyberSecurity />} />
            <Route path="/Analytics/uiux" element={<SimUIUX />} />
          </Route>
          <Route path="*" element={<SimNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default function RouteSimulation() {
  const [log, setLog] = useState([{ path: "/", time: new Date().toLocaleTimeString() }]);

  function handleNavigate(path) {
    setLog((prev) => [{ path, time: new Date().toLocaleTimeString() }, ...prev].slice(0, 10));
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-1">Simulation de Routes</h1>
      <p className="text-gray-500 text-sm mb-6">
        Naviguez entre les routes via les boutons. Le rendu utilise{" "}
        <code className="bg-gray-100 px-1 rounded">MemoryRouter</code> — l'URL du navigateur n'est pas modifiée.
      </p>

      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <AppContent onNavigate={handleNavigate} />
      </MemoryRouter>

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
