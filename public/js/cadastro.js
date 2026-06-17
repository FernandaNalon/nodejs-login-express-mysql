// Esta constante armazenará os parametros encontrados através da URL
const parametros = new URLSearchParams(window.location.search);

// Esta constante irá armazenar o valor que vier junto a chave "erro" na URL
const erro = parametros.get('erro');