class Rect
{   constructor(x, y, width, height)
    {   this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
    }

    draw(color)
    {   ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

	collide(other)
	{	if (this.x + this.width >= other.x &&
            this.x <= other.x + other.width &&
            this.y + this.height >= other.y &&
            this.y <= other.y + other.height)   return true;
      return false;
    }

	collideHole(other)
    {	if (this.x + this.width >= other.x + other.width &&
            this.x <= other.x &&
            
            this.y + this.height >= other.y &&
            this.y <= other.y + other.height)   return true;
      return false;
    }
}