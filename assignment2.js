 
class Rectangle {
	constructor(l, b) {
		this.l = l;
		this.b = b;
	}
	getArea() {
		return this.l * this.b;
	}
}
class Square extends Rectangle {
	constructor(side1,side2) {
        super(side1, side2);
	}
    getPerimeter() {
		return 2*(this.l+this.b);
	}
}

var s = new Square(5,5);
console.log(s.getPerimeter());

var r = new Square(8,6);
console.log(r.getArea());

