import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../store/authStore";

export default function LoginPage() {
  const [name, setName] = useState("");
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
    navigate("/");
  };

  return (
    <div className="mx-auto max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
        Login
      </h2>
      <form onSubmit={handleLogin} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-400">
            Name / Username
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name..."
            className="mt-1 w-full rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}