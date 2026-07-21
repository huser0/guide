<div align="center">

```
  ███████╗████████╗██╗   ██╗██████╗ ██╗   ██╗    ██████╗ ██╗   ██╗██╗██████╗ ███████╗
  ██╔════╝╚══██╔══╝██║   ██║██╔══██╗╚██╗ ██╔╝    ██╔══██╗██║   ██║██║██╔══██╗██╔════╝
  ███████╗   ██║   ██║   ██║██████╔╝ ╚████╔╝     ██║   ██║██║   ██║██║██║  ██║█████╗
  ╚════██║   ██║   ██║   ██║██╔═══╝   ╚██╔╝      ██║   ██║██║   ██║██║██║  ██║██╔══╝
  ███████║   ██║   ╚██████╔╝██║        ██║       ██████╔╝╚██████╔╝██║██████╔╝███████╗
  ╚══════╝   ╚═╝    ╚═════╝ ╚═╝        ╚═╝       ╚═════╝  ╚═════╝ ╚═╝╚═════╝ ╚══════╝
                      H U B
```

**Hub central de guias de estudo interativos**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Sobre o Projeto

O **Study Guides Hub** é um catálogo central que lista todos os guias de estudo interativos disponíveis. Cada guia é um projeto Vite+React independente, com seu próprio deploy. O hub serve como ponto de entrada único para acessar qualquer guia.

### Guias atuais

| Guia | Status | Descrição |
|---|---|---|
| **Quarkus Guide** | ✅ Disponível | Spring → Quarkus para desenvolvedores Java |
| **S3 Solutions Architect Guide** | ✅ Disponível | Amazon S3 para AWS SAA-C03 |
| **EC2 Solutions Architect Guide** | 🔄 Em breve | Amazon EC2 para AWS SAA-C03 |

---

## Tecnologias

- **React 19** — UI
- **Vite 8** — Build e dev server
- **lucide-react** — Ícones

---

## Desenvolvimento Local

```bash
cd guide
npm install
npm run dev        # → http://localhost:5173
npm run build      # Build de produção
npm run preview    # Preview do build
```

---

## Como Adicionar um Novo Guia

1. Crie seu projeto de guia no formato Vite+React (veja `quarkus-study-guide-for-team/` como template).
2. Faça o deploy na Vercel (ou onde preferir).
3. Edite `src/data/guides.json` neste projeto e adicione:

```json
{
  "id": "meu-guia",
  "title": "Meu Guia",
  "subtitle": "Subtítulo",
  "description": "Descrição curta do guia.",
  "tags": ["Tag1", "Tag2"],
  "status": "available",
  "url": "https://meu-guia.vercel.app",
  "icon": "MG",
  "theme": "neutral"
}
```

4. (Opcional) Se quiser um tema visual próprio, adicione uma chave em `src/theme/themes.js`.
5. Faça deploy do hub — o card do novo guia aparecerá automaticamente.

---

## Estrutura do Projeto

```
guide/
├── src/
│   ├── data/
│   │   └── guides.json       ← Lista de guias (adicione aqui)
│   ├── theme/
│   │   └── themes.js          ← Mapa de cores por tema
│   ├── components/
│   │   ├── Header.jsx         ← Header fixo
│   │   ├── GuideCard.jsx      ← Card de guia (suporta available/coming-soon)
│   │   └── ContributeCard.jsx ← Card "adicionar novo guia"
│   ├── App.jsx                ← Hero + grid de cards
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.svg
├── vercel.json
├── vite.config.js
└── package.json
```

---

## Deploy na Vercel

```bash
npm install -g vercel
vercel --prod
```

O arquivo `vercel.json` já está configurado com SPA routing.

---

<div align="center">

Feito para centralizar o conhecimento da comunidade

</div>
