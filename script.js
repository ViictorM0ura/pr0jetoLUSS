// Dados simulados (no futuro, eles virão do banco de dados)
const municipios = [
    { municipio: 'São Paulo', ano: 2023, codigo: '01000-000', area: 1521.11, nome: 'São Paulo', bacia: 'Bacia do Alto Tietê' },
    { municipio: 'Rio de Janeiro', ano: 2023, codigo: '20000-000', area: 1182.30, nome: 'Rio de Janeiro', bacia: 'Bacia da Baía de Guanabara' },
    { municipio: 'Belo Horizonte', ano: 2023, codigo: '30000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Bahia', ano: 2023, codigo: '40000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Minas', ano: 2023, codigo: '50000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Curitiba', ano: 2023, codigo: '60000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
    { municipio: 'Acre', ano: 2023, codigo: '70000-000', area: 331.40, nome: 'Belo Horizonte', bacia: 'Bacia do São Francisco' },
];

// Função para inserir os dados na tabela
function carregarDados() {
    const tabela = document.getElementById('data-table');

    municipios.forEach((municipio) => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${municipio.municipio}</td>
            <td>${municipio.ano}</td>
            <td>${municipio.codigo}</td>
            <td>${municipio.area}</td>
            <td>${municipio.nome}</td>
            <td>${municipio.bacia}</td>
        `;

        tabela.appendChild(linha);
    });
}

// Função para filtrar a tabela com base na pesquisa
function filtrarTabela() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const tabela = document.getElementById('data-table');
    const linhas = tabela.getElementsByTagName('tr');

    for (let i = 0; i < linhas.length; i++) {
        const colunaMunicipio = linhas[i].getElementsByTagName('td')[0]; // primeira coluna: Município
        const colunaCodigo = linhas[i].getElementsByTagName('td')[2]; // terceira coluna: Código (CEP)

        if (colunaMunicipio || colunaCodigo) {
            const municipioValor = colunaMunicipio.textContent || colunaMunicipio.innerText;
            const codigoValor = colunaCodigo.textContent || colunaCodigo.innerText;

            // Verifica se o valor do input está presente no município ou no código
            if (municipioValor.toLowerCase().indexOf(filter) > -1 || codigoValor.toLowerCase().indexOf(filter) > -1) {
                linhas[i].style.display = "";
            } else {
                linhas[i].style.display = "none";
            }
        }
    }
}

window.onload = carregarDados;
