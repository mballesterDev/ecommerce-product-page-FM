import type { ReactNode } from "react";

// Fondo gris y contenido centrado en la pantalla (carrito, checkout...)
export const CenteredPage = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen grid place-items-center bg-light-grayish-blue px-4 py-12">
      {children}
    </main>
  );
};
