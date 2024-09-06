#include <iostream>
#include "Rectangle.h"
#include "Circle.h"
#include "Square.h"

int main() {
    // Creating and using a Rectangle
    Rectangle rect(10.0, 5.0);
    std::cout << "Rectangle:\n";
    std::cout << "Length: " << rect.getLength() << ", Width: " << rect.getWidth() << "\n";
    std::cout << "Area: " << rect.getArea() << ", Perimeter: " << rect.getPerimeter() << "\n\n";

    // Creating and using a Circle
    Circle circ(7.0);
    std::cout << "Circle:\n";
    std::cout << "Radius: " << circ.getRadius() << "\n";
    std::cout << "Area: " << circ.getArea() << ", Circumference: " << circ.getCircumference() << "\n\n";

    // Creating and using a Square
    Square sq(4.0);
    std::cout << "Square:\n";
    std::cout << "Side: " << sq.getSide() << "\n";
    std::cout << "Area: " << sq.getArea() << ", Perimeter: " << sq.getPerimeter() << "\n\n";

    return 0;
}
