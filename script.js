
        function calcularSegundos() {
            // Obtém a data selecionada pelo usuário
            const dataSelecionada = document.getElementById('dataInput').value;
            
            if (!dataSelecionada) {
                document.getElementById('result').textContent = 'Por favor, selecione uma data.';
                return;
            }
            
            // Converte a data selecionada para um objeto Date
            const dataInicial = new Date(dataSelecionada);
            
            // Obtém a data e hora atual
            const dataAtual = new Date();
            
            // Calcula a diferença em milissegundos
            const diferencaMs = dataAtual - dataInicial;
            
            // Converte milissegundos para segundos
            const diferencaSegundos = Math.floor(diferencaMs / 1000);
            
            // Formata o número com separadores de milhar
            const diferencaFormatada = diferencaSegundos.toLocaleString('pt-BR');
            
            // Exibe o resultado
            document.getElementById('result').innerHTML = `
                <p>Desde o dia ${dataAtual.toLocaleDateString('pt-BR')} estamos juntos à: </p>
                <p style="font-size: 24px; color: #4CAF50; margin-top: 16px;">${diferencaFormatada} segundos</p>
                <p>(${formatarDiferenca(diferencaMs)})</p>
            `;
        }
        
        function formatarDiferenca(ms) {
            // Converte milissegundos para dias, horas, minutos e segundos
            const segundos = Math.floor(ms / 1000);
            const minutos = Math.floor(segundos / 60);
            const horas = Math.floor(minutos / 60);
            const dias = Math.floor(horas / 24);
            
            const segundosResto = segundos % 60;
            const minutosResto = minutos % 60;
            const horasResto = horas % 24;
            
            return `${dias} dias, ${horasResto} horas, ${minutosResto} minutos e ${segundosResto} segundos`;
        }
        
        // Define a data máxima como hoje (opcional)
        document.getElementById('dataInput').max = new Date().toISOString().split('T')[0];
    