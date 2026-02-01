# Fluxo de Cadastro - FidesFoodFi

## Ordem Correta das Páginas a partir de cadastro-tipo-pessoa

### 🚀 Ponto de Partida
- **cadastro-tipo-pessoa.jsx** ← Início do fluxo organizado

---

## 📋 Fluxo Principal

### 🔹 Pessoa Física (PF)
1. **cadastro-tipo-pessoa.jsx** → Seleciona "Pessoa Física"
2. **cadastro-rg.jsx** ← Dados do RG
3. **cadastro-data-nascimento.jsx** ← Data de nascimento
4. **cadastro-endereco.jsx** ← Endereço completo
5. **cadastro-telefone.jsx** ← Telefone
6. **cadastro-email.jsx** ← E-mail
7. **cadastro-sucesso.jsx** ← Página de sucesso PF

---

### 🔹 Pessoa Jurídica (PJ)
1. **cadastro-tipo-pessoa.jsx** → Seleciona "Pessoa Jurídica"
2. **cadastro-cnpj.jsx** ← CNPJ da empresa
3. **cadastro-razao-social.jsx** ← Razão Social
4. **cadastro-nome-empresa.jsx** ← Nome Fantasia
5. **cadastro-cpf-responsavel.jsx** ← CPF do responsável
6. **cadastro-endereco.jsx** ← Endereço da empresa
7. **cadastro-telefone.jsx** ← Telefone comercial
8. **cadastro-email.jsx** ← E-mail empresarial
9. **cadastro-sucesso-business.jsx** ← Página de sucesso PJ

---

## 🔄 Páginas Anteriores (Pré-requisitos)
- **landing-page.jsx** ← Página inicial
- **cadastro-inicial.jsx** ← Início do cadastro
- **cadastro-nome.jsx** ← Nome do usuário

---

## 📊 Validações e Armazenamento

### localStorage Keys Utilizadas:
- `cadastroApelido` ← Apelido do usuário
- `cadastroTipoPessoa` ← 'pf' ou 'pj'
- `cadastroRG` ← RG (PF)
- `cadastroOrgaoExpedidor` ← Órgão expedidor (PF)
- `cadastroDataExpedicao` ← Data expedição (PF)
- `cadastroDataNascimento` ← Data nascimento (PF)
- `cadastroCNPJ` ← CNPJ (PJ)
- `cadastroRazaoSocial` ← Razão Social (PJ)
- `cadastroNomeEmpresa` ← Nome Fantasia (PJ)
- `cadastroCPFResponsavel` ← CPF responsável (PJ)
- `cadastroEndereco` ← Endereço (ambos)
- `cadastroTelefone` ← Telefone (ambos)
- `cadastroEmail` ← E-mail (ambos)
- `cadastroCompleto` ← Dados completos (sucesso)

---

## 🎯 Regras de Navegação

### Validações em cada página:
- Verificar dados anteriores obrigatórios
- Validar tipo de pessoa (pf/pj)
- Redirecionar para página anterior se faltar dados
- Permitir navegação apenas para próxima página após validação

### Segurança:
- Cada página valida se está no fluxo correto
- Redirecionamento automático se tentar acesso direto
- Limpeza de dados inválidos

---

## 📝 Observações Importantes

1. **Ordem Fixa**: Não pular etapas do fluxo
2. **Validação Cruzada**: Cada página verifica dados anteriores
3. **Fluxos Separados**: PF e PJ têm caminhos diferentes
4. **Convergência**: Ambos terminam em páginas de sucesso diferentes
5. **Persistência**: Dados salvos em localStorage durante todo o fluxo

---

## 🔗 Referências Rápidas

- **PF**: Pessoa Física → cadastro-sucesso.jsx
- **PJ**: Pessoa Jurídica → cadastro-sucesso-business.jsx
- **Voltar**: Cada página tem botão para retornar à anterior
- **Cancelar**: Botão para retornar ao início (landing-page)
