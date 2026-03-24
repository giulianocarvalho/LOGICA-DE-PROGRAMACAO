// 1. Lista de Termos (Português)
const termosPT = 
    ["Bem-vindo", "Carrinho", "Sair"];

    //2. Lista de Termos (Inglês)
    const termoEN = new Map([
        ["Bem-vindo", "Welcome"]
        ["Carrinho", "Cart"]
        ["Sair", "Logout"]
    ]);

    // 3. Lista de Termos (Espanhol)
    const termoEN = new Map([
        ["Bem-vindo", "Bienvenido"]
        ["Carrinho", "Carrito"]
        ["Sair", "Salir"]
    ]);

    // 4. Escolher o idioma 
    const idioma_selecionado = termosEN;
    // 5. Gerar termos traduzidos 
    const traducao = 
    termosPT.map (termo => idioma_selecionado.get (termo));
    //6 Imprimir dados 
    console.log(traducao[0]);
    console.log(traducao[1]);
    console.log(traducao[2]);
    
    