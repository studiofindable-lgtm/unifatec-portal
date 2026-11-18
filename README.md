# Unifatec · Portal do Aluno (protótipo)

Protótipo **mobile-first** de portal universitário em HTML/CSS/JS puro, sem backend.

## Estrutura

```
unifatec-portal/
├── index.html        # estrutura das telas e barra de abas
├── css/style.css     # visual (cores, carteirinha, abas, painéis)
├── js/
│   ├── data.js       # DADOS DO ALUNO (edite aqui)
│   └── app.js        # navegação, aba Tudo, painéis, carteirinha/QR
├── assets/
│   └── pietra.jpg    # foto do aluno
├── .nojekyll         # necessário para o GitHub Pages
└── README.md
```

## Telas

- **Início** – resumo do aluno, acesso rápido, aulas do dia, avisos
- **Tudo** – todos os serviços por categoria, com busca
- **Carteirinha** – frente/verso, QR code e relógio ao vivo
- **Perfil** – dados do aluno

## Como editar

- Trocar aluno, curso, CPF, foto: `js/data.js`
- Adicionar serviço na aba Tudo: lista `CATS` em `js/app.js`
- Mudar cores: variáveis `:root` em `css/style.css`

## Rodar

Abra o `index.html` no navegador (modo mobile do DevTools). GitHub Pages: *Settings → Pages → `main` / root*.

## Aviso

Projeto de demonstração, dados fictícios, sem validade como documento oficial. O logo é carregado do site da instituição.

## Próximos passos

Backend e login por RA, validação real do QR, upload de foto, integração com notas/financeiro/frequência.
