const tela = {
    largura: 360,
    altura: 600,
    cor: "#85d656ff",
    desenhar(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(0,30,this.largura,this.altura)
    }
}

