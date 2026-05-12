import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
  className?: string;
}

const variants = {
  primary: "bg-brand-blue text-white hover:bg-brand-navy",
  secondary: "bg-white text-brand-blue border border-brand-blue hover:bg-blue-50",
  outline: "bg-transparent text-white border border-white hover:bg-white/10",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 " +
    variants[variant] +
    " " +
    className;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
