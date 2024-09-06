#include "Rectangle.h"

// Default constructor
Rectangle::Rectangle() : length(0), width(0) {}

// Parametrized constructor
Rectangle::Rectangle(double l, double w) : length(l), width(w) {}

// Getters
double Rectangle::getLength() const {
    return length;
}

double Rectangle::getWidth() const {
    return width;
}

// Setters
void Rectangle::setLength(double l) {
    length = l;
}

void Rectangle::setWidth(double w) {
    width = w;
}

// Methods
double Rectangle::getArea() const {
    return length * width;
}

double Rectangle::getPerimeter() const {
    return 2 * (length + width);
}
rectangle.cpp
