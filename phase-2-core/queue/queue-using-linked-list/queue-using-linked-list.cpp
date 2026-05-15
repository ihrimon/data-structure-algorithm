#include <iostream>
using namespace std;

// Node structure
class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

// Queue class using Linked List
class Queue {
    Node* front; // points to first node
    Node* rear;  // points to last node

public:
    Queue() {
        front = rear = nullptr;
    }

    // Check if queue is empty
    bool isEmpty() {
        return front == nullptr;
    }

    // Add element at the rear
    void enqueue(int x) {
        Node* newNode = new Node(x);

        if (rear == nullptr) {  // first element
            front = rear = newNode;
            return;
        }

        rear->next = newNode;
        rear = newNode;
    }

    // Remove element from the front
    void dequeue() {
        if (isEmpty()) {
            cout << "Queue is Empty!\n";
            return;
        }

        Node* temp = front;
        front = front->next;

        if (front == nullptr) { // queue became empty
            rear = nullptr;
        }

        delete temp;
    }

    // Get front element
    int peek() {
        if (isEmpty()) {
            cout << "Queue is Empty!\n";
            return -1;
        }
        return front->data;
    }

    // Print all elements
    void display() {
        if (isEmpty()) {
            cout << "Queue is Empty!\n";
            return;
        }

        Node* temp = front;
        cout << "Queue elements: ";
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }
};

// Main function
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
    q.display();  // 20 30 40 50

    return 0;
}
