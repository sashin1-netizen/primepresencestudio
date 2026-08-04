export const privatePreviewEnabled = process.env.PRIVATE_PREVIEW_ENABLED === "true" || process.env.PRIVATE_PREVIEW_MODE === "true";
export const previewDraftsEnabled = privatePreviewEnabled && process.env.PRIVATE_PREVIEW_INCLUDE_DRAFTS === "true";
