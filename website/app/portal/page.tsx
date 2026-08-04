import { notFound } from "next/navigation";import PageShell from "@/components/PageShell";import { privatePreviewEnabled } from "@/lib/preview";
export const metadata = { title: "Client Portal", robots: { index: false, follow: false } };
export default function Page(){if(!privatePreviewEnabled)notFound();return <PageShell eyebrow="Client portal" title="The client portal is not active." intro="Project access, approvals and asset delivery will only be offered here after authentication and the supporting service are implemented." /> }
