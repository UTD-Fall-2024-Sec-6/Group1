#ifndef SQUARE_H
#define SQUARE_H

#include "Rectangle.h"

class Square : public Rectangle {
public:
    // Constructors
    Square();
    Square(double side);

    // Getter and Setter
    double getSide() const;
    void setSide(double side);

    // Methods (Area and Perimeter are inherited from Rectangle)
};

#endif // SQUARE_H