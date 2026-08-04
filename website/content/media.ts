import { ownerContent, type MediaRecord } from "@/content/owner-content.mjs";
export const publishedMedia = ownerContent.media.filter(item => item.publicationStatus === "published" && Boolean(item.approvalDate) && item.permissionStatus === "approved" && Boolean(item.src) && Boolean(item.assetId));
export const publishedMediaById = (assetId: string): MediaRecord | undefined => publishedMedia.find(item => item.assetId === assetId);
