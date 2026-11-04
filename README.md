# Amanda Gontijo — Portfolio

Portfolio de **Amanda Gontijo**: engenheira, desenvolvedora de IA, criadora de conteúdo, leitora e artista.

## Tecnologias

Site estático, sem dependências nem etapa de build:

- HTML5
- CSS3 (Grid, gradiente, cards translúcidos)
- JavaScript puro (efeito de digitação na capa, menu com seção ativa)
- Fontes [Andika](https://fonts.google.com/specimen/Andika) e [Inter](https://fonts.google.com/specimen/Inter)

## Estrutura

```
.
├── index.html            # página única com todas as seções
├── assets/
│   ├── css/style.css     # todos os estilos
│   ├── js/main.js        # interações
│   └── img/              # fotos e favicon
└── .github/workflows/
    └── deploy.yml        # publicação automática no GitHub Pages
```

## Rodar localmente

Basta abrir o `index.html` no navegador. Para simular um servidor de verdade:

```bash
# com Python
python -m http.server 8000

# ou com Node
npx serve .
```

E acesse http://localhost:8000.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `portfolio-amanda`) e envie o projeto:
   ```bash
   git add .
   git commit -m "Primeira versão do portfolio"
   git remote add origin https://github.com/SEU-USUARIO/portfolio-amanda.git
   git push -u origin main
   ```
2. No repositório, vá em **Settings → Pages** e, em **Source**, escolha **GitHub Actions**.
3. A cada `push` na branch `main` o site é publicado automaticamente em
   `https://SEU-USUARIO.github.io/portfolio-amanda/`.

> Dica: se o repositório se chamar `SEU-USUARIO.github.io`, o site fica direto em `https://SEU-USUARIO.github.io/`.

## Editar o conteúdo

- **Palavras digitadas na capa:** atributo `data-palavras` no `index.html`, separadas por `|`.
- **Habilidades:** seção `#habilidades` — edite as listas de tags.
- **Projetos:** seção `#projetos` — copie um `<article>` e troque título, texto, tags e links.
- **Links de contato:** seção `#contato` — troque os `href="#"` pelos links reais.
- **Cores:** variáveis no topo de `assets/css/style.css`.
