export const CONTRACT_VERSION = '1.0.0';

export function assertRequired(object, fields, label = 'object') {
  const missing = fields.filter((field) => object?.[field] === undefined || object?.[field] === null);
  if (missing.length) throw new Error(`${label} missing required fields: ${missing.join(', ')}`);
}

export function assertIsoDate(value, label) {
  if (Number.isNaN(Date.parse(value))) throw new Error(`${label} must be an ISO date/date-time`);
}

