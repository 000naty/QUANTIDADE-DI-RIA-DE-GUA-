document.getElementById('water-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const condicoesClimaticas = document.getElementById('condicoes-climaticas').value;
    const atividade = document.getElementById('atividade').value;

    let quantidadeAgua = peso * 30;

    // Ajustes dependendo das condições climáticas
    if (condicoesClimaticas === 'quente') {
        quantidadeAgua += 500;
    }

    // Ajustes dependendo da atividade física
    if (atividade === 'moderado') {
        quantidadeAgua += 350;
    } else if (atividade === 'alto') {
        quantidadeAgua += 500;
    }

    // Exibindo o resultado
    document.getElementById('quantidade-agua').textContent = `${quantidadeAgua} ml`;
});
