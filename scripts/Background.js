class Background
{   constructor()
    {   this.center = Math.random()*200;
        this.width = canvas.width/20;

        this.grid = {rows: 5, coluns: 100};
        this.BlockSize = {width: Math.ceil(canvas.width/this.grid.coluns), height: 10};
        this.map = [];

        for(let eachRow = this.grid.rows-1; eachRow >= 0; eachRow--)
        {   for(let eachColun = this.grid.coluns-1; eachColun >= 0; eachColun--)
            {   let arrayIndex = eachRow * this.grid.coluns + eachColun;

                if(eachRow == this.grid.rows-1) this.map[arrayIndex] = (Math.random()>0.5 ? 1 : 0);
                if(eachRow != this.grid.rows-1)
                {   if(this.map[arrayIndex+this.grid.coluns])
                    {   this.map[arrayIndex] = 1;
                        (Math.random()<0.3 ? this.map[arrayIndex+1] = 1 : null);
                        (Math.random()<0.3 ? this.map[arrayIndex-1] = 1 : null);
                    }
                }
            }
        }
    }

    reDraw()
    {   this.center = Math.random()*200
        this.map = [];
        for(let eachRow = this.grid.rows-1; eachRow >= 0; eachRow--)
        {   for(let eachColun = this.grid.coluns-1; eachColun >= 0; eachColun--)
            {   let arrayIndex = eachRow * this.grid.coluns + eachColun;

                if(eachRow == this.grid.rows-1) this.map[arrayIndex] = (Math.random()>0.5 ? 1 : 0);
                if(eachRow != this.grid.rows-1)
                {   if(this.map[arrayIndex+this.grid.coluns])
                    {   this.map[arrayIndex] = 1;
                        (Math.random()<0.3 ? this.map[arrayIndex+1] = 1 : null);
                        (Math.random()<0.3 ? this.map[arrayIndex-1] = 1 : null);
                    }
                }
            }
        }
    }

    draw()
    {   ctx.fillStyle = 'rgb(106,146,66)';
        ctx.fillRect(0,0,canvas.width,canvas.height); //fundo verde
        ctx.fillStyle = 'rgb(188,177,53)';
        ctx.fillRect(0, canvas.height*3.75/6, canvas.width, canvas.height*0.5/6); //chão
        ctx.fillStyle = 'rgb(122,116,27)';
        ctx.fillRect(0, canvas.height*4.25/6, canvas.width, canvas.height*0.5/6); //solo
        ctx.fillStyle = 'black';
        ctx.fillRect(0, canvas.height*4.75/6, canvas.width, canvas.height*1.15/6); //blackground
        ctx.fillStyle = 'rgb(122,116,27)';
        ctx.fillRect(0, canvas.height*5.90/6, canvas.width, canvas.height*0.10/6); //solo
        
        ctx.fillStyle = 'rgb(73,68,0)';
        //tress
        ctx.fillRect(this.width*5 - this.center - this.width/2, 0, this.width, canvas.height*3.75/6);
        ctx.fillRect(this.width*9 - this.center - this.width/2, 0, this.width, canvas.height*3.75/6);
        ctx.fillRect(this.width*11 + this.center - this.width/2, 0, this.width, canvas.height*3.75/6);
        ctx.fillRect(this.width*15 + this.center - this.width/2, 0, this.width, canvas.height*3.75/6);
    }

    drawLeaves()
    {   ctx.fillStyle = 'rgb(46,87,24)'; //folhas
        ctx.fillRect(0,0, canvas.width, canvas.height*0.75/6);
        
        for(let eachRow = 0; eachRow < this.grid.rows; eachRow++)
        {   for(let eachColun = 0; eachColun < this.grid.coluns; eachColun++)
            {   let arrayIndex = eachRow * this.grid.coluns + eachColun;
                
                if(this.map[arrayIndex] == 1)
                {   ctx.fillStyle = 'rgb(46,87,24)';
                    ctx.fillRect(this.BlockSize.width*eachColun, this.BlockSize.height*eachRow+100, this.BlockSize.width,this.BlockSize.height);
                }
            }
        }
    }
}