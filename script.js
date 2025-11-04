document.getElementById('water-form').addEventListener('submit', function (e) {
    // 1. Previne o comportamento padrão de recarregar a página ao submeter o formulário
    e.preventDefault();

    // 2. Captura os valores de entrada
    const peso = parseFloat(document.getElementById('peso').value);
    const condicoesClimaticas = document.getElementById('condicoes-climaticas').value;
    const atividade = document.getElementById('atividade').value;

    // 3. Validação básica para garantir que o peso é um número válido
    if (isNaN(peso) || peso <= 0) {
        document.getElementById('quantidade-agua').textContent = "Por favor, insira um peso válido.";
        return; // Sai da função se o peso for inválido
    }

    // 4. Cálculo Base (30 ml por kg é um valor comum de referência)
    let quantidadeAgua = peso * 35; // Alterei para 35ml/kg (valor mais comum em muitas referências)

    // 5. Ajustes dependendo das condições climáticas
    if (condicoesClimaticas === 'quente') {
        quantidadeAgua += 500; // Adiciona 500ml para clima quente
    } else if (condicoesClimaticas === 'frio') {
        // Geralmente não se subtrai no frio, mas para seguir sua lógica, podemos fazer isso.
        // Vou manter o ajuste para Frio, mas asseguro que o valor não seja negativo.
        quantidadeAgua -= 500;
        if (quantidadeAgua < peso * 30) { // Garante um mínimo razoável (30ml/kg)
            quantidadeAgua = peso * 30;
        }
    } 
    // Se for 'normal', não há alteração.

    // 6. Ajustes dependendo da atividade física
    if (atividade === 'moderado') {
        quantidadeAgua += 350; // Adiciona 350ml para atividade moderada
    } else if (atividade === 'alto') {
        quantidadeAgua += 500; // Adiciona 500ml para atividade alta
    }

    // 7. Exibindo o resultado formatado (convertendo para Litros e mantendo ml)
    const quantidadeLitros = (quantidadeAgua / 1000).toFixed(2).replace('.', ','); // Exemplo: 2.50
    
    document.getElementById('quantidade-agua').textContent = `${quantidadeLitros} Litros (${quantidadeAgua.toFixed(0)} ml)`;
});