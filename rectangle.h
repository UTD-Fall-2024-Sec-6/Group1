#ifndef RECTANGLE_H
#define RECTANGLE_H

class Rectangle {
private:
    double length;
    double width;

public:
    // Constructors
    Rectangle();
    Rectangle(double l, double w);

    // Getters
    double getLength() const;
    double getWidth() const;

    // Setters
    void setLength(double l);
    void setWidth(double w);

    // Methods
    double getArea() const;
    double getPerimeter() const;
};

#endif // RECTANGLE_H
