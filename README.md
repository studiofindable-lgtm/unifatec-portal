# Unifatec · Portal do Aluno (protótipo)

Protótipo **mobile-first** de portal universitário, feito em um único `index.html` (HTML + CSS + JS), sem backend.

## Telas

- **Início** – resumo do aluno, acesso rápido, aulas do dia e avisos
- **Tudo** – todos os serviços organizados por categoria, com busca
- **Carteirinha** – carteirinha digital (frente/verso), QR code e relógio ao vivo
- **Perfil** – dados do aluno

A foto do aluno fica em `assets/pietra.jpg` (usada na carteirinha, no Início e no Perfil).

## Aluno de teste

Pietra Soares de Oliveira · Biomedicina. Os dados ficam no objeto `S` no início do `<script>` do `index.html`; é só editar lá.

## Rodar

Abra o `index.html` no navegador (de preferência no celular ou no modo mobile do DevTools). Para publicar no GitHub Pages: *Settings → Pages → Deploy from branch → `main` / root*.

## Aviso

Projeto de demonstração. Dados fictícios, sem validade como documento oficial. O logo é carregado do site da instituição; substitua por um arquivo local em `assets/` se necessário.

## Próximos passos

- Backend/autenticação (login por RA + senha)
- Validação real do QR code da carteirinha
- Foto do aluno via upload
- Integração com notas, financeiro e frequência
