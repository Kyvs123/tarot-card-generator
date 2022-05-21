const deck = [
    {
        id: 0,
        img: "./icons/0-fool.png",
        name: 'O Louco',
        text: "Quando essa carta aparece significa que você progrediu na sua aprendizagem espiritual e aprendeu uma lição. No entanto, você agora precisa começar um novo ciclo, por isso voltou à estaca 0, a carta o Louco. Ela simboliza a excentricidade e a descoberta de um mundo novo. Novidades a vista e com elas vem a insegurança e a incerteza, mas também a promessa de que tudo pode acontecer. Essa carta sinaliza que você está pronto e ansiando por novas aventuras."
    },
    {
        id: 'I',
        img: "./icons/01-magician.png",
        name: 'O Mago',
        text: "Simboliza habilidade para lidar com os problemas que chegam até você.  O que não signfica que você tem super poderes, mas sim que você se utiliza do que tem à disposição para vencer as dificuldades. É uma carta positiva que sinaliza superação de desafios. Ela mostra que a magia está no ar, que é possível fazer e acontecer. No entanto ela pede cuidado para lidar com o assunto em questão. Não se deixe influenciar."
    },
    {
        id: 'II',
        img: './icons/02-priestess.png',
        name: 'A Sacerdotisa',
        text: "Esta carta representa uma mulher sábia, que detém o conhecimento e a intuição necessários para agir da forma mais adequada. Ela vem te dizer que você está preparado para resolver a situação em questão, basta confiar na sua intuição e agir com prudência. Não se precipite. Seja para assuntos amorosos, profissionais ou financeiros, mantenha os seus planos em segredo até que as circunstâncias sejam favoráveis."
    },
    {
        id: 'III',
        img: './icons/03-empress.png',
        name: 'A Imperatriz',
        text: 'Muito positiva, essa carta é a realização. Simboliza a recompensa pelos esforços feitos. Também indica a vitória por meio da sabedoria, do bom uso das palavras, da diplomacia e da sensibilidade. A Imperatriz representa o poder feminino que não procura impor-se pela força, mas alcança suas metas pela perseverança, autoconfiança e espírito positivo.'
    },
    {
        id: 'IV',
        img: './icons/04-emperor.png',
        name: 'O Imperador',
        text: "Representa a concretização da conquista do que se deseja. Isso porque você sabe comandar as situações e gerir os acontecimentos da forma mais proveitosa para si mesmo. Esta carta se refere principalmente às conquistas materiais e financeiras, prosperidade e riqueza. Simboliza o sucesso no objetivo. No trabalho o Imperador indica uma promoção, aumento de rendimentos e/ou reconhecimento profissional. Na saúde esta carta traz segurança e bem-estar, a cura de uma doença e o equilíbrio físico e emocional. Já na vida amorosa, o Imperador anuncia um relacionamento estável e seguro."
    },
    {
        id: 'V',
        img: './icons/05-pope.png',
        name: 'O Papa',
        text: "Em alguns tarôs, esse Arcano Maior é substituído pela carta O Hierofante. Esta carta representa o conhecimento adquirido por meio do estudo, dos livros, dos professores. Simboliza a sabedoria. Além disso, também é símbolo da fé e confiança em Deus, em algo maior que nos orienta e protege. Assim, quando esta carta aparece em uma leitura, seu conselho é para que você saiba esperar com paciência e com fé e entregue o assunto em questão nas mãos de Deus. Outra sugestão é que busque conselhos de alguém mais sábio. Nas questões do amor, esta carta pode anunciar um casamento. Já no que diz respeito à saúde, pode estar te aconselhando a fazer um check- up."
    },
    {
        id: 'VI',
        img: './icons/06-lovers.png',
        name: 'Os Enamorados',
        text: "Esta carta indica que provavelmente você precisa fazer uma escolha. Se você atualmente não está vivendo esse tipo de situação, pode indicar que um novo caminho irá surgir na sua vida e você terá que tomar uma decisão importante. Essa dúvida poderá surgir em qualquer área da sua vida, podendo ser tanto uma dúvida entre dois parceiros amorosos quanto entre duas propostas de emprego. Nessa situação, ela te orienta a aprender a ouvir a sua intuição, já que a resposta que procura está dentro de você mesmo. Normalmente esta carta aparece para dizer que é necessário deixar o passado para trás e iniciar uma nova fase na vida. Se a pergunta tiver sido em relação à saúde, é um alerta para você cuidar de órgãos duplos, como os rins, os pulmões, os olhos... Em questões médicas, aconselha você procurar uma segunda opinião."
    },
    {
        id: 'VII',
        img: './icons/07-chariot.png',
        name: 'O Carro',
        text: 'A carta o Carro é muito positiva e significa sucesso na questão abordada. Irá alcançar o que deseja através do seu esforço, empenho e dedicação. Esta carta geralmente anuncia uma evolução rápida para a situação em que você quer chegar. Também representa mudanças positivas na situação atual. No entanto, esta carta também adverte que você precisa refletir e analisar as situações com cautela. Se "O Carro" apareceu respondendo uma pergunta relacionada a sua saúde, está te aconselhando a ter prudência para evitar acidentes. Em situação de doença, ela indica que a cura virá, mas que você precisa agir rapidamente. Se a questão for sua vida profissional, indica sucesso, realização e bons resultados. Se for relacionada a vida amorosa, a carta vem te dizer que um novo amor está a caminho e vai chegar de repente em sua vida.'
    },
    {
        id: 'VIII',
        img: './icons/08-justice.png',
        name: 'A Justiça',
        text: "Simboliza que a justiça será feita, mas você precisa usar a racionalidade e o sentido prático. Não deve se deixar levar por impulsos ou pelas emoções. Você precisa pensar bem antes de agir, analisar todos os pontos e evitar excessos. O significado desta carta é: está na hora de colher os frutos de acordo com as atitudes que tomou. Lembre-se que a Justiça é uma faca de dois gumes: ela pode te punir pelos seus erros ou te recompensar pelos acertos. Esta carta também alerta para problemas com a justiça, portanto mantenha-se atento para não cometer  infrações. Se ela surgir respondendo à pergunta sobre saúde, saiba que precisa visitar um médico para fazer exames de rotina.Caso a pergunta seja relacionada à vida material, tenha prudência com suas finanças, seja rigoroso e faça escolhas justas. Para a vida amorosa, a carta aconselha você a analisar as suas emoções e ser prudente. Não deixe o amor te cegar!"
    },
    {
        id: 'IX',
        img: './icons/09-hermit.png',
        name: 'The Eremita',
        text: "Esta carta vem te dizer que você precisa se voltar para dentro de si para encontrar as respostas para as suas perguntas.É necessário um tempo de solidão para ouvir a sua voz interior.Reduza o ritmo acelerado da sua vida, silencie os ruídos ao redor. Simboliza introspecção, a revisão de valores internos e busca do seu verdadeiro 'eu'. O Eremita também te orienta a ser prudente. Pare de fazer o que estava fazendo em relação a sua pergunta, silencie em busca de respostas e só avance quando estiver seguro do que deve fazer. Sobre questões materiais, o conselho é ser cuidadoso e evitar riscos desnecessários. É um período de espera e não de ação. No que diz respeito à saúde, faça exames e se previna. Nas questões amorosas, entenda que é preferível estar só do que mal acompanhado."
    },
    {
        id: 'X',
        img: './icons/10-wheel.png',
        name: 'A Roda da Fortuna',
        text: 'Uma das cartas mais simbólicas do Tarot, a Roda da Fortuna representa o ciclo da vida: o que está embaixo pode ficar em cima e vice-versa. Ou seja, a sua sorte está sempre em movimento. Ela também indica mudança, seja de relacionamento, de lar, de amizades. Esta carta ainda aponta uma nova porta ou um acaso. Ela mostra que algo está marcado para acontecer, não importando se alguém tentar mudar. É uma carta que fala de probabilidades, mas nem sempre é boa coisa.'
    },
    {
        id: 'XI',
        img: './icons/11-strength.png',
        name: 'A Força',
        text: "Carta muito positiva, simboliza sua força para superar os obstáculos da situação em questão. Ela representa sua força interior e sabedoria. Esta carta te diz para agir porque você está em uma situação oportuna e tem grandes chances de ser bem- sucedido no que for fazer. Se a questão for referente a dinheiro, indica estabilidade, segurança e possíveis ganhos extras. No que tange à saúde, esta carta diz que a cura está a caminho. No trabalho, indica uma promoção ou novo emprego. É uma carta que representa domínio material. Já nas questões amorosas, fique sabendo que você terá um novo vigor no seu relacionamento.O amor de vocês é forte e supera tudo. Caso esteja sozinho, esta carta indica uma nova paixão. Seu poder de conquista está em alta, então arrisque-se!"
    },
    {
        id: 'XII',
        img: './icons/12-hanged.png',
        name: 'O Enforcado',
        text: "Esta carta revela que você está passando ou irá passar por um período em que terá que sacrificar algumas coisas na sua vida. No entanto, se você souber aceitar, aprenderá muito. Você sairá dessa fase mais forte espiritualmente. Neste momento, você precisa ser prudente. É hora de parar e avaliar a situação. Se a carta saiu como resposta a uma questão de saúde, é sinal de que você está frágil e precisa se cuidar melhor. No que tange a dinheiro, a mensagem é para você segurar os gastos, sacrificar alguns passeios, compras e outras coisas que gosta para economizar. Já no quesito amor, esta carta indica que a relação está estagnada. Você precisa mudar de atitude para que seu relacionamento possa melhorar. Caso esteja só, terá de esperar porque essa situação irá se manter por mais um tempo."
    },
    {
        id: 'XIII',
        img: './icons/13-death.png',
        name: 'A Morte',
        text: "Ao contrário do que parece, esta é uma carta positiva. Ela não simboliza a morte física, mas sim a morte de tudo aquilo que não nos serve mais. Você tem que jogar fora o que não lhe faz bem para abrir espaço para coisas novas e melhores. Ela significa o fim de um ciclo, que pode ser doloroso no começo, mas sua vida precisa se renovar. Você precisa se libertar do passado para que consiga receber as bênçãos que o futuro trará. Representa ação, mudança e transformação. Para questões de  saúde, o conselho é adotar hábitos mais saudáveis. No quesito dinheiro, fique feliz porque a carta vem mostrar que seus problemas financeiros serão resolvidos, mas pra isso você precisará mudar de estratégia. Pode ser uma mudança de emprego ou uma nova fase na vida profissional. Para a vida amorosa, esta carta pode indicar que um relacionamento está chegando ao fim. E isso é bom porque provavelmente a relação já não te traz mais felicidade. Outra interpretação é a de que a crise que você está vivendo no seu relacionamento será superada e seu amor renovado."
    },
    {
        id: 'XIV',
        img: './icons/14-temper.png',
        name: 'A Temperança',
        text: "Representa equilíbrio. De modo geral, indica que você entrará numa boa fase da vida, mas que precisa ter equilíbrio nas suas ações para alcançar o sucesso. Talvez você tenha que esperar para realizar algum desejo, já que passará por um período de tranquilidade e harmonia, sem grandes mudanças nem acontecimentos marcantes. Sobre a saúde, ela indica bem-estar e traz a recuperação, lenta, mas segura. No dinheiro, indica que alcançará o equilibrio financeiro e saberá administrar suas finanças com bom senso. Terá estabilidade e segurança. Já no amor, a mensagem é de que haverá harmonia afetiva no seu relacionamento, além de romance e partilha. Dialogue mais com o seu par, a expressão de sentimentos está favorecida."
    },
    {
        id: 'XV',
        img: './icons/15-devil.png',
        name: 'O Diabo',
        text: "Como o próprio nome já diz, esta carta está relacionada com energias negativas. Quando ela aparece você deve prestar atenção especial às suas atitudes, pensamentos e ações. Também é preciso ficar de olho no ambiente que o rodeia. Um perigo pode estar chegando, por isso deve-se agir com cautela, sem impulsos. Esta carta também está ligada aos nossos vícios e medos. Ela te diz que você está acorrentado, porém por vontade própria. Você está sendo vítima das suas próprias obsessões. Tenha cuidado com sua saúde, pois podem surgir problemas repentinos ou uma doença pode se agravar. No que se refere ao dinheiro, preserve muito bem o que tem. No entanto, esta carta também pode indicar entrada inesperada de dinheiro. Fique atento para não perder as oportunidades. Se sua questão é amorosa, esta carta alerta para não embarcar em paixões às cegas. Ela está ligada ao sexo, aos romances ardentes, mas é preciso ter cuidado para não perder a cabeça."
    },
    {
        id: 'XVI',
        img: './icons/16-tower.png',
        name: 'A Torre',
        text: "Quando esta carta surge em uma leitura, ela vem te alertar que você está errado em suas convicções. Se você continuar insistindo nelas, poderá entrar em colapso.Provavelmente você tem um ego inflado, é egoísta e orgulhoso.Você precisa melhorar nessas questões e tentar se equilibrar emocionalmente. Em questões de saúde, ela aponta para a necessidade de você se cuidar para evitar doenças. No que tange ao dinheiro, ela alerta para a possibilidade de grandes perdas  financeiras e que deve mudar sua forma de gerir recursos. Já no amor, esta carta anuncia uma separação. Se você não quiser que isso ocorra, precisa mudar de atitude."
    },
    {
        id: 'XVII',
        img: './icons/17-star.png',
        name: 'A Estrela',
        text: "Esta é uma das cartas mais belas do Tarot e significa luz e proteção. Ela indica que não importa qual seja a situação que você está passando, você está contando com uma ajuda espiritual e que conseguirá contornar todos os obstáculos que surgirem no seu caminho. Você entrará em uma fase de abundância e riqueza. Em questões de saúde, ela indica a cura de qualquer doença que esteja enfrentando. Na área financeira, a mensagem é que entrará dinheiro na sua vida colocando um ponto final nos seus problemas de instabilidade. Você terá sucesso e prosperidade. Já no amor, a Estrela indica que você tem um amor profundo e verdadeiro. Caso esteja sozinho, um novo amor entrará em sua vida para ficar."
    },
    {
        id: 'XVIII',
        img: './icons/18-moon.png',
        name: 'A Lua',
        text: "Esta carta representa falsas ilusões. Você deve tomar cuidado para não se iludir. É uma carta que exprime dúvida, confusão e dificuldade de discernimento. Isso porque uma parte da situação está escondida, envolta em sombras e mistérios. Por outro lado, ela pode ser positiva ao indicar uma gravidez ou a criação de uma obra de arte ou literária. Ela fala sobre algo que está se desenvolvendo em segredo. No que diz respeito à saúde, esta carta veio te aconselhar a procurar um médico e fazer exames de rotina já que pode ser que você esteja desenvolvendo alguma doença que ainda não foi detectada. Para o setor financeiro, indica recursos escondidos. Assim, há a possibilidade de você receber uma herança ou um dinheiro que não estava esperando. Também pode significar boatos e intrigas no local de trabalho. No amor esta carta vem alertar da possibilidade de você estar vivendo uma ilusão. Também pode ser que você viverá um romance secreto."
    },
    {
        id: 'XIX',
        img: './icons/19-sun.png',
        name: 'O Sol',
        text: "Esta carta simboliza a glória, o sucesso, o triunfo. Indica que seja qual for a sua pergunta, você está sob proteção e o momento é auspicioso para a concretização do que você deseja. Ela diz que a vitória é certa! Momento perfeito para você colocar ideias e projetos em prática. Trabalhos relacionados ao público, ligados à criação, aos espetáculos ou com crianças estão ainda mais protegidos. Em situações relacionadas à saúde, ela indica que você tem vitalidade, força e dinamismo e está em ótima forma. Em questões financeiras, esta carta mostra que você terá lucros, êxito e reconhecimento profissional. No amor o Sol vem te dizer que seu amor será ardente, romântico e cheio de paixão. Caso você não tenha um par, aguarde que o seu amor está a caminho!"
    },
    {
        id: 'XX',
        img: './icons/20-judgement.png',
        name: 'O Julgamento',
        text: "Simboliza o início de uma nova fase na sua vida. No entanto, você precisa colocar a mão na sua consciência e refletir se tem feito o bem. Sua vida passará por mudanças. Pode ser que você se case ou se divorcie, inicie um projeto ou o termine. No que diz respeito à saúde, esta carta indica que você deve fazer check- up para ver se está tudo bem. Na vida profissional e financeira, você poderá ser promovido o que trará o desafio de provar sua competênica. Saiba estar à altura dos desafios! Já nas questões do coração, esta carta representa futuros momentos felizes. Se estiver em um relacionamento que passa por dificuldades, é hora de ponderar, esquecer o passado e partir para outra fase na vida."
    },
    {
        id: 'XXI',
        img: './icons/21-world.png',
        name: 'O Mundo',
        text: "Uma das cartas mais positivas, indica que você terá oportunidade de conquistar o que deseja, pois conta com uma proteção especial. Você receberá a recompensa por seus esforços.Irá colher os bons frutos do seu trabalho, dedicação e empenho.Seus sonhos enfim irão se concretizar.Mas atenção, a carta O Mundo simboliza a colheita! Ou seja, você irá colher tudo! Isso significa que também poderão acontecer coisas ruins, caso a sua plantação não tenha sido boa. No quesito saúde, ela indica que você está cheio de vitalidade e em ótimo estado físico. Se está enfrentando uma doença, é sinal de que a cura está chegando. Na vida financeira, você terá sorte. Esta carta anuncia a chegada de um novo trabalho para quem está desempregado ou de uma promoção. Sua condição de vida irá melhorar. Pode indicar também um prêmio, uma boa surpresa, sucesso e fama. No que diz respeito à sua vida amorosa, o Mundo anuncia uma fase muito feliz no seu relacionamento. Pode ser que você finalmente se case ou até mesmo tenha um filho. Caso esteja só, um amor novinho em folha irá entrar na sua vida. É uma fase muito feliz, de união e afeto."
    }
]

