var router = require('./router');

var app = router(3412);

var contatos = [
    {
        nome: "Pedro",
        telefone: "999999999",
        data: new Date(),
        operadora: {
            nome: "Oi",
            codigo: "14",
            categoria: "Celular"
        }
    },
    {
        nome: "Ana",
        telefone: "999999998",
        data: new Date(),
        operadora: {
            nome: "Vivo",
            codigo: "15",
            categoria: "Celular"
        }
    },
    {
        nome: "Maria",
        telefone: "999999997",
        data: new Date(),
        operadora: {
            nome: "Tim",
            codigo: "41",
            categoria: "Celular"
        }
    }
];

var operadoras = [
    {
        nome: "Oi",
        codigo: "14",
        categoria: "Celular"
    },
    {
        nome: "Vivo",
        codigo: "15",
        categoria: "Celular"
    },
    {
        nome: "Tim",
        codigo: "41",
        categoria: "Celular"
    },
    {
        nome: "GVT",
        codigo: "25",
        categoria: "Fixo"
    },
    {
        nome: "Embratel",
        codigo: "21",
        categoria: "Fixo"
    }
];

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.post('/contatos', function (req, res) {
    res.end();
});