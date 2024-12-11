class Objects
{   constructor()
    {   this.objs = [];
        this.holes = [];
        this.ropes = [];
        (Math.random()<0.5 ? 
        this.fase1 = [
            this.ropes.push(new Rope(canvas.width/2, 0, 10, 10, 50*Math.PI/180, 420)),
            this.holes.push(new Hole(canvas.width/4 - 75, canvas.height*3.916/6, 150, canvas.height/6)),
            this.holes.push(new Stair(canvas.width/4 - 50, canvas.height*4.25/6, 100, canvas.height*1.65/6)),
            this.holes.push(new Hole(canvas.width*3/4 - 75, canvas.height*3.916/6, 150, canvas.height/6)),
            this.holes.push(new Stair(canvas.width*3/4 - 50, canvas.height*4.25/6, 100, canvas.height*1.65/6)),
            this.holes.push(new Hole(canvas.width/2 - 50, canvas.height*3.916/6, 100, canvas.height/6))
        ] :
        this.fase2 = [
            (Math.random() < 0.5 ? this.objs.push(new Lake(canvas.width/2, canvas.height*3.825/6, 600, 60)) : this.objs.push(new BigHole(canvas.width/2, canvas.height*3.825/6, 0, 0, '#000000'))),
            this.ropes.push(new Rope(canvas.width*1.25/4, 0, 10, 10, -50*Math.PI/180, 400)),
            this.ropes.push(new Rope(canvas.width*3/4, 0, 10, 10, 50*Math.PI/180, 420)),
            this.holes.push(new Hole(canvas.width*3/4 - 50, canvas.height*3.916/6, 100, canvas.height/6))
        ]);
        
        this.objs.push(new Snake(canvas.width/2+Math.random()*canvas.width/2-50, canvas.height*3.75/6-40, 80, 80));
        this.objs.push(new Trunck(canvas.width, canvas.height*3.75/6, 50, 80));
        this.objs.push(new Scorpion(canvas.width/2, canvas.height*5.90/6-50, 80, 50));

        //this.holes.push(new BigHole(canvas.width/2, canvas.height*3.825/6, 0, 0, '#000000'));
    }
    
    reMake()
    {   this.objs = [];
        this.holes = [];
        this.ropes = [];
        
        (Math.random()<0.5 ? 
        this.fase1 = [
            this.ropes.push(new Rope(canvas.width/2, 0, 10, 10, 50*Math.PI/180, 420)),
            this.holes.push(new Hole(canvas.width/4 - 75, canvas.height*3.916/6, 150, canvas.height/6)),
            this.holes.push(new Stair(canvas.width/4 - 50, canvas.height*4.25/6, 100, canvas.height*1.65/6)),
            this.holes.push(new Hole(canvas.width*3/4 - 75, canvas.height*3.916/6, 150, canvas.height/6)),
            this.holes.push(new Stair(canvas.width*3/4 - 50, canvas.height*4.25/6, 100, canvas.height*1.65/6)),
            this.holes.push(new Hole(canvas.width/2 - 50, canvas.height*3.916/6, 100, canvas.height/6))
        ] :
        this.fase2 = [
            (Math.random() < 0.5 ? this.objs.push(new Lake(canvas.width/2, canvas.height*3.825/6, 600, 60)) : this.objs.push(new BigHole(canvas.width/2, canvas.height*3.825/6, 0, 0, '#000000'))),
            this.ropes.push(new Rope(canvas.width*1.25/4, 0, 10, 10, -50*Math.PI/180, 400)),
            this.ropes.push(new Rope(canvas.width*3/4, 0, 10, 10, 50*Math.PI/180, 420)),
            this.holes.push(new Hole(canvas.width*3/4 - 50, canvas.height*3.916/6, 100, canvas.height/6))
        ]);
        this.objs.push(new Snake(canvas.width/2+Math.random()*canvas.width/2-50, canvas.height*3.75/6-40, 80, 80));
        this.objs.push(new Trunck(canvas.width, canvas.height*3.75/6, 50, 80));
        this.objs.push(new Scorpion(canvas.width/2, canvas.height*5.90/6-50, 80, 50));
    }

    updateObjs(other)
    {   for(let i = 0; i < this.objs.length; i++)   this.objs[i].draw(),            this.objs[i].update(other);}   

    updateHoles(other)
    {   for(let i = 0; i < this.holes.length; i++)  this.holes[i].draw('black'),    this.holes[i].update(other);}
    
    updateRopes(other)
    {   for(let i = 0; i < this.ropes.length; i++)  this.ropes[i].draw(),    this.ropes[i].update(other);}
}