//elementos 
const frame = document.getElementById('frame');
const cardNumber = document.getElementById('card-number');
//imagem da carta
const cardImg = document.getElementById('card-img');
const cardName = document.getElementById('card-name');
const cardText = document.getElementById('card-text')


//botão
const btn = document.getElementById('btn');
const closeBtn = document.getElementById('close');

//variavel q armazena o DOM manipulado
let card = "";

//click botão += aleatório + mostrar carta
btn.addEventListener('click', function () {
    card = Math.floor(Math.random() * deck.length)
    console.log(card)
    showCard()
})


closeBtn.addEventListener('click', function(){
    back()
    window.location.reload()
})

//manipulando os elementos para mostrar a carta
//item = variavel q armazena o index na array
function showCard() {
    const item = deck[card];
    frame.style.backgroundImage = 'none';
    cardNumber.textContent = item.id;
    cardNumber.style.display = "block";    
    cardImg.src = item.img;
    cardName.style.display = "block";
    cardName.textContent = item.name;
}
//ao clicar na carta gerada mostra o text

frame.addEventListener('click', function(){
    const item = deck[card];
    cardNumber.style.display = 'none';
    cardName.style.display = 'none';
    cardImg.style.display = 'none';
    btn.style.display = 'none';
    closeBtn.style.display = 'block' 
    cardText.textContent = item.text;
})

function back() {
    frame.style.backgroundImage = 'url(icons/back.png)'; //funfo
    closeBtn.style.display = 'none'; //funfo
    btn.style.display = 'block'; //funfo
    showCard()
    
}

//criar botão "fechar" para sobre escrever o "generate"
//descobrir como armazenar o texto no cartao