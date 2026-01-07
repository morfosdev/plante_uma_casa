
// ----------- set Path Selection (defensivo)
export const pathSel = (obj?: any, path?: any) => {
  if (typeof path !== 'string' || !path) return undefined;

  const parts = path.split('.').filter(Boolean);
  let cur = obj;

  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
};

