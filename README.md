# ÉLARA Studio

Plataforma web de reservas para un centro de belleza, desarrollada como proyecto demostrativo por **Nexbyte Technologies**.

Permite seleccionar servicios, profesionales, fechas y horarios disponibles mediante una experiencia moderna, responsive y conectada a una base de datos PostgreSQL.

## 🌐 Demo

https://elara-nexbyte.vercel.app/

## ✨ Funcionalidades

- Reserva de servicios online
- Selección de profesional
- Consulta de disponibilidad en tiempo real
- Bloqueo de horarios ya reservados
- Validación de fechas y horarios
- Validación de formularios en frontend y backend
- Persistencia de reservas en PostgreSQL
- Prevención de reservas duplicadas
- Diseño responsive
- Modo claro y oscuro
- SEO y Open Graph
- Accesibilidad optimizada
- Arquitectura basada en Server y Client Components

## 🛠 Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Prisma ORM
- PostgreSQL
- Zod
- Vercel
- Prisma Postgres

## 📁 Arquitectura

```text
app/
├── api/
│   └── reservations/
├── generated/
├── layout.tsx
└── page.tsx

components/
├── About.tsx
├── Footer.tsx
├── Hero.tsx
├── Navbar.tsx
├── ReservationForm.tsx
├── Reservations.tsx
└── Services.tsx

lib/
├── prisma.ts
└── validations/

prisma/
├── migrations/
└── schema.prisma

public/
└── og-elara.webp