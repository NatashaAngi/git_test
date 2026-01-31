
Arquivo para explicar pra mim mesmo oque eu fiz no desafio do jokenpo para não esquecer depois.

Criada a constante que guarda as opções de escolha = const opcoes = ['rock','paper','scissors']

Depois foi criada a função para lidar com a escolha do usuario. Como a escolha é feita atraves de um prompt então foi definida uma constante para guardar essa escolha, e no proprio pront já foi adicionado o metodo tolowercase, para deixar tuo minusculo e fazer com que não haja variação nas comparações posteriores. Drntro da função utilizei um if que usa o metodo includes, onde verifica se dentro das opções definidas a escolha do usuario tb se encontra, se sim retornamos a escolha, se não um alerta é enviado para que o usuario escolha uma opção valida.

Depois é criada a função que randomiza a escolha do pc. Oque essa função faz é randomizar um numero de 0 a 2 e depois este numero é localizado dentro do array de opções, o numero randomizado é referente ao indice de alguma das opções 

Em seguida pe criada a função de comparação. Esta função cria um dicionaro que define a regra de quem ganha de quem, depois um if é aplicado para comparar as escolhas e retornar o resultado de quem ganhou a rodada.

Por fim temos a função que executa tudo como um jogo, rodando um while até que 5 partidas sejam jnogadas, está função executa a quantidade necessaria de rounds, apresenta o resuntado a cada round e por fim o resultado final com o ganhador definitivo 