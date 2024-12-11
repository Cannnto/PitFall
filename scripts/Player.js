class Player extends Rect
{   constructor(x, y, width, height)
    {   super(x, y, width, height);

        this.gravity = 1;
        this.velocity = {x: 0, y: 0};
        this.oldPoint = {x: 0, y: 0};
        this.movedPoint = {x: 0, y: 0};
        this.grappled = {boolean: false, obj: null, a: false};
        this.falling = false;
        this.climbing = false;
        this.climbAux = 0;
        this.hitbox = new Rect(x + width/4, y, width/2, height);

        this.rows = 16;
        this.coluns = 24;
        this.blockSize = {width: (this.width/this.coluns), height: (this.height/this.rows)};
        {
            this.mapStoped = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,3,3,3,,,,,,,,,,,,,,3,3,3,3,3,3,3,3,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,4,4,,,,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,];
            this.mapJumping = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,3,3,3,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,3,3,3,,,,3,3,3,3,3,,,,,,,,,,,,,,3,3,3,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,4,4,4,,,,,4,4,4,4,4,4,,,,4,4,4,4,4,,,,4,4,4,,,,,,,,4,4,4,4,4,4,4,4,4,,,,,,4,4,4,,,,,,,,,,,4,4,4,4,4,4,,,,,,4,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
            this.mapGrapling = [1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,2,2,2,,,,,,,,,,,2,2,2,2,2,,,,,,,2,2,2,,,,,,,,,,,2,2,,,,,,,,,,2,2,2,,,,,,,,,,,3,3,3,3,3,,,,,,,3,3,3,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,4,4,4,4,4,4,4,4,4,4,4,4,4,,,,4,4,4,4,4,4,4,4,4,4,4,,,,,,4,4,4,4,4,4,,,4,4,4,4,4,4,4,4,4,4,4,,,,,,,,,4,4,4,,,,,,4,4,4,4,4,4,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
            this.mapClimbing = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,2,2,2,,,,,,,,,,,,,,3,3,3,3,3,,,,3,3,3,,,,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,,,,,3,3,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,4,4,,,,4,4,4,4,4,,,,,,,,,,,,,,,4,4,,,,,,,4,4,,,,,,,,,,,,,,,4,4,,,,4,4,4,4,4,,,,,,,,,,,,,,,4,4,,,,4,4,,,,,,,,,,,,,,,,,,4,4,,,,4,4,4,4,4,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,];
            this.map4 = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,3,3,3,3,3,3,3,,,,3,3,3,,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,4,4,,,,,4,4,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,4,4,,,,,,,,,,4,4,,,,,,,,,,,,,,4,4,4,4,4,4,,,,,,,,,,,,,,,,,,,4,4,,,,,];
            this.map3 = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,3,3,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,4,4,,,,,,4,4,,,,,,,,,,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,,,,,,,,,,4,4,4,,,,4,4,,,,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,];
            this.map2 = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,3,3,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,,4,4,,,4,4,4,4,4,4,,,,,,,,,,,,4,4,4,4,4,,,,,,4,4,4,,,,,,,,,,,,4,4,,,,,,4,4,4,,,,,,,,,,,,,,,4,4,,,,,,,,,4,4,4,,,,,,,,,,,,,,4,4,,,,,,,,,,,,,,];
            this.map1 = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,3,3,3,3,3,3,3,,,,3,3,3,,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,4,4,4,4,4,,,,4,4,4,,,,,,,,,,,4,4,4,4,4,4,,,,,,4,4,4,4,4,4,4,,,,,,,4,4,4,,,,,,,,,,,,,,4,4,,,,4,4,4,4,4,4,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,,,];
            this.map0 = [,,,,,,,,,1,1,1,1,1,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,2,2,2,,,,,,,,,,,,,,,,,,,,2,2,,,,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,3,3,3,3,3,,,,3,3,3,,,,,,,,,,,3,3,3,3,3,3,3,3,3,3,3,,,,,,,,,,,3,3,3,,,,3,3,3,3,3,,,,,,,,,,,,,,3,3,3,,,,3,3,3,3,3,,,,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,4,4,4,,,,,,,,,,,,,,4,4,4,4,4,4,4,4,4,4,4,,,,,,,4,4,4,4,4,4,4,4,4,4,,,,,,4,4,4,,,,,,,,,4,4,4,4,4,4,4,4,,,,,,4,4,4,4,4,4,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];
        }
        this.map = this.mapStoped;
        
        this.colors = ['#000000','#646410','#e08888','#74b474','#345c1c'];
        this.changeDirection = false;


        this.count = 0;
        this.points = 0;
        this.groundedCheck = new Rect(this.x, this.y + this.height*3/4, this.width, this.height/4);
    }
    
    grappling()     
    {   this.grappled.a = true;}
    ungrappling()
    {   this.grappled.a = false;
        this.velocity.x = this.movedPoint.x;
        this.velocity.y = this.movedPoint.y;
    }

    move(angle, magnitude)
    {   this.velocity.x += magnitude*Math.cos(angle*Math.PI/180);    
        this.velocity.y += magnitude*Math.sin(angle*Math.PI/180);
    }


    draw()
    {   //super.draw('white');
        // this.hitbox.draw('purple');
        // this.groundedCheck.draw('red');
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
    {   var newPoint = {x: this.x+this.width/2, y: this.y+this.height/2};
        
        this.velocity.y += this.gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.hitbox.x += this.velocity.x;
        this.hitbox.y += this.velocity.y;
        
        this.groundedCheck = new Rect(this.x - this.velocity.x + this.width/4, this.y + this.height*3/4, this.width/2, this.height/4);
        
        this.movedPoint = {x: newPoint.x - this.oldPoint.x, y: newPoint.y - this.oldPoint.y};
        this.oldPoint = newPoint;

        if(this.movedPoint.x<0) this.changeDirection = true;
        if(this.movedPoint.x>0) this.changeDirection = false;

        console.log(this.movedPoint)

        //hook functions
        if(this.grappled.a)
        {   this.x = this.grappled.obj.x - this.width/2;
            this.y = this.grappled.obj.y;
            this.hitbox.x = this.grappled.obj.x - this.width/4;
            this.hitbox.y = this.grappled.obj.y;
            this.velocity.x = 0;
            this.velocity.y = 0;
        }

        //stair functions
        if(this.climbing && keys[87])
        {   this.climbAux++;
            this.gravity = 0;
            this.velocity.x = 0;
            this.velocity.y = 0;
            if(!(this.climbAux%3))
            {   this.y-=15;
                this.hitbox.y-=15;
                this.changeDirection = !this.changeDirection;
            }
        }
        if(this.climbAux && !this.climbing && keys[65] || this.climbAux && !this.climbing && keys[68])
        {   this.climbAux = 0;
            this.gravity = 1;
            if(keys[65])    this.move(-110, 15);
            else            this.move(-70, 15);
        }
        
        //colision functions
        this.grounded = false;
        for(let i=0;i<other.length;i++)
        {   if(this.groundedCheck.collide(other[i]) && !this.falling) this.grounded = true;
            if(this.hitbox.collide(other[i]) && !this.falling)
            {   this.x -= this.velocity.x;
                this.y -= this.velocity.y;
                this.hitbox.x -= this.velocity.x;
                this.hitbox.y -= this.velocity.y;
                
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
        }


        //draw features
        this.count++;
        if(keys[87])        this.jumpAux = true;            
        if(this.grounded)   this.jumpAux = false;

        if(keys[68] || keys[65]){   if(!(this.count%3)) this.map = eval('this.map'+this.count%4);}
        else                                            this.map = this.mapStoped;

        if(this.jumpAux)    this.map = this.mapJumping;
        if(this.climbAux)   this.map = this.mapClimbing;
        if(this.grappled.a) this.map = this.mapGrapling;
    }
}