class Snake extends Rect
{  constructor(x, y, width, height)
    {   super(x, y, width, height);
        this.rows = 24;
        this.coluns = 24;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};
        this.map = [2,2,2,,,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,2,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,1,1,1,,,,,,,,,,,,,,,,1,1,1,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,,,1,1,1,,,,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,,,,,,,,,,,,,,,,,,,,,,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,,,,,,,,,,,,,,,,,,,,,,1,1,1,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,,,,1,1,1,1,1,1,,,,,,,,,,,,,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,,,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,,,,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,,,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,]
        this.colors = ['#ffffff','#000000', '#ff0000']
    }
    draw()
    {   //super.draw();
        for(let eachRow = 0; eachRow < this.rows; eachRow++)
        {   for(let eachColun = 0; eachColun < this.coluns; eachColun++)
            {   let arrayIndex = eachRow * this.coluns + eachColun;
                if(this.map[arrayIndex] >= 0)
                {   ctx.fillStyle = this.colors[this.map[arrayIndex]];
                    ctx.fillRect(this.x+this.blockSize.width*eachColun, this.y+this.blockSize.height*eachRow, this.blockSize.width+1, this.blockSize.height+1);
                }            
            }
        }
    }
    update(other)
    {   if(this.collide(other.hitbox))
        {   clearInterval(timer);
            timer = setInterval(morte,1000/30);
        }
    }
}

class Trunck extends Rect
{   constructor(x, y, width, height)
    {   super(x, y, width, height);
        this.aux = 0;
        this.rows = 18;
        this.coluns = 6;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};
        this.map = [,,1,1,,,,1,1,1,1,,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,,1,0,0,1,,,,1,1,,];
        this.colors = ['#5c480f','#82630d']
    }
    draw()
    {   //super.draw();
        this.aux++;
        ctx.save();
            if(this.aux%10<5){
                ctx.translate(this.x+this.width/2, this.y+this.height/2);
                ctx.scale(-1,1);
                ctx.translate(-(this.x+this.width/2), -(this.y+this.height/2))
            }
            for(let eachRow = 0; eachRow < this.rows; eachRow++)
            {   for(let eachColun = 0; eachColun < this.coluns; eachColun++)
                {   let arrayIndex = eachRow * this.coluns + eachColun;
                    if(this.map[arrayIndex] >= 0)
                    {   ctx.fillStyle = this.colors[this.map[arrayIndex]];
                        ctx.fillRect(this.x+this.blockSize.width*eachColun, this.y+this.blockSize.height*eachRow, this.blockSize.width+1, this.blockSize.height+1);
                    }            
                }
            }
        ctx.restore();
    }
    update(other)
    {   this.x -= 10;
        
        if(this.collide(other.hitbox))
        {   clearInterval(timer);
            timer = setInterval(morte,1000/30);
        }
    }
}
class Scorpion extends Rect
{   constructor(x, y, width, height)
    {   super(x, y, width, height);
        this.aux = 0;
        this.rows = 10;
        this.coluns = 8;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};
        this.map1 = [,0,0,0,,,,,0,0,,0,0,,,,0,,,,0,,,,0,,,0,,,,,0,,,,,,0,,0,0,,,,0,0,,,0,0,0,0,,,,,,0,0,0,0,,0,,,0,0,,,0,,0,,,,,0,,0];
        this.map2 = [,0,0,0,,,,,0,0,,0,0,,,,0,,,,0,,,,0,,,0,,,0,,0,0,,,,0,,,0,0,0,0,0,,0,,,0,0,0,0,,,,,,0,0,0,0,,,,,0,0,,,0,0,,0,,,0,,,0];
        this.colors = ['#ffffff']
        this.map = this.map1;

