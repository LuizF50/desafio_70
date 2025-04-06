document.addEventListener('DOMContentLoaded', function() {
    const analyzeButton = document.getElementById('analyzeButton');
    const resultDiv = document.getElementById('result');

    analyzeButton.addEventListener('click', function() {
        try {
            // Coletar dados da tabela
            const planetsData = [];
            
            for (let i = 1; i <= 5; i++) {
                const name = document.getElementById(`name${i}`).value;
                const size = Number(document.getElementById(`size${i}`).value);
                const distance = Number(document.getElementById(`distance${i}`).value);
                
                if (name) {
                    planetsData.push([name, size, distance]);
                }
            }
            
            // Filtrar planetas conforme critérios
            const filteredPlanets = filterPlanets(planetsData);
            
            // Exibir resultado
            if (filteredPlanets.length > 0) {
                resultDiv.innerHTML = `<p>Planetas que atendem aos critérios:</p><p>[ '${filteredPlanets.join("', '")}' ]</p>`;
            } else {
                resultDiv.textContent = 'Nenhum planeta encontrado que atenda aos critérios.';
            }
        } catch (error) {
            resultDiv.textContent = `Erro: ${error.message}`;
        }
    });
    
    function filterPlanets(planetsData) {
        return planetsData
            .filter(planet => {
                // Exclui a Terra explicitamente
                if (planet[0].toLowerCase() === 'terra') return false;
                
                // Verifica critérios: tamanho > 1000 e distância < 3000
                return planet[1] > 1000 && planet[2] < 3000;
            })
            .map(planet => planet[0]); // Retorna apenas os nomes
    }
});