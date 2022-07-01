/*    <p class="sorveteria"><span class="qtdBuy">0x</span>Sorveteria <span class="pricePS">R$ 2/s</span></p>
      <p class="roupasVest"><span class="qtdBuy">0x</span>Roupas e Vestuários <span class="pricePS">R$ 35/s</span></p>
      <p class="restaurantes"><span class="qtdBuy">0x</span>Restaurantes <span class="pricePS">R$ 80/s</span></p>
      <p class="farmacia"><span class="qtdBuy">0x</span>Farmácia <span class="pricePS">R$ 150/s</span></p>
      <p class="hotelaria"><span class="qtdBuy">0x</span>hotelaria <span class="pricePS">R$ 250/s</span></p>
      <p class="turismo"><span class="qtdBuy">0x</span>Agência de turismo <span class="pricePS">R$ 450/s</span></p>
      <p class="agMusica"><span class="qtdBuy">0x</span>Agência de Música <span class="pricePS">R$ 1000/s</span></p>
      <p class="corretora"><span class="qtdBuy">0x</span>Corretora <span class="pricePS">R$ 10000/s</span></p>
      <p class="agronegocio"><span class="qtdBuy">0x</span>Agronegócio <span class="pricePS">R$ 20000/s</span></p>
      */

const sorv = document.querySelector('.sorveteria')
const roupasVest = document.querySelector('.roupasVest')
const restaurantes = document.querySelector('.restaurantes')
const farmacia = document.querySelector('.farmacia')
const hotelaria = document.querySelector('.hotelaria')
const turismo = document.querySelector('.turismo')
const agMusica = document.querySelector('.agMusica')
const corretora = document.querySelector('.corretora')
const agronegocio = document.querySelector('.agronegocio')
const saldoHtml = document.querySelector('.saldo-info')
const qtdSpan = document.querySelector('.qtdBuy')
const psec = document.querySelector(".psec")
const prePS = document.querySelector('.pricePS')

const workButton = document.querySelector(".work")

workButton.addEventListener('click', () => {
      meuSaldo += 0.02;
      saldoHtml.innerHTML = currency(meuSaldo)
})

let sorvQTD = 0;
let rvQTD = 0;
let restQTD = 0;
let fQTD = 0;
let hotQTD = 0;
let turQTD = 0;
let agmscQTD = 0;
let corQTD = 0;
let agroQTD = 0;

let meuSaldo = 0;


const parag = document.querySelectorAll('p')
const x = 1.55;

function exibeClick(evento) {
      if (this.classList.contains('sorveteria') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * 5)
            saldoHtml.innerHTML = currency(meuSaldo)
            sorvQTD++
            this.children[0].innerText = `${sorvQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('roupasVest') && meuSaldo >= this.getAttribute('value')) {

            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            rvQTD++
            this.children[0].innerText = `${rvQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('restaurantes') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            restQTD++
            this.children[0].innerText = `${restQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('farmacia') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            fQTD++
            this.children[0].innerText = `${fQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('hotelaria') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            hotQTD++
            this.children[0].innerText = `${hotQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('turismo') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            turQTD++
            this.children[0].innerText = `${turQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('agMusica') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            agmscQTD++
            this.children[0].innerText = `${agmscQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('corretora') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            corQTD++
            this.children[0].innerText = `${corQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else if (this.classList.contains('agronegocio') && meuSaldo >= this.getAttribute('value')) {
            meuSaldo -= this.getAttribute('value')
            this.setAttribute('value', this.getAttribute('value') * x)
            saldoHtml.innerHTML = currency(meuSaldo)
            agroQTD++
            this.children[0].innerText = `${agroQTD}x`;
            this.children[1].innerText = `${currency(this.getAttribute('value'))}`;
      } else {
            alert('vc é pobre man ;(')
      }
}

const money = 1;
const currency = function (number) {
      return new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
      }).format(number);
};


parag.forEach((item) => {
      item.addEventListener('click', exibeClick)
      saldoHtml.innerHTML = currency(meuSaldo)
})


setInterval(() => {
      moneyMachine()
}, 2500)




function moneyMachine() {
      meuSaldo += (2 * sorvQTD) + (35 * restQTD) + (80 * restQTD) + (150 * fQTD) + (250 * hotQTD) + (450 * turQTD) + (1000 * agmscQTD) + (10000 * corQTD) + (20000 * agroQTD);
      saldoHtml.innerHTML = currency(meuSaldo)
      let psecMoney = (2 * sorvQTD) + (35 * restQTD) + (80 * restQTD) + (150 * fQTD) + (250 * hotQTD) + (450 * turQTD) + (1000 * agmscQTD) + (10000 * corQTD) + (20000 * agroQTD);
      psec.innerHTML = (`${currency(psecMoney)} /2s`)
}
