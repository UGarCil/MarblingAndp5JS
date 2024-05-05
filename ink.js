const circleRES = 400;

class Drop{
    constructor(x,y,r){
        this.center = createVector(x,y);
        this.r = r ;
        this.vertices = [];
        for (let i = 0; i<circleRES;i++){
            let angle = map(i,0,circleRES,0,TWO_PI);
            let v = createVector(cos(angle),sin(angle));
            v.mult(this.r);
            v.add(this.center);
            this.vertices[i] = v;
        }
        this.color = random(0,120)


    }

    marble(other){
        for (let v of this.vertices){
            let c = other.center;
            let r = other.r;
            let p = v.copy();
            p.sub(c);
            let m = p.mag();
            let root = sqrt(1 + (r*r)/(m*m));
            p.mult(root);
            p.add(c);
            v.set(p);

        }
    }

    show(){
        fill(this.color);
        noStroke();
        // circle(this.x,this.y,this.r*2);
        beginShape();
        for (let v of this.vertices){
            vertex(v.x,v.y);
        }
        endShape(CLOSE);
    }

    tine(m,x,y,z,c){
        let u = 1/pow(2,1/c);
        let b = createVector(x,y);
        for (let v of this.vertices){
            let pb = p5.Vector.sub(v,b);
            let n = m.copy().rotate(HALF_PI);
            let d = abs(pb.dot(n))
            let mag = z * pow(u,d);
            v.add(m.copy().mult(mag));
        }
    }
}