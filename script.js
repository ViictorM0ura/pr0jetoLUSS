// Dados simulados (no futuro, eles virão do banco de dados)
const municipios = [
    { municipio: 'Andaraí', ano: 2000, areaHa: '45.655,41', nome: 'Formação Florestal', bacia: 'Alto' },
    { municipio: 'Andaraí', ano: 2000, areaHa: '156,29', nome: 'Área Urbanizada', bacia: 'Alto' },
    { municipio: 'Andaraí', ano: 2022, areaHa: '39.340,09', nome: 'Formação Florestal', bacia: 'Alto' },
    { municipio: 'Andaraí', ano: 2022, areaHa: '199,59', nome: 'Área Urbanizada', bacia: 'Alto' },
    { municipio: 'Anguera', ano: 2000, areaHa: '483,61', nome: 'Formação Florestal', bacia: 'Baixo' },
    { municipio: 'Anguera', ano: 2000, areaHa: '42,38', nome: 'Área Urbanizada', bacia: 'Baixo' },
    { municipio: 'Anguera', ano: 2022, areaHa: '392,61', nome: 'Formação Florestal', bacia: 'Baixo' },
    { municipio: 'Anguera', ano: 2022, areaHa: '76,89', nome: 'Área Urbanizada', bacia: 'Baixo' },
    { municipio: 'Mucugê', ano: 2000, areaHa: '24.110,54', nome: 'Formação Florestal', bacia: 'Alto' },
    { municipio: 'Mucugê', ano: 2000, areaHa: '49,39', nome: 'Área Urbanizada', bacia: 'Alto' },
    { municipio: 'Mucugê', ano: 2022, areaHa: '22.500,31', nome: 'Formação Florestal', bacia: 'Alto' },
    { municipio: 'Mucugê', ano: 2022, areaHa: '88,21', nome: 'Área Urbanizada', bacia: 'Alto' }
];

// Função para inserir os dados na tabela
function carregarDados() {
    const tabela = document.getElementById('data-table');

    municipios.forEach((municipio) => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${municipio.municipio}</td>
            <td>${municipio.ano}</td>
            <td>${municipio.areaHa}</td>
            <td>${municipio.nome}</td>
            <td>${municipio.bacia}</td>
        `;

        tabela.appendChild(linha);
    });
}

// Função para filtrar a tabela com base na pesquisa
function filtrarTabela() {
    const input = document.getElementById('searchInput');
    const filter = normalizarTexto(input.value);
    const tabela = document.getElementById('data-table');
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 0; i < linhas.length; i++) {
        const colunaMunicipio = linhas[i].getElementsByTagName('td')[0]; // primeira coluna: Município

        if (colunaMunicipio) {
            const municipioValor = colunaMunicipio.textContent || colunaMunicipio.innerText;

            // Verifica se o valor do input está presente no município ou no código
            if (normalizarTexto(municipioValor).indexOf(filter) > -1) {
                linhas[i].style.display = "";
            } else {
                linhas[i].style.display = "none";
            }
        }
    }
}

function normalizarTexto(texto) {
    return texto.toLowerCase()
                .replace(/á|à|â|ã/g, 'a')
                .replace(/é|è|ê/g, 'e')
                .replace(/í|ì|î/g, 'i')
                .replace(/ó|ò|ô|õ/g, 'o')
                .replace(/ú|ù|û/g, 'u')
                .replace(/ç/g, 'c')
                .replace(/ñ/g, 'n');
}

window.onload = carregarDados;
