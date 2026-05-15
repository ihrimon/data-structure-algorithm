#include <iostream>
using namespace std;

#define SIZE 5   // Max capacity of queue

class Queue {
    int arr[SIZE];   // Storage array
    int front, rear; // Front and rear pointers

public:
    // Constructor: initialize empty queue
    Queue() {
        front = -1;
        rear  = -1;
    }

    // Check if queue is empty
    bool isEmpty() {
        return (front == -1 && rear == -1);
    }

    // Check if queue is full (circular condition)
    bool isFull() {
        return (rear + 1) % SIZE == front;
    }

    // Insert element at rear
    void enqueue(int x) {
        if (isFull()) {
            cout << "Queue is Full!\n";
            return;
        }
        if (isEmpty()) {
            front = rear = 0;   // first element
        } else {
            rear = (rear + 1) % SIZE; // move rear circularly
        }
        arr[rear] = x;
    }

    // Remove element from front
    void dequeue() {
        if (isEmpty()) {
            cout << "Queue is Empty!\n";
            return;
        }
        if (front == rear) {
            front = rear = -1; // now empty
        } else {
            front = (front + 1) % SIZE; // move front circularly
        }
    }

    // Get front element without removing
    int peek() {
        if (isEmpty()) {
            cout << "Queue is Empty!\n";
            return -1;
        }
        return arr[front];
    }

    // Print all elements
    void display() {
        if (isEmpty()) {
            cout << "Queue is Empty!\n";
            return;
        }
        int i = front;
        cout << "Queue elements: ";
        while (true) {
            cout << arr[i] << " ";
            if (i == rear) break;
            i = (i + 1) % SIZE;
        }
        cout << endl;
    }
};

int main() {
    Queue q;

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();  // 10 20 30

    cout << "Front element: " << q.peek() << endl; // 10

    q.dequeue();
    q.display();  // 20 30

    q.enqueue(40);
    q.enqueue(50);
    q.enqueue(60); // wrap-around
    q.display();   // 20 30 40 50 60

    return 0;
}
