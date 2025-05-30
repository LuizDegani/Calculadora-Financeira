const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rota para cálculo de juros simples
app.post('/api/juros-simples', (req, res) => {
    const { principal, taxa, tempo } = req.body;
    const juros = principal * (taxa / 100) * tempo;
    const montante = Number(principal) + Number(juros);
    res.json({ juros, montante });
});

// Rota para cálculo de juros compostos
app.post('/api/juros-compostos', (req, res) => {
    const { principal, taxa, tempo } = req.body;
    const montante = principal * Math.pow(1 + (taxa / 100), tempo);
    const juros = montante - principal;
    res.json({ juros, montante });
});

// Rota para cálculo de parcelas
app.post('/api/parcelas', (req, res) => {
    const { valor, numeroParcelas, taxaJuros } = req.body;
    const taxaMensal = taxaJuros / 100;
    const parcela = (valor * taxaMensal * Math.pow(1 + taxaMensal, numeroParcelas)) / 
                    (Math.pow(1 + taxaMensal, numeroParcelas) - 1);
    res.json({ valorParcela: parcela });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 