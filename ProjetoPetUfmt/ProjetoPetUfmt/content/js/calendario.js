window.onload = function () {
    var d = new Date();
    var nome_meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var mes = d.getMonth();  // irá retornar o numero do mês de 0 até 11.
    var ano = d.getFullYear(); //irá retornar o ano da data atual.
    var mes_atual = nome_meses[mes] + " " + 1 + " " + ano;
}