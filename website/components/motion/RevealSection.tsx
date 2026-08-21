interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function RevealSection({ children, className = "" }: RevealSectionProps) {
  return <div className={className}>{children}</div>;
}
