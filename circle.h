#ifndef CIRCLE_H
#define CIRCLE_H

class Circle {
private:
    double radius;

public:
    // Constructors
    Circle();
    Circle(double r);

    // Getter
    double getRadius() const;

    // Setter
    void setRadius(double r);

    // Methods
    double getArea() const;
    double getCircumference() const;
};

#endif // CIRCLE_H