#include "Circle.h"
#include <cmath> // for M_PI

// Default constructor
Circle::Circle() : radius(0) {}

// Parametrized constructor
Circle::Circle(double r) : radius(r) {}

// Getter
double Circle::getRadius() const {
    return radius;
}

// Setter
void Circle::setRadius(double r) {
    radius = r;
}

// Methods
double Circle::getArea() const {
    return M_PI * radius * radius;
}

double Circle::getCircumference() const {
    return 2 * M_PI * radius;
}