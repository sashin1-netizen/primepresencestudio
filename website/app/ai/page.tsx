import { notFound } from "next/navigation";import PageShell from "@/components/PageShell";import { privatePreviewEnabled } from "@/lib/preview";
export const metadata = { title: "Studio Tools", robots: { index: false, follow: false } };
export default function Page(){if(!privatePreviewEnabled)notFound();return <PageShell eyebrow="Studio tools" title="This experience is not publicly available." intro="This route is reserved for a future, fully implemented studio tool. It does not currently collect briefs, generate quotes or provide automated advice." /> }
