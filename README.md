# VitalCare — Landing Page (Next.js)

Landing page profissional para a Clínica VitalCare, desenvolvida com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Stack

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Fontes**: Plus Jakarta Sans (Google Fonts)
- **Animações**: CSS keyframes via Tailwind + IntersectionObserver (sem dependências extras)

## 📁 Estrutura de Pastas

```
vitalcare-nextjs/
├── app/
│   ├── globals.css        # Estilos globais, variáveis CSS, utilitários
│   ├── layout.tsx         # Root layout com metadata e fonte
│   └── page.tsx           # Página principal (composição das sections)
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navbar sticky com scroll effect e mobile menu
│   │   └── Footer.tsx     # Footer completo com colunas e redes sociais
│   ├── sections/
│   │   ├── Hero.tsx       # Hero section com CTA, floating cards e imagem
│   │   ├── Stats.tsx      # Faixa de estatísticas/confiança
│   │   ├── Specialties.tsx # Grid de especialidades com ícones
│   │   ├── Testimonials.tsx# Cards de depoimentos com avatars iniciais
│   │   └── CtaBanner.tsx  # Benefícios + Banner de conversão final
│   └── ui/
│       ├── Button.tsx         # Botão reutilizável com variantes e tamanhos
│       ├── SectionHeader.tsx  # Cabeçalho de seção (eyebrow, título, descrição)
│       └── AnimatedSection.tsx# Wrapper com IntersectionObserver para animações
├── hooks/
│   └── useActiveSection.ts    # Hook para detectar seção ativa no scroll
├── lib/
│   └── data.ts                # Dados estáticos centralizados (nav, specs, depoimentos)
├── public/
│   └── images/                # Imagens do projeto (doctor.png, etc.)
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## 🎨 Melhorias em relação ao projeto original

### UI/UX
- Hierarquia visual clara com eyebrow labels, títulos e subtítulos bem definidos
- Floating cards no Hero com avaliação e total de pacientes
- Underline animado no logo e links do nav
- Indicador de seção ativa no header via IntersectionObserver
- Scroll suave nativo via CSS (`scroll-behavior: smooth`)
- Scrollbar personalizada com cores da marca

### Componentes
- `Button` com variantes (`primary`, `outline`, `ghost`) e tamanhos (`sm`, `md`, `lg`)
- `AnimatedSection` para scroll-reveal sem biblioteca externa
- `SectionHeader` reutilizável com eyebrow, título e descrição
- Hook `useActiveSection` separado e reutilizável

### Conteúdo
- Stats section com números de credibilidade (15+ anos, 50+ médicos, 20k+ pacientes)
- CTA Banner final com benefícios + bloco de conversão duplo (agendar + ligar)
- Footer completo com 4 colunas: marca, navegação, especialidades e contato
- Descrições para cada especialidade (não apenas nome)

### Performance & Qualidade
- Next.js Image com `priority` no Hero
- Metadata completa (SEO, OG)
- TypeScript estrito
- Acessibilidade: `aria-label`, `focus-visible`, `alt` em imagens
- Nenhuma dependência de animação (sem Framer Motion, sem ScrollReveal)

## 🛠️ Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📦 Build para produção

```bash
npm run build
npm start
```
