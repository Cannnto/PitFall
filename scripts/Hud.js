class Hud
{   constructor(){}
    draw()
    {   ctx.font = '40px Arial';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';

        ctx.fillText("pontos: "+player.points,100,40)
    }
}