        this.changeDirection = false;
        this.moveTime = 10;
        this.distance = 5;
    }
    draw()
    {   //super.draw();

        ctx.save();
            if(this.changeDirection)
            {   ctx.translate(this.x+this.width/2, this.y+this.height/2);
                ctx.scale(-1,1);
                ctx.translate(-(this.x+this.width/2), -(this.y+this.height/2));
            }
            for(let eachRow = 0; eachRow < this.rows; eachRow++)
            {   for(let eachColun = 0; eachColun < this.coluns; eachColun++)
                {   let arrayIndex = eachRow * this.coluns + eachColun;
                    if(this.map[arrayIndex] >= 0)
                    {   ctx.fillStyle = this.colors[this.map[arrayIndex]];
                        ctx.fillRect(this.x+this.blockSize.width*eachColun, this.y+this.blockSize.height*eachRow, this.blockSize.width+1, this.blockSize.height+1);
                    }            
                }
            }
        ctx.restore();
    }
    update(other)
    {   this.aux++;
        var angle = (Math.atan2((player.y+player.height/2) - (this.y+this.height/2), (player.x+player.width/2) - (this.x+this.width/2)) + 90*Math.PI/180) *180/Math.PI;

        if(parseInt(angle))                                                 this.map = this.map1;
        if(this.aux%this.moveTime < this.moveTime/2 && parseInt(angle))     this.map = this.map2;

        if(parseInt(angle) < 0 || !parseInt(angle) && this.changeDirection) this.changeDirection = true;
        else    this.changeDirection = false;
        
        if(this.aux%this.moveTime == this.moveTime/2 && parseInt(angle) || !(this.aux%this.moveTime) && parseInt(angle))  this.x += this.distance * (angle/Math.abs(angle));

        if(this.collide(other.hitbox))
        {   clearInterval(timer);
            timer = setInterval(morte,1000/30);
        }
    }
}

class Stair extends Rect
{   constructor(x, y, width, height)
    {   super(x, y, width, height)
        this.rows = 21;
        this.coluns = 1;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};
        this.map = [,0,,0,,0,,0,,0,,0,,0,,0,,0,,0,];
        this.colors = ['#848424'];
    }
    draw()
    {   //super.draw('white');
        for(let eachRow = 0; eachRow < this.rows; eachRow++)
        {   for(let eachColun = 0; eachColun < this.coluns; eachColun++)
            {   let arrayIndex = eachRow * this.coluns + eachColun;
                if(this.map[arrayIndex] >= 0)
                {   ctx.fillStyle = this.colors[this.map[arrayIndex]];
                    ctx.fillRect(this.x+this.blockSize.width*eachColun, this.y+this.blockSize.height*eachRow, this.blockSize.width+1, this.blockSize.height+1);
                }            
            }
        }
    }
    update(other)
    {   if(this.collideHole(other.hitbox))
        {   other.climbing = true;
            this.auxClimbing = true;
        }
        if(!this.collideHole(other.hitbox) && this.auxClimbing)
        {   other.climbing = false;
            this.auxClimbing = false;   
        }
    }
}

class Hole extends Rect
{   constructor(x, y, width, height)
    {   super(x, y, width, height)
    }

    update(other)
    {   if(other.falling && other.hitbox.x+other.hitbox.width >= this.x+this.width && this.auxFalling || other.falling && other.hitbox.x <= this.x && this.auxFalling)
        {   other.x -= other.velocity.x;
            other.hitbox.x -= other.velocity.x;
            other.velocity.x = 0;
        }
        
        if(this.collideHole(other.hitbox))
        {   other.falling = true;
            this.auxFalling = true;
        }
        if(!this.collideHole(other.hitbox) && this.auxFalling)
        {   other.falling = false;
            this.auxFalling = false;
        }
        
    }
}

