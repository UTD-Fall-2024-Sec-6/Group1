#include "Square.h"

// Default constructor
Square::Square() : Rectangle(0, 0) {}

// Parametrized constructor
Square::Square(double side) : Rectangle(side, side) {}

// Getter for the side (since both length and width are the same)
double Square::getSide() const {
    return getLength(); // or getWidth() since they are the same
}

// Setter for the side (updates both length and width)
void Square::setSide(double side) {
    setLength(side);
    setWidth(side);
}
