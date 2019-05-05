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
        nome: "João",
        telefone: "91299998",
        data: new Date(),
        operadora: {
            nome: "Tim",
            codigo: "41",
            categoria: "Celular"
        }
    },
    {
        nome: "José",
        telefone: "97771998",
        data: new Date(),
        operadora: {
            nome: "Oi",
            codigo: "14",
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
        categoria: "Celular",
        preco: 2
    },
    {
        nome: "Vivo",
        codigo: "15",
        categoria: "Celular",
        preco: 3
    },
    {
        nome: "Tim",
        codigo: "41",
        categoria: "Celular",
        preco: 1
    },
    {
        nome: "GVT",
        codigo: "25",
        categoria: "Fixo",
        preco: 2
    },
    {
        nome: "Embratel",
        codigo: "21",
        categoria: "Fixo",
        preco: 1
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