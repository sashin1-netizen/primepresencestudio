export function onlyApproved<T extends { publicationStatus?: string }>(records: T[]): T[];
