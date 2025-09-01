const KEY = "sc-admin-report-access";

export function loadAccess() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAccess(items) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    /* ignore write errors */
  }
}