class BigHole extends Rect
{   constructor(x, y, width, height, color)
    {   super(x - width/2, y, width, height);
        
        this.count = 0;
        this.timer = 2*30;
        this.growing = false;
        this.distance = 10;
        this.limits = [0, 600, 60];


        this.rows = 10;
        this.coluns = 10;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};
        this.map = [,,,,0,0,,,,,,,,0,0,0,0,,,,,,0,0,0,0,0,0,,,,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,,,,0,0,0,0,0,0,,,,,,0,0,0,0,,,,,,,,0,0,,,,];
        this.colors = [color];
        //#386890
        //#000000
    }
    draw()
    {   for(let eachRow = 0; eachRow < this.rows; eachRow++)
        {   for(let eachColun = 0; eachColun < this.coluns; eachColun++)
            {   let arrayIndex = eachRow * this.coluns + eachColun;
                if(this.map[arrayIndex] >= 0)
                {   ctx.fillStyle = this.colors[this.map[arrayIndex]];
                    ctx.fillRect(this.x+this.blockSize.width*eachColun, this.y+this.blockSize.height*eachRow, this.blockSize.width+1, this.blockSize.height+1);
                }            
            }
        }
    }
    update(other)
    {   if(this.width >= this.limits[1] || this.width <= this.limits[0]) this.count++;
        if(this.count >= this.timer) this.count = 0;

        if(!this.count)
        {   if(this.width <= this.limits[0]) this.growing = true;
            if(this.width >= this.limits[1]) this.growing = false;

            if(this.growing)
            {   this.width += this.distance*2;
                if(this.height <= this.limits[2]) this.height += this.distance * 0.5;
            } 
            else
            {   this.width -= this.distance*2;
                if(this.height >= this.limits[0]) this.height -= this.distance * 0.5;                
            }  
        }
        this.x = canvas.width/2 - this.width/2;
        this.y = canvas.height*4/6 - this.height/2;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};

        
        if(this.collideHole(other.hitbox))
        {   clearInterval(timer);
            timer = setInterval(morte,1000/30);
        }   
    }
}
class Lake extends BigHole
{   constructor(x, y, width, height)
    {   super(x, y, width, height, '#386890')
    }

    update(other)
    {   if(this.collideHole(other.hitbox))
        {   clearInterval(timer);
            timer = setInterval(morte,1000/30);
        } 
    }
}


class Rope extends Rect
{   constructor(x, y, width, height, angle, magnitude)
    {   super(x + magnitude * Math.cos(angle), magnitude * Math.sin(angle), 10, 10);
        this.magnitude = magnitude;
        this.angle = angle;
        this.begin = x;
        this.angleV = 0;
        this.angleA = 0;
        this.gravity = 1;

        this.pivo = {x: x, y:0};
        this.cell = {width: 14, height: 14};
    }
    
    reDraw()
    {   this.x = canvas.width/2 + this.magnitude * Math.cos(45*Math.PI/180);
        this.y = this.magnitude * Math.sin(45*Math.PI/180);
        this.angle = 45*Math.PI/180;
        this.angleV = 0;    
    }

    draw()
    {   //super.draw();
        this.drawLine();
    }
    drawLine()
    {   var finalNorm = {x: (this.x/canvas.width) * (canvas.width/this.cell.width), y: (this.y/canvas.height) * (canvas.height/this.cell.height)};
        var pivoNorm = {x: (this.pivo.x/canvas.width) * (canvas.width/this.cell.width), y: (this.pivo.y/canvas.height) * (canvas.height/this.cell.height)};

        var dx = finalNorm.x-pivoNorm.x;
        var dy = finalNorm.y-pivoNorm.y;

        if(finalNorm.x < pivoNorm.x)
        {   finalNorm.x = pivoNorm.x, finalNorm.y = pivoNorm.y;
            pivoNorm = {x: (this.x/canvas.width) * (canvas.width/this.cell.width), y: (this.y/canvas.height) * (canvas.height/this.cell.height)};
        }
        var a = (dy) / (dx);
        var y = pivoNorm.y;

        for(let x = pivoNorm.x; x < finalNorm.x; x++)
        {   ctx.fillStyle = 'rgb(0,255,0)';
            for(let i=0; i < (Math.abs(a)); i++){
                if(i*this.cell.height + y*this.cell.height < this.magnitude)
                    ctx.fillRect(Math.trunc(x)*this.cell.width, i*this.cell.height+Math.trunc(y)*this.cell.height, this.cell.width, this.cell.height);
            }
            
            y+=a;
        }
    }
    update(other)
    {   this.x = this.begin + this.magnitude * Math.sin(this.angle);
        this.y = this.magnitude * Math.cos(this.angle);

        var force =  ( this.gravity * Math.sin(this.angle)) / this.magnitude;
        this.angleA = force * -1;
        this.angleV += this.angleA;
        this.angle += this.angleV;

        if(this.collide(other.hitbox))
        {   other.grappled.boolean = true;
            other.grappled.obj = this;
            this.auxGrappeling = true;
        }
        if(!this.collide(other.hitbox) && this.auxGrappeling)
        {   other.grappled.boolean = false;
            this.auxGrappeling = false;
        }
    }
}
