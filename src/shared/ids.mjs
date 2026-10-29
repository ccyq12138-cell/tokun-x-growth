import { createHash } from 'node:crypto';

export function stableId(prefix, ...parts) {
  const payload = parts.map((value) => String(value ?? '')).join('|').toLowerCase();
  return `${prefix}_${createHash('sha256').update(payload).digest('hex').slice(0, 16)}`;
}

export function xStatusId(url) {
  const match = String(url).match(/x\.com\/[^/]+\/status\/(\d+)/i);
  return match?.[1] ?? null;
}

