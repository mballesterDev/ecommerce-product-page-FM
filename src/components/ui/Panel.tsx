import type { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  id: string;
  title: string;
  backTo: string;
  backLabel: string;
  className?: string;
  children: ReactNode;
}

// Tarjeta blanca con cabecera (título + enlace para volver)
export const Panel = ({ id, title, backTo, backLabel, className = "", children }: Props) => {
  return (
    <section
      aria-labelledby={id}
      className={`w-full bg-white rounded-xl shadow-[0_20px_50px_-20px_hsl(220_13%_13%/0.35)] ${className}`}
    >
      <header className="flex items-center justify-between px-6 py-5 border-b border-grayish-blue/40">
        <h2 id={id} className="text-lg font-bold text-very-dark-blue">
          {title}
        </h2>
        <Link
          to={backTo}
          className="text-sm font-bold text-dark-grayish-blue hover:text-orange transition-colors"
        >
          ← {backLabel}
        </Link>
      </header>

      {children}
    </section>
  );
};
