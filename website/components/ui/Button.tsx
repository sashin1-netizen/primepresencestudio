import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition duration-300";
  const styles =
    variant === "primary"
      ? "bg-[#C8A348] text-black hover:scale-105"
      : "border border-[#C8A348] text-[#C8A348] hover:bg-[#C8A348] hover:text-black";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${styles} ${className}`}>{children}</button>;
}
