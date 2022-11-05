const {sum}=require("./sum");

test ("Subtraindo 2-1 deve retornar 1",()=>{
    //cenário
    const esperado=1;

    //execução
    const resultado=sub(2,1);

    //validação
    expect(resultado).toBe(esperado);
});

describe ("Conjunto de testes operações aritiméticas",()=>{
   it ("Subtraindo 2-1 deve retornar 1",()=>{
    //cenário
    const esperado=1;

    //execução
    const resultado=sub(2,1);
    
        //validação
        expect(resultado).toBe(esperado);
    });
})