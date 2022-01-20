const prompt = require('prompt-sync')();


console.log(`
          "Paulinho"

Paulo, TI de um pouco mais de 50 anos. 
sua função é dar suporte aos usuários, resolver e implementar soluções.
Mas, qual será o nível de satisfação que paulo possui no seu trabalho?
Para isso, foi efetuado um teste de prestatividade,
para situação de pedido de ajuda dos usuários a ele.


`)


function into(text){
    let responde = String(prompt(text))
    
    if ((responde.toLowerCase()) == 'sim'){
      return 1;
    } else {
      return 0;
    }
  
  }
  
  let pergunta1 = into('Pode formatar meu PC?')
  let pergunta2 = into('Sabe porque o wi-fi ta ruim? ')
  let pergunta3 = into('Já viu meu chamado? ')
  let pergunta4 = into('Tem uma solução ? ')
  let pergunta5 = into('Já consertou ?')
  
  let concat = pergunta1+pergunta2+pergunta3+pergunta4+pergunta5
  
  let recebe =[ 'horrivel','médio', 'ruim', 'péssimo', 'razoavel' , 'Exelente'] 
  let total = 0;
  if(concat == 'sim'){
      total = concat;
      concat++
  }

  console.log()
  console.log()

  console.log(`O teste do paulo recebeu ${concat} respostas "sim", e seu trabalho foi considerado: ${recebe[concat]}`)
