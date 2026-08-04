/** @template {{ publicationStatus?: string }} T @param {T[]} records @returns {T[]} */
export function onlyApproved(records) { return records.filter(record => record.publicationStatus === "approved"); }
